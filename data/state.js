window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-25T17:27:48.926514Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 14,
      "low": 1,
      "high": 27,
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
      "confidence": 65,
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
      "time": "16:30",
      "text": "ישראל נערכה למתקפה דרמטית שלא קרתה :  איראן קנתה זמן",
      "impact": "השפעה מיידית מחושבת: +10.5",
      "direction": "up",
      "source": "ynet.co.il",
      "signal_id": "debb013ff1376f53"
    },
    {
      "time": "19:15",
      "text": "Iranian Missiles Strike U . S . Military Sites in Jordan Aqaba – NaturalNews . com",
      "impact": "השפעה מיידית מחושבת: +1.4",
      "direction": "up",
      "source": "naturalnews.com",
      "signal_id": "e87ece790d214ebe"
    },
    {
      "time": "19:45",
      "text": "US holds off Iran strikes for first time in two weeks",
      "impact": "השפעה מיידית מחושבת: +1.4",
      "direction": "up",
      "source": "newcastleherald.com.au",
      "signal_id": "216af6fd60ef99f9"
    },
    {
      "time": "19:30",
      "text": "Houthis hit Saudi Arabia as US strikes Iran harder",
      "impact": "השפעה מיידית מחושבת: +1.3",
      "direction": "up",
      "source": "manilatimes.net",
      "signal_id": "315341e40f0dd81a"
    }
  ],
  "signals": [
    {
      "id": "debb013ff1376f53",
      "name": "ישראל נערכה למתקפה דרמטית שלא קרתה :  איראן קנתה זמן",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "debb013ff1376f53",
      "strength": 0.5,
      "reliability": 0.74,
      "freshness": 0.322,
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
      "source": "ynet.co.il",
      "url": "https://www.ynet.co.il/news/article/r1erkeghze",
      "published_at": "2026-07-25T13:30:00Z",
      "active": true,
      "computed": {
        "immediate": 10.5,
        "short": 8.2,
        "extended": 3.5
      }
    },
    {
      "id": "e87ece790d214ebe",
      "name": "Iranian Missiles Strike U . S . Military Sites in Jordan Aqaba – NaturalNews . com",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e87ece790d214ebe",
      "strength": 0.48,
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
      "source": "naturalnews.com",
      "url": "https://www.naturalnews.com/2026-07-25-iranian-missiles-strike-us-sites-jordans-aqaba.html",
      "published_at": "2026-07-25T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.9,
        "extended": 8.4
      }
    },
    {
      "id": "216af6fd60ef99f9",
      "name": "US holds off Iran strikes for first time in two weeks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "216af6fd60ef99f9",
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
      "source": "newcastleherald.com.au",
      "url": "https://www.newcastleherald.com.au/story/9317505/us-holds-off-iran-strikes-for-first-time-in-two-weeks/",
      "published_at": "2026-07-25T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "315341e40f0dd81a",
      "name": "Houthis hit Saudi Arabia as US strikes Iran harder",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "315341e40f0dd81a",
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
      "source": "manilatimes.net",
      "url": "https://www.manilatimes.net/2026/07/26/world/americas-emea/houthis-hit-saudi-arabia-as-us-strikes-iran-harder/2391472",
      "published_at": "2026-07-25T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "02a747c90fcbd5dc",
      "name": "Trump : Talks with Iran Underway Amid Military Strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "02a747c90fcbd5dc",
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
      "source": "newkerala.com",
      "url": "https://www.newkerala.com/news/a/theres-military-exitor-smarter-strategy-trump-reveals-active-752.htm",
      "published_at": "2026-07-25T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "641b4d52bd3b80ff",
      "name": "US - Iran war spreads as Saudi Arabia , Houthis trade airstrikes in Red Sea escalation",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "641b4d52bd3b80ff",
      "strength": 0.4,
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
      "source": "nypost.com",
      "url": "https://nypost.com/2026/07/25/world-news/us-iran-war-spreads-as-saudi-arabia-houthis-trade-airstrikes-in-red-sea-escalation/",
      "published_at": "2026-07-25T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.2
      }
    },
    {
      "id": "06f22b09de12ad46",
      "name": "Bahrain , Kuwait secretly carried out strikes on Iran earlier this month : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "06f22b09de12ad46",
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
      "source": "moneycontrol.com",
      "url": "https://www.moneycontrol.com/world/bahrain-kuwait-secretly-carried-out-strikes-on-iran-earlier-this-month-report-article-13983519.html",
      "published_at": "2026-07-25T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "695ffe646efe5dfe",
      "name": "Illegal and unsafe route : Iran IRGC fires on four ships in Strait of Hormuz over past 24 hours",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "695ffe646efe5dfe",
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
      "source": "aninews.in",
      "url": "https://aninews.in/news/world/middle-east/illegal-and-unsafe-route-irans-irgc-fires-on-four-ships-in-strait-of-hormuz-over-past-24-hours20260725194434/",
      "published_at": "2026-07-25T15:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.9,
        "extended": 4.9
      }
    },
    {
      "id": "9edc308bbff9d6fa",
      "name": "Iran reports no new U . S . strikes as tensions remain high",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9edc308bbff9d6fa",
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
      "source": "abcnews.com",
      "url": "https://abcnews.com/US/wireStory/iran-reports-new-us-strikes-tensions-remain-high-135077829",
      "published_at": "2026-07-25T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "31bac07b0f5ca5e8",
      "name": "Ukraine Claims Strike On Russia - Iran Military Route As Kyiv Mourns Dead",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "31bac07b0f5ca5e8",
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
      "source": "rferl.org",
      "url": "https://www.rferl.org/a/ukraine-claims-caspian-strike-russia-iran-military-route-kyiv-mourning/33812868.html",
      "published_at": "2026-07-25T14:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "d75a13eefb77e13f",
      "name": "U . S . Strikes Deeper Inside Iran , Targeting Bridges and Infrastructure",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d75a13eefb77e13f",
      "strength": 0.4,
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
      "source": "breitbart.com",
      "url": "https://www.breitbart.com/europe/2026/07/25/u-s-strikes-deeper-inside-iran-targeting-bridges-and-infrastructure/",
      "published_at": "2026-07-25T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      }
    },
    {
      "id": "2c47a683d5317510",
      "name": "Bridges and infrastructure are hit as US strikes deeper into Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2c47a683d5317510",
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
      "source": "cecildaily.com",
      "url": "http://www.cecildaily.com/ap/nation/bridges-and-infrastructure-are-hit-as-us-strikes-deeper-into-iran/article_d85681b4-e6eb-553a-87c7-42b5c1c0e4d1.html",
      "published_at": "2026-07-25T13:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
      }
    },
    {
      "id": "d034d611c9532163",
      "name": "Trump Weighs Major Iran Strikes as Gulf Tensions Escalate and Talks Turn  Serious",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d034d611c9532163",
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
      "source": "gulfnews.com",
      "url": "https://gulfnews.com/world/mena/trump-says-no-decision-yet-on-major-iran-strikes-as-tensions-deepen-1.500619926",
      "published_at": "2026-07-25T13:30:00Z",
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-25T17:27:48.926514Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 13
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
