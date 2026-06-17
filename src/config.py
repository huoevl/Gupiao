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
    ("是否一字", "is_one_word"),
    ("题材", "theme"),
]

# 九研公社登录接口配置
JYG_LOGIN_URL = "https://app.jiuyangongshe.com/jystock-app/api/v1/user/login"
JYG_TOKEN_SALT = "Uu0KfOB8iUP69d3c"  # token = MD5(salt + ":" + timestamp)
JYG_LOGIN_HEADERS = {
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua": '"Google Chrome";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "DNT": "1",
    "Content-Type": "application/json",
    "platform": "3",
    "Origin": "https://www.jiuyangongshe.com",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.jiuyangongshe.com/",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,en-US;q=0.6",
}

# 九研公社 action/field 接口配置（获取涨停数据）
JYG_ACTION_FIELD_URL = "https://app.jiuyangongshe.com/jystock-app/api/v1/action/field"
JYG_ACTION_FIELD_HEADERS = {
    "sec-ch-ua-platform": '"Windows"',
    "sec-ch-ua": '"Google Chrome";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "DNT": "1",
    "Content-Type": "application/json",
    "platform": "3",
    "Origin": "https://www.jiuyangongshe.com",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Referer": "https://www.jiuyangongshe.com/",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,en-US;q=0.6",
}

# 同花顺行情接口配置（获取成交额/换手率）
THS_CODE_URL_TEMPLATE = (
    "https://qd.10jqka.com.cn/quote.php?"
    "cate=real&type=stock&return=json&callback=showStockData&code={codes}"
)
THS_CODE_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Referer": "https://stockpage.10jqka.com.cn/",
    "sec-ch-ua": '"Google Chrome";v="149", "Chromium";v="149", "Not)A;Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "DNT": "1",
    "Sec-Fetch-Site": "same-site",
    "Sec-Fetch-Mode": "no-cors",
    "Sec-Fetch-Dest": "script",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,en-US;q=0.6",
}
