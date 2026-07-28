window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-07-28T22:31:10.491357Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 30,
      "low": 14,
      "high": 46,
      "confidence": 49,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 29,
      "low": 13,
      "high": 45,
      "confidence": 49,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 22,
      "low": 6,
      "high": 38,
      "confidence": 49,
      "status": "מוגבר"
    }
  },
  "coverage": {
    "percent": 50,
    "available": 1,
    "expected": 2
  },
  "velocity": {
    "level": "ירידה",
    "points_60m": -4
  },
  "changes": [
    {
      "time": "23:00",
      "text": "INSS survey : Israelis fear internal violence equally to Iranian nuclear bomb",
      "impact": "השפעה מיידית מחושבת: +15.9",
      "direction": "up",
      "source": "jpost.com",
      "signal_id": "bac8ccb13ec1739e"
    },
    {
      "time": "22:45",
      "text": "Iran Rapidly Rebuilds Military Sites Hit by U . S .- Israeli Strikes , Report Says – NaturalNews . com",
      "impact": "השפעה מיידית מחושבת: +11.2",
      "direction": "up",
      "source": "naturalnews.com",
      "signal_id": "a358c17ec5b350d0"
    },
    {
      "time": "21:00",
      "text": "Large portion of Iranians approve of Benjamin Netanyahu , US - Israeli strikes on regime",
      "impact": "השפעה מיידית מחושבת: +9.0",
      "direction": "up",
      "source": "jpost.com",
      "signal_id": "179e164d6601539b"
    },
    {
      "time": "20:45",
      "text": "What are Trump military options ? | US - Israel war on Iran",
      "impact": "השפעה מיידית מחושבת: +6.3",
      "direction": "up",
      "source": "aljazeera.com",
      "signal_id": "9be26bd79d3c42be"
    }
  ],
  "signals": [
    {
      "id": "bac8ccb13ec1739e",
      "name": "INSS survey : Israelis fear internal violence equally to Iranian nuclear bomb",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "bac8ccb13ec1739e",
      "strength": 0.5,
      "reliability": 0.74,
      "freshness": 0.487,
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
      "url": "https://www.jpost.com/israel-news/article-903936",
      "published_at": "2026-07-28T20:00:00Z",
      "active": true,
      "computed": {
        "immediate": 15.9,
        "short": 12.4,
        "extended": 5.2
      },
      "carried_forward": true
    },
    {
      "id": "a358c17ec5b350d0",
      "name": "Iran Rapidly Rebuilds Military Sites Hit by U . S .- Israeli Strikes , Report Says – NaturalNews . com",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a358c17ec5b350d0",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.453,
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
      "source": "naturalnews.com",
      "url": "https://www.naturalnews.com/2026-07-28-iran-rapidly-rebuilds-military-sites-hit-by-us.html",
      "published_at": "2026-07-28T19:45:00Z",
      "active": true,
      "computed": {
        "immediate": 11.2,
        "short": 8.7,
        "extended": 3.7
      },
      "carried_forward": true
    },
    {
      "id": "179e164d6601539b",
      "name": "Large portion of Iranians approve of Benjamin Netanyahu , US - Israeli strikes on regime",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "179e164d6601539b",
      "strength": 0.5,
      "reliability": 0.74,
      "freshness": 0.275,
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
      "url": "http://www.jpost.com/middle-east/iran-news/article-903934",
      "published_at": "2026-07-28T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 9.0,
        "short": 7.0,
        "extended": 3.0
      },
      "carried_forward": true
    },
    {
      "id": "9be26bd79d3c42be",
      "name": "What are Trump military options ? | US - Israel war on Iran",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9be26bd79d3c42be",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.256,
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
      "source": "aljazeera.com",
      "url": "https://www.aljazeera.com/opinions/2026/7/28/what-are-trumps-military-options",
      "published_at": "2026-07-28T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 6.3,
        "short": 4.9,
        "extended": 2.1
      },
      "carried_forward": true
    },
    {
      "id": "489f19534c99802b",
      "name": "Iran says final Hormuz proposal to Oman requires control of key shipping lanes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "489f19534c99802b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.603,
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
      "url": "https://aa.com.tr/en/middle-east/iran-says-final-hormuz-proposal-to-oman-requires-control-of-key-shipping-lanes/4011954",
      "published_at": "2026-07-28T20:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 5.9
      },
      "carried_forward": true
    },
    {
      "id": "043eca9a15441ca2",
      "name": "Mediators see progress in efforts to halt Iran war as drone attacks rattle region",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "043eca9a15441ca2",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.453,
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
      "source": "ksla.com",
      "url": "https://www.ksla.com/2026/07/27/mediators-see-progress-efforts-halt-iran-war-drone-attacks-rattle-region/",
      "published_at": "2026-07-28T19:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.4
      },
      "carried_forward": true
    },
    {
      "id": "c630dcded2826251",
      "name": "Trump Says US and Iran Are Holding  Friendly  Talks , Warns Military Action Could Resume",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c630dcded2826251",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.487,
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
      "source": "bearingdrift.com",
      "url": "https://www.bearingdrift.com/2026/07/trump-says-us-and-iran-are-holding.html",
      "published_at": "2026-07-28T20:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.4
      },
      "carried_forward": true
    },
    {
      "id": "08f3cd55a60bedbc",
      "name": "Trump and Netanyahu meet for the first time since launching the Iran war",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "08f3cd55a60bedbc",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.523,
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
      "source": "thehindu.com",
      "url": "https://www.thehindu.com/news/international/trump-and-netanyahu-meet-for-the-first-time-since-launching-the-iran-war/article71278622.ece",
      "published_at": "2026-07-28T20:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.2
      },
      "carried_forward": true
    },
    {
      "id": "5c59f236832ea88f",
      "name": "Pentagon updates Iran war casualty database , adds more than 140 wounded , creates new category – NaturalNews . com",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5c59f236832ea88f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.453,
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
      "url": "https://www.naturalnews.com/2026-07-28-pentagon-updates-iran-war-casualty-database.html",
      "published_at": "2026-07-28T19:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.5
      },
      "carried_forward": true
    },
    {
      "id": "e76321ca31cc44c8",
      "name": "Iran - US Pause Holds As Drone Attacks Spread To Israel , Jordan Despite Lull In Strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e76321ca31cc44c8",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.275,
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
      "url": "https://www.hngn.com/articles/272329/20260728/trump-weighs-wider-iran-offensive-wars-death-toll-hits-59-strikes-reach-kuwait.htm",
      "published_at": "2026-07-28T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 1.9,
        "extended": 3.3
      },
      "carried_forward": true
    },
    {
      "id": "63439dc8cc304d31",
      "name": "US pauses Iran strikes , Red Sea becomes new flashpoint",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "63439dc8cc304d31",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.275,
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
      "source": "tradearabia.com:443",
      "url": "https://tradearabia.com:443/News/465577/US-pauses-Iran-strikes-Red-Sea-becomes-new-flashpoint",
      "published_at": "2026-07-28T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "12af5e9c7d73beab",
      "name": "Iran threatens Melania and Barron Trump in propaganda video",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "12af5e9c7d73beab",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.256,
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
      "source": "washingtonexaminer.com",
      "url": "https://www.washingtonexaminer.com/news/world/4665586/iran-threatens-melania-barron-trump/",
      "published_at": "2026-07-28T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.7,
        "extended": 2.8
      },
      "carried_forward": true
    },
    {
      "id": "85e5cf6462e89b1d",
      "name": "Trump expresses frustrations with Netanyahu before their first meeting since launching the Iran war",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "85e5cf6462e89b1d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.256,
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
      "url": "https://www.hindustantimes.com/world-news/trump-expresses-frustrations-with-netanyahu-before-their-first-meeting-since-launching-the-iran-war-101785250143053.html",
      "published_at": "2026-07-28T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.5
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-07-28T21:17:48.990081Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "HTTP Error 429: Too Many Requests",
        "carried_forward": 13
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
