import csv
import json
from pathlib import Path

from src.config import GPT_EXPORT_COLUMNS
from src.models import GptRecord


def _to_rows(records: list[GptRecord]) -> list[dict]:
    rows: list[dict] = []
    for record in records:
        item = {}
        for header, field in GPT_EXPORT_COLUMNS:
            item[header] = getattr(record, field, "")
        rows.append(item)
    return rows


def export_json(records: list[GptRecord], output_path: Path) -> None:
    rows = _to_rows(records)
    with output_path.open("w", encoding="utf-8") as f:
        json.dump(rows, f, ensure_ascii=False, indent=2)


def export_csv(records: list[GptRecord], output_path: Path) -> None:
    rows = _to_rows(records)
    headers = [header for header, _ in GPT_EXPORT_COLUMNS]
    with output_path.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(rows)


def export_excel(records: list[GptRecord], output_path: Path) -> None:
    try:
        from openpyxl import Workbook
    except ImportError as exc:
        raise RuntimeError(
            "缺少 openpyxl 依赖，请先执行: pip install openpyxl"
        ) from exc

    workbook = Workbook()
    sheet = workbook.active
    sheet.title = "Gpt规则"

    headers = [header for header, _ in GPT_EXPORT_COLUMNS]
    sheet.append(headers)
    for row in _to_rows(records):
        sheet.append([row.get(header, "") for header in headers])
    workbook.save(output_path)
