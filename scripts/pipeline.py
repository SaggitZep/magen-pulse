from __future__ import annotations
import json, math, re, hashlib, urllib.parse, urllib.request
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
STATE = DATA / "state.json"
CONFIG = DATA / "source_config.json"
MANUAL = DATA / "manual_signals.json"
UA = "MagenPulseOSINT/3.0 (+public research dashboard)"

HORIZONS = ("immediate", "short", "extended")
MAX_EFFECT = {
    "direct_intent": {"immediate": 34, "short": 36, "extended": 28},
    "capability": {"immediate": 30, "short": 34, "extended": 27},
    "israel_readiness": {"immediate": 32, "short": 29, "extended": 18},
    "regional_escalation": {"immediate": 12, "short": 24, "extended": 34},
}
RELEVANCE = {
    "direct_intent": {"immediate": .85, "short": 1.0, "extended": .75},
    "capability": {"immediate": .72, "short": 1.0, "extended": .82},
    "israel_readiness": {"immediate": 1.0, "short": .82, "extended": .48},
    "regional_escalation": {"immediate": .30, "short": .72, "extended": 1.0},
}
HIGH_TERMS = (
    "launch", "launched", "imminent", "within hours", "direct attack",
    "missile deployment", "airspace closed", "emergency instructions",
    "פיקוד העורף", "שיגור", "טילים", "מתקפה ישירה", "מרחב אווירי נסגר"
)
MED_TERMS = (
    "retaliation", "revenge", "prepare", "readiness", "shelters", "hospitals",
    "threat", "תגובה", "נקמה", "היערכות", "מקלטים", "בתי חולים"
)
NEGATION = ("denied", "no change", "not imminent", "לא חל שינוי", "אין שינוי", "הכחיש")

def clamp(x, lo=0.0, hi=1.0): return max(lo, min(hi, x))
def now(): return datetime.now(timezone.utc)
def iso(dt): return dt.isoformat().replace("+00:00","Z")

def fetch_json(url):
    req = urllib.request.Request(url, headers={"User-Agent":UA})
    with urllib.request.urlopen(req, timeout=25) as r:
        return json.load(r)

def gdelt(query, maxrecords=75):
    params = {
        "query":query, "mode":"ArtList", "maxrecords":str(maxrecords),
        "format":"json", "sort":"HybridRel", "timespan":"3h"
    }
    return fetch_json("https://api.gdeltproject.org/api/v2/doc/doc?" + urllib.parse.urlencode(params))

def parse_dt(value):
    for fmt in ("%Y%m%dT%H%M%SZ", "%Y-%m-%dT%H:%M:%SZ"):
        try: return datetime.strptime(value, fmt).replace(tzinfo=timezone.utc)
        except Exception: pass
    return now()

def domain_reliability(url, default, trusted):
    host = urlparse(url).netloc.lower().removeprefix("www.")
    for domain, score in trusted.items():
        if host == domain or host.endswith("." + domain):
            return score
    return default

def strength(text):
    t = text.lower()
    if any(n in t for n in NEGATION): return .20
    hi = sum(1 for x in HIGH_TERMS if x in t)
    med = sum(1 for x in MED_TERMS if x in t)
    return clamp(.24 + .22*hi + .09*med, .15, .95)

def freshness(seen):
    age_h = max(0, (now()-seen).total_seconds()/3600)
    return math.exp(-age_h/4.0)

def article_key(a):
    normalized = re.sub(r"\W+"," ",(a.get("title","")+" "+urlparse(a.get("url","")).path).lower()).strip()
    return hashlib.sha1(normalized.encode()).hexdigest()[:16]

def make_signal(article, query_cfg, trusted):
    seen = parse_dt(article.get("seendate",""))
    title = article.get("title") or "דיווח ללא כותרת"
    url = article.get("url","")
    category = query_cfg["category"]
    rel = domain_reliability(url, query_cfg["source_tier"], trusted)
    st = strength(title)
    fresh = freshness(seen)
    return {
        "id": article_key(article),
        "name": title[:180],
        "finding": f"דיווח שזוהה בקטגוריית {category}.",
        "category":category,
        "direction":"up",
        "dependency_group":article_key(article)[:10],
        "strength":round(st,3),
        "reliability":round(rel,3),
        "freshness":round(fresh,3),
        "max_effect":MAX_EFFECT[category],
        "relevance":RELEVANCE[category],
        "source":urlparse(url).netloc or article.get("domain","מקור פומבי"),
        "url":url,
        "published_at":iso(seen),
        "active": fresh > .18
    }

def probability(signal, horizon):
    return clamp(signal["max_effect"][horizon]/100 * signal["strength"] *
                 signal["reliability"] * signal["freshness"] *
                 signal["relevance"][horizon], 0, .90)

def adjusted(signals, horizon):
    groups={}
    for s in signals:
        if s.get("active",True):
            groups.setdefault(s.get("dependency_group",s["id"]),[]).append((s,probability(s,horizon)))
    out=[]
    for items in groups.values():
        items.sort(key=lambda x:x[1], reverse=True)
        for i,item in enumerate(items):
            out.append((item[0], item[1]*(1 if i==0 else .25)))
    return out

def noisy_or(ps):
    rem=1.0
    for p in ps: rem*=1-clamp(p)
    return 1-rem

def score(signals,horizon):
    items=adjusted(signals,horizon)
    pos=noisy_or([p for s,p in items if s["direction"]=="up"])
    neg=noisy_or([p for s,p in items if s["direction"]=="down"])
    return clamp(pos*(1-.55*neg))

def status(p):
    return "נמוך אך לא אפסי" if p<.2 else "מוגבר" if p<.4 else "משמעותי" if p<.6 else "גבוה" if p<.8 else "קריטי"

def confidence(signals, coverage, horizon):
    active=[s for s in signals if s.get("active",True)]
    if not active:return 0
    weights=[s["relevance"][horizon] for s in active]
    q=sum(s["reliability"]*s["freshness"]*w for s,w in zip(active,weights))/(sum(weights) or 1)
    diversity=min(1,len(set(s["source"] for s in active))/5)
    return round(100*(.48*q+.32*coverage+.20*diversity))

def main():
    cfg=json.loads(CONFIG.read_text(encoding="utf-8"))
    old=json.loads(STATE.read_text(encoding="utf-8"))
    signals=[]; source_health={}; raw_seen=set()
    for q in cfg["gdelt_queries"]:
        try:
            payload=gdelt(q["query"])
            arts=payload.get("articles",[])
            source_health[q["id"]]={"ok":True,"items":len(arts)}
            for a in arts:
                k=article_key(a)
                if k not in raw_seen:
                    raw_seen.add(k); signals.append(make_signal(a,q,cfg["trusted_domains"]))
        except Exception as e:
            source_health[q["id"]]={"ok":False,"error":str(e)[:160]}
    try:
        manual=json.loads(MANUAL.read_text(encoding="utf-8")).get("signals",[])
        signals.extend(manual)
        source_health["manual"]={"ok":True,"items":len(manual)}
    except Exception as e:
        source_health["manual"]={"ok":False,"error":str(e)[:160]}
    available=sum(1 for x in source_health.values() if x.get("ok"))
    expected=len(source_health)
    coverage=available/expected if expected else 0
    assessment={}
    scores={}
    for h in HORIZONS:
        p=score(signals,h); sc=round(100*p); conf=confidence(signals,coverage,h)
        width=round(8+(100-conf)*.23)
        assessment[h]={
            "label":{"immediate":"60 דקות","short":"6 שעות","extended":"24 שעות"}[h],
            "score":sc,"low":max(0,sc-width),"high":min(100,sc+width),
            "confidence":conf,"status":status(p)
        }
        scores[h]=sc
    hist=old.get("history",[])
    prev=hist[-1] if hist else None
    generated=iso(now())
    hist.append({"timestamp":generated,**scores})
    hist=hist[-1008:]
    delta=scores["immediate"]-(prev.get("immediate",scores["immediate"]) if prev else scores["immediate"])
    level="זינוק חריג" if delta>=15 else "עלייה מהירה" if delta>=7 else "עלייה מתונה" if delta>1 else "יציב" if delta>=-1 else "ירידה"
    for s in signals:
        s["computed"]={h:round(probability(s,h)*100,1)*(1 if s["direction"]=="up" else -1) for h in HORIZONS}
    strongest=sorted([s for s in signals if s.get("active",True)],key=lambda s:abs(s["computed"]["immediate"]),reverse=True)[:4]
    changes=[{"time":generated[11:16],"text":s["name"],"impact":f"השפעה מיידית מחושבת: {s['computed']['immediate']:+.1f}"} for s in strongest]
    ok = available >= max(1, expected-1)
    out={
        "schema_version":3,"mode":"live" if ok else "degraded","generated_at":generated,
        "next_refresh_minutes":10,"assessment":assessment,
        "coverage":{"percent":round(coverage*100),"available":available,"expected":expected},
        "velocity":{"level":level,"points_60m":delta},"changes":changes,
        "signals":sorted(signals,key=lambda s:abs(s["computed"]["immediate"]),reverse=True)[:40],
        "history":hist,
        "health":{"pipeline":"ok" if ok else "degraded","message":"האיסוף הושלם." if ok else "חלק ממקורות האיסוף נכשלו.","last_success":generated if ok else old.get("health",{}).get("last_success"),"sources":source_health},
        "methodology":{"formula":"אות = עוצמה × אמינות מקור × עדכניות × רלוונטיות לחלון; איחוד Noisy‑OR עם הפחתת תלות.","calibrated":False}
    }
    STATE.write_text(json.dumps(out,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")

if __name__=="__main__":
    main()
