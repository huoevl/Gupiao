import json
from pathlib import Path

from src.models import TopicGroup


def export_topic_json(groups: list[TopicGroup], output_path: Path, date_value: str) -> None:
    groups = [group for group in groups if group.stocks]
    result: dict[str, object] = {
        "result": date_value,
        "data": {},
    }

    data: dict[str, object] = {}
    for group in groups:
        stocks: dict[str, dict[str, str]] = {}
        for stock in group.stocks:
            stocks[stock.name] = {
                "num": stock.num,
                "code": stock.code,
                "expound": stock.expound or "",
            }
        data[group.name] = {
            "reason": group.reason,
            **stocks,
        }
    result["data"] = data

    with output_path.open("w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
