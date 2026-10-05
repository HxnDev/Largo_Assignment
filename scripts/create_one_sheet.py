from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "brad-pitt-one-sheet.pdf"
PUBLIC_COPY = ROOT / "public" / "documents" / "brad-pitt-one-sheet.pdf"
RED = colors.HexColor("#C7192D")
INK = colors.HexColor("#17213B")
MUTED = colors.HexColor("#6C768A")
BLUE = colors.HexColor("#4E83BD")
LIGHT_BLUE = colors.HexColor("#9FC3E8")


def label(pdf, x, y, text, size=9, color=INK, font="Helvetica"):
    pdf.setFillColor(color)
    pdf.setFont(font, size)
    pdf.drawString(x, y, text)


def draw_bar(pdf, x, y, width, value, color, title):
    label(pdf, x, y + 11, title, 8, MUTED)
    pdf.setFillColor(colors.HexColor("#EDF0F4"))
    pdf.roundRect(x, y, width, 7, 3.5, fill=1, stroke=0)
    pdf.setFillColor(color)
    pdf.roundRect(x, y, width * value / 100, 7, 3.5, fill=1, stroke=0)
    label(pdf, x + width + 8, y - 1, f"{value}%", 9, INK, "Helvetica-Bold")


def create_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)
    width, height = A4
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4)
    pdf.setTitle("Brad Pitt Celebrity One-Sheet")
    pdf.setAuthor("Largo Dashboard Assignment")

    pdf.setFillColor(colors.HexColor("#F5F7F9"))
    pdf.rect(0, 0, width, height, fill=1, stroke=0)

    pdf.setFillColor(colors.white)
    pdf.roundRect(34, height - 120, width - 68, 72, 10, fill=1, stroke=0)
    label(pdf, 50, height - 76, "L", 25, RED, "Helvetica-Bold")
    label(pdf, 65, height - 76, "argo", 22, colors.HexColor("#959AA4"))
    label(pdf, 50, height - 99, "CELEBRITY PERFORMANCE ONE-SHEET", 8, MUTED, "Helvetica-Bold")

    pdf.setFillColor(colors.HexColor("#E8C09B"))
    pdf.circle(321, height - 84, 21, fill=1, stroke=0)
    pdf.setFillColor(INK)
    pdf.circle(321, height - 93, 22, fill=1, stroke=0)
    label(pdf, 312, height - 98, "BP", 8, colors.white, "Helvetica-Bold")
    label(pdf, 354, height - 77, "Brad Pitt", 20, INK, "Helvetica-Bold")
    label(pdf, 354, height - 96, "Film Personality - Actor", 10, MUTED)

    pdf.setFillColor(RED)
    pdf.roundRect(34, height - 290, 170, 144, 9, fill=1, stroke=0)
    label(pdf, 92, height - 187, "E-SCORE", 10, colors.white, "Helvetica-Bold")
    label(pdf, 81, height - 238, "99", 48, colors.white, "Helvetica-Bold")
    label(pdf, 70, height - 265, "Top-tier celebrity equity", 9, colors.white)

    pdf.setFillColor(colors.white)
    pdf.roundRect(218, height - 290, width - 252, 144, 9, fill=1, stroke=0)
    label(pdf, 238, height - 174, "Awareness", 12, INK, "Helvetica-Bold")
    label(pdf, 238, height - 216, "60%", 34, colors.HexColor("#6C54B6"), "Helvetica-Bold")
    label(pdf, 335, height - 181, "Category averages", 8, MUTED)
    categories = [
        ("Film Personality - Actor", 14, BLUE),
        ("Action-Adventure Actor", 16, colors.HexColor("#6C9FD2")),
        ("Spokesperson", 21, colors.HexColor("#86B4E1")),
        ("Romance Actor", 16, LIGHT_BLUE),
        ("Streaming Actor", 9, colors.HexColor("#C4DDF4")),
    ]
    for index, (name, value, color) in enumerate(categories):
        y = height - 201 - index * 17
        pdf.setFillColor(color)
        pdf.roundRect(335, y, 7, 7, 1.5, fill=1, stroke=0)
        label(pdf, 350, y, name, 8, MUTED)
        label(pdf, 516, y, f"{value}%", 8, INK, "Helvetica-Bold")

    pdf.setFillColor(colors.white)
    pdf.roundRect(34, height - 505, width - 68, 195, 9, fill=1, stroke=0)
    label(pdf, 50, height - 339, "Audience appeal", 12, INK, "Helvetica-Bold")
    draw_bar(pdf, 50, height - 374, 180, 86, RED, "Top Three Box")
    draw_bar(pdf, 50, height - 413, 180, 52, colors.HexColor("#DF6975"), "Top Two Box")
    draw_bar(pdf, 50, height - 452, 180, 14, colors.HexColor("#EFAAB3"), "Bottom Three Box")

    label(pdf, 315, height - 339, "Power factors", 12, INK, "Helvetica-Bold")
    factors = [("Talented", 47), ("Good Energy", 19), ("Sexy", 14), ("Intelligent", 13), ("Funny", 12)]
    for index, (name, value) in enumerate(factors):
        draw_bar(pdf, 315, height - 374 - index * 28, 150, value, RED, name)

    pdf.setFillColor(colors.white)
    pdf.roundRect(34, 82, width - 68, 224, 9, fill=1, stroke=0)
    label(pdf, 50, 282, "Profile summary", 12, INK, "Helvetica-Bold")
    summary = [
        "Brad Pitt combines near-universal recognition with strong audience appeal.",
        "His leading associations are talent, positive energy, confidence, and credibility.",
        "The dummy metrics in this one-sheet demonstrate a production-ready download flow.",
    ]
    for index, line in enumerate(summary):
        pdf.setFillColor(RED)
        pdf.circle(55, 251 - index * 27, 2.5, fill=1, stroke=0)
        label(pdf, 66, 247 - index * 27, line, 9, MUTED)

    label(pdf, 50, 150, "Fielding date", 8, MUTED, "Helvetica-Bold")
    label(pdf, 50, 134, "July 25, 2025", 10, INK)
    label(pdf, 205, 150, "Audience", 8, MUTED, "Helvetica-Bold")
    label(pdf, 205, 134, "Total males", 10, INK)
    label(pdf, 350, 150, "Data", 8, MUTED, "Helvetica-Bold")
    label(pdf, 350, 134, "Illustrative dummy dataset", 10, INK)

    pdf.setStrokeColor(colors.HexColor("#E3E7ED"))
    pdf.line(50, 112, width - 50, 112)
    label(pdf, 50, 95, "Generated for the Largo Full Stack Developer assignment", 8, MUTED)
    label(pdf, width - 132, 95, "Confidential", 8, MUTED, "Helvetica-Bold")

    pdf.showPage()
    pdf.save()
    copyfile(OUTPUT, PUBLIC_COPY)


if __name__ == "__main__":
    create_pdf()
