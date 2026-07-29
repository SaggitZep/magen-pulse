window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-29T19:38:15.415515Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 13,
      "low": 0,
      "high": 26,
      "confidence": 65,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 20,
      "low": 7,
      "high": 33,
      "confidence": 65,
      "status": "נמוך"
    },
    "extended": {
      "label": "24 שעות",
      "score": 25,
      "low": 12,
      "high": 38,
      "confidence": 66,
      "status": "מוגבר"
    }
  },
  "coverage": {
    "percent": 100,
    "available": 2,
    "expected": 2
  },
  "velocity": {
    "level": "יציב",
    "points_60m": 1
  },
  "changes": [
    {
      "time": "19:00",
      "text": "Senior Israeli official :  Decision on Iran strikes is up to Trump",
      "impact": "השפעה מיידית מחושבת: +8.7",
      "direction": "up",
      "source": "israelnationalnews.com",
      "signal_id": "5d2171bda650b291"
    },
    {
      "time": "22:15",
      "text": "Iran resumes missile attacks as U . S . and Saudis strike Tehran - backed militias in Iraq",
      "impact": "השפעה מיידית מחושבת: +1.8",
      "direction": "up",
      "source": "wcsufm.org",
      "signal_id": "a223f737af947954"
    },
    {
      "time": "21:00",
      "text": "US and Saudis strike Tehran - backed militias in Iraq as Iran resumes missile attacks | Politics and Government",
      "impact": "השפעה מיידית מחושבת: +1.3",
      "direction": "up",
      "source": "reviewjournal.com",
      "signal_id": "9cfa468af8c74e66"
    },
    {
      "time": "21:00",
      "text": "Trump threatens Iran after Tehran strikes US bases in Jordan",
      "impact": "השפעה מיידית מחושבת: +1.2",
      "direction": "up",
      "source": "timesofoman.com",
      "signal_id": "e56f6ea1323594fd"
    }
  ],
  "signals": [
    {
      "id": "5d2171bda650b291",
      "name": "Senior Israeli official :  Decision on Iran strikes is up to Trump",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5d2171bda650b291",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.354,
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
      "source": "israelnationalnews.com",
      "url": "https://www.israelnationalnews.com/news/430956",
      "published_at": "2026-07-29T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 8.7,
        "short": 6.8,
        "extended": 2.9
      }
    },
    {
      "id": "a223f737af947954",
      "name": "Iran resumes missile attacks as U . S . and Saudis strike Tehran - backed militias in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a223f737af947954",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.895,
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
      "source": "wcsufm.org",
      "url": "https://www.wcsufm.org/latest-from-npr/2026-07-29/iran-resumes-missile-attacks-as-u-s-and-saudis-strike-tehran-backed-militias-in-iraq",
      "published_at": "2026-07-29T19:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.8,
        "short": 6.2,
        "extended": 10.6
      }
    },
    {
      "id": "9cfa468af8c74e66",
      "name": "US and Saudis strike Tehran - backed militias in Iraq as Iran resumes missile attacks | Politics and Government",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9cfa468af8c74e66",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.626,
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
      "source": "reviewjournal.com",
      "url": "https://www.reviewjournal.com/news/politics-and-government/iran-resumes-missile-attacks-as-us-and-saudis-strike-tehran-backed-militias-in-iraq-3856449/",
      "published_at": "2026-07-29T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.4
      }
    },
    {
      "id": "e56f6ea1323594fd",
      "name": "Trump threatens Iran after Tehran strikes US bases in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e56f6ea1323594fd",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.626,
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
      "source": "timesofoman.com",
      "url": "https://timesofoman.com/article/175017-trump-threatens-iran-after-tehran-strikes-us-bases-in-jordan",
      "published_at": "2026-07-29T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 6.9
      }
    },
    {
      "id": "db9bee98a9dab336",
      "name": "US accuses Iran IRGC of threatening ships in Strait of Hormuz , says waterway remains open",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "db9bee98a9dab336",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.626,
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
      "url": "https://www.moneycontrol.com/world/us-accuses-iran-s-irgc-of-threatening-ships-in-strait-of-hormuz-says-waterway-remains-open-article-13987607.html",
      "published_at": "2026-07-29T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 6.9
      }
    },
    {
      "id": "e033b2aacd1faa6b",
      "name": "Trump threatens  very severe  response after Iranian missile attack on US base in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e033b2aacd1faa6b",
      "strength": 0.53,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "source": "albawaba.com",
      "url": "https://www.albawaba.com/news/trump-threatens-%E2%80%98very-severe%E2%80%99-response-1634066",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.2
      }
    },
    {
      "id": "9791137bc87de351",
      "name": "Trump says US to deliver  beating  to Iran after bases again targeted | Donald Trump News",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9791137bc87de351",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.626,
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
      "source": "aljazeera.com",
      "url": "https://www.aljazeera.com/news/2026/7/29/trump-says-us-to-deliver-beating-to-iran-after-bases-again-targeted",
      "published_at": "2026-07-29T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.2
      }
    },
    {
      "id": "0b9dcb974cadeb30",
      "name": "At Least 14 Drone Strikes Hit Iranian Kurdish Opposition Bases In Iraq Since Monday",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0b9dcb974cadeb30",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.543,
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
      "source": "hngn.com",
      "url": "https://www.hngn.com/articles/272429/20260729/least-14-drone-strikes-hit-iranian-kurdish-opposition-bases-iraq-since-monday.htm",
      "published_at": "2026-07-29T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.4
      }
    },
    {
      "id": "8324ea933dbfc1eb",
      "name": "Does Iran Attack On Jordan Mark A Shift In Military Strategy",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8324ea933dbfc1eb",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.673,
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
      "source": "middleeaststar.com",
      "url": "http://www.middleeaststar.com/news/279215123/does-iran-attack-on-jordan-mark-a-shift-in-military-strategy",
      "published_at": "2026-07-29T18:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.9,
        "extended": 6.6
      }
    },
    {
      "id": "2275f9e1f906ab79",
      "name": "Drone hits US - owned gas tankers at Egyptian port named in Iranian threat",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2275f9e1f906ab79",
      "strength": 0.53,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "url": "https://www.ynetnews.com/article/syc1100sdbgx",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.2
      }
    },
    {
      "id": "1c037f1c2a50350e",
      "name": "Iran set to receive Chinese missiles within weeks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1c037f1c2a50350e",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.543,
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
      "source": "taipeitimes.com",
      "url": "https://www.taipeitimes.com/News/world/archives/2026/07/30/2003861649",
      "published_at": "2026-07-29T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.4
      }
    },
    {
      "id": "401d5d3e3c3f42a3",
      "name": "Trump vows to  beat the f ***** g s ** t  out of Iran after Iraq strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "401d5d3e3c3f42a3",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.673,
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
      "source": "siasat.com",
      "url": "https://www.siasat.com/trump-vows-to-beat-the-fg-st-out-of-iran-after-iraq-strikes-3515638/",
      "published_at": "2026-07-29T18:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.9,
        "extended": 6.6
      }
    },
    {
      "id": "6d2f79a232c97315",
      "name": "Trump vows to  beat the f *** ing sh ** out of Iran after Jordan missile attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6d2f79a232c97315",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "url": "https://www.ynetnews.com/article/h1onzuvbge",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "15b45fa843e76039",
      "name": "Attacks on oil infra , threat of Houthis in Red Sea : How Saudi Arabia got drawn into US - Iran conflict",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "15b45fa843e76039",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.543,
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
      "url": "https://www.moneycontrol.com/world/attacks-on-oil-infra-threat-of-houthis-in-red-sea-how-saudi-arabia-got-drawn-into-us-iran-conflict-article-13987574.html",
      "published_at": "2026-07-29T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "c51590bc5342600d",
      "name": "Trump vows force after Iranian missile attack on American forces in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c51590bc5342600d",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "source": "prokerala.com",
      "url": "https://www.prokerala.com/news/articles/a1794077.html",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "ea25a7e57fdafcb5",
      "name": "Iran rejects Hormuz deal and launches surprise strike on US forces in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ea25a7e57fdafcb5",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.543,
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
      "source": "euronews.com",
      "url": "https://www.euronews.com/2026/07/29/iran-rejects-hormuz-deal-and-launches-surprise-strike-on-us-forces-in-jordan",
      "published_at": "2026-07-29T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.4
      }
    },
    {
      "id": "f58dc6022da95ffb",
      "name": "Trump says US to deliver  beating  to Iran after bases again targeted - Dominican Republic Post – Caribbean News , Business , Travel & Culture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f58dc6022da95ffb",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.543,
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
      "url": "https://dominicanrepublicpost.com/trump-says-us-to-deliver-beating-to-iran-after-bases-again-targeted/",
      "published_at": "2026-07-29T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.4
      }
    },
    {
      "id": "34678a05bebed9c5",
      "name": "Iran hits US in Jordan , US - Saudi strikes on Iraq : Is war spreading ? - Grenada Chronicle – Daily Grenada And Caribbean News",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "34678a05bebed9c5",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.506,
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
      "source": "grenadachronicle.com",
      "url": "https://grenadachronicle.com/iran-hits-us-in-jordan-us-saudi-strikes-on-iraq-is-war-spreading/",
      "published_at": "2026-07-29T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "d36f93d169f44569",
      "name": "Iran to get Chinese shoulder - launched missile systems in weeks , sources say",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d36f93d169f44569",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.438,
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
      "source": "mvariety.com",
      "url": "https://www.mvariety.com/news/regional/iran-to-get-chinese-shoulder-launched-missile-systems-in-weeks-sources-say/article_03af3c39-8874-4c0d-a703-7395cf97e0b1.html",
      "published_at": "2026-07-29T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.2
      }
    },
    {
      "id": "ad482279516710d0",
      "name": "US may seize soldier phones in Middle East after security breach exposes Iran attack details : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ad482279516710d0",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.543,
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
      "url": "https://www.moneycontrol.com/world/us-may-seize-soldiers-phones-in-middle-east-after-security-breach-exposes-iran-attack-details-report-article-13987593.html",
      "published_at": "2026-07-29T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.4
      }
    },
    {
      "id": "b6dcca870be17791",
      "name": "US , Saudi Arabia strike back after Iran launches  surprise attack  on Middle East bases",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b6dcca870be17791",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "source": "fox42kptm.com",
      "url": "https://fox42kptm.com/news/nation-world/us-saudi-arabia-strike-back-after-iran-islamic-revolutionary-guard-corps-launches-ballistic-missiles-surprise-attack-on-middle-east-military-bases-escalating-war-centeral-command-jordan-interception-iraq",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.6
      }
    },
    {
      "id": "63d12f935061e1d2",
      "name": "Trump Vows Iran Retaliation After Attack on US Troops",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "63d12f935061e1d2",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "source": "hannity.com",
      "url": "https://hannity.com/media-room/big-mistake-trump-to-answer-irans-surprise-attack-were-going-to-beat-the-f-king-s-t-out-of-them-watch/",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.6
      }
    },
    {
      "id": "56fc4a52fb31f685",
      "name": "Kataib Hezbollah vows retaliation after US - Saudi strikes kill Iranian advisers in Ira",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "56fc4a52fb31f685",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "url": "https://www.ynetnews.com/article/hye6mcprzg",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.6
      }
    },
    {
      "id": "3e27ce152aa6aa61",
      "name": "Oil prices rebound , jump 8 % as Trump warns Iran after attacks on US forces ; Brent nears $90",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3e27ce152aa6aa61",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.438,
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
      "url": "https://www.livemint.com/market/stock-market-news/oil-prices-rebound-jump-8-as-trump-warns-iran-after-attacks-on-us-forces-brent-nears-90-11785339835236.html",
      "published_at": "2026-07-29T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.9,
        "extended": 4.9
      }
    },
    {
      "id": "1ea265e802fc888a",
      "name": "Trump Says united states Will Strike Iran Hard",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1ea265e802fc888a",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.471,
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
      "source": "rigzone.com",
      "url": "https://www.rigzone.com/news/wire/trump_says_usa_will_strike_iran_hard-29-jul-2026-184244-article/",
      "published_at": "2026-07-29T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.6
      }
    },
    {
      "id": "ef28faa2fd13a9a1",
      "name": "Trump vows to strike Iran hard after Jordan ballistic missile attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ef28faa2fd13a9a1",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.354,
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
      "source": "foxnews.com",
      "url": "https://www.foxnews.com/politics/trump-says-us-beat-them-after-iran-launches-surprise-missile-strike",
      "published_at": "2026-07-29T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.2
      }
    },
    {
      "id": "d8268d6a4319a8a6",
      "name": "Saudi Arabia Joins U . S . Strikes Against Iranian Proxies in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d8268d6a4319a8a6",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.438,
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
      "url": "https://www.breitbart.com/middle-east/2026/07/29/saudi-arabia-joins-u-s-strikes-against-iranian-proxies-in-iraq/",
      "published_at": "2026-07-29T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      }
    },
    {
      "id": "8b867c39e5953611",
      "name": "Trump vows retaliation after Iran targets US bases in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8b867c39e5953611",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.38,
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
      "source": "hurriyetdailynews.com",
      "url": "https://www.hurriyetdailynews.com/trump-vows-retaliation-after-iran-targets-us-bases-in-jordan-224986",
      "published_at": "2026-07-29T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.2,
        "extended": 3.7
      }
    },
    {
      "id": "8d78151b5ff3fa6f",
      "name": "Trump Lets Loose on Iran Over Sneak Attack - Explaining With Expletives What Will Happen Next",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8d78151b5ff3fa6f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.38,
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
      "source": "redstate.com",
      "url": "https://redstate.com/nick-arama/2026/07/29/trump-remarks-on-irans-surprise-attack-n2204910",
      "published_at": "2026-07-29T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.2,
        "extended": 3.7
      }
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-29T19:38:15.415515Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 30
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
