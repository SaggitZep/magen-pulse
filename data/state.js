window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-29T04:32:57.916734Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 15,
      "low": 2,
      "high": 28,
      "confidence": 66,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 22,
      "low": 9,
      "high": 35,
      "confidence": 67,
      "status": "נמוך"
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
    "points_60m": 10
  },
  "changes": [
    {
      "time": "04:15",
      "text": "US says it intercepted  surprise  Iran missile attack on its forces in Middle East after lull in fighting | US - Israel war on Iran",
      "impact": "השפעה מיידית מחושבת: +11.1",
      "direction": "up",
      "source": "theguardian.com",
      "signal_id": "5058f61756ef0f9f"
    },
    {
      "time": "06:45",
      "text": "Attempted surprise attack : Iran launches ballistic missiles against US forces ; CENTCOM says  all intercepted",
      "impact": "השפעה מיידית מחושבת: +1.6",
      "direction": "up",
      "source": "arabherald.com",
      "signal_id": "e45af0494708a711"
    },
    {
      "time": "06:30",
      "text": "The U . S . military says Iran has launched multiple ballistic missiles at American forces in the Middle East , shattering a brief paus in fighting as mediators tried to get both sides back to negotiations",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "wxii12.com",
      "signal_id": "34cdb8b7367d324d"
    },
    {
      "time": "06:30",
      "text": "Iran launches surprise attack on US bases CENTCOM",
      "impact": "השפעה מיידית מחושבת: +1.3",
      "direction": "up",
      "source": "middleeaststar.com",
      "signal_id": "81686fafcdc3e7d4"
    }
  ],
  "signals": [
    {
      "id": "5058f61756ef0f9f",
      "name": "US says it intercepted  surprise  Iran missile attack on its forces in Middle East after lull in fighting | US - Israel war on Iran",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5058f61756ef0f9f",
      "strength": 0.58,
      "reliability": 0.56,
      "freshness": 0.39,
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
      "source": "theguardian.com",
      "url": "https://www.theguardian.com/world/2026/jul/29/iran-missile-attack-us-base-forces",
      "published_at": "2026-07-29T01:15:00Z",
      "active": true,
      "computed": {
        "immediate": 11.1,
        "short": 8.7,
        "extended": 3.7
      }
    },
    {
      "id": "e45af0494708a711",
      "name": "Attempted surprise attack : Iran launches ballistic missiles against US forces ; CENTCOM says  all intercepted",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e45af0494708a711",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.796,
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
      "source": "arabherald.com",
      "url": "http://www.arabherald.com/news/279214124/attempted-surprise-attack-iran-launches-ballistic-missiles-against-us-forces-centcom-says-all-intercepted",
      "published_at": "2026-07-29T03:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.6,
        "short": 5.5,
        "extended": 9.4
      }
    },
    {
      "id": "34cdb8b7367d324d",
      "name": "The U . S . military says Iran has launched multiple ballistic missiles at American forces in the Middle East , shattering a brief paus in fighting as mediators tried to get both sides back to negotiations",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "34cdb8b7367d324d",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.741,
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
      "source": "wxii12.com",
      "url": "https://www.wxii12.com/article/us-intercepts-iranian-missiles-middle-east/73289358",
      "published_at": "2026-07-29T03:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.8
      }
    },
    {
      "id": "81686fafcdc3e7d4",
      "name": "Iran launches surprise attack on US bases CENTCOM",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "81686fafcdc3e7d4",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.741,
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
      "url": "http://www.middleeaststar.com/news/279214091/iran-launches-surprise-attack-on-us-bases-centcom",
      "published_at": "2026-07-29T03:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.3
      }
    },
    {
      "id": "983b7ecd92413bb0",
      "name": "The US military says it thwarted an Iranian missile attack on American troops",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "983b7ecd92413bb0",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.642,
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
      "source": "journal-advocate.com",
      "url": "https://www.journal-advocate.com/2026/07/28/iran-us-troops-missile-attack/",
      "published_at": "2026-07-29T03:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.5,
        "extended": 7.6
      }
    },
    {
      "id": "7cea9a6f543c9078",
      "name": "US CENTCOM , Saudis strike Iraq following Iranian attacks on US bases",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7cea9a6f543c9078",
      "strength": 0.4,
      "reliability": 0.74,
      "freshness": 0.598,
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
      "url": "https://www.jpost.com/middle-east/iran-news/article-903953",
      "published_at": "2026-07-29T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.6,
        "extended": 7.8
      }
    },
    {
      "id": "6b347e2974e7f95a",
      "name": "The US says it thwarted an Iranian missile attack that ended a brief pause in fighting",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6b347e2974e7f95a",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.598,
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
      "source": "fox10tv.com",
      "url": "https://www.fox10tv.com/2026/07/28/us-says-it-thwarted-an-iranian-missile-attack-that-ended-brief-pause-fighting/",
      "published_at": "2026-07-29T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.2,
        "extended": 7.1
      }
    },
    {
      "id": "aaf8351089a37858",
      "name": "US thwarts an Iranian missile attack and launches strikes wi ...",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "aaf8351089a37858",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.598,
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
      "source": "semissourian.com",
      "url": "https://www.semissourian.com/world/the-us-military-says-its-thwarted-an-iranian-missile-attack-on-american-troops-34c83d9c",
      "published_at": "2026-07-29T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.2,
        "extended": 7.1
      }
    },
    {
      "id": "9e7617f6bd2bd2c9",
      "name": "Ejército de EE . UU . dice que interceptó misiles iraníes lanzados en Oriente Medio",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9e7617f6bd2bd2c9",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.69,
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
      "source": "larepublica.co",
      "url": "https://www.larepublica.co/globoeconomia/ejercito-de-ee-uu-dice-que-intercepto-misiles-iranies-lanzados-en-oriente-medio-4446058",
      "published_at": "2026-07-29T03:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "3b931b2b7aae6967",
      "name": "Iran launches  attempted surprise attack  on American forces in Middle East , US military says",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3b931b2b7aae6967",
      "strength": 0.4,
      "reliability": 0.88,
      "freshness": 0.418,
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
      "source": "bbc.co.uk",
      "url": "https://www.bbc.co.uk/news/articles/c70g6y24d76o",
      "published_at": "2026-07-29T01:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.5
      }
    },
    {
      "id": "71630abed7bccb2e",
      "name": "US thwarts an Iranian missile attack and launches strikes with Saudi Arabia against militias in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "71630abed7bccb2e",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.518,
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
      "source": "wsls.com",
      "url": "https://www.wsls.com/news/world/2026/07/28/saudi-arabia-says-it-shot-down-more-drones-as-houthis-claim-to-have-turned-back-tanker/",
      "published_at": "2026-07-29T02:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "3d998af1aa8e3436",
      "name": "US military thwarts an Iranian missile attack on troops",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3d998af1aa8e3436",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.518,
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
      "source": "wgauradio.com",
      "url": "https://www.wgauradio.com/news/world/saudi-arabia-says-it/XAVKVBNIPY2ZBGOOT6J7GSXLXQ/",
      "published_at": "2026-07-29T02:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "a4694bd2f75d8a0f",
      "name": "US , Saudi forces strike sites of Iran - backed groups",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a4694bd2f75d8a0f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.642,
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
      "source": "dailyadvertiser.com.au",
      "url": "https://www.dailyadvertiser.com.au/story/9319549/us-saudi-forces-strike-sites-of-iran-backed-groups/",
      "published_at": "2026-07-29T03:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.3
      }
    },
    {
      "id": "8466bd128e97be39",
      "name": "US military says intercepted missiles launched by Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8466bd128e97be39",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.518,
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
      "source": "freemalaysiatoday.com",
      "url": "https://www.freemalaysiatoday.com/category/world/2026/07/29/us-military-says-intercepted-missiles-launched-by-iran",
      "published_at": "2026-07-29T02:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "aacbf6338b9eb306",
      "name": "US launches airstrikes after thwarting Iranian surprise attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "aacbf6338b9eb306",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.642,
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
      "source": "fox32chicago.com",
      "url": "https://www.fox32chicago.com/news/us-intercepts-all-missiles-fired-iranian-surprise-attack-centcom-says",
      "published_at": "2026-07-29T03:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.3
      }
    },
    {
      "id": "960e709233b9eea6",
      "name": "U . S . Forces Block Attempted Iranian Surprise Attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "960e709233b9eea6",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.642,
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
      "source": "pjmedia.com",
      "url": "https://pjmedia.com/catherinesalgado/2026/07/28/us-forces-block-attempted-iranian-surprise-attack-n4955560",
      "published_at": "2026-07-29T03:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.3
      }
    },
    {
      "id": "db7d31211059d604",
      "name": "BREAKING : US intercepts Iranian missile attacks on American bases in the Middle East",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "db7d31211059d604",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.518,
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
      "source": "humanevents.com",
      "url": "https://humanevents.com/2026/07/28/breaking-us-intercepts-iranian-missile-attacks-on-american-bases-in-the-middle-east",
      "published_at": "2026-07-29T02:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "0d74f0a12ef19876",
      "name": "BREAKING : US announces joint airstrikes with Saudi against IRGC forces in Iraq – The Right Scoop",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0d74f0a12ef19876",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.642,
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
      "source": "therightscoop.com",
      "url": "https://therightscoop.com/breaking-us-announces-joint-airstrikes-with-saudi-against-irgc-forces-in-iraq/",
      "published_at": "2026-07-29T03:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.3
      }
    },
    {
      "id": "994653fa2af7e464",
      "name": "US , Saudi forces strike Iran - backed  terrorist in Iraq : US military",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "994653fa2af7e464",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.598,
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
      "source": "bssnews.net",
      "url": "https://www.bssnews.net/international/409815",
      "published_at": "2026-07-29T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 5.9
      }
    },
    {
      "id": "8c38c67de8b5498e",
      "name": "US , Saudi forces strike Iran - aligned  terrorist in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8c38c67de8b5498e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.598,
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
      "url": "https://www.yahoo.com/news/politics/articles/us-saudi-forces-strike-iran-020326138.html",
      "published_at": "2026-07-29T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 5.9
      }
    },
    {
      "id": "93f649b4c9553c32",
      "name": "Saudis join US strikes on Iran - aligned militias in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "93f649b4c9553c32",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.598,
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
      "url": "http://www.iraqsun.com/news/279214174/saudis-join-us-strikes-on-iran-aligned-militias-in-iraq",
      "published_at": "2026-07-29T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 5.9
      }
    },
    {
      "id": "b07a8c069b0799d3",
      "name": "Iran Fires Ballistic Missiles At U . S . Forces In Jordan , Triggering Joint American - Saudi Strikes In Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b07a8c069b0799d3",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.418,
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
      "source": "worthynews.com",
      "url": "https://www.worthynews.com/116327-iran-fires-ballistic-missiles-at-u-s-forces-in-jordan-triggering-joint-american-saudi-strikes-in-iraq",
      "published_at": "2026-07-29T01:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 4.9
      }
    },
    {
      "id": "abc865f6f7b7f001",
      "name": "US , Saudi Arabia forces strike Iran - backed  terrorist in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "abc865f6f7b7f001",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.518,
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
      "source": "freemalaysiatoday.com",
      "url": "https://www.freemalaysiatoday.com/category/world/2026/07/29/us-saudi-arabia-forces-strike-iran-backed-terrorists-in-iraq",
      "published_at": "2026-07-29T02:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.1
      }
    },
    {
      "id": "7adb373482711de0",
      "name": "US , Saudi Arabia launch joint precision strikes in Iraq targeting  Iran - aligned terrorists",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7adb373482711de0",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.518,
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
      "url": "https://aninews.in/news/world/us/us-saudi-arabia-launch-joint-precision-strikes-in-iraq-targeting-iran-aligned-terrorists20260729065244/",
      "published_at": "2026-07-29T02:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.1
      }
    },
    {
      "id": "6f47e78a4425fb12",
      "name": "Iran shows increasing ability to strike American military targets through combined operations : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6f47e78a4425fb12",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.557,
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
      "url": "https://www.presstv.co.uk/Detail/2026/07/28/773272/Iran-attacks-United-States-bases-Middle-East-drones-ballistic-missiles",
      "published_at": "2026-07-29T02:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
      }
    },
    {
      "id": "9c386d03a820e6cc",
      "name": "US intercepts all missiles fired in Iranian surprise attack , CENTCOM says",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9c386d03a820e6cc",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.418,
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
      "source": "fox10phoenix.com",
      "url": "https://www.fox10phoenix.com/news/us-intercepts-all-missiles-fired-iranian-surprise-attack-centcom-says",
      "published_at": "2026-07-29T01:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 4.9
      }
    },
    {
      "id": "f9fc752596774b6e",
      "name": "U . S . and Saudi Arabia strike Iran - backed groups in Iraq after attacks on American forces",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f9fc752596774b6e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.557,
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
      "source": "cbsnews.com",
      "url": "https://www.cbsnews.com/news/us-saudi-arabia-strike-iran-proxies-iraq-after-attacks-on-american-forces/",
      "published_at": "2026-07-29T02:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
      }
    },
    {
      "id": "62973b0ae7502bb1",
      "name": "US , Saudi military shoots down Iranian attacks as Mideast tensions escalate",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "62973b0ae7502bb1",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.483,
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
      "url": "https://economictimes.indiatimes.com/news/defence/us-military-shoots-down-iranian-ballistic-missiles-targeting-its-middle-east-forces/articleshow/132697119.cms",
      "published_at": "2026-07-29T02:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "abcc15f57791d083",
      "name": "US - Saudi joint strike targets Iran - backed  terrorist in Iraq as war escalates",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "abcc15f57791d083",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.483,
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
      "url": "https://www.hindustantimes.com/world-news/us-saudi-arabia-trike-targets-of-iran-backed-terrorists-in-eastern-iraq-response-to-drone-attacks-irgc-us-iran-war-101785286950766.html",
      "published_at": "2026-07-29T02:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "e24e5f8bb62edccb",
      "name": "Iran launches  surprise attack  on US forces in Middle East",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e24e5f8bb62edccb",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.483,
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
      "url": "https://www.yahoo.com/news/world/articles/iran-launches-surprise-attack-us-225213723.html",
      "published_at": "2026-07-29T02:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "79655fd9fed9733b",
      "name": "US , Saudi Arabia Strike Iran - Aligned Targets in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "79655fd9fed9733b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.483,
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
      "url": "https://www.newkerala.com/news/a/us-saudi-arabia-launch-joint-precision-strikes-iraq-500.htm",
      "published_at": "2026-07-29T02:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "5aae34cc576b7047",
      "name": "US , Saudi Airstrikes Hit Iran - Linked Targets in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5aae34cc576b7047",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.483,
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
      "url": "https://www.newkerala.com/news/a/us-saudi-forces-strike-iran-backed-sites-iraq-192.htm",
      "published_at": "2026-07-29T02:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "c392fb7cbc4dc68c",
      "name": "Netanyahu praises first meeting with Trump since launching the Iran war",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c392fb7cbc4dc68c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.483,
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
      "source": "yakimaherald.com",
      "url": "https://www.yakimaherald.com/news/nation_and_world/nation/netanyahu-praises-first-meeting-with-trump-since-launching-the-iran-war/article_a233d3f1-083f-5ac5-8a4f-20594fd58de4.html",
      "published_at": "2026-07-29T02:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "3c870ce6b47ae380",
      "name": "Iran fires missiles at US base in Jordan , all intercepted : US Central Command",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3c870ce6b47ae380",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.39,
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
      "url": "https://gulfnews.com/world/mena/iran-fires-missiles-at-us-base-in-jordan-all-intercepted-us-central-command-1.500623334",
      "published_at": "2026-07-29T01:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.6
      }
    },
    {
      "id": "95bf9f49791bdbc1",
      "name": "Iran war : US , Saudi Arabia strike Iran - backed Iraqi militias",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "95bf9f49791bdbc1",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.418,
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
      "source": "dw.com",
      "url": "https://www.dw.com/en/iran-war-us-saudi-arabia-strike-iran-backed-iraqi-militias/live-78152241",
      "published_at": "2026-07-29T01:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "a35d28b859dd9fff",
      "name": "Iran and US trade strikes , shattering brief lull in fighting",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a35d28b859dd9fff",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.418,
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
      "url": "https://www.yahoo.com/news/us/articles/iran-and-us-trade-strikes-shattering-brief-lull-in-fighting-004230626.html",
      "published_at": "2026-07-29T01:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "fb6fcc3bc22d83d0",
      "name": "US military intercepts Iran missiles",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fb6fcc3bc22d83d0",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.363,
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
      "source": "straitstimes.com",
      "url": "https://www.straitstimes.com/world/united-states/us-military-says-intercepted-missiles-launched-by-iran",
      "published_at": "2026-07-29T01:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      }
    },
    {
      "id": "05056104de51e22d",
      "name": "Netanyahu Hails Trump Meeting As Leaders Unite Against Nuclear - Armed Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "05056104de51e22d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.418,
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
      "source": "worthynews.com",
      "url": "https://www.worthynews.com/116325-netanyahu-hails-trump-meeting-as-leaders-unite-against-nuclear-armed-iran",
      "published_at": "2026-07-29T01:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "78d8758316fb38bf",
      "name": "US military says it intercepted Iranian ballistic missiles launched towards US forces in Middle East",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "78d8758316fb38bf",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.363,
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
      "source": "straitstimes.com",
      "url": "https://www.straitstimes.com/world/middle-east/us-military-says-it-intercepted-iranian-ballistic-missiles-launched-towards-us-forces-in-middle-east",
      "published_at": "2026-07-29T01:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      }
    },
    {
      "id": "fa9319adce2ae960",
      "name": "Ukraine says Iran ship strike unintentional , seeks to avoid escalation",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fa9319adce2ae960",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.338,
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
      "source": "dailysabah.com",
      "url": "https://www.dailysabah.com/world/europe/ukraine-says-iran-ship-strike-unintentional-seeks-to-avoid-escalation",
      "published_at": "2026-07-29T00:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.3
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-29T04:32:57.916734Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 40
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
