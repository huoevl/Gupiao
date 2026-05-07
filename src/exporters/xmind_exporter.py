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
    doc_dir = Path(__file__).resolve().parents[2] / "_doc"
    candidates = [
        doc_dir / "股票示例_分类.xmind",
        doc_dir / "股票示例.xmind",
    ]
    sample = next((path for path in candidates if path.exists()), None)
    if sample is None:
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
    groups = [group for group in groups if group.stocks]

    sheets: list[dict] = []
    for group in groups:
        tab_title = f"{group.name}.{len(group.stocks)}"

        stock_topics: list[dict] = []
        for stock in group.stocks:
            expound_children = [
                _new_topic("", title_unedited=True),
                _new_topic("", title_unedited=True),
            ]
            expound_topic = _new_topic(stock.expound or "", expound_children, custom_width=888)
            line2 = _new_topic(f"{stock.code} - {stock.num}".strip(" -"))
            stock_children = [
                expound_topic,
                line2,
            ]
            stock_topics.append(_new_topic(stock.name, stock_children))

        root_children = stock_topics
        if group.reason:
            reason_topic = _new_topic(group.reason, custom_width=1000)
            root_children = [reason_topic, *stock_topics]

        root_topic_id = str(uuid4())
        root_topic = {
            "id": root_topic_id,
            "class": "topic",
            "title": group.name,
            "structureClass": "org.xmind.ui.logic.right",
            "children": {"attached": root_children},
        }
        sheets.append(
            {
            "id": str(uuid4()),
            "revisionId": str(uuid4()),
            "class": "sheet",
            "title": tab_title,
            "rootTopic": root_topic,
            "arrangeableLayerOrder": [root_topic_id],
            **style_template,
        }
        )

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
        zf.writestr("content.json", json.dumps(sheets, ensure_ascii=False, separators=(",", ":")))
        zf.writestr("metadata.json", json.dumps(metadata, ensure_ascii=False, separators=(",", ":")))
        zf.writestr("cache.json", json.dumps(cache, ensure_ascii=False, separators=(",", ":")))
        zf.writestr("manifest.json", json.dumps(manifest, ensure_ascii=False, separators=(",", ":")))
