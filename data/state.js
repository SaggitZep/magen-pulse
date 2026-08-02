window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-08-02T16:27:48.976100Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 33,
      "low": 20,
      "high": 46,
      "confidence": 69,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 34,
      "low": 21,
      "high": 47,
      "confidence": 69,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 32,
      "low": 19,
      "high": 45,
      "confidence": 69,
      "status": "מוגבר"
    }
  },
  "coverage": {
    "percent": 100,
    "available": 2,
    "expected": 2
  },
  "velocity": {
    "level": "זינוק חריג",
    "points_60m": 33
  },
  "changes": [
    {
      "time": "19:00",
      "text": "Trump says US , Israel to hold off on Iran strikes",
      "impact": "השפעה מיידית מחושבת: +21.6",
      "direction": "up",
      "source": "torontosun.com",
      "signal_id": "5480b187a4d23a7f"
    },
    {
      "time": "16:15",
      "text": "US Military General Cites Insufficient Forces to Protect  israel  From Iranian Threat",
      "impact": "השפעה מיידית מחושבת: +10.8",
      "direction": "up",
      "source": "islamicinvitationturkey.com",
      "signal_id": "2ade0e9c6624c656"
    },
    {
      "time": "18:15",
      "text": "Trump says deal to end Iran war may be imminent , agrees to  cancel the attack",
      "impact": "השפעה מיידית מחושבת: +1.8",
      "direction": "up",
      "source": "yahoo.com",
      "signal_id": "04db522b4d24207c"
    },
    {
      "time": "18:45",
      "text": "Britain warned Iran sleeper cells  waiting to carry out attack  - threat level severe",
      "impact": "השפעה מיידית מחושבת: +1.6",
      "direction": "up",
      "source": "aol.co.uk",
      "signal_id": "c4d7cf2bcef059f6"
    }
  ],
  "signals": [
    {
      "id": "5480b187a4d23a7f",
      "name": "Trump says US , Israel to hold off on Iran strikes",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5480b187a4d23a7f",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "source": "torontosun.com",
      "url": "https://torontosun.com/news/world/trump-says-us-israel-to-hold-off-on-iran-strikes",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 21.6,
        "short": 16.8,
        "extended": 7.1
      }
    },
    {
      "id": "2ade0e9c6624c656",
      "name": "US Military General Cites Insufficient Forces to Protect  israel  From Iranian Threat",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2ade0e9c6624c656",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.399,
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
      "source": "islamicinvitationturkey.com",
      "url": "https://www.islamicinvitationturkey.com/us-military-general-cites-insufficient-forces-to-protect-israel-from-iranian-threat/",
      "published_at": "2026-08-02T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 10.8,
        "short": 8.4,
        "extended": 3.6
      }
    },
    {
      "id": "04db522b4d24207c",
      "name": "Trump says deal to end Iran war may be imminent , agrees to  cancel the attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "04db522b4d24207c",
      "strength": 0.6,
      "reliability": 0.56,
      "freshness": 0.707,
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
      "source": "yahoo.com",
      "url": "https://www.yahoo.com/news/politics/articles/trump-says-deal-end-iran-031144196.html",
      "published_at": "2026-08-02T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.8,
        "short": 6.1,
        "extended": 10.5
      }
    },
    {
      "id": "c4d7cf2bcef059f6",
      "name": "Britain warned Iran sleeper cells  waiting to carry out attack  - threat level severe",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c4d7cf2bcef059f6",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.816,
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
      "source": "aol.co.uk",
      "url": "https://www.aol.co.uk/articles/britain-warned-iran-sleeper-cells-151700000.html",
      "published_at": "2026-08-02T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.6,
        "short": 5.3,
        "extended": 9.0
      }
    },
    {
      "id": "7f2b7f98e6f0ad76",
      "name": "Trump Holds Off Iran Strikes on Pledge a Hormuz Deal Is Close",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7f2b7f98e6f0ad76",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "source": "deccanchronicle.com",
      "url": "https://www.deccanchronicle.com/world/trump-holds-off-iran-strikes-on-pledge-a-hormuz-deal-is-close-1976028",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "a4f61008a3ea9b05",
      "name": "Trump says he will order halt to Iran strikes after parameters reached for deal to end war",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a4f61008a3ea9b05",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "source": "news8000.com",
      "url": "https://www.news8000.com/news/politics/national-politics/trump-says-he-will-order-halt-to-iran-strikes-after-parameters-reached-for-deal-to/article_6cbac73f-ee52-5a60-bdea-f48eae7b911e.html",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "1289310e83671f85",
      "name": "Trump holds off strikes on Iran , says parameters reached on deal to end war - National",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1289310e83671f85",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "source": "globalnews.ca",
      "url": "https://globalnews.ca/news/12006799/us-no-strikes-possible-iran-deal/",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "274c4615dbb83e78",
      "name": "Britain warned Iran sleeper cells  waiting to carry out attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "274c4615dbb83e78",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "url": "https://www.express.co.uk/news/world/2233554/warning-uk-sleeper-cells-andy-burnham",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "6363a9e79b12c1db",
      "name": "Trump cancels Iran strikes , reports progress on potential deal",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6363a9e79b12c1db",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "source": "koat.com",
      "url": "https://www.koat.com/article/trump-iran-strikes-potential-deal/73326225",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "7571db56b8b6f153",
      "name": "No breakthrough on Strait of Hormuz as Trump halts attack on Iran - Grenada Chronicle – Daily Grenada And Caribbean News",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7571db56b8b6f153",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.876,
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
      "url": "https://grenadachronicle.com/no-breakthrough-on-strait-of-hormuz-as-trump-halts-attack-on-iran/",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "aa4e67737250aa82",
      "name": "Trump Says Hell Halt Planned Iran Strikes , Citing Deal On Hormuz Reopening , Nuclear Threat",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "aa4e67737250aa82",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.707,
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
      "url": "https://www.hngn.com/articles/272531/20260802/trump-says-hell-halt-planned-iran-strikes-citing-deal-hormuz-reopening-nuclear-threat.htm",
      "published_at": "2026-08-02T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.6,
        "extended": 7.8
      }
    },
    {
      "id": "2e394f893ae86e0b",
      "name": "Trump cancels planned attack on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2e394f893ae86e0b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.707,
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
      "source": "iraqsun.com",
      "url": "http://www.iraqsun.com/news/279219347/trump-cancels-planned-attack-on-iran",
      "published_at": "2026-08-02T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 7.0
      }
    },
    {
      "id": "73aba3dc0969621a",
      "name": "Iran : US Threats  Real , Noteworthy  | Hormuz Deal Denied",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "73aba3dc0969621a",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "source": "newkerala.com",
      "url": "https://www.newkerala.com/news/a/iran-says-it-perceives-every-enemy-threat-as-418.htm",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "ade1ed440695bc01",
      "name": "Tehran perceives every  enemy  threat as  real and noteworthy , denies Hormuz reopening deal",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ade1ed440695bc01",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "source": "orissapost.com",
      "url": "https://www.orissapost.com/tehran-perceives-every-enemy-threat-as-real-and-noteworthy-denies-hormuz-reopening-deal/",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "317b1fc2d7cab410",
      "name": "Tehran Did Not Ask Trump To Halt Attacks , Says Iranian Media",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "317b1fc2d7cab410",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.707,
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
      "source": "iraqsun.com",
      "url": "http://www.iraqsun.com/news/279219579/tehran-did-not-ask-trump-to-halt-attacks-says-iranian-media",
      "published_at": "2026-08-02T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 7.0
      }
    },
    {
      "id": "65f389feeb2be22e",
      "name": "Trump says planned Iran strikes canceled after  perimeter of new deal agreed",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "65f389feeb2be22e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.707,
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
      "source": "clevelandjewishnews.com",
      "url": "https://www.clevelandjewishnews.com/jns/trump-says-planned-iran-strikes-canceled-after-perimeters-of-new-deal-agreed/article_0c22f4d5-0e5d-537f-a80c-e64aa32b685b.html",
      "published_at": "2026-08-02T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 7.0
      }
    },
    {
      "id": "fdfc0c4210206669",
      "name": "Iran Defence Minister calls every threat to country as  real and significant",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fdfc0c4210206669",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "source": "news.webindia123.com",
      "url": "https://news.webindia123.com/news/Articles/World/20260802/4482306.html",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "61785d8270c83522",
      "name": "Iran signaled it would allow Hormuz to reopen before Trump called off attacks : report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "61785d8270c83522",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.571,
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
      "source": "nypost.com",
      "url": "https://nypost.com/2026/08/02/us-news/iran-signaled-it-would-allow-hormuz-to-reopen-before-trump-called-off-attacks-report/",
      "published_at": "2026-08-02T14:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "aebfe509c464b578",
      "name": "You lied , we didnt ask US not to strike , Iran fires back at Trump",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "aebfe509c464b578",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "source": "tribuneonlineng.com",
      "url": "https://tribuneonlineng.com/you-lied-we-didnt-ask-us-not-to-strike-iran-fires-back-at-trump/",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "c0d18694c2c9e4de",
      "name": "Trump says he will hold off on fresh Iran attack in hope of quick deal",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c0d18694c2c9e4de",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "source": "sowetan.co.za",
      "url": "https://www.sowetan.co.za/news/world/2026-08-02-trump-says-he-will-hold-off-on-fresh-iran-attack-in-hope-of-quick-deal/",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "b6b8722376ef7a25",
      "name": "Trump backs off planned strikes , Iran denies a deal is in place",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b6b8722376ef7a25",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "url": "https://www.upi.com/Top_News/US/2026/08/02/trump-backs-off-strikes/5961785677503/",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "90c31d85d73a845f",
      "name": "The Persian Gulf after the US : Saudi Arabia puts brakes on Trump over large scale attack on Iran and gives role to China and Russia",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "90c31d85d73a845f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.613,
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
      "url": "https://www.bankingnews.gr/diethni/articles/891845/the-persian-gulf-after-the-us-saudi-arabia-puts-brakes-on-trump-over-large-scale-attack-on-iran-and-gives-role-to-china-and-russia",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "099c0f90eae8c72f",
      "name": "Coward Trump Suspends so - called  WWII - Level  Attack Plans on Iran as Diplomatic Efforts Intensify ; Tehran Issues Threat of Unrestrained Counteraction",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "099c0f90eae8c72f",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.399,
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
      "source": "islamicinvitationturkey.com",
      "url": "https://www.islamicinvitationturkey.com/coward-trump-suspends-so-called-wwii-level-attack-plans-on-iran-as-diplomatic-efforts-intensify-tehran-issues-threat-of-unrestrained-counteraction/",
      "published_at": "2026-08-02T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      }
    },
    {
      "id": "8345784a722e63da",
      "name": "Trump cancels planned attack on Iran , saying he reached an agreement over the  perimeters of a deal  – Ya Libnan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8345784a722e63da",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.461,
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
      "source": "yalibnan.com",
      "url": "https://yalibnan.com/2026/08/02/trump-cancels-planned-attack-on-iran-saying-he-reached-an-agreement-over-the-perimeters-of-a-deal/",
      "published_at": "2026-08-02T13:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "88a80ea32b7e33bf",
      "name": "What did Saudi Crown Prince Mohammed bin Salman tell Trump that prompted a pause in US strikes on Iran ?",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "88a80ea32b7e33bf",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.461,
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
      "url": "https://www.livemint.com/news/us-news/saudi-crown-prince-calls-on-trump-to-avoid-new-iran-strikes-pursue-diplomacy-to-prevent-wider-middle-east-war-report-11785670259301.html",
      "published_at": "2026-08-02T13:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "70ca31ce4c4fc0db",
      "name": "Fool has run out of steam ! Iranian media trolls Trump after he calls off strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "70ca31ce4c4fc0db",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.461,
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
      "url": "https://www.livemint.com/news/world/fool-has-run-out-of-steam-iranian-media-trolls-donald-trump-after-he-calls-off-strikes-11785671055953.html",
      "published_at": "2026-08-02T13:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "2027908838da62d8",
      "name": "US embassies warn Americans as Iran threatens more choke points | Jefferson City News Tribune",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2027908838da62d8",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.399,
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
      "source": "newstribune.com",
      "url": "https://www.newstribune.com/news/2026/aug/02/us-embassies-warn-americans-as-iran-threatens/",
      "published_at": "2026-08-02T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      }
    },
    {
      "id": "81ad6136cd2221ad",
      "name": "Roundup : Trump says U . S . to hold off attack on Iran amid conflicting claims",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "81ad6136cd2221ad",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.461,
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
      "source": "southeastasiapost.com",
      "url": "http://www.southeastasiapost.com/news/279219230/roundup-trump-says-us-to-hold-off-attack-on-iran-amid-conflicting-claims",
      "published_at": "2026-08-02T13:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "454627c82fcb81e4",
      "name": "Iran Us News , डोनाल्ड ट्रंप का नया झूठ , अमेरिका से हमले रोकने की गुहार लगाने का दावा ईरान ने किया खारिज , कहा - हम पीछे नहीं हटेंगे - tehran media denies donald trump claim that iran asked us to stop strikes - Asian co",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "454627c82fcb81e4",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.495,
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
      "url": "https://navbharattimes.indiatimes.com/world/asian-countries/tehran-media-denies-donald-trump-claim-that-iran-asked-us-to-stop-strikes/articleshow/132807257.cms",
      "published_at": "2026-08-02T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.9,
        "extended": 4.9
      }
    },
    {
      "id": "3ff71d07fdb4558c",
      "name": "Iran says perceives every  enemy  threat as  noteworthy , denies deal on reopening Hormuz Strait - Xinhua",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3ff71d07fdb4558c",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.322,
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
      "source": "english.news.cn",
      "url": "https://english.news.cn/20260802/49eee40b8ba74557932737b0135cbaa9/c.html",
      "published_at": "2026-08-02T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.1,
        "extended": 3.6
      }
    },
    {
      "id": "18a975791fe74d22",
      "name": "NOW : President Trump Calls off U . S . Military Strikes Against Iran | News Radio 1200 WOAI",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "18a975791fe74d22",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.322,
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
      "source": "woai.iheart.com",
      "url": "https://woai.iheart.com/featured/san-antonios-first-news/content/2026-08-02-now-president-trump-calls-off-us-military-strikes-against-iran/",
      "published_at": "2026-08-02T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
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
    },
    {
      "timestamp": "2026-07-31T15:49:48.988064Z",
      "immediate": 1,
      "short": 5,
      "extended": 8
    },
    {
      "timestamp": "2026-07-31T17:18:23.986552Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-07-31T18:50:04.689073Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-07-31T20:14:54.699504Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-07-31T21:33:39.643951Z",
      "immediate": 14,
      "short": 20,
      "extended": 25
    },
    {
      "timestamp": "2026-07-31T22:42:46.405108Z",
      "immediate": 34,
      "short": 34,
      "extended": 33
    },
    {
      "timestamp": "2026-07-31T23:46:44.266665Z",
      "immediate": 34,
      "short": 34,
      "extended": 31
    },
    {
      "timestamp": "2026-08-01T01:26:05.054738Z",
      "immediate": 34,
      "short": 31,
      "extended": 21
    },
    {
      "timestamp": "2026-08-01T04:59:14.894352Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-01T07:35:32.071744Z",
      "immediate": 17,
      "short": 24,
      "extended": 28
    },
    {
      "timestamp": "2026-08-01T09:36:22.435818Z",
      "immediate": 10,
      "short": 14,
      "extended": 17
    },
    {
      "timestamp": "2026-08-01T11:06:17.544525Z",
      "immediate": 6,
      "short": 9,
      "extended": 11
    },
    {
      "timestamp": "2026-08-01T12:13:32.924162Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-08-01T14:01:13.505237Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-01T15:13:03.077291Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-01T16:16:11.360570Z",
      "immediate": 34,
      "short": 34,
      "extended": 32
    },
    {
      "timestamp": "2026-08-01T17:29:11.211350Z",
      "immediate": 30,
      "short": 30,
      "extended": 24
    },
    {
      "timestamp": "2026-08-01T18:33:35.275493Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-01T19:56:30.933744Z",
      "immediate": 34,
      "short": 34,
      "extended": 29
    },
    {
      "timestamp": "2026-08-01T21:05:21.226302Z",
      "immediate": 54,
      "short": 52,
      "extended": 41
    },
    {
      "timestamp": "2026-08-01T22:12:01.985541Z",
      "immediate": 43,
      "short": 40,
      "extended": 31
    },
    {
      "timestamp": "2026-08-01T23:14:29.881755Z",
      "immediate": 33,
      "short": 32,
      "extended": 24
    },
    {
      "timestamp": "2026-08-02T01:02:58.573991Z",
      "immediate": 20,
      "short": 19,
      "extended": 15
    },
    {
      "timestamp": "2026-08-02T04:33:55.400945Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-02T07:18:59.329257Z",
      "immediate": 34,
      "short": 34,
      "extended": 32
    },
    {
      "timestamp": "2026-08-02T09:29:18.425725Z",
      "immediate": 19,
      "short": 20,
      "extended": 18
    },
    {
      "timestamp": "2026-08-02T11:04:51.564746Z",
      "immediate": 9,
      "short": 10,
      "extended": 11
    },
    {
      "timestamp": "2026-08-02T12:16:22.915346Z",
      "immediate": 6,
      "short": 7,
      "extended": 8
    },
    {
      "timestamp": "2026-08-02T14:05:20.752222Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-02T15:20:57.698858Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-02T16:27:48.976100Z",
      "immediate": 33,
      "short": 34,
      "extended": 32
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-08-02T16:27:48.976100Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 31
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
