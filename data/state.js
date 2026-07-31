window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-07-31T13:42:15.366212Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 8,
      "low": 0,
      "high": 25,
      "confidence": 47,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 13,
      "low": 0,
      "high": 30,
      "confidence": 47,
      "status": "נמוך"
    },
    "extended": {
      "label": "24 שעות",
      "score": 15,
      "low": 0,
      "high": 32,
      "confidence": 47,
      "status": "נמוך"
    }
  },
  "coverage": {
    "percent": 50,
    "available": 1,
    "expected": 2
  },
  "velocity": {
    "level": "ירידה",
    "points_60m": -6
  },
  "changes": [
    {
      "time": "11:45",
      "text": "US and Israeli intelligence struggle to track Iranian leadership amid base strikes",
      "impact": "השפעה מיידית מחושבת: +6.0",
      "direction": "up",
      "source": "bankingnews.gr",
      "signal_id": "b30c894cf85e636c"
    },
    {
      "time": "13:30",
      "text": "Man suspected of spying on united kingdom military base for Iran arrested in Cyprus",
      "impact": "השפעה מיידית מחושבת: +0.9",
      "direction": "up",
      "source": "al-monitor.com",
      "signal_id": "601759df52c1f2a8"
    },
    {
      "time": "13:30",
      "text": "Iran Says It Targeted US Base In Kuwait With Drone",
      "impact": "השפעה מיידית מחושבת: +0.8",
      "direction": "up",
      "source": "israelherald.com",
      "signal_id": "bed7204097f46e3e"
    },
    {
      "time": "13:30",
      "text": "Iranian army claims drone strikes on US military base in Bahrain",
      "impact": "השפעה מיידית מחושבת: +0.8",
      "direction": "up",
      "source": "news.az",
      "signal_id": "160d533934ff1868"
    }
  ],
  "signals": [
    {
      "id": "b30c894cf85e636c",
      "name": "US and Israeli intelligence struggle to track Iranian leadership amid base strikes",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b30c894cf85e636c",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.243,
      "max_effect": {
        "immediate": 88,
        "short": 78,
        "extended": 52
      },
      "relevance": {
        "immediate": 1.0,
        "short": 0.88,
        "extended": 0.56
      },
      "source": "bankingnews.gr",
      "url": "https://www.bankingnews.gr/diethni/articles/891470/us-and-israeli-intelligence-struggle-to-track-iranian-leadership-amid-base-strikes",
      "published_at": "2026-07-31T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 6.0,
        "short": 4.7,
        "extended": 2.0
      },
      "carried_forward": true
    },
    {
      "id": "601759df52c1f2a8",
      "name": "Man suspected of spying on united kingdom military base for Iran arrested in Cyprus",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "601759df52c1f2a8",
      "strength": 0.4,
      "reliability": 0.74,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "al-monitor.com",
      "url": "https://www.al-monitor.com/originals/2026/07/man-suspected-spying-uk-military-base-iran-arrested-cyprus",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.2
      },
      "carried_forward": true
    },
    {
      "id": "bed7204097f46e3e",
      "name": "Iran Says It Targeted US Base In Kuwait With Drone",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "bed7204097f46e3e",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "israelherald.com",
      "url": "http://www.israelherald.com/news/279217516/iran-says-it-targeted-us-base-in-kuwait-with-drone",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "160d533934ff1868",
      "name": "Iranian army claims drone strikes on US military base in Bahrain",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "160d533934ff1868",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "news.az",
      "url": "https://news.az/news/iranian-army-claims-drone-strikes-on-us-military-base-in-bahrain",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "8c78d86c49cc9bd7",
      "name": "IRGC strikes US targets in Kuwait a day after US hits Iran : Latest events - Dominican Republic Post – Caribbean News , Business , Travel & Culture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8c78d86c49cc9bd7",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "dominicanrepublicpost.com",
      "url": "https://dominicanrepublicpost.com/irgc-strikes-us-targets-in-kuwait-a-day-after-us-hits-iran-latest-events/",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "60bb0ddc62013cc0",
      "name": "Iran War Escalates : Trump Threatens Retaliation After IRGC Strikes on Jordan , Kuwait",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "60bb0ddc62013cc0",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.373,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "ibtimes.co.in",
      "url": "https://www.ibtimes.co.in/iran-war-escalates-trump-threatens-retaliation-after-irgc-strikes-jordan-kuwait-904316",
      "published_at": "2026-07-31T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      },
      "carried_forward": true
    },
    {
      "id": "97cdc48eddfa3f15",
      "name": "US Military Denies Iranian Claims Of Damaged F - 35 American Jets , Tanker Escape From Naval Blockade",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "97cdc48eddfa3f15",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "saharareporters.com",
      "url": "https://saharareporters.com/2026/07/30/us-military-denies-iranian-claims-damaged-f-35-american-jets-tanker-escape-naval",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "759a1d09334a946a",
      "name": "Man arrested under suspicion of spying on British Akrotiri airbase for Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "759a1d09334a946a",
      "strength": 0.4,
      "reliability": 0.74,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "jpost.com",
      "url": "http://www.jpost.com/middle-east/iran-news/article-904210",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.2
      },
      "carried_forward": true
    },
    {
      "id": "e4b452c7f4bb4ae7",
      "name": "Iran Araqchi presses European counterparts over use of bases in US operations",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e4b452c7f4bb4ae7",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "dunyanews.tv",
      "url": "https://dunyanews.tv/en/World/965592-irans-araqchi-presses-european-counterparts-over-use-of-bases-in-us-o",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "ea7110667b6f109c",
      "name": "U . S . Strikes Iran as Regional Conflict Expands",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ea7110667b6f109c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "wgow.com",
      "url": "https://www.wgow.com/2026/07/31/u-s-strikes-iran-as-regional-conflict-expands/",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "cdc0be344bed5dbb",
      "name": "Cipro , cittadino britannico arrestato con accusa di spionaggio per conto dellIran : nel mirino una base aerea britannica",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "cdc0be344bed5dbb",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.4,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "ilmessaggero.it:443",
      "url": "https://www.ilmessaggero.it:443/mondo/cipro_britannico_arrestato_spionaggio_iran-9682963.html",
      "published_at": "2026-07-31T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "70697533fc3b2797",
      "name": "AFP : Iranul susţine că a atacat cu drone obiective militare americane din Kuweit",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "70697533fc3b2797",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "bursa.ro",
      "url": "https://www.bursa.ro/afp-iranul-sustine-ca-a-atacat-cu-drone-obiective-militare-americane-din-kuweit-28347956",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.2,
        "extended": 3.8
      },
      "carried_forward": true
    },
    {
      "id": "e7c855257372f1be",
      "name": "Iran shocks with strategic shift to strike US first as Hormuz bottleneck threatens to wreck Trump presidency",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e7c855257372f1be",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "bankingnews.gr",
      "url": "https://www.bankingnews.gr/diethni/articles/891486/iran-shocks-with-strategic-shift-to-strike-us-first-as-hormuz-bottleneck-threatens-to-wreck-trump-presidency",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.1,
        "extended": 3.6
      },
      "carried_forward": true
    },
    {
      "id": "c5426c3ac93af529",
      "name": "IRGC Vows to  Punish  US in Response to Attacks on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c5426c3ac93af529",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260730-sputnik02.htm",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "b28a8d80e0b23d53",
      "name": "US Military Says Latest Strikes Target Iran Revolutionary Guards Corps",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b28a8d80e0b23d53",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/military/library/news/2026/07/mil-260730-rferl03.htm",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "89992934ba9bf0f5",
      "name": "US Strike Hits Residential Building on Iran Qeshm Island , Two Trapped Under Rubble",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "89992934ba9bf0f5",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/military/library/news/2026/07/mil-260730-sputnik03.htm",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "4a0b9b5f556701f3",
      "name": "Iran Destroys US Al Azraq base in Jordan , 3 F - 35 Jets in Response to US Attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "4a0b9b5f556701f3",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260730-sputnik03.htm",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "63fb635546897136",
      "name": "IRGC Says It Struck Kuwait Air Base Hosting US Troops",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "63fb635546897136",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260730-sputnik01.htm",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "e5ad0f4301499228",
      "name": "Iran condemns U . S . strike on residential area",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e5ad0f4301499228",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260731-pdo01.htm",
      "published_at": "2026-07-31T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "b1e0517606e53c08",
      "name": "Iran army claims drone attack on US facilities at Kuwait air base",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b1e0517606e53c08",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.243,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "aa.com.tr",
      "url": "https://aa.com.tr/en/middle-east/irans-army-claims-drone-attack-on-us-facilities-at-kuwait-air-base/4014480",
      "published_at": "2026-07-31T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.7,
        "extended": 2.9
      },
      "carried_forward": true
    },
    {
      "id": "86d6cacb46fba1df",
      "name": "Drone Iran Serbu Kuwait , Hantam Hangar Pesawat hingga Fasilitas Satelit AS",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "86d6cacb46fba1df",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.243,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "kompas.com",
      "url": "https://www.kompas.com/global/read/2026/07/31/152100170/drone-iran-serbu-kuwait-hantam-hangar-pesawat-hingga-fasilitas-satelit-as",
      "published_at": "2026-07-31T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.7,
        "extended": 2.9
      },
      "carried_forward": true
    },
    {
      "id": "852d88ac7c8115e6",
      "name": "Fighting restarts as US , Saudis strike Iran allies in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "852d88ac7c8115e6",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.261,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "malaysiasun.com",
      "url": "http://www.malaysiasun.com/news/279215330/us-saudis-strike-iran-s-allies-in-iraq-as-fighting-resumes",
      "published_at": "2026-07-31T09:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.6
      },
      "carried_forward": true
    },
    {
      "id": "06dbda9f68e2bb32",
      "name": "Pakistan : US - Iran negotiations  ongoing  as attacks continue",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "06dbda9f68e2bb32",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.226,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "kashmirreader.com",
      "url": "https://kashmirreader.com/2026/07/31/pakistan-us-iran-negotiations-ongoing-as-attacks-continue/",
      "published_at": "2026-07-31T08:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.3,
        "extended": 2.2
      },
      "carried_forward": true
    },
    {
      "id": "d3fc6df6e3cf082f",
      "name": "British man arrested after being accused of spying on RAF base for Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d3fc6df6e3cf082f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.243,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "express.co.uk",
      "url": "https://www.express.co.uk/news/uk/2234722/british-man-arrested-spying-raf-akrotiri",
      "published_at": "2026-07-31T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.4
      },
      "carried_forward": true
    },
    {
      "id": "827c55f6e4c46f3c",
      "name": "DIRECT . Moyen - Orient : lIran dit avoir lancé des drones contre des objectifs militaires américains au Koweït",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "827c55f6e4c46f3c",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.196,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "24heures.ch",
      "url": "https://www.24heures.ch/direct-moyen-orient-iran-lance-des-drones-contre-des-objectifs-militaires-americains-au-koweit-238876414513",
      "published_at": "2026-07-31T08:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.3
      },
      "carried_forward": true
    },
    {
      "id": "50b8ab94287f2f69",
      "name": "Man arrested in Cyprus on suspicion of spying on a united kingdom military base for Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "50b8ab94287f2f69",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.243,
      "max_effect": {
        "immediate": 20,
        "short": 34,
        "extended": 44
      },
      "relevance": {
        "immediate": 0.38,
        "short": 0.76,
        "extended": 1.0
      },
      "source": "messenger-inquirer.com",
      "url": "https://www.messenger-inquirer.com/ap/ap_international_news/man-arrested-in-cyprus-on-suspicion-of-spying-on-a-uk-military-base-for-iran/article_8a88b4bb-f38d-54c3-af1e-c21fd42c595b.html",
      "published_at": "2026-07-31T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.4
      },
      "carried_forward": true
    }
  ],
  "history": [
    {
      "timestamp": "2026-07-24T17:51:50.966801Z",
      "immediate": 5,
      "short": 17,
      "extended": 28
    },
    {
      "timestamp": "2026-07-24T18:53:44.127282Z",
      "immediate": 10,
      "short": 26,
      "extended": 32
    },
    {
      "timestamp": "2026-07-24T20:20:34.074531Z",
      "immediate": 6,
      "short": 18,
      "extended": 22
    },
    {
      "timestamp": "2026-07-24T21:34:29.431635Z",
      "immediate": 6,
      "short": 19,
      "extended": 25
    },
    {
      "timestamp": "2026-07-24T22:43:42.547680Z",
      "immediate": 5,
      "short": 14,
      "extended": 19
    },
    {
      "timestamp": "2026-07-24T23:47:40.533569Z",
      "immediate": 3,
      "short": 10,
      "extended": 14
    },
    {
      "timestamp": "2026-07-25T01:21:34.245617Z",
      "immediate": 1,
      "short": 5,
      "extended": 8
    },
    {
      "timestamp": "2026-07-25T04:40:15.612949Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-07-25T07:05:15.430966Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-07-25T09:13:20.397771Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-07-25T10:47:39.125878Z",
      "immediate": 17,
      "short": 22,
      "extended": 25
    },
    {
      "timestamp": "2026-07-25T11:56:08.034694Z",
      "immediate": 14,
      "short": 21,
      "extended": 25
    },
    {
      "timestamp": "2026-07-25T13:56:26.979529Z",
      "immediate": 8,
      "short": 12,
      "extended": 15
    },
    {
      "timestamp": "2026-07-25T15:13:50.106935Z",
      "immediate": 16,
      "short": 23,
      "extended": 27
    },
    {
      "timestamp": "2026-07-25T16:16:33.181729Z",
      "immediate": 13,
      "short": 19,
      "extended": 23
    },
    {
      "timestamp": "2026-07-25T17:27:48.926514Z",
      "immediate": 14,
      "short": 20,
      "extended": 25
    },
    {
      "timestamp": "2026-07-25T18:32:18.793573Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-07-25T19:51:08.461358Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-07-25T20:43:04.902266Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-07-25T21:40:04.842443Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-07-25T22:39:25.394315Z",
      "immediate": 20,
      "short": 25,
      "extended": 28
    },
    {
      "timestamp": "2026-07-25T23:44:32.233850Z",
      "immediate": 27,
      "short": 32,
      "extended": 34
    },
    {
      "timestamp": "2026-07-26T01:24:13.488669Z",
      "immediate": 17,
      "short": 21,
      "extended": 22
    },
    {
      "timestamp": "2026-07-26T05:02:55.561708Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-07-26T07:45:55.306982Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-07-26T09:49:13.264975Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-07-26T11:13:02.251763Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-26T12:19:11.958262Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-26T14:06:23.323951Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-26T15:29:50.535057Z",
      "immediate": 25,
      "short": 27,
      "extended": 25
    },
    {
      "timestamp": "2026-07-26T16:32:46.937028Z",
      "immediate": 34,
      "short": 34,
      "extended": 26
    },
    {
      "timestamp": "2026-07-26T17:40:41.541993Z",
      "immediate": 27,
      "short": 28,
      "extended": 20
    },
    {
      "timestamp": "2026-07-26T18:44:09.427375Z",
      "immediate": 31,
      "short": 32,
      "extended": 29
    },
    {
      "timestamp": "2026-07-26T20:03:00.195055Z",
      "immediate": 22,
      "short": 23,
      "extended": 21
    },
    {
      "timestamp": "2026-07-26T21:09:53.072383Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-07-26T22:15:01.284846Z",
      "immediate": 34,
      "short": 34,
      "extended": 26
    },
    {
      "timestamp": "2026-07-26T23:26:20.121953Z",
      "immediate": 31,
      "short": 28,
      "extended": 19
    },
    {
      "timestamp": "2026-07-27T01:13:16.415891Z",
      "immediate": 20,
      "short": 18,
      "extended": 12
    },
    {
      "timestamp": "2026-07-27T04:56:37.205447Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-27T08:41:04.550095Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-07-27T12:00:17.544461Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-07-27T15:08:32.009361Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-27T17:09:24.471210Z",
      "immediate": 24,
      "short": 28,
      "extended": 29
    },
    {
      "timestamp": "2026-07-27T18:48:33.934445Z",
      "immediate": 17,
      "short": 22,
      "extended": 25
    },
    {
      "timestamp": "2026-07-27T20:13:03.257009Z",
      "immediate": 11,
      "short": 15,
      "extended": 17
    },
    {
      "timestamp": "2026-07-27T21:32:53.094945Z",
      "immediate": 8,
      "short": 11,
      "extended": 12
    },
    {
      "timestamp": "2026-07-27T22:39:51.054292Z",
      "immediate": 1,
      "short": 5,
      "extended": 8
    },
    {
      "timestamp": "2026-07-27T23:47:07.262894Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-28T01:16:10.122679Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-07-28T04:33:26.392513Z",
      "immediate": 2,
      "short": 6,
      "extended": 11
    },
    {
      "timestamp": "2026-07-28T07:22:30.594804Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-07-28T10:04:46.779808Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-07-28T12:14:41.552553Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-07-28T14:55:59.216056Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-07-28T16:47:25.983335Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-07-28T18:07:02.734697Z",
      "immediate": 31,
      "short": 31,
      "extended": 25
    },
    {
      "timestamp": "2026-07-28T19:53:42.934409Z",
      "immediate": 34,
      "short": 34,
      "extended": 30
    },
    {
      "timestamp": "2026-07-28T21:17:48.990081Z",
      "immediate": 34,
      "short": 34,
      "extended": 30
    },
    {
      "timestamp": "2026-07-28T22:31:10.491357Z",
      "immediate": 30,
      "short": 29,
      "extended": 22
    },
    {
      "timestamp": "2026-07-28T23:34:45.811769Z",
      "immediate": 34,
      "short": 34,
      "extended": 32
    },
    {
      "timestamp": "2026-07-29T01:10:06.958535Z",
      "immediate": 5,
      "short": 17,
      "extended": 28
    },
    {
      "timestamp": "2026-07-29T04:32:57.916734Z",
      "immediate": 15,
      "short": 22,
      "extended": 27
    },
    {
      "timestamp": "2026-07-29T07:27:39.275284Z",
      "immediate": 2,
      "short": 6,
      "extended": 11
    },
    {
      "timestamp": "2026-07-29T10:14:37.454884Z",
      "immediate": 5,
      "short": 17,
      "extended": 28
    },
    {
      "timestamp": "2026-07-29T12:27:06.479703Z",
      "immediate": 23,
      "short": 28,
      "extended": 30
    },
    {
      "timestamp": "2026-07-29T14:55:08.526382Z",
      "immediate": 34,
      "short": 34,
      "extended": 33
    },
    {
      "timestamp": "2026-07-29T16:37:10.722567Z",
      "immediate": 22,
      "short": 24,
      "extended": 22
    },
    {
      "timestamp": "2026-07-29T17:57:01.722830Z",
      "immediate": 12,
      "short": 15,
      "extended": 14
    },
    {
      "timestamp": "2026-07-29T19:38:15.415515Z",
      "immediate": 13,
      "short": 20,
      "extended": 25
    },
    {
      "timestamp": "2026-07-29T20:36:49.485081Z",
      "immediate": 10,
      "short": 15,
      "extended": 20
    },
    {
      "timestamp": "2026-07-29T21:38:31.417643Z",
      "immediate": 33,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-07-29T22:40:42.975293Z",
      "immediate": 25,
      "short": 28,
      "extended": 27
    },
    {
      "timestamp": "2026-07-29T23:44:57.195841Z",
      "immediate": 19,
      "short": 21,
      "extended": 21
    },
    {
      "timestamp": "2026-07-30T01:11:12.262928Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-07-30T04:24:18.240054Z",
      "immediate": 2,
      "short": 6,
      "extended": 11
    },
    {
      "timestamp": "2026-07-30T07:17:25.872903Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-07-30T09:56:47.219065Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-07-30T11:59:09.185701Z",
      "immediate": 21,
      "short": 27,
      "extended": 30
    },
    {
      "timestamp": "2026-07-30T14:26:34.060610Z",
      "immediate": 8,
      "short": 23,
      "extended": 29
    },
    {
      "timestamp": "2026-07-30T16:10:22.660214Z",
      "immediate": 7,
      "short": 20,
      "extended": 27
    },
    {
      "timestamp": "2026-07-30T17:51:33.514500Z",
      "immediate": 5,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-07-30T19:17:22.590437Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-07-30T20:39:26.533091Z",
      "immediate": 6,
      "short": 18,
      "extended": 29
    },
    {
      "timestamp": "2026-07-30T21:49:36.717986Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-07-30T22:55:17.638405Z",
      "immediate": 21,
      "short": 27,
      "extended": 28
    },
    {
      "timestamp": "2026-07-31T00:12:04.276077Z",
      "immediate": 16,
      "short": 22,
      "extended": 25
    },
    {
      "timestamp": "2026-07-31T03:55:14.472929Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-07-31T06:52:15.780556Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-31T09:42:19.428636Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-07-31T11:49:42.889478Z",
      "immediate": 14,
      "short": 21,
      "extended": 24
    },
    {
      "timestamp": "2026-07-31T13:42:15.366212Z",
      "immediate": 8,
      "short": 13,
      "extended": 15
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-07-31T11:49:42.889478Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "HTTP Error 429: Too Many Requests",
        "carried_forward": 26
      },
      "manual": {
        "ok": true,
        "items": 0
      }
    }
  },
  "methodology": {
    "formula": "כל אות מסונן לפי רלוונטיות, מקור ועדכניות; כפילויות ופרסומים תלויים מופחתים. ריבוי מקורות נדרש לציון גבוה, למעט דיווח מפורש על שיגור לעבר ישראל.",
    "calibrated": false,
    "launch_rule": "דיווח מפורש על שיגור מאיראן לעבר ישראל יכול להפעיל את כלל השיגור גם ממקור יחיד."
  }
};
