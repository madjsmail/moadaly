import json
import glob
import os
import sys

JSON_DIR = "canevas/json-pure"

REQUIRED_MODULE_FIELDS = {
    "name": str,
    "title": str,
    "coef": (int, float),
    "credit": (int, float),
    "poids": list,
    # "poids_td": (int, float),
    # "poids_tp": (int, float),
    # "poids_exam": (int, float),
    "moy": (int, float),
}

OPTIONAL_POIDS_FIELDS = {
    "poids_td": 1,
    "poids_tp": 2,
    "poids_exam": 0
}



def error(msg):
    print("❌", msg)
    sys.exit(1)


def check_type(value, expected, path):
    if not isinstance(value, expected):
        error(f"{path} must be {expected}, got {type(value)}")


def validate_module(mod, path):

    # الحقول الأساسية
    for field in ["name", "title", "coef", "credit", "poids", "moy"]:
        if field not in mod:
            error(f"Missing {path}.{field}")

    if not isinstance(mod["poids"], list) or len(mod["poids"]) != 3:
        error(f"{path}.poids must be list of 3 values")
    for v in mod["poids"]:
        if not isinstance(v, (int, float)):
            error(f"{path}.poids values must be numbers")

        if v < 0:
            error(f"{path}.poids contains negative value: {v}")

        if v > 100:
            error(f"{path}.poids contains value > 100: {v}")
    total = sum(mod["poids"])

    if abs(total - 100) > 0.0001:
        error(f"{path}.poids must sum to 100 (got {total})")
    # تحويل poids إلى نسب عشرية
    exam = mod["poids"][0] / 100
    td   = mod["poids"][1] / 100
    tp   = mod["poids"][2] / 100

    derived = {
        "poids_exam": exam,
        "poids_td": td,
        "poids_tp": tp
    }

    # تحقق أو أنشئ القيم الاختيارية
    for field, value in derived.items():
        if field in mod:
            if not isinstance(mod[field], (int, float)):
                error(f"{path}.{field} must be number")
            elif field =="poids_exam" and value != exam:
                error(f"{path}.{field} must be same as poids['exam']")
            elif field =="poids_tp" and value != tp:
                error(f"{path}.{field} must be same as poids['tp']")
            elif field =="poids_td" and value != td:
                error(f"{path}.{field} must be same as poids['td']")

        else:
            mod[field] = value   # نضيفها تلقائيًا




def validate_unite(unite, path):
    for field in ["name", "title", "modules", 'coef','credits_origine',"moy"]:
        if field not in unite:
            error(f"Missing {path}.{field}")

    check_type(unite["modules"], list, f"{path}.modules")

    for i, mod in enumerate(unite["modules"]):
        validate_module(mod, f"{path}.modules[{i}]")
    # check total coef of modules  is equal to unite coef
    total = sum(m["coef"] for m in unite["modules"])

    if abs(total - unite["coef"]) > 0.0001:
        error(
            f"{path}.coef mismatch: unite coef={unite['coef']} "
            f"but modules sum={total}"
        )

    # check total credits of modules  is equal to unite credits_origine
    credits_sum = sum(m["credit"] for m in unite["modules"])

    if abs(credits_sum - unite["credits_origine"]) > 0.0001:
        error(
            f"{path}.credits_origine mismatch: "
            f"unite={unite['credits_origine']} vs modules sum={credits_sum}"
        )

def validate_semestre(sem, path):
    for field in ["name", "unites", 'coef','credits_origine', "moy"]:
        if field not in sem:
            error(f"Missing {path}.{field}")

    check_type(sem["unites"], list, f"{path}.unites")

    for i, unite in enumerate(sem["unites"]):
        validate_unite(unite, f"{path}.unites[{i}]")


def validate_level(data, filename):
    if "name" not in data:
        error(f"{filename}: missing name")
    for field in ["name",    "domain", "startdate", "expired", "cycle", "level", "branch", "universities", "moy"]:
        if field not in data:
            error(f"Missing {field}")
    for sem in ["semestre1", "semestre2"]:
        if sem not in data:
            error(f"{filename}: missing {sem}")

        validate_semestre(data[sem], f"{filename}.{sem}")


def main():
    files = glob.glob(f"{JSON_DIR}/*.json")

    if not files:
        error("No JSON files found")
    seen_level_names = set()  # لتخزين أسماء المستويات التي تم قراءتها
    for path in files:
        print(f"🔍 Checking {path}")
        with open(path, encoding="utf-8") as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError as e:
                print(f"❌ JSON error in file: {f}")
                print(f"   Message : {e.msg}")
                print(f"   Line    : {e.lineno}")
                print(f"   Column  : {e.colno}")
                with open(f, encoding="utf-8") as file:
                    lines = file.readlines()
                    print(">>", lines[e.lineno - 1].strip())
                    print(" " * (e.colno + 2) + "^")
            else:
                validate_level(data, path)
                # تحقق من حقل name
                level_name = data.get("name")
                if not level_name:
                    error(f"{path} missing 'name' field")

                # تحقق من التكرار
                if level_name in seen_level_names:
                    error(f"Duplicate level name detected: '{level_name}' in file {path}")

                seen_level_names.add(level_name)
    print("\n✅ All JSON files are valid!")


if __name__ == "__main__":
    main()
