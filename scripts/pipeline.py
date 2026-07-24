from __future__ import annotations

import difflib
import hashlib
import json
import math
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
STATE = DATA / "state.json"
STATE_JS = DATA / "state.js"
CONFIG = DATA / "source_config.json"
MANUAL = DATA / "manual_signals.json"
UA = "MagenPulseOSINT/4.0 (+public research dashboard)"

HORIZONS = ("immediate", "short", "extended")
LABELS = {"immediate": "60 דקות", "short": "6 שעות", "extended": "24 שעות"}
MAX_EFFECT = {
    "direct_intent": {"immediate": 88, "short": 78, "extended": 52},
    "capability": {"immediate": 34, "short": 48, "extended": 42},
    "israel_readiness": {"immediate": 42, "short": 36, "extended": 24},
    "regional_escalation": {"immediate": 20, "short": 34, "extended": 44},
}
RELEVANCE = {
    "direct_intent": {"immediate": 1.00, "short": 0.88, "extended": 0.56},
    "capability": {"immediate": 0.58, "short": 1.00, "extended": 0.84},
    "israel_readiness": {"immediate": 1.00, "short": 0.78, "extended": 0.46},
    "regional_escalation": {"immediate": 0.38, "short": 0.76, "extended": 1.00},
}
CATEGORY_CAP = {
    "direct_intent": 0.90,
    "capability": 0.60,
    "israel_readiness": 0.56,
    "regional_escalation": 0.48,
}

IRAN_TERMS = (
    "iran", "iranian", "irgc", "tehran", "טהראן", "איראן", "איראני", "משמרות המהפכה"
)
ISRAEL_TERMS = (
    "israel", "israeli", "tel aviv", "jerusalem", "ישראל", "ישראלי", "תל אביב", "ירושלים"
)
EVENT_TERMS = (
    "missile", "missiles", "drone", "drones", "attack", "strike", "retaliation", "revenge",
    "launch", "launched", "fired", "fires", "intercept", "airspace", "military", "threat",
    "base", "shipping", "maritime", "nuclear", "טיל", "טילים", "כטב", "מל\"ט", "מתקפה",
    "תקיפה", "שיגור", "שוגר", "יירוט", "איום", "צבאי", "מרחב אווירי"
)
CONFIRMED_LAUNCH_TERMS = (
    "launched missiles", "launched drones", "missiles launched", "drones launched", "fired missiles",
    "fires missiles", "missile barrage", "drone barrage", "שיגרה טילים", "שוגרו טילים", "שיגור טילים",
    "מטחים", "מטח טילים"
)
DIRECT_INTENT_TERMS = (
    "imminent", "within hours", "direct attack", "retaliate against israel", "attack israel",
    "strike israel", "revenge against israel", "איום לתקוף את ישראל", "מתקפה ישירה", "תגובה נגד ישראל"
)
CAPABILITY_TERMS = (
    "deployment", "deployed", "launchers", "military preparation", "military exercise", "readiness",
    "moved missiles", "missile sites", "הצבת משגרים", "פריסת טילים", "תרגיל צבאי", "היערכות צבאית"
)
READINESS_TERMS = (
    "home front command", "shelter", "shelters", "hospital readiness", "emergency instructions",
    "airspace closed", "schools closed", "פיקוד העורף", "מקלטים", "בתי חולים", "הנחיות חירום",
    "סגירת המרחב האווירי", "מרחב אווירי נסגר"
)
REGIONAL_TERMS = (
    "red sea", "gulf", "iraq", "syria", "jordan", "lebanon", "us base", "american base",
    "shipping", "maritime", "naval", "ים סוף", "המפרץ", "עיראק", "סוריה", "ירדן", "לבנון",
    "בסיס אמריקאי", "ספנות"
)
DEESCALATION_TERMS = (
    "ceasefire", "de-escalation", "deescalation", "talks resume", "agreement reached", "denied imminent",
    "not imminent", "no change", "הפסקת אש", "הסלמה נבלמה", "אין שינוי", "לא צפויה מתקפה"
)
EXCLUDE_TERMS = (
    "football", "soccer", "movie", "music", "stock market", "recipe", "celebrity", "sports"
)


def clamp(value: float, lo: float = 0.0, hi: float = 1.0) -> float:
    return max(lo, min(hi, value))


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def iso(dt: datetime) -> str:
    return dt.isoformat().replace("+00:00", "Z")


def parse_dt(value: str | None) -> datetime:
    if not value:
        return utcnow()
    for fmt in ("%Y%m%dT%H%M%SZ", "%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S.%fZ"):
        try:
            return datetime.strptime(value, fmt).replace(tzinfo=timezone.utc)
        except ValueError:
            pass
    try:
        dt = datetime.fromisoformat(value.replace("Z", "+00:00"))
        return dt.astimezone(timezone.utc)
    except ValueError:
        return utcnow()


def fetch_json(url: str) -> dict:
    delays = (0, 4, 10)
    last_error: Exception | None = None
    for delay in delays:
        if delay:
            time.sleep(delay)
        req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
        try:
            with urllib.request.urlopen(req, timeout=15) as response:
                return json.load(response)
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as exc:
            last_error = exc
            retryable = not isinstance(exc, urllib.error.HTTPError) or exc.code == 429 or exc.code >= 500
            if not retryable:
                break
    raise RuntimeError(str(last_error) if last_error else "Unknown collection error")


def gdelt(cfg: dict) -> dict:
    g = cfg["gdelt"]
    params = {
        "query": g["query"],
        "mode": "ArtList",
        "maxrecords": str(g.get("maxrecords", 150)),
        "format": "json",
        "sort": "HybridRel",
        "timespan": g.get("timespan", "4h"),
    }
    url = "https://api.gdeltproject.org/api/v2/doc/doc?" + urllib.parse.urlencode(params)
    return fetch_json(url)


def host_of(url: str) -> str:
    return urlparse(url).netloc.lower().removeprefix("www.")


def domain_reliability(url: str, default: float, trusted: dict[str, float]) -> float:
    host = host_of(url)
    for domain, score in trusted.items():
        domain = domain.lower().removeprefix("www.")
        if host == domain or host.endswith("." + domain):
            return float(score)
    return float(default)


def normalized_title(title: str) -> str:
    title = title.lower().replace("\u00a0", " ")
    return re.sub(r"[^\w\u0590-\u05ff]+", " ", title, flags=re.UNICODE).strip()


def article_key(title: str) -> str:
    return hashlib.sha1(normalized_title(title).encode("utf-8")).hexdigest()[:16]


def contains_any(text: str, terms: tuple[str, ...]) -> bool:
    return any(term in text for term in terms)


def title_is_relevant(title: str) -> bool:
    text = normalized_title(title)
    if not text or contains_any(text, EXCLUDE_TERMS):
        return False
    return contains_any(text, IRAN_TERMS) and contains_any(text, EVENT_TERMS)


def is_confirmed_launch(text: str) -> bool:
    return contains_any(text, CONFIRMED_LAUNCH_TERMS) and contains_any(text, IRAN_TERMS) and contains_any(text, ISRAEL_TERMS)


def classify(text: str) -> tuple[str, str, bool]:
    down = contains_any(text, DEESCALATION_TERMS)
    confirmed = is_confirmed_launch(text)
    if contains_any(text, READINESS_TERMS):
        category = "israel_readiness"
    elif confirmed or (contains_any(text, DIRECT_INTENT_TERMS) and contains_any(text, ISRAEL_TERMS)):
        category = "direct_intent"
    elif contains_any(text, CAPABILITY_TERMS):
        category = "capability"
    elif contains_any(text, REGIONAL_TERMS):
        category = "regional_escalation"
    elif contains_any(text, ISRAEL_TERMS):
        category = "direct_intent"
    else:
        category = "regional_escalation"
    return category, "down" if down else "up", confirmed


def evidence_strength(text: str, category: str, confirmed: bool, direction: str) -> float:
    if confirmed:
        return 0.98
    if direction == "down":
        return 0.54
    score = {
        "direct_intent": 0.50,
        "capability": 0.46,
        "israel_readiness": 0.52,
        "regional_escalation": 0.40,
    }[category]
    if contains_any(text, DIRECT_INTENT_TERMS):
        score += 0.20
    if contains_any(text, READINESS_TERMS):
        score += 0.12
    if contains_any(text, ("missile", "missiles", "drone", "drones", "טיל", "טילים", "כטב")):
        score += 0.08
    if contains_any(text, ("threat", "warns", "איום", "מזהירה")):
        score += 0.05
    return clamp(score, 0.20, 0.88)


def freshness(seen: datetime) -> float:
    age_hours = max(0.0, (utcnow() - seen).total_seconds() / 3600)
    return math.exp(-age_hours / 3.5)


def finding_text(category: str, direction: str, confirmed: bool) -> str:
    if confirmed:
        return "דיווח עדכני על שיגור מאיראן לעבר ישראל. אות זה מקבל משקל מיידי גבוה גם ממקור יחיד."
    if direction == "down":
        return "דיווח המצביע על רגיעה, הכחשה או הפחתת הסלמה."
    return {
        "direct_intent": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
        "capability": "דיווח על יכולת, פריסה או היערכות צבאית איראנית.",
        "israel_readiness": "דיווח על שינוי בהיערכות האזרחית או הביטחונית בישראל.",
        "regional_escalation": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
    }[category]


def make_signal(article: dict, cfg: dict) -> dict | None:
    title = (article.get("title") or "").strip()
    if not title_is_relevant(title):
        return None
    text = normalized_title(title)
    category, direction, confirmed = classify(text)
    seen = parse_dt(article.get("seendate"))
    url = article.get("url", "")
    reliability = domain_reliability(url, cfg.get("default_source_tier", 0.56), cfg["trusted_domains"])
    key = article_key(title)
    return {
        "id": key,
        "name": title[:220],
        "finding": finding_text(category, direction, confirmed),
        "category": category,
        "direction": direction,
        "evidence_type": "confirmed_launch" if confirmed else "deescalation" if direction == "down" else "report",
        "dependency_group": key,
        "strength": round(evidence_strength(text, category, confirmed, direction), 3),
        "reliability": round(reliability, 3),
        "freshness": round(freshness(seen), 3),
        "max_effect": MAX_EFFECT[category],
        "relevance": RELEVANCE[category],
        "source": host_of(url) or article.get("domain", "מקור פומבי"),
        "url": url,
        "published_at": iso(seen),
        "active": freshness(seen) > 0.18,
    }


def duplicate_index(signals: list[dict], candidate: dict) -> int | None:
    candidate_title = normalized_title(candidate["name"])
    for index, existing in enumerate(signals):
        existing_title = normalized_title(existing["name"])
        if candidate_title == existing_title:
            return index
        ratio = difflib.SequenceMatcher(None, candidate_title, existing_title).ratio()
        if ratio >= 0.88:
            return index
    return None


def deduplicate(signals: list[dict]) -> list[dict]:
    unique: list[dict] = []
    for signal in signals:
        duplicate = duplicate_index(unique, signal)
        if duplicate is None:
            unique.append(signal)
            continue
        incumbent = unique[duplicate]
        incumbent_quality = incumbent.get("reliability", 0) * incumbent.get("freshness", 0)
        candidate_quality = signal.get("reliability", 0) * signal.get("freshness", 0)
        if candidate_quality > incumbent_quality:
            unique[duplicate] = signal
    return unique


def normalize_manual_signal(raw: dict) -> dict:
    category = raw.get("category", "direct_intent")
    if category not in MAX_EFFECT:
        raise ValueError(f"Unknown manual signal category: {category}")
    direction = raw.get("direction", "up")
    published = parse_dt(raw.get("published_at"))
    confirmed = raw.get("evidence_type") == "confirmed_launch"
    title = raw.get("name") or "אות ידני מאומת"
    key = raw.get("id") or article_key(title + raw.get("source", "manual"))
    return {
        "id": key,
        "name": title,
        "finding": raw.get("finding") or finding_text(category, direction, confirmed),
        "category": category,
        "direction": direction,
        "evidence_type": raw.get("evidence_type", "manual"),
        "dependency_group": raw.get("dependency_group", key),
        "strength": float(raw.get("strength", 0.72)),
        "reliability": float(raw.get("reliability", 0.90)),
        "freshness": round(float(raw.get("freshness", freshness(published))), 3),
        "max_effect": raw.get("max_effect", MAX_EFFECT[category]),
        "relevance": raw.get("relevance", RELEVANCE[category]),
        "source": raw.get("source", "אימות ידני"),
        "url": raw.get("url", ""),
        "published_at": iso(published),
        "active": raw.get("active", True),
    }


def carry_forward(old: dict) -> list[dict]:
    carried: list[dict] = []
    for raw in old.get("signals", []):
        title = raw.get("name", "")
        if not title_is_relevant(title):
            continue
        published = parse_dt(raw.get("published_at"))
        fresh = freshness(published)
        if fresh <= 0.18:
            continue
        text = normalized_title(title)
        category, direction, confirmed = classify(text)
        signal = dict(raw)
        signal.update({
            "category": category,
            "direction": direction,
            "evidence_type": "confirmed_launch" if confirmed else "deescalation" if direction == "down" else "report",
            "finding": finding_text(category, direction, confirmed),
            "strength": round(evidence_strength(text, category, confirmed, direction), 3),
            "freshness": round(fresh, 3),
            "max_effect": MAX_EFFECT[category],
            "relevance": RELEVANCE[category],
            "active": True,
            "carried_forward": True,
        })
        carried.append(signal)
    return deduplicate(carried)


def base_probability(signal: dict, horizon: str) -> float:
    return clamp(
        signal["max_effect"][horizon] / 100
        * signal["strength"]
        * signal["reliability"]
        * signal["freshness"]
        * signal["relevance"][horizon],
        0,
        0.94,
    )


def independent_items(signals: list[dict], horizon: str) -> list[tuple[dict, float]]:
    active = [s for s in signals if s.get("active", True)]
    by_group: dict[str, tuple[dict, float]] = {}
    for signal in active:
        probability = base_probability(signal, horizon)
        group = signal.get("dependency_group", signal["id"])
        if group not in by_group or probability > by_group[group][1]:
            by_group[group] = (signal, probability)

    items = sorted(by_group.values(), key=lambda item: item[1], reverse=True)
    source_seen: dict[str, int] = {}
    adjusted: list[tuple[dict, float]] = []
    for signal, probability in items:
        source = signal.get("source", "unknown")
        count = source_seen.get(source, 0)
        source_seen[source] = count + 1
        source_factor = 1.0 if count == 0 else 0.35 if count == 1 else 0.15
        adjusted.append((signal, probability * source_factor))
    return adjusted


def noisy_or(values: list[float]) -> float:
    remainder = 1.0
    for value in values:
        remainder *= 1.0 - clamp(value)
    return 1.0 - remainder


def score(signals: list[dict], horizon: str) -> float:
    items = independent_items(signals, horizon)
    category_values: dict[str, list[float]] = {category: [] for category in MAX_EFFECT}
    negative_values: list[float] = []

    for signal, probability in items:
        if signal.get("direction") == "down":
            negative_values.append(probability)
        else:
            category_values[signal["category"]].append(probability)

    category_scores = [
        min(CATEGORY_CAP[category], noisy_or(values[:3]))
        for category, values in category_values.items()
        if values
    ]
    positive = noisy_or(category_scores)
    negative = noisy_or(negative_values[:3])
    result = positive * (1.0 - 0.60 * negative)

    confirmed_launches = [
        s for s in signals
        if s.get("active", True) and s.get("direction") == "up" and s.get("evidence_type") == "confirmed_launch"
    ]
    if confirmed_launches:
        floor = {"immediate": 0.88, "short": 0.74, "extended": 0.45}[horizon]
        result = max(result, floor)
    else:
        credible_sources = {
            s.get("source") for s in signals
            if s.get("active", True) and s.get("direction") == "up" and s.get("reliability", 0) >= 0.68
        }
        source_count = len(credible_sources)
        cap = 0.34 if source_count <= 1 else 0.58 if source_count == 2 else 0.76 if source_count == 3 else 0.92
        result = min(result, cap)

    return clamp(result)


def confidence(signals: list[dict], coverage: float, horizon: str) -> int:
    active = [s for s in signals if s.get("active", True)]
    if not active:
        return round(35 * coverage)
    weights = [max(0.05, s["relevance"][horizon]) for s in active]
    quality = sum(s["reliability"] * s["freshness"] * w for s, w in zip(active, weights)) / sum(weights)
    diversity = min(1.0, len({s.get("source") for s in active}) / 5)
    directness = max((1.0 if s.get("evidence_type") == "confirmed_launch" else s["strength"] for s in active), default=0)
    return round(100 * (0.42 * quality + 0.28 * coverage + 0.20 * diversity + 0.10 * directness))


def status(probability: float) -> str:
    if probability < 0.08:
        return "לא זוהה אות חריג"
    if probability < 0.22:
        return "נמוך"
    if probability < 0.42:
        return "מוגבר"
    if probability < 0.62:
        return "משמעותי"
    if probability < 0.82:
        return "גבוה"
    return "קריטי"


def write_state(payload: dict) -> None:
    encoded = json.dumps(payload, ensure_ascii=False, indent=2)
    STATE.write_text(encoded + "\n", encoding="utf-8")
    STATE_JS.write_text("window.MAGEN_STATE = " + encoded + ";\n", encoding="utf-8")


def main() -> None:
    cfg = json.loads(CONFIG.read_text(encoding="utf-8"))
    old = json.loads(STATE.read_text(encoding="utf-8")) if STATE.exists() else {}
    source_health: dict[str, dict] = {}
    signals: list[dict] = []
    gdelt_ok = False

    try:
        payload = gdelt(cfg)
        articles = payload.get("articles", [])
        for article in articles:
            signal = make_signal(article, cfg)
            if signal:
                signals.append(signal)
        signals = deduplicate(signals)
        source_health["gdelt"] = {"ok": True, "items": len(articles), "relevant": len(signals)}
        gdelt_ok = True
    except Exception as exc:
        signals = carry_forward(old)
        source_health["gdelt"] = {
            "ok": False,
            "error": str(exc)[:180],
            "carried_forward": len(signals),
        }

    try:
        manual_raw = json.loads(MANUAL.read_text(encoding="utf-8")).get("signals", [])
        manual = [normalize_manual_signal(item) for item in manual_raw]
        signals.extend(manual)
        signals = deduplicate(signals)
        source_health["manual"] = {"ok": True, "items": len(manual)}
    except Exception as exc:
        source_health["manual"] = {"ok": False, "error": str(exc)[:180]}

    expected = len(source_health)
    available = sum(1 for health in source_health.values() if health.get("ok"))
    coverage = available / expected if expected else 0.0

    assessment: dict[str, dict] = {}
    scores: dict[str, int] = {}
    for horizon in HORIZONS:
        probability = score(signals, horizon)
        sc = round(probability * 100)
        conf = confidence(signals, coverage, horizon)
        width = round(7 + (100 - conf) * 0.18)
        assessment[horizon] = {
            "label": LABELS[horizon],
            "score": sc,
            "low": max(0, sc - width),
            "high": min(100, sc + width),
            "confidence": conf,
            "status": status(probability),
        }
        scores[horizon] = sc

    generated = iso(utcnow())
    history = (old.get("history", []) if old.get("schema_version") == 4 else [])[-1007:]
    previous = history[-1] if history else None
    history.append({"timestamp": generated, **scores})
    delta = scores["immediate"] - (previous.get("immediate", scores["immediate"]) if previous else scores["immediate"])
    level = (
        "זינוק חריג" if delta >= 15 else
        "עלייה מהירה" if delta >= 7 else
        "עלייה מתונה" if delta > 1 else
        "יציב" if delta >= -1 else
        "ירידה"
    )

    for signal in signals:
        signal["computed"] = {
            horizon: round(base_probability(signal, horizon) * 100, 1) * (-1 if signal["direction"] == "down" else 1)
            for horizon in HORIZONS
        }

    strongest = sorted(
        [s for s in signals if s.get("active", True)],
        key=lambda s: abs(s["computed"]["immediate"]),
        reverse=True,
    )[:4]
    changes = [
        {
            "time": parse_dt(s["published_at"]).astimezone(ZoneInfo("Asia/Jerusalem")).strftime("%H:%M"),
            "text": s["name"],
            "impact": f"השפעה מיידית מחושבת: {s['computed']['immediate']:+.1f}",
            "direction": s["direction"],
            "source": s.get("source", ""),
            "signal_id": s["id"],
        }
        for s in strongest
    ]

    mode = "live" if gdelt_ok else "degraded"
    if gdelt_ok:
        health_message = "האיסוף הושלם והנתונים מוצגים."
        last_success = generated
    elif signals:
        health_message = "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון."
        last_success = old.get("health", {}).get("last_success")
    else:
        health_message = "מקור האיסוף הזמני לא ענה ואין אותות עדכניים להצגה."
        last_success = old.get("health", {}).get("last_success")

    output = {
        "schema_version": 4,
        "mode": mode,
        "generated_at": generated,
        "next_refresh_minutes": 10,
        "assessment": assessment,
        "coverage": {"percent": round(coverage * 100), "available": available, "expected": expected},
        "velocity": {"level": level, "points_60m": delta},
        "changes": changes,
        "signals": sorted(signals, key=lambda s: abs(s["computed"]["immediate"]), reverse=True)[:50],
        "history": history,
        "health": {
            "pipeline": "ok" if gdelt_ok else "degraded",
            "message": health_message,
            "last_success": last_success,
            "sources": source_health,
        },
        "methodology": {
            "formula": "כל אות מסונן לפי רלוונטיות, מקור ועדכניות; כפילויות ופרסומים תלויים מופחתים. ריבוי מקורות נדרש לציון גבוה, למעט דיווח מפורש על שיגור לעבר ישראל.",
            "calibrated": False,
            "launch_rule": "דיווח מפורש על שיגור מאיראן לעבר ישראל יכול להפעיל את כלל השיגור גם ממקור יחיד.",
        },
    }
    write_state(output)


if __name__ == "__main__":
    main()
