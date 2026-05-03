from pathlib import Path

from src.models import TopicGroup


def export_xmind(groups: list[TopicGroup], output_path: Path, date_value: str) -> None:
    try:
        import xmind
    except ImportError as exc:
        raise RuntimeError(
            "缺少 xmind 依赖，请先执行: pip install xmind"
        ) from exc

    workbook = xmind.load(str(output_path))
    sheet = workbook.getPrimarySheet()
    sheet.setTitle(f"涨停归类_{date_value}")

    root = sheet.getRootTopic()
    root.setTitle(f"涨停归类_{date_value}")

    for group in groups:
        group_topic = root.addSubTopic()
        title = group.name
        if group.reason:
            title = f"{group.name}\n{group.reason}"
        group_topic.setTitle(title)

        for stock in group.stocks:
            stock_topic = group_topic.addSubTopic()
            stock_topic.setTitle(stock.name)

            expound_topic = stock_topic.addSubTopic()
            expound_topic.setTitle(stock.expound or "")

            info_topic = stock_topic.addSubTopic()
            info_topic.setTitle(f"{stock.code} - {stock.num}")

            stock_topic.addSubTopic().setTitle("")
            stock_topic.addSubTopic().setTitle("")

    xmind.save(workbook, str(output_path))
