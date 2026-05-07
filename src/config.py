from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
DOC_DIR = BASE_DIR / "_doc"
OUT_DIR = BASE_DIR / "out"
APP_STATE_FILE = BASE_DIR / ".app_state.json"

RES10_FILE_TEMPLATE = "res_10_{date}.json"
RES_CODE_FILE = "res_code.txt"

FEATURE_FORMATS = {
    "涨停归类": ["xmind", "json"],
    "Gpt规则": ["excel", "csv", "json"],
}

GPT_EXPORT_COLUMNS = [
    ("股票名", "stock_name"),
    ("股票代码(code)", "code"),
    ("连板数(num)", "num"),
    ("涨停时间", "limit_up_time"),
    ("成交额", "turnover"),
    ("换手率", "turnover_rate"),
    ("题材", "theme"),
]
