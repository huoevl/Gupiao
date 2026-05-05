import json
from pathlib import Path
from uuid import uuid4
import zipfile
from copy import deepcopy

from src.models import TopicGroup


def _load_style_template() -> dict:
    """
    Read visual theme/extension fields from the user's sample xmind.
    This keeps exported node style close to '股票示例.xmind'.
    """
    sample = Path(__file__).resolve().parents[2] / "_doc" / "股票示例.xmind"
    if not sample.exists():
        return {}

    try:
        with zipfile.ZipFile(sample, mode="r") as zf:
            raw = zf.read("content.json").decode("utf-8")
        sheets = json.loads(raw)
        if not isinstance(sheets, list) or not sheets:
            return {}
        sheet = sheets[0]
        wanted_keys = [
            "topicOverlapping",
            "labelSortOrder",
            "zones",
            "extensions",
            "theme",
        ]
        return {k: deepcopy(sheet[k]) for k in wanted_keys if k in sheet}
    except Exception:
        return {}


def _new_topic(
    title: str,
    children: list[dict] | None = None,
    custom_width: int | None = None,
    title_unedited: bool | None = None,
) -> dict:
    topic = {
        "id": str(uuid4()),
        "title": title,
    }
    if custom_width is not None:
        topic["customWidth"] = custom_width
    if title_unedited is not None:
        topic["titleUnedited"] = title_unedited
    if children:
        topic["children"] = {"attached": children}
    return topic


def export_xmind(groups: list[TopicGroup], output_path: Path, date_value: str) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    style_template = _load_style_template()

    group_topics: list[dict] = []
    for group in groups:
        group_title = f"{group.name}{len(group.stocks)}"

        stock_topics: list[dict] = []
        for stock in group.stocks:
            expound_children = [
                _new_topic("细分主题 1", title_unedited=True),
                _new_topic("细分主题 2", title_unedited=True),
            ]
            expound_topic = _new_topic(stock.expound or "", expound_children, custom_width=888)
            line2 = _new_topic(f"{stock.code} - {stock.num}".strip(" -"))
            stock_children = [
                expound_topic,
                line2,
            ]
            stock_topics.append(_new_topic(stock.name, stock_children))

        group_children = stock_topics
        if group.reason:
            reason_topic = _new_topic(group.reason, custom_width=1000)
            group_children = [reason_topic, *stock_topics]

        group_topics.append(_new_topic(group_title, group_children))

    root_topic = {
        "id": str(uuid4()),
        "class": "topic",
        "title": date_value,
        "customWidth": 210,
        "structureClass": "org.xmind.ui.logic.right",
        "children": {"attached": group_topics},
    }
    content = [
        {
            "id": str(uuid4()),
            "revisionId": str(uuid4()),
            "class": "sheet",
            "title": date_value,
            "rootTopic": root_topic,
            **style_template,
        }
    ]

    metadata = {
        "dataStructureVersion": "3",
        "layoutEngineVersion": "5",
        "creator": {"name": "Flatwhite", "version": "Works"},
    }
    cache = {}
    manifest = {
        "file-entries": {
            "content.json": {},
            "metadata.json": {},
            "cache.json": {},
        }
    }

    with zipfile.ZipFile(output_path, mode="w", compression=zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("content.json", json.dumps(content, ensure_ascii=False, separators=(",", ":")))
        zf.writestr("metadata.json", json.dumps(metadata, ensure_ascii=False, separators=(",", ":")))
        zf.writestr("cache.json", json.dumps(cache, ensure_ascii=False, separators=(",", ":")))
        zf.writestr("manifest.json", json.dumps(manifest, ensure_ascii=False, separators=(",", ":")))
