from dataclasses import dataclass


@dataclass
class GptRecord:
    stock_name: str
    code: str
    num: str
    limit_up_time: str
    turnover: str
    turnover_rate: str
    theme: str


@dataclass
class TopicStock:
    name: str
    code: str
    num: str
    expound: str


@dataclass
class TopicGroup:
    name: str
    reason: str
    stocks: list[TopicStock]
