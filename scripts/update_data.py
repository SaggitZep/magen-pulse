"""Magen Pulse evidence updater.

There is no hidden base score. Every point must come from an explicit, visible
signal in risk-data.json. The script validates the snapshot, sums contributions
for each horizon, and appends a history point.
"""
from __future__ import annotations
import json
from datetime import datetime, timezone
from pathlib import Path

P = Path(__file__).resolve().parents[1] / "data" / "risk-data.json"
KEYS = ("immediate", "short", "extended")

def clamp(x):
    return max(0, min(100, round(x)))

def main():
    d = json.loads(P.read_text(encoding="utf-8"))
    totals = {k: 0 for k in KEYS}
    for signal in d["signals"]:
        for key in KEYS:
            value = signal["contribution"][key]
            if not isinstance(value, (int, float)):
                raise TypeError(f"Invalid contribution: {signal['id']} {key}")
            totals[key] += value
    for key in KEYS:
        d["assessment"][key]["score"] = clamp(totals[key])
    now = datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
    d["updated_at"] = now
    point = {"timestamp": now, **{key: d["assessment"][key]["score"] for key in KEYS}}
    d["history"] = (d.get("history", []) + [point])[-72:]
    P.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

if __name__ == "__main__":
    main()
