"""
Magen Pulse updater.

Safety note:
This starter intentionally remains in demo mode. It refreshes the data timestamp
and preserves the transparent scoring structure, but it does not invent live
findings. Replace `collect_live_signals()` only after sources and scoring rules
have been reviewed.
"""
from __future__ import annotations
import json
from datetime import datetime, timezone
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parents[1] / "data" / "risk-data.json"

def collect_live_signals() -> None:
    """Placeholder for reviewed, source-specific collectors."""
    return None

def main() -> None:
    with DATA_PATH.open("r", encoding="utf-8") as f:
        data = json.load(f)

    collect_live_signals()

    # Keep demo mode explicit. Do not present sample findings as live intelligence.
    data["mode"] = "demo"
    data["current"]["updated_at"] = datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")

    with DATA_PATH.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

if __name__ == "__main__":
    main()
