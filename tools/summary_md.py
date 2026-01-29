import json
import glob
from collections import defaultdict

JSON_DIR = "canevas/json-pure"
OUTPUT_FILE = "docs/canevas_summary.md"


def read_all_json():
    levels = []
    for path in glob.glob(f"{JSON_DIR}/*.json"):
        with open(path, encoding="utf-8") as f:
            levels.append(json.load(f))
    return levels


def generate_table(levels):
    # group by (domain, cycle)
    grouped = defaultdict(list)

    for lvl in levels:
        key = (lvl["domain"], lvl["cycle"])
        grouped[key].append(lvl)

    lines = []
    lines.append("# 📘 Canevas Summary\n")

    for (domain, cycle), group in sorted(grouped.items()):
        lines.append(f"## {domain} — {cycle}\n")
        lines.append("| Level | Branch | Universities | Start | Expired |")
        lines.append("|------|--------|--------------|-------|---------|")

        for lvl in sorted(group, key=lambda x: x["name"]):
            universities = (
                ", ".join(lvl["universities"])
                if lvl["universities"]
                else "national"
            )

            expired = lvl["expired"] if lvl["expired"] else "Present"

            lines.append(
                f"| {lvl['name']} | {lvl['branch']} | {universities} | "
                f"{lvl['startdate']} | {expired} |"
            )

        lines.append("")

    return "\n".join(lines)


def main():
    levels = read_all_json()
    report = generate_table(levels)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(report)

    print(f"📄 Summary table written to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
