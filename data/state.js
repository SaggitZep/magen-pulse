window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-07-26T17:40:41.541993Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 27,
      "low": 11,
      "high": 43,
      "confidence": 50,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 28,
      "low": 12,
      "high": 44,
      "confidence": 50,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 20,
      "low": 4,
      "high": 36,
      "confidence": 50,
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
    "points_60m": -7
  },
  "changes": [
    {
      "time": "18:45",
      "text": "Netanyahu claims US - Israeli strikes crippled Iran nuclear program  quite a bit",
      "impact": "השפעה מיידית מחושבת: +14.2",
      "direction": "up",
      "source": "aa.com.tr",
      "signal_id": "5b1e397b7f38db5c"
    },
    {
      "time": "17:15",
      "text": "Joint Iran - Hezbollah strike could cripple Israel energy lifelines , report says",
      "impact": "השפעה מיידית מחושבת: +12.2",
      "direction": "up",
      "source": "jpost.com",
      "signal_id": "f6d8afa5af6b84b6"
    },
    {
      "time": "19:00",
      "text": "US and Iran pause attacks as efforts for ceasefire negotiations continue",
      "impact": "השפעה מיידית מחושבת: -1.4",
      "direction": "down",
      "source": "wsbradio.com",
      "signal_id": "ad5c08037a8788a7"
    },
    {
      "time": "18:45",
      "text": "Trump pauses Iran strikes over missile shortages",
      "impact": "השפעה מיידית מחושבת: +1.2",
      "direction": "up",
      "source": "aol.com",
      "signal_id": "dbdd9e0296527eed"
    }
  ],
  "signals": [
    {
      "id": "5b1e397b7f38db5c",
      "name": "Netanyahu claims US - Israeli strikes crippled Iran nuclear program  quite a bit",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5b1e397b7f38db5c",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "aa.com.tr",
      "url": "https://aa.com.tr/en/middle-east/netanyahu-claims-us-israeli-strikes-crippled-iran-s-nuclear-program-quite-a-bit/4009888",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 14.2,
        "short": 11.1,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "f6d8afa5af6b84b6",
      "name": "Joint Iran - Hezbollah strike could cripple Israel energy lifelines , report says",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f6d8afa5af6b84b6",
      "strength": 0.5,
      "reliability": 0.74,
      "freshness": 0.376,
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
      "source": "jpost.com",
      "url": "https://www.jpost.com/israel-news/article-903689",
      "published_at": "2026-07-26T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 12.2,
        "short": 9.5,
        "extended": 4.1
      },
      "carried_forward": true
    },
    {
      "id": "ad5c08037a8788a7",
      "name": "US and Iran pause attacks as efforts for ceasefire negotiations continue",
      "finding": "דיווח המצביע על רגיעה, הכחשה או הפחתת הסלמה.",
      "category": "regional_escalation",
      "direction": "down",
      "evidence_type": "deescalation",
      "dependency_group": "ad5c08037a8788a7",
      "strength": 0.54,
      "reliability": 0.56,
      "freshness": 0.619,
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
      "source": "wsbradio.com",
      "url": "https://www.wsbradio.com/news/business/us-pauses-attacks/S33EXLSNYAZWPGQXV6FS2WSQLY/",
      "published_at": "2026-07-26T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": -1.4,
        "short": -4.8,
        "extended": -8.2
      },
      "carried_forward": true
    },
    {
      "id": "dbdd9e0296527eed",
      "name": "Trump pauses Iran strikes over missile shortages",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "dbdd9e0296527eed",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "aol.com",
      "url": "https://www.aol.com/articles/trump-pauses-iran-strikes-over-095817000.html",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      },
      "carried_forward": true
    },
    {
      "id": "4e33d4bb8df5352f",
      "name": "IRGC strike on King Faisal base in Jordan leaves trail of destruction , lays bare cracks in US military architecture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "4e33d4bb8df5352f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.619,
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
      "source": "presstv.co.uk",
      "url": "https://www.presstv.co.uk/Detail/2026/07/26/773075/irgc-crushing-strike-king-faisal-base-jordan-lays-bare-cracks-us-military-architecture",
      "published_at": "2026-07-26T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      },
      "carried_forward": true
    },
    {
      "id": "c2d343e0186877f9",
      "name": "US pauses attacks on Iran and Tehran pauses , too",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c2d343e0186877f9",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.619,
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
      "source": "chicagotribune.com",
      "url": "https://www.chicagotribune.com/2026/07/26/us-attacks-iran-pause/",
      "published_at": "2026-07-26T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      },
      "carried_forward": true
    },
    {
      "id": "1df69590a5182bf1",
      "name": "US faces 4 - year missile rebuild as Iran nuclear sites remain possible targets",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1df69590a5182bf1",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.537,
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
      "source": "ynetnews.com",
      "url": "https://www.ynetnews.com/article/hjxanfmsme",
      "published_at": "2026-07-26T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.4
      },
      "carried_forward": true
    },
    {
      "id": "7d214f22e6a7193c",
      "name": "US pauses attacks on Iran for a second straight day and Tehran pauses , too",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7d214f22e6a7193c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.619,
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
      "source": "stardem.com",
      "url": "http://www.stardem.com/ap/world/us-pauses-attacks-on-iran-for-a-second-straight-day-and-tehran-pauses-too/article_2102b35d-99c0-5933-8832-a1424ca80ec6.html",
      "published_at": "2026-07-26T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      },
      "carried_forward": true
    },
    {
      "id": "91b52be5eea46a5a",
      "name": "U . S . forgoes strikes on Iran , but conflict escalates in the Red Sea",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "91b52be5eea46a5a",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.619,
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
      "source": "nbcnews.com",
      "url": "https://www.nbcnews.com/world/iran/us-forgoes-strikes-iran-conflict-escalates-red-sea-rcna589285",
      "published_at": "2026-07-26T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      },
      "carried_forward": true
    },
    {
      "id": "291ea8d26d9bab7e",
      "name": "Iran will halt attacks as long as US maintains pause , Iranian source says after Trump calls off strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "291ea8d26d9bab7e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "whbl.com",
      "url": "https://whbl.com/2026/07/26/iran-will-halt-attacks-as-long-as-us-maintains-pause-iranian-source-says-after-trump-calls-off-strikes/",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "8bfe8cad06e3fe09",
      "name": "With the US suddenly halting attacks , what Iran thinking ?  More scepticism than optimism",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8bfe8cad06e3fe09",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "hindustantimes.com",
      "url": "https://www.hindustantimes.com/world-news/with-us-suddenly-stopping-attacks-what-iran-thinking-more-scepticism-than-optimism-israel-lebanon-donald-trump-islamabad-101785074716660.html",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "dd70e7a6e1a0ed28",
      "name": "Ukraine Claims Long - range Strike On Russian And Iranian - linked Vessels In Caspian Sea",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "dd70e7a6e1a0ed28",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "i24news.tv",
      "url": "https://www.i24news.tv/en/news/international/europe/artc-ukraine-claims-long-range-strike-on-russian-and-iranian-linked-vessels-in-caspian-sea",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "9f128e704d8f8b33",
      "name": "Iran says halts Middle East attacks as US holds fire",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9f128e704d8f8b33",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "breitbart.com",
      "url": "https://www.breitbart.com/news/us-holds-fire-against-iran-as-reports-emerge-of-stockpile-concerns/",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "d662c0db8624d5ac",
      "name": "Iran , Oman discuss shipping deal for Hormuz after US strike pause",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d662c0db8624d5ac",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "middle-east-online.com",
      "url": "https://www.middle-east-online.com/en/iran-oman-discuss-shipping-deal-hormuz-after-us-strike-pause",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "1296c61addb11e78",
      "name": "Airstrikes have paused and talks are pressing forward . But can the US and Iran take the off - ramp ?",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1296c61addb11e78",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "source": "wfmj.com",
      "url": "https://www.wfmj.com/news/national/airstrikes-have-paused-and-talks-are-pressing-forward-but-can-the-us-and-iran-take/article_c9ce1a8e-d24f-5165-b84c-f9580eb8f459.html",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "b2a7499e71d68b0c",
      "name": "Trump giving Iran peace talks  some space  as strikes halt : US envoy",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b2a7499e71d68b0c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.576,
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
      "url": "https://aa.com.tr/en/americas/trump-giving-iran-peace-talks-some-space-as-strikes-halt-us-envoy/4009878",
      "published_at": "2026-07-26T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.7
      },
      "carried_forward": true
    },
    {
      "id": "847213d5a2cf55c4",
      "name": "Iran war : U . S . pauses attacks for second day ; Tehran pauses",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "847213d5a2cf55c4",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.537,
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
      "source": "cp24.com",
      "url": "https://www.cp24.com/news/world/2026/07/26/iran-war-us-pauses-attacks-on-iran-for-a-second-straight-day-and-tehran-pauses-too/",
      "published_at": "2026-07-26T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.3
      },
      "carried_forward": true
    },
    {
      "id": "1d445ea54c1c10f2",
      "name": "Desperation continues after Memorandum of Understanding fails to bring order : US military pounds Iranian city of Ahvaz – NaturalNews . com",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1d445ea54c1c10f2",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.5,
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
      "source": "naturalnews.com",
      "url": "https://www.naturalnews.com/2026-07-26-us-military-pounds-iranian-city-of-ahvaz.html",
      "published_at": "2026-07-26T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 4.9
      },
      "carried_forward": true
    },
    {
      "id": "1f70a9a0651e7938",
      "name": "Iranian media says tanker exploded in Strait of Hormuz after mine strike ; Oman talks on shipping route move forward",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1f70a9a0651e7938",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.5,
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
      "source": "livemint.com",
      "url": "https://www.livemint.com/news/world/iranian-media-says-tanker-exploded-in-strait-of-hormuz-after-mine-strike-oman-talks-on-shipping-route-move-forward-11785075265649.html",
      "published_at": "2026-07-26T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 4.9
      },
      "carried_forward": true
    },
    {
      "id": "2dff974615be6887",
      "name": "Iran Missile Attack US Military Bases , सस्ती भी , घातक भी : अमेरिकी एयर डिफेंस को मात दे रही ईरान की खैबर शेकन मिसाइल , टेंशन में पेंटागन - how iran kheibar shekan missile evading air defenses to strike us military base",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2dff974615be6887",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.433,
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
      "source": "navbharattimes.indiatimes.com",
      "url": "https://navbharattimes.indiatimes.com/world/america/how-iran-kheibar-shekan-missile-evading-air-defenses-to-strike-us-military-bases-in-the-middle-east/articleshow/132642302.cms",
      "published_at": "2026-07-26T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.1
      },
      "carried_forward": true
    },
    {
      "id": "9774077d7827e2ad",
      "name": "Zwei Nächte in Folge keine US - Angriffe im Iran : Teheran stoppt seine Attacken",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9774077d7827e2ad",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.5,
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
      "source": "epochtimes.de",
      "url": "https://www.epochtimes.de/politik/ausland/zwei-naechte-in-folge-keine-us-angriffe-im-iran-teheran-stoppt-seine-attacken-a5563788.html",
      "published_at": "2026-07-26T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 4.9
      },
      "carried_forward": true
    },
    {
      "id": "0b2f4740eff2514a",
      "name": "U . S ., Iran enter second day of no new attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0b2f4740eff2514a",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.5,
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
      "source": "upi.com",
      "url": "https://www.upi.com/Top_News/World-News/2026/07/26/iran-war/5831785075271/",
      "published_at": "2026-07-26T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 4.9
      },
      "carried_forward": true
    },
    {
      "id": "12a564a50357f83d",
      "name": "Volodymyr Zelensky after strike on Iranian ship : Russia assisting Islamic regime",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "12a564a50357f83d",
      "strength": 0.4,
      "reliability": 0.74,
      "freshness": 0.326,
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
      "url": "http://www.jpost.com/middle-east/iran-news/article-903665",
      "published_at": "2026-07-26T13:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.2
      },
      "carried_forward": true
    },
    {
      "id": "5a8f0d0924536e06",
      "name": "US Pauses Iran Strikes Again As Blockade Tightens ; Brent Crude Near $97",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5a8f0d0924536e06",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.35,
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
      "source": "benzinga.com",
      "url": "https://www.benzinga.com/markets/commodities/26/07/60685992/us-pauses-iran-strikes-again-as-blockade-tightens-brent-crude-near-97",
      "published_at": "2026-07-26T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.4
      },
      "carried_forward": true
    },
    {
      "id": "2c3ca9cb43b2c1e8",
      "name": "Iran says Ukrainian attack on vessel in Caspian Sea killed sailor",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2c3ca9cb43b2c1e8",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.326,
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
      "source": "militarytimes.com",
      "url": "https://www.militarytimes.com/global/mideast-africa/2026/07/26/iran-says-ukrainian-attack-on-vessel-in-caspian-sea-killed-sailor/",
      "published_at": "2026-07-26T13:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 1.9,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "2bb2a11e321fe064",
      "name": "Iran accuses US of attacking rescue boats",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2bb2a11e321fe064",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.35,
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
      "source": "iranherald.com",
      "url": "http://www.iranherald.com/news/279210864/iran-accuses-us-of-attacking-rescue-boats",
      "published_at": "2026-07-26T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.4
      },
      "carried_forward": true
    },
    {
      "id": "d92cba87af6b5a45",
      "name": "U . S . pauses air strikes as Iran talks show signs of progress",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d92cba87af6b5a45",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.35,
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
      "source": "theglobeandmail.com",
      "url": "https://www.theglobeandmail.com/world/article-us-pauses-air-strikes-as-iran-talks-show-signs-of-progress/",
      "published_at": "2026-07-26T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.4
      },
      "carried_forward": true
    },
    {
      "id": "0a2400a37283035a",
      "name": "Vance and top US general urge halt to strikes on Iran during tense meeting",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0a2400a37283035a",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.282,
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
      "url": "https://www.bankingnews.gr/diethni/articles/890485/vance-and-top-us-general-urge-halt-to-strikes-on-iran-during-tense-meeting",
      "published_at": "2026-07-26T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.8
      },
      "carried_forward": true
    },
    {
      "id": "ad5c6c5dae25229a",
      "name": "Iran warns renewed US attacks would lead to expanded war",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ad5c6c5dae25229a",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.282,
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
      "source": "jns.org",
      "url": "https://www.jns.org/news/u-s-news/iran-warns-us-against-renewed-attacks-warns-of-expanded-war",
      "published_at": "2026-07-26T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.8,
        "extended": 3.1
      },
      "carried_forward": true
    },
    {
      "id": "ead1351fd482ff85",
      "name": "Strait of Hormuz Crisis Deepens as Oil Tops $100 a Barrel and Trump Warns Iran Over Tanker Attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ead1351fd482ff85",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.245,
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
      "source": "ibtimes.com.au",
      "url": "https://www.ibtimes.com.au/strait-hormuz-tensions-tanker-attacks-1872945",
      "published_at": "2026-07-26T12:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "37306cb1639777ff",
      "name": "Conflict will expand : Iran warns US against fresh strikes ahead of Trump - Netanyahu meeting",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "37306cb1639777ff",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.245,
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
      "source": "moneycontrol.com",
      "url": "https://www.moneycontrol.com/world/conflict-will-expand-iran-warns-us-against-fresh-strikes-ahead-of-trump-netanyahu-meeting-article-13983818.html",
      "published_at": "2026-07-26T12:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "ec1f36cbd596c883",
      "name": "Russian attack on Ukraine kills two - as Iran blames Kyiv for attack on ship",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ec1f36cbd596c883",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.245,
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
      "source": "lbc.co.uk",
      "url": "https://www.lbc.co.uk/article/russian-attack-ukraine-iran-ship-5HjdfB6_2/",
      "published_at": "2026-07-26T12:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.4
      },
      "carried_forward": true
    },
    {
      "id": "72f1fdd9e90a257a",
      "name": "U . S . and Iran airstrikes have paused and talks are pressing forward – NBC 5 Dallas - Fort Worth",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "72f1fdd9e90a257a",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.263,
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
      "source": "nbcdfw.com",
      "url": "https://www.nbcdfw.com/news/national-international/airstrikes-paused-talks-pressing-forward-can-the-us-and-iran-take-off-ramp/4054229/",
      "published_at": "2026-07-26T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.6
      },
      "carried_forward": true
    },
    {
      "id": "5031be05d4ab274c",
      "name": "U . S . and Iran airstrikes have paused and talks are pressing forward – NBC Bay Area",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5031be05d4ab274c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.263,
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
      "source": "nbcbayarea.com",
      "url": "https://www.nbcbayarea.com/news/national-international/airstrikes-paused-talks-pressing-forward-can-the-us-and-iran-take-off-ramp/4119066/",
      "published_at": "2026-07-26T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.6
      },
      "carried_forward": true
    },
    {
      "id": "1822f134fb4bebde",
      "name": "Iran says Ukraine strike killed one sailor in Caspian Sea",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1822f134fb4bebde",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.263,
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
      "source": "el-balad.com",
      "url": "https://www.el-balad.com/17035838",
      "published_at": "2026-07-26T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.6
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-07-26T16:32:46.937028Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "HTTP Error 429: Too Many Requests",
        "carried_forward": 35
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
