"""Magen Pulse V2 scoring engine.

No manually chosen base score and no pre-entered final contributions.
Each signal is stored as evidence dimensions:
- strength
- reliability
- freshness
- horizon relevance
- maximum effect
- direction
- dependency group

The engine calculates each horizon with a bounded noisy-OR model.
This is an expert OSINT model, not yet a statistically calibrated predictor.
"""
from __future__ import annotations
import json, math
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "risk-data.json"
HORIZONS = ("immediate", "short", "extended")

def clamp(x, lo=0.0, hi=1.0):
    return max(lo, min(hi, x))

def signal_probability(signal, horizon):
    if not signal.get("active", True):
        return 0.0
    raw = (
        float(signal["max_effect"][horizon]) / 100.0
        * clamp(float(signal["strength"]))
        * clamp(float(signal["reliability"]))
        * clamp(float(signal["freshness"]))
        * clamp(float(signal["relevance"][horizon]))
    )
    return clamp(raw, 0.0, 0.95)

def combine_positive(probabilities):
    # noisy-OR: independent evidence accumulates but never exceeds 1
    remaining = 1.0
    for p in probabilities:
        remaining *= (1.0 - clamp(p))
    return 1.0 - remaining

def dependency_adjust(signals, horizon):
    groups = {}
    for s in signals:
        p = signal_probability(s, horizon)
        groups.setdefault(s.get("dependency_group", s["id"]), []).append((s, p))
    adjusted = []
    for items in groups.values():
        items.sort(key=lambda x: x[1], reverse=True)
        for idx, (s, p) in enumerate(items):
            factor = 1.0 if idx == 0 else 0.35
            adjusted.append((s, p * factor))
    return adjusted

def score_horizon(signals, horizon):
    adjusted = dependency_adjust(signals, horizon)
    pos = [p for s,p in adjusted if s["direction"] == "up"]
    neg = [p for s,p in adjusted if s["direction"] == "down"]
    positive = combine_positive(pos)
    protective = combine_positive(neg)
    # protective evidence can reduce but not erase all positive risk
    final = positive * (1.0 - 0.65 * protective)
    return clamp(final)

def confidence(data, horizon):
    active = [s for s in data["signals"] if s.get("active", True)]
    if not active:
        return 0
    weighted = []
    for s in active:
        rel = clamp(float(s["reliability"]))
        fresh = clamp(float(s["freshness"]))
        relevance = clamp(float(s["relevance"][horizon]))
        weighted.append((rel * fresh, relevance))
    num = sum(v*w for v,w in weighted)
    den = sum(w for _,w in weighted) or 1
    evidence_quality = num/den
    coverage = clamp(data["coverage"]["percent"]/100)
    return round(100 * (0.62*evidence_quality + 0.38*coverage))

def status(v):
    if v < 0.20: return "נמוך אך לא אפסי"
    if v < 0.40: return "מוגבר"
    if v < 0.60: return "משמעותי"
    if v < 0.80: return "גבוה"
    return "קריטי"

def uncertainty(score, conf):
    width = 8 + (100-conf)*0.22
    return max(0, round(score-width)), min(100, round(score+width))

def main():
    d = json.loads(DATA.read_text(encoding="utf-8"))
    computed_scores = {}
    for h in HORIZONS:
        p = score_horizon(d["signals"], h)
        score = round(p*100)
        conf = confidence(d, h)
        low, high = uncertainty(score, conf)
        d["assessment"][h].update(score=score, confidence=conf, low=low, high=high, status=status(p))
        computed_scores[h] = score

    for s in d["signals"]:
        s["computed"] = {}
        for h in HORIZONS:
            val = signal_probability(s, h)*100
            if s["direction"] == "down":
                val = -val
            s["computed"][h] = round(val, 1)

    now = datetime.now(timezone.utc).isoformat().replace("+00:00","Z")
    d["updated_at"] = now
    history = d.get("history", [])
    previous = history[-1] if history else None
    history.append({"timestamp": now, **computed_scores})
    d["history"] = history[-144:]

    if previous:
        d["velocity"]["points_60m"] = computed_scores["immediate"] - previous["immediate"]
        delta = d["velocity"]["points_60m"]
        d["velocity"]["level"] = "זינוק חריג" if delta >= 15 else "עלייה מהירה" if delta >= 7 else "עלייה מתונה" if delta > 1 else "יציב" if delta >= -1 else "ירידה"
    DATA.write_text(json.dumps(d, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")

if __name__ == "__main__":
    main()
