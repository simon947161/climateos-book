from __future__ import annotations

import re
from pathlib import Path
from typing import Iterable
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
)
from reportlab.lib.utils import ImageReader


ROOT = Path(__file__).resolve().parents[1]
ZH_DIR = ROOT / "books" / "torch-and-horizon" / "zh"
PUBLIC_DIR = ROOT / "public"
PDF_PATH = ROOT / "books" / "torch-and-horizon" / "pdf" / "torch-and-horizon-v1.pdf"


def chapter_files() -> list[Path]:
    return sorted(path for path in ZH_DIR.glob("*.md") if path.name.lower() != "readme.md")


def read_title(path: Path) -> str:
    for line in path.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if stripped.startswith("#"):
            return clean_inline(stripped.lstrip("#").strip()) or path.stem
    return path.stem


def strip_front_matter(text: str) -> str:
    return re.sub(r"^---\n[\s\S]*?\n---\n?", "", text)


def is_artifact(block: str) -> bool:
    trimmed = block.strip()
    return bool(
        re.fullmatch(r"<!--\s*Page\s+\d+\s*-->", trimmed, flags=re.I)
        or re.fullmatch(r"!page\s*\d*", trimmed, flags=re.I)
        or re.fullmatch(r"!\[\]\[image\d+\]", trimmed, flags=re.I)
        or re.fullmatch(r"\[image\d+\]:\s*data:image/.*", trimmed, flags=re.I | re.S)
        or re.fullmatch(r"#{1,6}", trimmed)
        or trimmed == "---"
    )


def clean_inline(text: str) -> str:
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = text.replace("**", "").replace("*", "")
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    return text.strip()


def paragraph(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(escape(clean_inline(text)).replace("\n", "<br/>"), style)


def resolve_image(src: str) -> Path | None:
    src = src.strip()
    if src.startswith("/"):
        path = PUBLIC_DIR / src.lstrip("/")
    elif src.startswith("assets/"):
        path = PUBLIC_DIR / "assets" / "torch-and-horizon" / "en" / src.replace("assets/", "", 1)
    else:
        path = ROOT / src
    return path if path.exists() else None


def image_flowable(path: Path, caption: str, styles: dict[str, ParagraphStyle]) -> list:
    width, height = ImageReader(str(path)).getSize()
    max_width = 16 * cm
    max_height = 18 * cm
    scale = min(max_width / width, max_height / height, 1)
    image = Image(str(path), width=width * scale, height=height * scale)
    image.hAlign = "CENTER"
    flowables: list = [Spacer(1, 0.4 * cm), image]
    if caption:
        flowables.append(Paragraph(escape(caption), styles["Caption"]))
    flowables.append(Spacer(1, 0.4 * cm))
    return flowables


def iter_blocks(text: str) -> Iterable[str]:
    text = strip_front_matter(text).replace("\r\n", "\n")
    yield from re.split(r"\n{2,}", text)


def chapter_content(path: Path, styles: dict[str, ParagraphStyle]) -> list:
    flowables: list = []
    for raw_block in iter_blocks(path.read_text(encoding="utf-8")):
        block = raw_block.strip()
        if not block or is_artifact(block):
            continue

        image_match = re.fullmatch(r"!\[([^\]]*)\]\(([^)]+)\)", block)
        if image_match:
            image_path = resolve_image(image_match.group(2))
            if image_path:
                flowables.extend(image_flowable(image_path, image_match.group(1), styles))
            continue

        if block.startswith("$$") and block.endswith("$$"):
            formula = block.strip("$").strip()
            flowables.append(
                KeepTogether(
                    [
                        Spacer(1, 0.25 * cm),
                        Preformatted(formula, styles["Formula"]),
                        Spacer(1, 0.25 * cm),
                    ]
                )
            )
            continue

        if block.startswith("### "):
            if clean_inline(block[4:]):
                flowables.append(paragraph(block[4:], styles["Heading3"]))
        elif block.startswith("## "):
            if clean_inline(block[3:]):
                flowables.append(paragraph(block[3:], styles["Heading2"]))
        elif block.startswith("# "):
            if clean_inline(block[2:]):
                flowables.append(paragraph(block[2:], styles["Heading1"]))
        elif all(line.strip().startswith("- ") for line in block.splitlines()):
            for line in block.splitlines():
                flowables.append(paragraph("• " + line.strip()[2:], styles["Body"]))
        else:
            flowables.append(paragraph(block, styles["Body"]))
    return flowables


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("STSong-Light", 9)
    canvas.setFillColor(colors.HexColor("#626b67"))
    canvas.drawCentredString(A4[0] / 2, 1.2 * cm, str(canvas.getPageNumber()))
    canvas.restoreState()


def build_pdf() -> None:
    pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
    stylesheet = getSampleStyleSheet()
    styles = {
        "Title": ParagraphStyle(
            "Title",
            parent=stylesheet["Title"],
            fontName="STSong-Light",
            fontSize=28,
            leading=34,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#1f2523"),
            spaceAfter=18,
        ),
        "Heading1": ParagraphStyle(
            "Heading1",
            parent=stylesheet["Heading1"],
            fontName="STSong-Light",
            fontSize=20,
            leading=26,
            spaceBefore=14,
            spaceAfter=10,
        ),
        "Heading2": ParagraphStyle(
            "Heading2",
            parent=stylesheet["Heading2"],
            fontName="STSong-Light",
            fontSize=15,
            leading=21,
            spaceBefore=12,
            spaceAfter=8,
        ),
        "Heading3": ParagraphStyle(
            "Heading3",
            parent=stylesheet["Heading3"],
            fontName="STSong-Light",
            fontSize=12,
            leading=18,
            spaceBefore=10,
            spaceAfter=6,
        ),
        "Body": ParagraphStyle(
            "Body",
            parent=stylesheet["BodyText"],
            fontName="STSong-Light",
            fontSize=10.5,
            leading=17,
            spaceAfter=7,
        ),
        "Toc": ParagraphStyle(
            "Toc",
            parent=stylesheet["BodyText"],
            fontName="STSong-Light",
            fontSize=11,
            leading=18,
            spaceAfter=5,
        ),
        "Caption": ParagraphStyle(
            "Caption",
            parent=stylesheet["BodyText"],
            fontName="STSong-Light",
            fontSize=9,
            leading=13,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#626b67"),
            spaceBefore=5,
        ),
        "Formula": ParagraphStyle(
            "Formula",
            parent=stylesheet["Code"],
            fontName="Courier",
            fontSize=9.5,
            leading=13,
            leftIndent=14,
            rightIndent=14,
            borderColor=colors.HexColor("#d8d4cb"),
            borderWidth=0.75,
            borderPadding=8,
            backColor=colors.HexColor("#ffffff"),
        ),
    }

    files = chapter_files()
    story: list = [
        Spacer(1, 1.2 * cm),
        Paragraph("《远方与火炬》", styles["Title"]),
        Paragraph("Torch and Horizon", styles["Title"]),
    ]

    cover = PUBLIC_DIR / "assets" / "torch-and-horizon" / "en" / "page-01-image-1.png"
    if cover.exists():
        story.extend(image_flowable(cover, "ClimateOS 思想演化结构图", styles))

    story.extend([PageBreak(), Paragraph("目录", styles["Heading1"])])
    for index, path in enumerate(files, start=1):
        story.append(Paragraph(f"{index:02d}. {escape(read_title(path))}", styles["Toc"]))

    for path in files:
        story.append(PageBreak())
        story.extend(chapter_content(path, styles))

    doc = SimpleDocTemplate(
        str(PDF_PATH),
        pagesize=A4,
        rightMargin=2.1 * cm,
        leftMargin=2.1 * cm,
        topMargin=2.1 * cm,
        bottomMargin=2 * cm,
        title="远方与火炬 / Torch and Horizon",
        author="Simon Shu Min",
    )
    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)


if __name__ == "__main__":
    build_pdf()
    print(f"Generated {PDF_PATH}")
