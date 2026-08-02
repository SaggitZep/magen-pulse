window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-08-02T18:42:48.520734Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 26,
      "low": 13,
      "high": 39,
      "confidence": 68,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 30,
      "low": 17,
      "high": 43,
      "confidence": 68,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 30,
      "low": 17,
      "high": 43,
      "confidence": 68,
      "status": "מוגבר"
    }
  },
  "coverage": {
    "percent": 100,
    "available": 2,
    "expected": 2
  },
  "velocity": {
    "level": "ירידה",
    "points_60m": -7
  },
  "changes": [
    {
      "time": "19:15",
      "text": "U . S ., Israel strikes in Iran on hold on promise of peace deal : Trump",
      "impact": "השפעה מיידית מחושבת: +12.2",
      "direction": "up",
      "source": "nationalpost.com",
      "signal_id": "8dd97b4c78db0ca2"
    },
    {
      "time": "19:00",
      "text": "Trump says US , Israel to hold off on Iran strikes",
      "impact": "השפעה מיידית מחושבת: +11.4",
      "direction": "up",
      "source": "torontosun.com",
      "signal_id": "5480b187a4d23a7f"
    },
    {
      "time": "21:15",
      "text": "Iranian FM warns Britain against cooperation with U . S . strikes on Iran",
      "impact": "השפעה מיידית מחושבת: +1.7",
      "direction": "up",
      "source": "theuknews.com",
      "signal_id": "44b2898c74fb41eb"
    },
    {
      "time": "21:15",
      "text": "Trump holds off Iran strikes on pledge a Hormuz deal is close",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "stripes.com",
      "signal_id": "7f2b7f98e6f0ad76"
    }
  ],
  "signals": [
    {
      "id": "8dd97b4c78db0ca2",
      "name": "U . S ., Israel strikes in Iran on hold on promise of peace deal : Trump",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8dd97b4c78db0ca2",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.495,
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
      "source": "nationalpost.com",
      "url": "https://nationalpost.com/news/world/u-s-israel-strikes-in-iran-on-hold-after-word-of-potential-deal-trump",
      "published_at": "2026-08-02T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 12.2,
        "short": 9.5,
        "extended": 4.0
      }
    },
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
      "freshness": 0.461,
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
        "immediate": 11.4,
        "short": 8.9,
        "extended": 3.8
      }
    },
    {
      "id": "44b2898c74fb41eb",
      "name": "Iranian FM warns Britain against cooperation with U . S . strikes on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "44b2898c74fb41eb",
      "strength": 0.45,
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
      "source": "theuknews.com",
      "url": "http://www.theuknews.com/news/279219615/iranian-fm-warns-britain-against-cooperation-with-us-strikes-on-iran",
      "published_at": "2026-08-02T18:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.7,
        "short": 5.7,
        "extended": 9.7
      }
    },
    {
      "id": "7f2b7f98e6f0ad76",
      "name": "Trump holds off Iran strikes on pledge a Hormuz deal is close",
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
      "source": "stripes.com",
      "url": "https://www.stripes.com/theaters/middle_east/2026-08-02/trump-iran-strikes-hormuz-deal-22438655.html",
      "published_at": "2026-08-02T18:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.6
      }
    },
    {
      "id": "5ea38eeaaf380297",
      "name": "U . S . agrees to pause attacks on Iran subject to making deal – NBC10 Philadelphia",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5ea38eeaaf380297",
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
      "source": "nbcphiladelphia.com",
      "url": "https://www.nbcphiladelphia.com/news/national-international/us-agrees-pause-attacks-iran-deal-trump/4442362/",
      "published_at": "2026-08-02T18:15:00Z",
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
      "source": "local10.com",
      "url": "https://www.local10.com/news/world/2026/08/02/trump-says-he-will-order-halt-to-iran-strikes-after-parameters-reached-for-deal-to-end-war/",
      "published_at": "2026-08-02T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "e6c952b628508257",
      "name": "Trump : Iran strikes to stop after parameters reached to end war",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e6c952b628508257",
      "strength": 0.4,
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
      "source": "chicagotribune.com",
      "url": "https://www.chicagotribune.com/2026/08/02/trump-iran-strikes-war-deal/",
      "published_at": "2026-08-02T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "bd96674a9ff35713",
      "name": "No breakthrough on Strait of Hormuz as Trump halts attack on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "bd96674a9ff35713",
      "strength": 0.4,
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
      "source": "aljazeera.com",
      "url": "https://www.aljazeera.com/news/2026/8/2/no-breakthrough-on-strait-of-hormuz-as-trump-halts-attack-on-iran",
      "published_at": "2026-08-02T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
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
      "freshness": 0.759,
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
      "source": "europesun.com",
      "url": "http://www.europesun.com/news/279219347/trump-cancels-planned-attack-on-iran",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
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
      "freshness": 0.759,
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
      "source": "europesun.com",
      "url": "http://www.europesun.com/news/279219579/tehran-did-not-ask-trump-to-halt-attacks-says-iranian-media",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "d53bed1fd9a01a53",
      "name": "Trump says he will order halt to Iran strikes after outlines of deal to end war reached",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d53bed1fd9a01a53",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.759,
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
      "source": "wbrc.com",
      "url": "https://www.wbrc.com/2026/08/02/trump-says-he-will-order-halt-iran-strikes-after-outlines-deal-end-war-reached/",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "01edfbd2b55d7f0d",
      "name": "Jordanian , US officials discuss military coordination amid Iran conflict",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "01edfbd2b55d7f0d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.759,
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
      "source": "arabnews.com",
      "url": "https://www.arabnews.com/node/2653140/middle-east",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
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
      "freshness": 0.759,
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
      "url": "https://www.breitbart.com/news/trump-backs-off-planned-strikes-iran-denies-a-deal-is-in-place/",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "44d8e2719d6a1a4e",
      "name": "Rubio says Iran more open to nuclear talks after U . S . pressure",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "44d8e2719d6a1a4e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.759,
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
      "source": "sana.sy",
      "url": "https://sana.sy/en/politics/2333749/",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "7120bd86c3e6b539",
      "name": "U . S . agrees to pause attacks on Iran subject to making deal – NBC 5 Dallas - Fort Worth",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7120bd86c3e6b539",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.759,
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
      "url": "https://www.nbcdfw.com/news/national-international/us-agrees-pause-attacks-iran-deal-trump/4057305/",
      "published_at": "2026-08-02T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "b30415d105d54e45",
      "name": "U . S . agrees to pause attacks on Iran subject to making deal – NBC 7 San Diego",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b30415d105d54e45",
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
      "source": "nbcsandiego.com",
      "url": "https://www.nbcsandiego.com/news/national-international/us-agrees-pause-attacks-iran-deal-trump/4056268/",
      "published_at": "2026-08-02T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 7.0
      }
    },
    {
      "id": "6860f79c639693ee",
      "name": "Iran Ridicules Trump Warnings as  Psychological Warfare  After He Cancels Planned Strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6860f79c639693ee",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.658,
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
      "source": "ibtimes.co.uk",
      "url": "https://www.ibtimes.co.uk/iran-dismisses-trumps-military-threats-1811921",
      "published_at": "2026-08-02T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.5
      }
    },
    {
      "id": "c55781bb1f845a5f",
      "name": "Iran says it perceives every  enemy  threat as  noteworthy , denies deal on reopening Hormuz",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c55781bb1f845a5f",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.531,
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
      "source": "morungexpress.com",
      "url": "https://morungexpress.com/iran-says-it-perceives-every-enemy-threat-as-noteworthy-denies-deal-on-reopening-hormuz",
      "published_at": "2026-08-02T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 5.9
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
      "source": "wesh.com",
      "url": "https://www.wesh.com/article/trump-iran-strikes-potential-deal/73326225",
      "published_at": "2026-08-02T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "9370e8820a234c2e",
      "name": "No breakthrough on Strait of Hormuz as Trump halts attack on Iran - Dominican Republic Post – Caribbean News , Business , Travel & Culture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9370e8820a234c2e",
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
      "source": "dominicanrepublicpost.com",
      "url": "https://dominicanrepublicpost.com/no-breakthrough-on-strait-of-hormuz-as-trump-halts-attack-on-iran/",
      "published_at": "2026-08-02T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "7ccb3790225158bf",
      "name": "Trump holds off on attacking Iran , but demands fast deal",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7ccb3790225158bf",
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
      "source": "taipeitimes.com",
      "url": "https://www.taipeitimes.com/News/front/archives/2026/08/03/2003861833",
      "published_at": "2026-08-02T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
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
      "freshness": 0.372,
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
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
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
      "source": "globalnews.ca",
      "url": "https://globalnews.ca/news/12006799/us-no-strikes-possible-iran-deal/",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
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
      "freshness": 0.429,
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
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
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
      "source": "express.co.uk",
      "url": "https://www.express.co.uk/news/world/2233554/warning-uk-sleeper-cells-andy-burnham",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "f6dff3ecfa386509",
      "name": "Iran denies seeking halt to US attacks , agreement to reopen Strait of Hormuz",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f6dff3ecfa386509",
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
      "source": "aa.com.tr",
      "url": "https://aa.com.tr/en/middle-east/iran-denies-seeking-halt-to-us-attacks-agreement-to-reopen-strait-of-hormuz/4016416",
      "published_at": "2026-08-02T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.9,
        "extended": 4.9
      }
    },
    {
      "id": "8fdafecf6b59ef78",
      "name": "Trump puts on hold planned military attack on Iran – The Indian Awaaz",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8fdafecf6b59ef78",
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
      "source": "theindianawaaz.com",
      "url": "https://theindianawaaz.com/trump-puts-on-hold-planned-military-attack-on-iran/",
      "published_at": "2026-08-02T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.9,
        "extended": 4.9
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
      "source": "grenadachronicle.com",
      "url": "https://grenadachronicle.com/no-breakthrough-on-strait-of-hormuz-as-trump-halts-attack-on-iran/",
      "published_at": "2026-08-02T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
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
      "freshness": 0.372,
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
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
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
      "source": "newkerala.com",
      "url": "https://www.newkerala.com/news/a/iran-says-it-perceives-every-enemy-threat-as-418.htm",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.1,
        "extended": 3.6
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
      "source": "orissapost.com",
      "url": "https://www.orissapost.com/tehran-perceives-every-enemy-threat-as-real-and-noteworthy-denies-hormuz-reopening-deal/",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.1,
        "extended": 3.6
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
      "freshness": 0.372,
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
        "immediate": 0.6,
        "short": 2.2,
        "extended": 3.7
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
      "source": "tribuneonlineng.com",
      "url": "https://tribuneonlineng.com/you-lied-we-didnt-ask-us-not-to-strike-iran-fires-back-at-trump/",
      "published_at": "2026-08-02T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
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
      "source": "bankingnews.gr",
      "url": "https://www.bankingnews.gr/diethni/articles/891845/the-persian-gulf-after-the-us-saudi-arabia-puts-brakes-on-trump-over-large-scale-attack-on-iran-and-gives-role-to-china-and-russia",
      "published_at": "2026-08-02T14:45:00Z",
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
    },
    {
      "timestamp": "2026-08-02T17:37:49.698785Z",
      "immediate": 33,
      "short": 34,
      "extended": 32
    },
    {
      "timestamp": "2026-08-02T18:42:48.520734Z",
      "immediate": 26,
      "short": 30,
      "extended": 30
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-08-02T18:42:48.520734Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 34
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
