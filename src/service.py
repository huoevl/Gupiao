from pathlib import Path
from datetime import datetime, timedelta
import hashlib
import json
import os
import re
import ssl
import time
import gzip
import zlib
from urllib import error, request

from src.config import (
    DOC_DIR,
    FEATURE_FORMATS,
    JYG_ACTION_FIELD_HEADERS,
    JYG_ACTION_FIELD_URL,
    JYG_LOGIN_HEADERS,
    JYG_LOGIN_URL,
    JYG_TOKEN_SALT,
    OUT_DIR,
)
from src.exporters.gpt_exporter import export_csv, export_excel, export_json
from src.exporters.xmind_exporter import export_xmind
from src.exporters.ztfl_exporter import export_topic_json
from src.models import TopicGroup
from src.parsers import format_compact_amount, format_one_word, format_percent, normalize_date, parse_res10


class ExportService:
    def __init__(self, doc_dir: Path = DOC_DIR, out_dir: Path = OUT_DIR) -> None:
        self.doc_dir = doc_dir
        self.out_dir = out_dir
        self.out_dir.mkdir(parents=True, exist_ok=True)
        self.session_token = os.getenv("JYG_TOKEN", "").strip()
        self.code_metrics_cache: dict[str, dict[str, str]] = {}
        self._latest_trading_day_cache: str | None = None
        self._trading_day_status_cache: dict[str, bool] = {}

    def get_available_dates(self) -> list[str]:
        return []

    @staticmethod
    def fallback_latest_trading_day(today: datetime | None = None) -> str:
        now = today or datetime.now()
        weekday = now.weekday()
        base = now.replace(hour=0, minute=0, second=0, microsecond=0)
        if weekday == 6:  # Sunday -> previous Friday
            return (base - timedelta(days=2)).strftime("%Y%m%d")
        if weekday == 5:  # Saturday -> previous Friday
            return (base - timedelta(days=1)).strftime("%Y%m%d")
        return base.strftime("%Y%m%d")

    def get_latest_trading_day(self) -> str:
        if self._latest_trading_day_cache:
            return self._latest_trading_day_cache

        token = self._resolve_token()
        if not token:
            return self.fallback_latest_trading_day()

        today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
        for offset in range(0, 20):
            candidate = (today - timedelta(days=offset)).strftime("%Y%m%d")
            status = self._get_remote_trading_day_status(candidate)
            if status is None:
                break
            if status:
                self._latest_trading_day_cache = candidate
                return candidate

        return self.fallback_latest_trading_day(today)

    def _is_trading_day(self, date_value: str) -> bool:
        status = self._get_remote_trading_day_status(date_value)
        return bool(status)

    def _get_remote_trading_day_status(self, date_value: str) -> bool | None:
        normalized = normalize_date(date_value)
        if normalized in self._trading_day_status_cache:
            return self._trading_day_status_cache[normalized]
        try:
            payload = self._fetch_remote_res10(normalized)
        except Exception:
            return None
        data = payload.get("data", [])
        if not isinstance(data, list):
            self._trading_day_status_cache[normalized] = False
            return False
        result = any(
            isinstance(group, dict) and isinstance(group.get("list"), list) and len(group.get("list", [])) > 0
            for group in data
        )
        self._trading_day_status_cache[normalized] = result
        return result

    @staticmethod
    def _weekday_shift(date_value: str, step: int) -> str:
        direction = 1 if step > 0 else -1
        current = datetime.strptime(normalize_date(date_value), "%Y%m%d")
        while True:
            current = current + timedelta(days=direction)
            if current.weekday() < 5:
                return current.strftime("%Y%m%d")

    def shift_trading_day(self, date_value: str, step: int) -> str:
        if step == 0:
            return normalize_date(date_value)
        direction = 1 if step > 0 else -1
        start = datetime.strptime(normalize_date(date_value), "%Y%m%d")

        token = self._resolve_token()
        if not token:
            return self._weekday_shift(date_value, step)

        for offset in range(1, 31):
            candidate = (start + timedelta(days=direction * offset)).strftime("%Y%m%d")
            status = self._get_remote_trading_day_status(candidate)
            if status is None:
                return self._weekday_shift(date_value, step)
            if status:
                return candidate
        return self._weekday_shift(date_value, step)

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

    @staticmethod
    def _sanitize_code_url(url: str) -> str:
        """兼容历史错误 URL"""
        value = (url or "").strip().strip("`").strip("\"").strip("'")
        return value

    @staticmethod
    def _build_code_request_url(url_template: str, codes: list[str]) -> str:
        # 保留兼容性，东方财富路径用 _fetch_code_metrics_batch 直接构建
        return url_template

    @staticmethod
    def _parse_code_metrics_text(raw: str) -> dict[str, dict[str, str]]:
        # 东方财富响应为标准 JSON，此方法保留兼容性但不再使用
        return {}

    @staticmethod
    def _parse_code_metrics_payload(payload: dict) -> dict[str, dict[str, str]]:
        # 保留兼容性
        return {}

    @staticmethod
    def _decode_http_response(resp) -> str:
        raw_bytes = resp.read()
        content_encoding = str(resp.headers.get("Content-Encoding", "")).lower()
        if "gzip" in content_encoding:
            try:
                raw_bytes = gzip.decompress(raw_bytes)
            except Exception:
                pass
        elif "deflate" in content_encoding:
            try:
                raw_bytes = zlib.decompress(raw_bytes)
            except Exception:
                pass
        return raw_bytes.decode("utf-8", errors="ignore")

    def _fetch_code_metrics_batch(self, codes: list[str]) -> dict[str, dict[str, str]]:
        clean_codes = [code[-6:] for code in codes if code and len(code) >= 6]
        clean_codes = list(dict.fromkeys(clean_codes))
        if not clean_codes:
            return {}
        uncached_codes = [code for code in clean_codes if code not in self.code_metrics_cache]
        if not uncached_codes:
            return {code: self.code_metrics_cache.get(code, {}) for code in clean_codes}

        batch_metrics: dict[str, dict[str, str]] = {}
        try:
            import requests as _requests
            codes_param = ",".join(
                f"sh{c}" if c.startswith("6") else f"sz{c}" for c in uncached_codes
            )
            url = f"http://qt.gtimg.cn/q={codes_param}"
            session = _requests.Session()
            session.trust_env = False
            resp = session.get(url, headers={"Referer": "https://gu.qq.com"}, timeout=15)
            resp.encoding = "gbk"
            for line in resp.text.split(";"):
                line = line.strip()
                if not line:
                    continue
                # v_sh600519="1~贵州茅台~..."
                eq = line.find('="')
                if eq == -1:
                    continue
                key = line[eq - 8: eq]  # e.g. sh600519
                code = key[-6:]
                fields = line[eq + 2:].rstrip('"').split("~")
                if len(fields) < 44:
                    continue
                try:
                    amount = float(fields[37]) * 10000  # 万元 -> 元
                except ValueError:
                    amount = 0
                batch_metrics[code] = {
                    "turnover": format_compact_amount(str(amount)),
                    "turnover_rate": format_percent(fields[38]),
                    "is_one_word": format_one_word(fields[43]),
                }
        except Exception as e:
            print(f"[DEBUG] EMoney exception: {type(e).__name__}: {e}")
            batch_metrics = {}

        for code in uncached_codes:
            self.code_metrics_cache[code] = batch_metrics.get(
                code,
                {"turnover": "", "turnover_rate": "", "is_one_word": ""},
            )
        return {code: self.code_metrics_cache.get(code, {}) for code in clean_codes}

    def _enrich_metrics_from_remote(self, payload: dict, metrics: dict[str, dict[str, str]]) -> dict[str, dict[str, str]]:
        codes: list[str] = []
        seen_codes: set[str] = set()
        for group in payload.get("data", []):
            stock_list = group.get("list", [])
            if not isinstance(stock_list, list):
                continue
            for stock in stock_list:
                raw_code = str(stock.get("code", "")).strip()
                if len(raw_code) >= 6:
                    code6 = raw_code[-6:]
                    if code6 not in seen_codes:
                        seen_codes.add(code6)
                        codes.append(code6)

        need_fetch: list[str] = []
        for code in codes:
            existed = metrics.get(code, {})
            if existed.get("turnover") and existed.get("turnover_rate") and existed.get("is_one_word"):
                continue
            need_fetch.append(code)

        batch_size = 100
        for start in range(0, len(need_fetch), batch_size):
            chunk = need_fetch[start : start + batch_size]
            batch_metrics = self._fetch_code_metrics_batch(chunk)
            for code in chunk:
                fetched = batch_metrics.get(code, {})
                if not fetched:
                    continue
                existed = metrics.get(code, {})
                merged = dict(existed)
                merged.update({k: v for k, v in fetched.items() if v})
                metrics[code] = merged
        return metrics

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

        # 使用 config.py 中的配置，不再依赖 req_acc.txt
        headers = dict(JYG_LOGIN_HEADERS)
        timestamp = str(int(time.time() * 1000))
        headers["timestamp"] = timestamp
        # token = MD5(salt + ":" + timestamp)
        token_str = f"{JYG_TOKEN_SALT}:{timestamp}"
        headers["token"] = hashlib.md5(token_str.encode()).hexdigest()

        req = request.Request(
            url=JYG_LOGIN_URL,
            data=body,
            method="POST",
            headers=headers,
        )
        try:
            with self._open_url(req, timeout=20) as resp:
                raw = self._decode_http_response(resp)
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
        # 使用 config.py 配置的请求头
        headers = dict(JYG_ACTION_FIELD_HEADERS)
        headers["Cookie"] = f"SESSION={token}"

        # 动态生成 timestamp 和 token 头
        timestamp = str(int(time.time() * 1000))
        token_str = f"{JYG_TOKEN_SALT}:{timestamp}"
        token_header = hashlib.md5(token_str.encode()).hexdigest()
        headers["Timestamp"] = timestamp
        headers["Token"] = token_header

        req = request.Request(
            url=JYG_ACTION_FIELD_URL,
            data=body,
            method="POST",
            headers=headers,
        )
        try:
            with self._open_url(req, timeout=20) as resp:
                raw = self._decode_http_response(resp)
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
                    url=JYG_ACTION_FIELD_URL,
                    data=body,
                    method="POST",
                    headers=retry_headers,
                )
                try:
                    with self._open_url(retry_req, timeout=20) as resp:
                        retry_raw = self._decode_http_response(resp)
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
        # 主流程只使用实时请求数据；_doc 中文件仅作为示例/模板。
        return self._fetch_remote_res10(date_value)

    def _load_records(self, date_value: str):
        payload = self._load_res10_payload(date_value)
        metrics: dict[str, dict[str, str]] = {}
        metrics = self._enrich_metrics_from_remote(payload, metrics)
        return parse_res10(payload, metrics)

    @staticmethod
    def _matches_board_count(num_text: str, board_count: int) -> bool:
        if board_count <= 0:
            return True
        return f"{board_count}板" in str(num_text).strip()

    def _filter_records_by_board_count(
        self,
        gpt_records,
        topic_groups,
        board_count: int,
    ):
        if board_count <= 0:
            return gpt_records, topic_groups
        filtered_gpt_records = [
            record for record in gpt_records if self._matches_board_count(record.num, board_count)
        ]
        filtered_topic_groups = []
        for group in topic_groups:
            filtered_stocks = [
                stock for stock in group.stocks if self._matches_board_count(stock.num, board_count)
            ]
            if filtered_stocks:
                filtered_topic_groups.append(
                    type(group)(
                        name=group.name,
                        reason=group.reason,
                        stocks=filtered_stocks,
                    )
                )
        return filtered_gpt_records, filtered_topic_groups

    @staticmethod
    def _normalize_stock_code_key(code: str) -> str:
        text = str(code).strip()
        return text[-6:] if len(text) >= 6 else text

    @staticmethod
    def _filter_topic_groups_by_codes(topic_groups: list[TopicGroup], codes: set[str]) -> list[TopicGroup]:
        if not codes:
            return []
        normalized_codes = {ExportService._normalize_stock_code_key(code) for code in codes if code}
        filtered_groups: list[TopicGroup] = []
        for group in topic_groups:
            filtered_stocks = [
                stock
                for stock in group.stocks
                if ExportService._normalize_stock_code_key(stock.code) in normalized_codes
            ]
            if filtered_stocks:
                filtered_groups.append(
                    TopicGroup(
                        name=group.name,
                        reason=group.reason,
                        stocks=filtered_stocks,
                    )
                )
        return filtered_groups

    @staticmethod
    def _append_suffix_to_path(output_path: Path, suffix: str) -> Path:
        return output_path.with_name(f"{output_path.stem}_{suffix}{output_path.suffix}")

    def _export_topic_groups_with_format(
        self,
        topic_groups: list[TopicGroup],
        fmt: str,
        output_path: Path,
        normalized_date: str,
    ) -> None:
        if fmt == "xmind":
            export_xmind(topic_groups, output_path, normalized_date)
        elif fmt == "json":
            export_topic_json(topic_groups, output_path, normalized_date)
        else:
            raise ValueError("涨停归类只支持 xmind/json 格式")

    def preview(
        self,
        feature: str,
        date_value: str,
        limit: int | None = None,
        board_count: int = 0,
    ) -> tuple[list[str], list[list[str]]]:
        if feature not in FEATURE_FORMATS:
            raise ValueError(f"不支持的导出功能: {feature}")

        gpt_records, topic_groups = self._load_records(date_value)
        gpt_records, topic_groups = self._filter_records_by_board_count(gpt_records, topic_groups, board_count)
        if feature == "Gpt规则":
            columns = ["股票名", "股票代码", "连板数", "涨停时间", "成交额", "换手率", "是否一字", "题材"]
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
                        record.is_one_word,
                        record.theme,
                    ]
                )
                if limit is not None and len(rows) >= limit:
                    break
            return columns, rows

        columns = ["分类", "股票名", "股票代码", "连板数", "是否一字", "个股原因"]
        rows = []
        for group in topic_groups:
            for stock in group.stocks:
                rows.append(
                    [
                        group.name,
                        stock.name,
                        stock.code,
                        stock.num,
                        stock.is_one_word,
                        (stock.expound or "").replace("\n", " "),
                    ]
                )
                if limit is not None and len(rows) >= limit:
                    return columns, rows
        return columns, rows

    def export(self, feature: str, fmt: str, date_value: str, board_count: int = 0) -> Path | list[Path]:
        if feature not in FEATURE_FORMATS:
            raise ValueError(f"不支持的导出功能: {feature}")
        if fmt not in FEATURE_FORMATS[feature]:
            raise ValueError(f"{feature} 不支持格式: {fmt}")

        gpt_records, topic_groups = self._load_records(date_value)
        gpt_records, topic_groups = self._filter_records_by_board_count(gpt_records, topic_groups, board_count)

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
            return output_path

        if board_count >= 2 and fmt in {"xmind", "json"}:
            output_paths: list[Path] = []
            current_output_path = self._append_suffix_to_path(output_path, str(board_count))
            self._export_topic_groups_with_format(topic_groups, fmt, current_output_path, normalized_date)
            output_paths.append(current_output_path)

            tracked_codes = {
                self._normalize_stock_code_key(stock.code)
                for group in topic_groups
                for stock in group.stocks
                if stock.code
            }
            history_date = normalized_date
            for previous_board in range(board_count - 1, 0, -1):
                history_date = self.shift_trading_day(history_date, -1)
                _, history_topic_groups = self._load_records(history_date)
                history_topic_groups = self._filter_topic_groups_by_codes(history_topic_groups, tracked_codes)
                history_output_path = self._append_suffix_to_path(
                    output_path,
                    f"{board_count}_{previous_board}",
                )
                self._export_topic_groups_with_format(history_topic_groups, fmt, history_output_path, history_date)
                output_paths.append(history_output_path)
            return output_paths

        self._export_topic_groups_with_format(topic_groups, fmt, output_path, normalized_date)
        return output_path
