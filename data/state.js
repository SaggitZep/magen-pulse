window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-25T15:13:50.106935Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 16,
      "low": 3,
      "high": 29,
      "confidence": 67,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 23,
      "low": 10,
      "high": 36,
      "confidence": 67,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 27,
      "low": 14,
      "high": 40,
      "confidence": 67,
      "status": "מוגבר"
    }
  },
  "coverage": {
    "percent": 100,
    "available": 2,
    "expected": 2
  },
  "velocity": {
    "level": "עלייה מהירה",
    "points_60m": 8
  },
  "changes": [
    {
      "time": "15:30",
      "text": "Iran prepares new list of targets inside Israel amid strike threats",
      "impact": "השפעה מיידית מחושבת: +12.4",
      "direction": "up",
      "source": "news.az",
      "signal_id": "e3fd8a4fa722a060"
    },
    {
      "time": "17:45",
      "text": "Bahrain , Kuwait secretly carried out strikes on Iran earlier this month : Report",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "moneycontrol.com",
      "signal_id": "06f22b09de12ad46"
    },
    {
      "time": "17:45",
      "text": "Iran reports no new U . S . strikes as tensions remain high",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "abcnews.com",
      "signal_id": "9edc308bbff9d6fa"
    },
    {
      "time": "17:45",
      "text": "Ukraine Claims Strike On Russia - Iran Military Route As Kyiv Mourns Dead",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "rferl.org",
      "signal_id": "31bac07b0f5ca5e8"
    }
  ],
  "signals": [
    {
      "id": "e3fd8a4fa722a060",
      "name": "Iran prepares new list of targets inside Israel amid strike threats",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e3fd8a4fa722a060",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.458,
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
      "source": "news.az",
      "url": "https://news.az/news/iran-prepares-new-list-of-targets-inside-israel-amid-strike-threats",
      "published_at": "2026-07-25T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 12.4,
        "short": 9.7,
        "extended": 4.1
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
      "freshness": 0.872,
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
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.6
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
      "freshness": 0.872,
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
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.6
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
      "freshness": 0.872,
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
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.6
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
      "freshness": 0.756,
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
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "376960cecbf71b80",
      "name": "Iran - Backed Houthis Claim Missile Strike On Saudi Arabia",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "376960cecbf71b80",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.568,
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
      "url": "http://www.iraqsun.com/news/279208955/iran-backed-houthis-claim-missile-strike-on-saudi-arabia",
      "published_at": "2026-07-25T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 3.9,
        "extended": 6.7
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
      "freshness": 0.61,
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
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
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
      "freshness": 0.61,
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
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "46601026e6c11d79",
      "name": "Houthis say hit Saudi Arabia as Trump weighs harder Iran strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "46601026e6c11d79",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.529,
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
      "source": "timesofearth.com",
      "url": "https://www.timesofearth.com/2026/07/25/houthis-say-hit-saudi-arabia-as-trump-weighs-harder-iran-strikes/",
      "published_at": "2026-07-25T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.2
      }
    },
    {
      "id": "a8f23d92e3cf04fa",
      "name": "US fires on vessel attempting to breach Iran port blockade | The Arkansas Democrat - Gazette",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a8f23d92e3cf04fa",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.458,
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
      "source": "arkansasonline.com",
      "url": "https://www.arkansasonline.com/news/2026/jul/25/us-fires-on-vessel-attempting-to-breach-iran-port/",
      "published_at": "2026-07-25T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.5
      }
    },
    {
      "id": "5e71fe8fbe2bdce0",
      "name": "US military says it fired on another vessel breaching Iranian blockade",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5e71fe8fbe2bdce0",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.397,
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
      "source": "thefrontierpost.com",
      "url": "https://thefrontierpost.com/us-military-says-it-fired-on-another-vessel-breaching-iranian-blockade/",
      "published_at": "2026-07-25T12:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      }
    },
    {
      "id": "b686b32555e0225d",
      "name": "Iran records first  peaceful night  following 13 days of US strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b686b32555e0225d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.344,
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
      "url": "https://aninews.in/news/world/middle-east/iran-records-first-peaceful-night-following-13-days-of-us-strikes20260725163410/",
      "published_at": "2026-07-25T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.4
      }
    },
    {
      "id": "896c7b83d3eaa384",
      "name": "Iran destroys US military residences , fighter jets in Jordan , Erbil",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "896c7b83d3eaa384",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.321,
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
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260724-irna05.htm",
      "published_at": "2026-07-25T11:15:00Z",
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-25T15:13:50.106935Z",
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
