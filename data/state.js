window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-30T11:59:09.185701Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 21,
      "low": 8,
      "high": 34,
      "confidence": 69,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 27,
      "low": 14,
      "high": 40,
      "confidence": 69,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 30,
      "low": 17,
      "high": 43,
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
    "points_60m": 19
  },
  "changes": [
    {
      "time": "13:15",
      "text": "As the US and Iran trade blows over Hormuz , how long before the nuclear threat forces Israel to go back to war ?",
      "impact": "השפעה מיידית מחושבת: +16.5",
      "direction": "up",
      "source": "thejc.com",
      "signal_id": "c2127eff6037d056"
    },
    {
      "time": "14:15",
      "text": "Mediator Pakistan says US - Iran talks ongoing as foes trade attacks",
      "impact": "השפעה מיידית מחושבת: +1.8",
      "direction": "up",
      "source": "al-monitor.com",
      "signal_id": "c302bdf47df7302a"
    },
    {
      "time": "14:15",
      "text": "An Iranian strike has hit a Chinese firm building , killing 1 , hours after Jordan downs missiles",
      "impact": "השפעה מיידית מחושבת: +1.7",
      "direction": "up",
      "source": "ktsa.com",
      "signal_id": "faf2ec116ae7ab54"
    },
    {
      "time": "14:30",
      "text": "U . S . resumes strikes on Iran in retaliation for attack on American troops",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "knpr.org",
      "signal_id": "7469914e0dbd18c2"
    }
  ],
  "signals": [
    {
      "id": "c2127eff6037d056",
      "name": "As the US and Iran trade blows over Hormuz , how long before the nuclear threat forces Israel to go back to war ?",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c2127eff6037d056",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.609,
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
      "source": "thejc.com",
      "url": "https://www.thejc.com/news/world/as-the-us-and-iran-trade-blows-over-hormuz-how-long-before-the-nuclear-threat-forces-israel-to-go-back-to-war-xudxfn2q",
      "published_at": "2026-07-30T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 16.5,
        "short": 12.9,
        "extended": 5.5
      }
    },
    {
      "id": "c302bdf47df7302a",
      "name": "Mediator Pakistan says US - Iran talks ongoing as foes trade attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c302bdf47df7302a",
      "strength": 0.4,
      "reliability": 0.74,
      "freshness": 0.81,
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
      "url": "https://www.al-monitor.com/originals/2026/07/mediator-pakistan-says-us-iran-talks-ongoing-foes-trade-attacks",
      "published_at": "2026-07-30T11:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.8,
        "short": 6.2,
        "extended": 10.5
      }
    },
    {
      "id": "faf2ec116ae7ab54",
      "name": "An Iranian strike has hit a Chinese firm building , killing 1 , hours after Jordan downs missiles",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "faf2ec116ae7ab54",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.81,
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
      "source": "ktsa.com",
      "url": "https://www.ktsa.com/an-iranian-strike-has-hit-a-chinese-firms-building-killing-1-hours-after-jordan-downs-missiles/",
      "published_at": "2026-07-30T11:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.7,
        "short": 5.6,
        "extended": 9.6
      }
    },
    {
      "id": "7469914e0dbd18c2",
      "name": "U . S . resumes strikes on Iran in retaliation for attack on American troops",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7469914e0dbd18c2",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.87,
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
      "source": "knpr.org",
      "url": "https://knpr.org/npr/2026-07-30/u-s-resumes-strikes-on-iran-in-retaliation-for-attack-on-american-troops",
      "published_at": "2026-07-30T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.6
      }
    },
    {
      "id": "fdf59f255eede331",
      "name": "World News : US military says latest strikes on Iran lasted two hours , hitting dozens of targets",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fdf59f255eede331",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.87,
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
      "source": "gdnonline.com:443",
      "url": "https://www.gdnonline.com:443/Details/1402055",
      "published_at": "2026-07-30T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.6
      }
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
      "freshness": 0.87,
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
      "source": "sputnikglobe.com",
      "url": "https://sputnikglobe.com/20260730/iran-destroys-uss-al-azraq-base-in-jordan-3-f-35-jets-in-response-to-us-attacks---irgc-1124518028.html",
      "published_at": "2026-07-30T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.6
      }
    },
    {
      "id": "3ef976ef95f74666",
      "name": "US Launches Strikes On Iran After Reported Attack On Base In Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3ef976ef95f74666",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.81,
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
      "source": "shanghaisun.com",
      "url": "http://www.shanghaisun.com/news/279215893/us-launches-strikes-on-iran-after-reported-attack-on-base-in-jordan",
      "published_at": "2026-07-30T11:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "54f053eb508c89ef",
      "name": "The US and Iran trade missile barrages as hopes dim for a quick resolution",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "54f053eb508c89ef",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.703,
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
      "source": "whec.com",
      "url": "https://www.whec.com/ap-top-news/ap-top-news-general/the-us-and-iran-trade-missile-barrages-as-hopes-dim-for-a-quick-resolution/",
      "published_at": "2026-07-30T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.9,
        "extended": 8.3
      }
    },
    {
      "id": "44f1aeaa330704b0",
      "name": "Three IRGC members killed in US strike , Iran says",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "44f1aeaa330704b0",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.81,
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
      "url": "https://news.az/news/three-irgc-members-killed-in-us-strike-iran-says",
      "published_at": "2026-07-30T11:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "8ac3ed7e5a3190d7",
      "name": "US Intensifies Attacks On Iran In Retaliation",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8ac3ed7e5a3190d7",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.81,
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
      "source": "rttnews.com",
      "url": "https://www.rttnews.com/3672819/us-intensifies-attacks-on-iran-in-retaliation.aspx",
      "published_at": "2026-07-30T11:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "88ab4a9f9b02cf3c",
      "name": "US military completes  heavy wave  of retaliatory strikes on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "88ab4a9f9b02cf3c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.703,
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
      "url": "https://www.hurriyetdailynews.com/us-military-completes-heavy-wave-of-retaliatory-strikes-on-iran-224997",
      "published_at": "2026-07-30T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 6.9
      }
    },
    {
      "id": "508f1613b20e44b0",
      "name": "Iran - US war latest : Tehran threatens to  punish the aggressor  after Trump launches heavy wave of strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "508f1613b20e44b0",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.609,
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
      "source": "independent.co.uk",
      "url": "https://www.independent.co.uk/news/world/middle-east/iran-us-war-live-trump-surprise-attack-saudi-israel-b3024286.html",
      "published_at": "2026-07-30T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "6214ce231837a5ea",
      "name": "Massive U . S . Strike On Iran A Day After Foiled Missile Attack On American Forces",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6214ce231837a5ea",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.567,
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
      "source": "theyeshivaworld.com",
      "url": "https://www.theyeshivaworld.com/news/headlines-breaking-stories/2580631/massive-u-s-strike-on-iran-dozens-of-targets-destroyed-overnight.html",
      "published_at": "2026-07-30T10:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 3.9,
        "extended": 6.7
      }
    },
    {
      "id": "48ecf2f06e5833e2",
      "name": "Donald Trump threatens Iran after Tehran strikes US bases in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "48ecf2f06e5833e2",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.609,
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
      "source": "sentinelassam.com",
      "url": "https://www.sentinelassam.com/more-news/international/donald-trump-threatens-iran-after-tehran-strikes-us-bases-in-jordan",
      "published_at": "2026-07-30T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "b51ada8358da58cf",
      "name": "Iranian strike hits Chinese firm building in Kuwait – NBC 6 South Florida",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b51ada8358da58cf",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.654,
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
      "source": "nbcmiami.com",
      "url": "https://www.nbcmiami.com/news/national-international/iran-strike-hits-chinese-firm-building-kuwait-jordan-downs-missiles/3840154/",
      "published_at": "2026-07-30T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.4
      }
    },
    {
      "id": "8b539f29b9cff7af",
      "name": "US launches strikes on Iranian military targets after Trump warning",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8b539f29b9cff7af",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.567,
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
      "source": "middleeastmonitor.com",
      "url": "https://www.middleeastmonitor.com/20260730-us-launches-strikes-on-iranian-military-targets-after-trump-warning/",
      "published_at": "2026-07-30T10:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "8c9250cb8400371d",
      "name": "US hits multiple targets in Iran as IRGC pledges retaliation : What we know",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8c9250cb8400371d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.609,
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
      "url": "https://www.aljazeera.com/news/2026/7/30/us-hits-multiple-targets-in-iran-as-irgc-pledges-retaliation-what-we-know",
      "published_at": "2026-07-30T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "6d1ee5fa0b6004dc",
      "name": "U . S . strikes Iranian targets after foiling attack on its bases | The Asahi Shimbun : Breaking News , Japan News and Analysis",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6d1ee5fa0b6004dc",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.567,
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
      "source": "asahi.com",
      "url": "https://www.asahi.com/ajw/articles/16768938",
      "published_at": "2026-07-30T10:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "526adccb60ca4bde",
      "name": "Oil Climbs as US Resumes Military Strikes on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "526adccb60ca4bde",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.609,
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
      "source": "oedigital.com",
      "url": "https://www.oedigital.com/news/541626-oil-climbs-as-us-resumes-military-strikes-on-iran",
      "published_at": "2026-07-30T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "1ed699763e5f83d3",
      "name": "Iran Slams US - Saudi Strikes in Iraq as  Criminal  Violation of Sovereignty",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1ed699763e5f83d3",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.609,
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
      "source": "sentinelassam.com",
      "url": "https://www.sentinelassam.com/more-news/international/iran-slams-us-saudi-strikes-in-iraq-as-criminal-violation-of-sovereignty",
      "published_at": "2026-07-30T10:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "df22f9b4b5c11f94",
      "name": "U . S . Launches Strikes on Iran After Missile Attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "df22f9b4b5c11f94",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.426,
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
      "source": "newsradio710.iheart.com",
      "url": "https://newsradio710.iheart.com/content/2026-07-30-us-launches-strikes-on-iran-after-missile-attack/",
      "published_at": "2026-07-30T09:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.0
      }
    },
    {
      "id": "27c98e73a9a6e256",
      "name": "U . S . Launches Strikes on Iran After Missile Attack | News Radio 1400 WRAK",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "27c98e73a9a6e256",
      "strength": 0.48,
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
      "source": "wrak.iheart.com",
      "url": "https://wrak.iheart.com/content/2026-07-30-us-launches-strikes-on-iran-after-missile-attack/",
      "published_at": "2026-07-30T09:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.4
      }
    },
    {
      "id": "df446f1bfc469f2e",
      "name": "Oil edges lower as US wraps up strikes on Iran military targets",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "df446f1bfc469f2e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.426,
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
      "url": "https://www.straitstimes.com/business/oil-holds-gain-as-us-military-launches-fresh-strike-against-iran",
      "published_at": "2026-07-30T09:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.2
      }
    },
    {
      "id": "7d937b8002c8b70b",
      "name": "US unleashes  heavy wave  of strikes against Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7d937b8002c8b70b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.426,
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
      "source": "goulburnpost.com.au",
      "url": "https://www.goulburnpost.com.au/story/9320404/us-unleashes-heavy-wave-of-strikes-against-iran/",
      "published_at": "2026-07-30T09:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.2
      }
    },
    {
      "id": "1aa1cb0b1fdb7f36",
      "name": "Iran conflict leaves US with reduced missile interceptor inventories",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1aa1cb0b1fdb7f36",
      "strength": 0.48,
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
      "source": "samaa.tv",
      "url": "https://www.samaa.tv/2087354407-iran-conflict-leaves-us-with-reduced-missile-interceptor-inventories",
      "published_at": "2026-07-30T08:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-30T11:59:09.185701Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 25
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
