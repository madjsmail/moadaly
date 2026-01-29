import json
import glob
import os

JSON_DIR = "canevas/json-pure"
OUTPUT_FILE = "canevas/json/canevas_data.js"

def main():
    files = glob.glob(f"{JSON_DIR}/*.json")
    if not files:
        print("❌ No JSON files found")
        return

    canevas = {}

    for path in files:
        with open(path, encoding="utf-8") as f:
            data = json.load(f)  # نفترض هنا أن validation تم مسبقًا
            level_name = data["name"]
            canevas[level_name] = data

    # كتابة ملف JS
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("// This file is auto-generated from JSON files\n")
        f.write("var canevas = {};\n\n")
        for key, value in canevas.items():
            # json.dumps يحول dict إلى نص JSON
            json_text = json.dumps(value, ensure_ascii=False, indent=2)
            f.write(f'canevas["{key}"] = {json_text};\n\n')

    print(f"✅ All JSON files have been merged into {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
