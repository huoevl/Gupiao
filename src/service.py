from pathlib import Path

from src.config import DOC_DIR, FEATURE_FORMATS, OUT_DIR, RES10_FILE_TEMPLATE, RES_CODE_FILE
from src.exporters.gpt_exporter import export_csv, export_excel, export_json
from src.exporters.xmind_exporter import export_xmind
from src.parsers import normalize_date, parse_json_file, parse_res10, parse_res_code_file


class ExportService:
    def __init__(self, doc_dir: Path = DOC_DIR, out_dir: Path = OUT_DIR) -> None:
        self.doc_dir = doc_dir
        self.out_dir = out_dir
        self.out_dir.mkdir(parents=True, exist_ok=True)

    def get_available_dates(self) -> list[str]:
        dates: list[str] = []
        for file_path in self.doc_dir.glob("res_10_*.json"):
            name = file_path.stem
            date_value = name.replace("res_10_", "")
            if len(date_value) == 8 and date_value.isdigit():
                dates.append(date_value)
        return sorted(dates)

    def _build_res10_path(self, date_value: str) -> Path:
        normalized = normalize_date(date_value)
        file_name = RES10_FILE_TEMPLATE.format(date=normalized)
        return self.doc_dir / file_name

    def export(self, feature: str, fmt: str, date_value: str) -> Path:
        if feature not in FEATURE_FORMATS:
            raise ValueError(f"不支持的导出功能: {feature}")
        if fmt not in FEATURE_FORMATS[feature]:
            raise ValueError(f"{feature} 不支持格式: {fmt}")

        res10_path = self._build_res10_path(date_value)
        if not res10_path.exists():
            raise FileNotFoundError(f"未找到数据文件: {res10_path.name}")

        res_code_path = self.doc_dir / RES_CODE_FILE
        payload = parse_json_file(res10_path)
        metrics = parse_res_code_file(res_code_path)
        gpt_records, topic_groups = parse_res10(payload, metrics)

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
