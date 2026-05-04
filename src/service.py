from pathlib import Path
import json
import os
import re
import ssl
import time
from urllib import error, request

from src.config import DOC_DIR, FEATURE_FORMATS, OUT_DIR, RES10_FILE_TEMPLATE, RES_CODE_FILE
from src.exporters.gpt_exporter import export_csv, export_excel, export_json
from src.exporters.xmind_exporter import export_xmind
from src.parsers import normalize_date, parse_json_file, parse_res10, parse_res_code_file


class ExportService:
    def __init__(self, doc_dir: Path = DOC_DIR, out_dir: Path = OUT_DIR) -> None:
        self.doc_dir = doc_dir
        self.out_dir = out_dir
        self.out_dir.mkdir(parents=True, exist_ok=True)
        self.session_token = os.getenv("JYG_TOKEN", "").strip()
        self.login_url, self.login_headers_template = self._load_login_request_template()
        self.action_field_url, self.action_field_headers_template = self._load_action_field_request_template()

    def get_available_dates(self) -> list[str]:
        dates: list[str] = []
        for file_path in self.doc_dir.glob("res_10_*.*"):
            name = file_path.stem
            date_value = name.replace("res_10_", "")
            if len(date_value) == 8 and date_value.isdigit():
                dates.append(date_value)
        return sorted(dates)

    def _find_res10_path(self, date_value: str) -> Path | None:
        normalized = normalize_date(date_value)
        preferred = self.doc_dir / RES10_FILE_TEMPLATE.format(date=normalized)
        if preferred.exists():
            return preferred
        txt_fallback = self.doc_dir / f"res_10_{normalized}.txt"
        if txt_fallback.exists():
            return txt_fallback
        return None

    @staticmethod
    def _to_dash_date(date_value: str) -> str:
        normalized = normalize_date(date_value)
        return f"{normalized[:4]}-{normalized[4:6]}-{normalized[6:8]}"

    def _resolve_token(self) -> str:
        if self.session_token:
            return self.session_token
        return os.getenv("JYG_TOKEN", "").strip()

    def set_session_token(self, token: str) -> None:
        self.session_token = token.strip()

    def _load_login_request_template(self) -> tuple[str, dict[str, str]]:
        req_file = self.doc_dir / "req_acc.txt"
        default_url = "https://app.jiuyangongshe.com/jystock-app/api/v1/user/login"
        if not req_file.exists():
            return default_url, {}

        text = req_file.read_text(encoding="utf-8")
        first_line = ""
        for line in text.splitlines():
            value = line.strip()
            if value.startswith("curl -X POST"):
                first_line = value
                break
        if not first_line:
            return default_url, {}

        url_match = re.search(r"curl -X POST '([^']+)'", first_line)
        url = url_match.group(1) if url_match else default_url

        headers: dict[str, str] = {}
        for key, val in re.findall(r"-H '([^:]+):\s*([^']*)'", first_line):
            headers[key.strip()] = val.strip()
        return url, headers

    def _load_action_field_request_template(self) -> tuple[str, dict[str, str]]:
        req_file = self.doc_dir / "req_10.txt"
        default_url = "https://app.jiuyangongshe.com/jystock-app/api/v1/action/field"
        if not req_file.exists():
            return default_url, {}

        text = req_file.read_text(encoding="utf-8")
        lines = text.splitlines()
        start_indices: list[int] = []
        for i, line in enumerate(lines):
            value = line.strip()
            if (
                value.startswith("POST /jystock-app/api/v1/action/field")
                or value.startswith("POST https://app.jiuyangongshe.com/jystock-app/api/v1/action/field")
            ):
                start_indices.append(i)
        if not start_indices:
            return default_url, {}
        # 优先使用文件里最后一段最新抓包
        start_index = start_indices[-1]

        request_line = lines[start_index].strip()
        host = "app.jiuyangongshe.com"
        headers: dict[str, str] = {}
        for line in lines[start_index + 1 :]:
            value = line.strip()
            if not value:
                break
            if ":" not in value:
                continue
            key, val = value.split(":", 1)
            key = key.strip()
            val = val.strip()
            headers[key] = val
            if key.lower() == "host" and val:
                host = val

        target_match = re.match(r"POST\s+(\S+)\s+HTTP/1\.1", request_line, flags=re.IGNORECASE)
        target = target_match.group(1) if target_match else "/jystock-app/api/v1/action/field"
        if target.lower().startswith("http://") or target.lower().startswith("https://"):
            url = target
        else:
            url = f"https://{host}{target}"
        return url, headers

    @staticmethod
    def _inject_session_cookie(cookie_header: str, session_token: str) -> str:
        if not cookie_header:
            return f"SESSION={session_token}"

        parts = [item.strip() for item in cookie_header.split(";") if item.strip()]
        replaced = False
        for idx, part in enumerate(parts):
            if part.upper().startswith("SESSION="):
                parts[idx] = f"SESSION={session_token}"
                replaced = True
                break
        if not replaced:
            parts.insert(0, f"SESSION={session_token}")
        return "; ".join(parts)

    @staticmethod
    def _open_url(req: request.Request, timeout: int = 20):
        def should_retry_with_unverified(exc: BaseException) -> bool:
            if isinstance(exc, ssl.SSLCertVerificationError):
                return True
            if isinstance(exc, ssl.SSLError) and "CERTIFICATE_VERIFY_FAILED" in str(exc):
                return True
            if isinstance(exc, error.URLError):
                reason = getattr(exc, "reason", None)
                if isinstance(reason, ssl.SSLCertVerificationError):
                    return True
                if isinstance(reason, ssl.SSLError) and "CERTIFICATE_VERIFY_FAILED" in str(reason):
                    return True
                if reason and "CERTIFICATE_VERIFY_FAILED" in str(reason):
                    return True
            return "CERTIFICATE_VERIFY_FAILED" in str(exc)

        try:
            return request.urlopen(req, timeout=timeout)
        except Exception as exc:
            if should_retry_with_unverified(exc):
                # 某些 Windows 环境/代理链路下证书链不完整，降级为不校验重试一次
                unverified_ctx = ssl._create_unverified_context()
                return request.urlopen(req, timeout=timeout, context=unverified_ctx)
            raise

    def login(self, phone: str, password: str) -> str:
        payload = {
            "phone": phone.strip(),
            "password": password,
        }
        body = json.dumps(payload).encode("utf-8")

        headers = dict(self.login_headers_template)
        headers.update(
            {
                "Accept": headers.get("Accept", "application/json, text/plain, */*"),
                "Content-Type": "application/json",
                "Platform": headers.get("Platform", "3"),
                "Timestamp": str(int(time.time() * 1000)),
                "User-Agent": headers.get(
                    "User-Agent",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
                ),
                "Origin": headers.get("Origin", "https://www.jiuyangongshe.com"),
                "Referer": headers.get("Referer", "https://www.jiuyangongshe.com/"),
            }
        )

        req = request.Request(
            url=self.login_url,
            data=body,
            method="POST",
            headers=headers,
        )
        try:
            with self._open_url(req, timeout=20) as resp:
                raw = resp.read().decode("utf-8")
        except error.HTTPError as exc:
            raise RuntimeError(f"登录失败(HTTP {exc.code})") from exc
        except error.URLError as exc:
            raise RuntimeError(f"登录失败：{exc.reason}") from exc

        try:
            result = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise RuntimeError("登录响应不是合法 JSON") from exc

        if not isinstance(result, dict):
            raise RuntimeError("登录响应结构异常")

        err_code = str(result.get("errCode", ""))
        msg = str(result.get("msg", "")).strip()
        if err_code and err_code != "0":
            if err_code == "9":
                raise RuntimeError(
                    "登录失败：版本过低校验未通过。请更新 _doc/req_acc.txt 第一条抓包请求头后重试。"
                )
            if msg:
                raise RuntimeError(f"登录失败：{msg}")
            raise RuntimeError(f"登录失败：errCode={err_code}")

        data = result.get("data", {})
        token = str(data.get("sessionToken") or "") if isinstance(data, dict) else ""
        if not token:
            raise RuntimeError("登录成功但未拿到 sessionToken，建议改为手动粘贴 Token")

        self.session_token = token
        return token

    def _fetch_remote_res10(self, date_value: str) -> dict:
        token = self._resolve_token()
        if not token:
            raise RuntimeError(
                "本地无数据，且无可用 token，无法自动请求。"
                "请先在界面登录，或设置环境变量 JYG_TOKEN。"
            )

        payload = {
            "date": self._to_dash_date(date_value),
            "pc": 1,
        }
        body = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        headers = dict(self.action_field_headers_template)
        # 这些头由 HTTP 客户端自动维护，使用抓包中的固定值会导致请求体长度不一致等问题
        for key in ["Content-Length", "content-length", "Host", "host", "Connection", "connection"]:
            headers.pop(key, None)
        if "Cookie" in headers or "cookie" in headers:
            raw_cookie = headers.get("Cookie", headers.get("cookie", ""))
            headers["Cookie"] = self._inject_session_cookie(raw_cookie, token)
            headers.pop("cookie", None)
        else:
            headers["Cookie"] = f"SESSION={token}"

        headers.update(
            {
                "Accept": headers.get("Accept", "application/json, text/plain, */*"),
                "Content-Type": "application/json",
                "Platform": headers.get("Platform", headers.get("platform", "3")),
                "Timestamp": str(int(time.time() * 1000)),
                "User-Agent": headers.get(
                    "User-Agent",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
                ),
                "Origin": headers.get("Origin", "https://www.jiuyangongshe.com"),
                "Referer": headers.get("Referer", "https://www.jiuyangongshe.com/"),
            }
        )
        req = request.Request(
            url=self.action_field_url,
            data=body,
            method="POST",
            headers=headers,
        )
        try:
            with self._open_url(req, timeout=20) as resp:
                raw = resp.read().decode("utf-8")
        except error.HTTPError as exc:
            raise RuntimeError(f"接口请求失败(HTTP {exc.code})，请检查 token 是否有效") from exc
        except error.URLError as exc:
            raise RuntimeError(f"接口请求失败：{exc.reason}") from exc

        try:
            result = json.loads(raw)
        except json.JSONDecodeError as exc:
            raise RuntimeError("接口返回不是合法 JSON") from exc

        if not isinstance(result, dict):
            raise RuntimeError("接口返回结构异常")
        err_code = str(result.get("errCode", ""))
        msg = str(result.get("msg", "")).strip()
        if err_code and err_code != "0":
            if err_code == "1" or "登录失效" in msg:
                self.session_token = ""
                raise RuntimeError("登录失效，请重新登录。")
            if err_code == "9" and "请求异常" in msg:
                # 兜底重试：去掉 Token 头，避免 Token 与 SESSION 不一致导致服务端校验异常
                retry_headers = dict(headers)
                retry_headers.pop("Token", None)
                retry_headers.pop("token", None)
                retry_req = request.Request(
                    url=self.action_field_url,
                    data=body,
                    method="POST",
                    headers=retry_headers,
                )
                try:
                    with self._open_url(retry_req, timeout=20) as resp:
                        retry_raw = resp.read().decode("utf-8")
                    retry_result = json.loads(retry_raw)
                    if (
                        isinstance(retry_result, dict)
                        and str(retry_result.get("errCode", "")) in {"", "0"}
                        and "data" in retry_result
                    ):
                        return retry_result
                except Exception:
                    pass
            raise RuntimeError(f"接口返回错误：{msg or err_code}")
        if "data" not in result:
            raise RuntimeError("接口返回结构异常，未包含 data 字段")
        return result

    def _load_res10_payload(self, date_value: str) -> dict:
        res10_path = self._find_res10_path(date_value)
        if res10_path:
            return parse_json_file(res10_path)
        return self._fetch_remote_res10(date_value)

    def _load_records(self, date_value: str):
        res_code_path = self.doc_dir / RES_CODE_FILE
        payload = self._load_res10_payload(date_value)
        metrics = parse_res_code_file(res_code_path)
        return parse_res10(payload, metrics)

    def preview(self, feature: str, date_value: str, limit: int | None = None) -> tuple[list[str], list[list[str]]]:
        if feature not in FEATURE_FORMATS:
            raise ValueError(f"不支持的导出功能: {feature}")

        gpt_records, topic_groups = self._load_records(date_value)
        if feature == "Gpt规则":
            columns = ["股票名", "股票代码", "连板数", "涨停时间", "成交额", "换手率", "题材"]
            rows: list[list[str]] = []
            for record in gpt_records:
                rows.append(
                    [
                        record.stock_name,
                        record.code,
                        record.num,
                        record.limit_up_time,
                        record.turnover,
                        record.turnover_rate,
                        record.theme,
                    ]
                )
                if limit is not None and len(rows) >= limit:
                    break
            return columns, rows

        columns = ["分类", "股票名", "股票代码", "连板数", "个股原因"]
        rows = []
        for group in topic_groups:
            for stock in group.stocks:
                rows.append(
                    [
                        group.name,
                        stock.name,
                        stock.code,
                        stock.num,
                        (stock.expound or "").replace("\n", " "),
                    ]
                )
                if limit is not None and len(rows) >= limit:
                    return columns, rows
        return columns, rows

    def export(self, feature: str, fmt: str, date_value: str) -> Path:
        if feature not in FEATURE_FORMATS:
            raise ValueError(f"不支持的导出功能: {feature}")
        if fmt not in FEATURE_FORMATS[feature]:
            raise ValueError(f"{feature} 不支持格式: {fmt}")

        gpt_records, topic_groups = self._load_records(date_value)

        normalized_date = normalize_date(date_value)
        file_prefix = "gpt" if feature == "Gpt规则" else "ztfl"
        extension = "xlsx" if fmt == "excel" else fmt
        output_path = self.out_dir / f"{file_prefix}_{normalized_date}_{fmt}.{extension}"

        if feature == "Gpt规则":
            if fmt == "json":
                export_json(gpt_records, output_path)
            elif fmt == "csv":
                export_csv(gpt_records, output_path)
            elif fmt == "excel":
                export_excel(gpt_records, output_path)
            else:
                raise ValueError(f"不支持的格式: {fmt}")
        else:
            if fmt != "xmind":
                raise ValueError("涨停归类只支持 xmind 格式")
            export_xmind(topic_groups, output_path, normalized_date)

        return output_path
