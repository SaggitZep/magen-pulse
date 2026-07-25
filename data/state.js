window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-07-25T21:40:04.842443Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 2,
      "low": 0,
      "high": 19,
      "confidence": 47,
      "status": "לא זוהה אות חריג"
    },
    "short": {
      "label": "6 שעות",
      "score": 8,
      "low": 0,
      "high": 25,
      "confidence": 47,
      "status": "נמוך"
    },
    "extended": {
      "label": "24 שעות",
      "score": 13,
      "low": 0,
      "high": 30,
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
    "level": "יציב",
    "points_60m": -1
  },
  "changes": [
    {
      "time": "22:00",
      "text": "Iran - backed Houthis fire missiles at Saudi Arabia in response to airstrikes in Yemen",
      "impact": "השפעה מיידית מחושבת: +1.0",
      "direction": "up",
      "source": "economictimes.indiatimes.com",
      "signal_id": "8d69e3b70f70878a"
    },
    {
      "time": "21:45",
      "text": "Middle East escalation : Bahrain and Kuwait carried out first Iran strikes with UAE help , reveals WSJ report",
      "impact": "השפעה מיידית מחושבת: +0.7",
      "direction": "up",
      "source": "iranherald.com",
      "signal_id": "5793ba7f94176c11"
    },
    {
      "time": "21:45",
      "text": "US holds off Iran strikes for first time in two weeks",
      "impact": "השפעה מיידית מחושבת: +0.7",
      "direction": "up",
      "source": "sconeadvocate.com.au",
      "signal_id": "216af6fd60ef99f9"
    },
    {
      "time": "21:45",
      "text": "US military says it fired on another merchant vessel trying to breach blockade of Iranian ports",
      "impact": "השפעה מיידית מחושבת: +0.7",
      "direction": "up",
      "source": "29news.com",
      "signal_id": "baddc275cd6af314"
    }
  ],
  "signals": [
    {
      "id": "8d69e3b70f70878a",
      "name": "Iran - backed Houthis fire missiles at Saudi Arabia in response to airstrikes in Yemen",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8d69e3b70f70878a",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.467,
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
      "source": "economictimes.indiatimes.com",
      "url": "https://economictimes.indiatimes.com/news/defence/iran-backed-houthis-fire-missiles-at-saudi-arabia-in-response-to-airstrikes-in-yemen/articleshow/132632167.cms",
      "published_at": "2026-07-25T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.2,
        "extended": 5.5
      },
      "carried_forward": true
    },
    {
      "id": "5793ba7f94176c11",
      "name": "Middle East escalation : Bahrain and Kuwait carried out first Iran strikes with UAE help , reveals WSJ report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5793ba7f94176c11",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.434,
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
      "url": "http://www.iranherald.com/news/279209456/middle-east-escalation-bahrain-and-kuwait-carried-out-first-iran-strikes-with-uae-help-reveals-wsj-report",
      "published_at": "2026-07-25T18:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      },
      "carried_forward": true
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
      "freshness": 0.434,
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
      "source": "sconeadvocate.com.au",
      "url": "https://www.sconeadvocate.com.au/story/9317505/us-holds-off-iran-strikes-for-first-time-in-two-weeks/",
      "published_at": "2026-07-25T18:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      },
      "carried_forward": true
    },
    {
      "id": "baddc275cd6af314",
      "name": "US military says it fired on another merchant vessel trying to breach blockade of Iranian ports",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "baddc275cd6af314",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.434,
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
      "source": "29news.com",
      "url": "https://www.29news.com/2026/07/24/explosions-break-out-near-military-base-hosting-us-troops-iraq/",
      "published_at": "2026-07-25T18:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      },
      "carried_forward": true
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
      "freshness": 0.434,
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
      "url": "http://www.iranherald.com/news/279209560/illegal-and-unsafe-route-iran-irgc-fires-on-four-ships-in-strait-of-hormuz-over-past-24-hours",
      "published_at": "2026-07-25T18:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      },
      "carried_forward": true
    },
    {
      "id": "2f25766c623dc11f",
      "name": "Credible threat  from Iranian proxies prompted Trump mid - trip plane swap : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2f25766c623dc11f",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.351,
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
      "url": "https://aninews.in/news/world/us/credible-threat-from-iranian-proxies-prompted-trumps-mid-trip-plane-swap-report20260725211337/",
      "published_at": "2026-07-25T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "1ee00e52afa8fa33",
      "name": "UK  ready to defend itself  after Iran says bases are  legitimate targets",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1ee00e52afa8fa33",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.377,
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
      "url": "https://www.yahoo.com/news/world/articles/uk-ready-defend-itself-iran-200031451.html",
      "published_at": "2026-07-25T18:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.2,
        "extended": 3.7
      },
      "carried_forward": true
    },
    {
      "id": "ebc7edd739d27ac1",
      "name": "U . S . military goes silent on Iran airstrikes while Houthi rebels and Saudi Arabia exchange attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ebc7edd739d27ac1",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.377,
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
      "source": "fortune.com",
      "url": "https://fortune.com/2026/07/25/us-military-silent-iran-airstrikes-houthi-rebels-saudi-arabia-battle-red-sea-shipping/",
      "published_at": "2026-07-25T18:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.2,
        "extended": 3.7
      },
      "carried_forward": true
    },
    {
      "id": "8d9344ac29cb751d",
      "name": "13 दिन बाद अमेरिकी हमले थमे ; ईरान में  शांत से बीती पहली रात , खतरा अब भी बरकरार - iran records first peaceful night following 13 days of us strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8d9344ac29cb751d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.283,
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
      "source": "punjabkesari.in",
      "url": "https://www.punjabkesari.in/international/news/iran-records-first-peaceful-night-following-13-days-of-us-strikes-2361351",
      "published_at": "2026-07-25T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.8
      },
      "carried_forward": true
    },
    {
      "id": "ddeea81466ce2d6f",
      "name": "Attacks will continue until the enemy surrenders completely , says Iranian security chief",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ddeea81466ce2d6f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.283,
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
      "source": "dailythepatriot.com",
      "url": "https://dailythepatriot.com/attacks-will-continue-until-the-enemy-surrenders-completely-says-iranian-security-chief/",
      "published_at": "2026-07-25T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.8
      },
      "carried_forward": true
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
      "freshness": 0.213,
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
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.5
      },
      "carried_forward": true
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
      "freshness": 0.228,
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
        "immediate": 0.4,
        "short": 1.3,
        "extended": 2.2
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-07-25T19:51:08.461358Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "HTTP Error 429: Too Many Requests",
        "carried_forward": 12
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
