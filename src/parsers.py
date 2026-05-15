import json
import re
from datetime import datetime
from pathlib import Path

from src.models import GptRecord, TopicGroup, TopicStock


def _trim_decimal(value: float, digits: int = 2) -> str:
    text = f"{value:.{digits}f}"
    text = text.rstrip("0").rstrip(".")
    return text or "0"


def format_compact_amount(raw_value: str) -> str:
    text = str(raw_value).strip()
    if not text:
        return ""
    try:
        value = float(text.replace(",", ""))
    except ValueError:
        return text

    abs_value = abs(value)
    if abs_value >= 100000000:
        return f"{_trim_decimal(value / 100000000)}亿"
    if abs_value >= 10000:
        return f"{_trim_decimal(value / 10000)}万"
    return _trim_decimal(value)


def format_percent(raw_value: str) -> str:
    text = str(raw_value).strip()
    if not text:
        return ""
    try:
        value = float(text.replace("%", "").replace(",", ""))
    except ValueError:
        return text if text.endswith("%") else f"{text}%"
    return f"{_trim_decimal(value)}%"


def format_one_word(raw_value: str) -> str:
    text = str(raw_value).strip()
    if not text:
        return ""
    try:
        value = float(text.replace(",", ""))
    except ValueError:
        return ""
    return "一字板" if value <= 0.1 else "非一字"


def normalize_date(raw_date: str) -> str:
    value = raw_date.strip()
    for fmt in ("%Y-%m-%d", "%Y%m%d"):
        try:
            return datetime.strptime(value, fmt).strftime("%Y%m%d")
        except ValueError:
            continue
    raise ValueError("日期格式错误，请使用 YYYY-MM-DD 或 YYYYMMDD")


def parse_json_file(file_path: Path) -> dict:
    content = file_path.read_text(encoding="utf-8")
    stripped = content.lstrip("\ufeff \t\r\n")
    if stripped.startswith("{") or stripped.startswith("["):
        return json.loads(stripped)

    # 兼容抓包文本：前面有 HTTP 响应头，后面才是 JSON
    start_index = min(
        [idx for idx in (content.find("{"), content.find("[")) if idx != -1],
        default=-1,
    )
    if start_index == -1:
        raise ValueError(f"文件中未找到 JSON 内容: {file_path.name}")

    decoder = json.JSONDecoder()
    parsed, _ = decoder.raw_decode(content[start_index:])
    if not isinstance(parsed, dict):
        raise ValueError(f"JSON 根节点不是对象: {file_path.name}")
    return parsed


def parse_res_code_file(file_path: Path) -> dict[str, dict[str, str]]:
    if not file_path.exists():
        return {}
    content = file_path.read_text(encoding="utf-8")
    start_index = content.find("(")
    end_index = content.rfind(")")
    if start_index == -1 or end_index == -1:
        return {}

    raw_body = content[start_index + 1 : end_index]
    cleaned = re.sub(r"//.*", "", raw_body)
    try:
        payload = json.loads(cleaned)
    except json.JSONDecodeError:
        return {}

    stock_data = payload.get("data", {})
    result: dict[str, dict[str, str]] = {}
    for code, metrics in stock_data.items():
        result[str(code)] = {
            "turnover": format_compact_amount(metrics.get("19", "")),
            "turnover_rate": format_percent(metrics.get("1968584", "")),
            "is_one_word": format_one_word(metrics.get("526792", "")),
        }
    return result


def _extract_stock_metrics(
    code: str, code_metrics: dict[str, dict[str, str]]
) -> tuple[str, str, str]:
    key = code[-6:]
    metrics = code_metrics.get(key, {})
    return (
        metrics.get("turnover", ""),
        metrics.get("turnover_rate", ""),
        metrics.get("is_one_word", ""),
    )


def parse_res10(payload: dict, code_metrics: dict[str, dict[str, str]]) -> tuple[list[GptRecord], list[TopicGroup]]:
    gpt_records: list[GptRecord] = []
    topic_groups: list[TopicGroup] = []

    for group in payload.get("data", []):
        group_name = str(group.get("name", "")).strip()
        stock_list = group.get("list", [])
        if not group_name or not isinstance(stock_list, list):
            continue

        reason = str(group.get("reason") or "")
        topic_stocks: list[TopicStock] = []
        for stock in stock_list:
            stock_name = str(stock.get("name", "")).strip()
            code = str(stock.get("code", "")).strip()
            action_info = (
                stock.get("article", {})
                .get("action_info", {})
            )
            num = str(action_info.get("num") or "")
            time = str(action_info.get("time") or "")
            expound = str(action_info.get("expound") or "")
            turnover, turnover_rate, is_one_word = _extract_stock_metrics(code, code_metrics)

            topic_stocks.append(
                TopicStock(
                    name=stock_name,
                    code=code,
                    num=num,
                    is_one_word=is_one_word,
                    expound=expound,
                )
            )

            gpt_records.append(
                GptRecord(
                    stock_name=stock_name,
                    code=code,
                    num=num,
                    limit_up_time=time,
                    turnover=turnover,
                    turnover_rate=turnover_rate,
                    is_one_word=is_one_word,
                    theme=group_name,
                )
            )

        if topic_stocks:
            topic_groups.append(
                TopicGroup(
                    name=group_name,
                    reason=reason,
                    stocks=topic_stocks,
                )
            )

    return gpt_records, topic_groups
