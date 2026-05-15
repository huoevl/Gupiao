from pathlib import Path
from datetime import datetime, timedelta
import json
import os
import re
import ssl
import time
import gzip
import zlib
from urllib import error, request
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse

from src.config import DOC_DIR, FEATURE_FORMATS, OUT_DIR
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
        self.login_url, self.login_headers_template = self._load_login_request_template()
        self.action_field_url, self.action_field_headers_template = self._load_action_field_request_template()
        self.code_url_template, self.code_headers_template = self._load_code_request_template()
        self.code_metrics_cache: dict[str, dict[str, str]] = {}
        self._latest_trading_day_cache: str | None = None
        self._trading_day_status_cache: dict[str, bool] = {}
        self._browser_playwright = None
        self._code_browser = None
        self._code_browser_context = None
        self._code_browser_page = None
        self._code_browser_user_agent = ""

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

    def _load_code_request_template(self) -> tuple[str, dict[str, str]]:
        req_file = self.doc_dir / "req_code.txt"
        default_url = (
            "https://qd.10jqka.com.cn/quote.php?"
            "cate=real&type=stock&return=json&callback=showStockData&code=300069"
        )
        if not req_file.exists():
            return default_url, {}

        text = req_file.read_text(encoding="utf-8")

        fetch_template = self._parse_fetch_request_template(text)
        if fetch_template:
            return fetch_template

        first_line = ""
        for line in text.splitlines():
            value = line.strip()
            if value.startswith("curl -X GET"):
                first_line = value
                break
        if not first_line:
            return default_url, {}

        url_match = re.search(r"curl -X GET '([^']+)'", first_line)
        url = self._sanitize_code_url(url_match.group(1) if url_match else default_url)
        headers: dict[str, str] = {}
        for key, val in re.findall(r"-H '([^:]+):\s*([^']*)'", first_line):
            headers[key.strip()] = val.strip()
        return url, headers

    def _parse_fetch_request_template(self, text: str) -> tuple[str, dict[str, str]] | None:
        match = re.search(
            r"fetch\(\s*(['\"])(.*?)\1\s*,\s*(\{[\s\S]*?\})\s*\)\s*;?",
            text,
            flags=re.IGNORECASE,
        )
        if not match:
            return None

        url = self._sanitize_code_url(match.group(2))
        options_text = match.group(3)
        try:
            options = json.loads(options_text)
        except json.JSONDecodeError:
            return None
        if not isinstance(options, dict):
            return None

        raw_headers = options.get("headers", {})
        if not isinstance(raw_headers, dict):
            raw_headers = {}
        headers = {str(key).strip(): str(val).strip() for key, val in raw_headers.items()}
        return url, headers

    @staticmethod
    def _sanitize_code_url(url: str) -> str:
        """
        兼容历史错误 URL：
        https://qd.10jqka.com.cn/https://qd.10jqka.com.cn/quote.php?...
        -> https://qd.10jqka.com.cn/quote.php?...
        """
        value = (url or "").strip().strip("`").strip("\"").strip("'")
        if not value:
            return value
        quote_idx = value.lower().find("/quote.php")
        if quote_idx != -1:
            suffix = value[quote_idx:]
            if not suffix.startswith("/"):
                suffix = f"/{suffix}"
            return f"https://qd.10jqka.com.cn{suffix}"
        match = re.search(r"https?://qd\.10jqka\.com\.cn/quote\.php\?.*", value, flags=re.IGNORECASE)
        if match:
            return match.group(0)
        return value

    @staticmethod
    def _build_code_request_url(url_template: str, codes: list[str]) -> str:
        parsed = urlparse(ExportService._sanitize_code_url(url_template))
        query_pairs = parse_qsl(parsed.query, keep_blank_values=True)
        # 保留原有参数，只替换 code；逗号必须保留为 ","，不能编码成 "%2C"
        query_pairs = [(k, v) for k, v in query_pairs if k.lower() != "code"]
        query_pairs.append(("code", ",".join(codes)))
        new_query = urlencode(query_pairs, doseq=True, safe=",")
        # 无论模板中出现何种异常前缀，都强制重建为标准 quote.php 地址，避免双前缀问题复现。
        return urlunparse(("https", "qd.10jqka.com.cn", "/quote.php", "", new_query, ""))

    @staticmethod
    def _parse_code_metrics_text(raw: str) -> dict[str, dict[str, str]]:
        start_index = raw.find("(")
        end_index = raw.rfind(")")
        if start_index == -1 or end_index == -1 or end_index <= start_index:
            return {}
        payload_text = raw[start_index + 1 : end_index]
        payload = json.loads(payload_text)
        return ExportService._parse_code_metrics_payload(payload)

    @staticmethod
    def _parse_code_metrics_payload(payload: dict) -> dict[str, dict[str, str]]:
        data = payload.get("data", {})
        if not isinstance(data, dict) or not data:
            return {}
        result: dict[str, dict[str, str]] = {}
        for code, metrics in data.items():
            if not isinstance(metrics, dict):
                continue
            code_key = str(code)[-6:]
            result[code_key] = {
                "turnover": format_compact_amount(metrics.get("19", "")),
                "turnover_rate": format_percent(metrics.get("1968584", "")),
                "is_one_word": format_one_word(metrics.get("526792", "")),
            }
        return result

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

    @staticmethod
    def _sanitize_cookie_header(cookie_header: str) -> str:
        """
        清理可能导致风控拦截的临时 cookie（如 vvvv=1），其余 cookie 保留。
        """
        if not cookie_header:
            return ""
        items = [item.strip() for item in cookie_header.split(";") if item.strip()]
        clean_items = [item for item in items if not item.lower().startswith("vvvv=")]
        return "; ".join(clean_items)

    @staticmethod
    def _looks_like_access_denied(raw: str) -> bool:
        lowered = (raw or "").lower()
        return any(
            keyword in lowered
            for keyword in (
                "unauthorized",
                "forbidden",
                "nginx forbidden",
                "window.location.href",
                "chameleon",
            )
        )

    def _ensure_code_browser_page(self, user_agent: str, accept_language: str | None):
        try:
            from playwright.sync_api import sync_playwright
        except ImportError as exc:
            raise RuntimeError("未安装 playwright，请先执行: python -m pip install -r requirements.txt") from exc

        if self._code_browser_page is not None and self._code_browser_user_agent == user_agent:
            return self._code_browser_page

        self.close_browser_resources()
        self._browser_playwright = sync_playwright().start()
        self._code_browser = self._browser_playwright.chromium.launch(
            headless=True,
            args=["--disable-blink-features=AutomationControlled"],
        )
        self._code_browser_context = self._code_browser.new_context(
            user_agent=user_agent,
            locale="zh-CN",
            extra_http_headers={
                "Accept-Language": accept_language or "zh-CN,zh;q=0.9"
            },
        )
        self._code_browser_page = self._code_browser_context.new_page()
        self._code_browser_page.goto(
            "https://stockpage.10jqka.com.cn/",
            wait_until="domcontentloaded",
            timeout=30000,
        )
        self._code_browser_page.wait_for_timeout(1200)
        self._code_browser_user_agent = user_agent
        return self._code_browser_page

    def close_browser_resources(self) -> None:
        page = self._code_browser_page
        context = self._code_browser_context
        browser = self._code_browser
        playwright = self._browser_playwright
        self._code_browser_page = None
        self._code_browser_context = None
        self._code_browser = None
        self._browser_playwright = None
        self._code_browser_user_agent = ""
        for resource in (page, context, browser, playwright):
            if resource is None:
                continue
            try:
                if hasattr(resource, "stop"):
                    resource.stop()
                else:
                    resource.close()
            except Exception:
                pass

    def _fetch_code_metrics_batch_via_browser(
        self,
        url: str,
        user_agent: str,
        accept_language: str | None,
    ) -> dict[str, dict[str, str]]:
        try:
            page = self._ensure_code_browser_page(user_agent, accept_language)
            payload_text = page.evaluate(
                """
                async ({ url }) => {
                  return await new Promise((resolve) => {
                    const timer = setTimeout(() => resolve(""), 15000);
                    window.showStockData = (payload) => {
                      clearTimeout(timer);
                      resolve(JSON.stringify(payload));
                    };
                    const oldScript = document.querySelector('script[data-ths-quote="1"]');
                    if (oldScript) {
                      oldScript.remove();
                    }
                    const script = document.createElement("script");
                    script.src = url;
                    script.async = true;
                    script.dataset.thsQuote = "1";
                    script.onerror = () => {
                      clearTimeout(timer);
                      resolve("");
                    };
                    document.head.appendChild(script);
                  });
                }
                """,
                {"url": url},
            )
        except Exception:
            return {}
        if not payload_text:
            return {}
        try:
            payload = json.loads(payload_text)
            if not isinstance(payload, dict):
                return {}
            return self._parse_code_metrics_payload(payload)
        except Exception:
            return {}

    def _fetch_code_metrics_batch(self, codes: list[str]) -> dict[str, dict[str, str]]:
        clean_codes = [code[-6:] for code in codes if code and len(code) >= 6]
        clean_codes = list(dict.fromkeys(clean_codes))
        if not clean_codes:
            return {}
        uncached_codes = [code for code in clean_codes if code not in self.code_metrics_cache]
        if not uncached_codes:
            return {code: self.code_metrics_cache.get(code, {}) for code in clean_codes}

        url = self._build_code_request_url(self.code_url_template, uncached_codes)
        # 双保险：无论模板或拼接过程如何，都强制规整到 quote.php 的标准 URL
        url = self._sanitize_code_url(url)
        template_headers = dict(self.code_headers_template)
        lower_headers = {str(k).lower(): str(v) for k, v in template_headers.items()}
        user_agent = lower_headers.get(
            "user-agent",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
        )
        referer = lower_headers.get("referer", "https://stockpage.10jqka.com.cn/")
        accept_language = lower_headers.get("accept-language")
        dnt = lower_headers.get("dnt")
        sec_ch_ua = lower_headers.get("sec-ch-ua")
        sec_ch_ua_mobile = lower_headers.get("sec-ch-ua-mobile")
        sec_ch_ua_platform = lower_headers.get("sec-ch-ua-platform")
        cookie = self._sanitize_cookie_header(lower_headers.get("cookie", ""))

        # 固定为脚本拉取请求，不继承导航类请求头，避免触发 vvvv=1 拦截页
        headers = {
            "User-Agent": user_agent,
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Referer": referer,
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
        }
        if accept_language:
            headers["Accept-Language"] = accept_language
        if dnt:
            headers["DNT"] = dnt
        if sec_ch_ua:
            headers["sec-ch-ua"] = sec_ch_ua
        if sec_ch_ua_mobile:
            headers["sec-ch-ua-mobile"] = sec_ch_ua_mobile
        if sec_ch_ua_platform:
            headers["sec-ch-ua-platform"] = sec_ch_ua_platform
        if cookie:
            headers["Cookie"] = cookie

        batch_metrics = self._fetch_code_metrics_batch_via_browser(
            url=url,
            user_agent=user_agent,
            accept_language=accept_language,
        )
        if not batch_metrics:
            req = request.Request(url=url, method="GET", headers=headers)
            try:
                with self._open_url(req, timeout=15) as resp:
                    raw = self._decode_http_response(resp)
                if self._looks_like_access_denied(raw):
                    batch_metrics = {}
                else:
                    batch_metrics = self._parse_code_metrics_text(raw)
            except Exception:
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
                    url=self.action_field_url,
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
