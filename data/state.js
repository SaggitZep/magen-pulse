window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-08-19T17:09:39.576734Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 18,
      "low": 2,
      "high": 34,
      "confidence": 52,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 22,
      "low": 6,
      "high": 38,
      "confidence": 52,
      "status": "נמוך"
    },
    "extended": {
      "label": "24 שעות",
      "score": 23,
      "low": 7,
      "high": 39,
      "confidence": 52,
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
    "points_60m": -3
  },
  "changes": [
    {
      "time": "18:30",
      "text": "32 - year - old Iranian scientist who was identified by DNA 10 days after martyrdom in US - Israeli attack",
      "impact": "השפעה מיידית מחושבת: +15.3",
      "direction": "up",
      "source": "presstv.co.uk",
      "signal_id": "493905bfa9c82c04"
    },
    {
      "time": "19:15",
      "text": "Exclusive : Claims of Iranian Missile Strike on UAE Dismissed as Baseless ; Evidence Suggests Possible False Flag Operation",
      "impact": "השפעה מיידית מחושבת: +1.6",
      "direction": "up",
      "source": "islamicinvitationturkey.com",
      "signal_id": "41f656e152823c59"
    },
    {
      "time": "18:45",
      "text": "United Arab Emirates Suspends Trade With Iran After Coming Under Renewed Missile Fire – 710am KURV",
      "impact": "השפעה מיידית מחושבת: +1.4",
      "direction": "up",
      "source": "kurv.com",
      "signal_id": "042ed37c633fd21d"
    },
    {
      "time": "18:45",
      "text": "Iran Again Warns Gulf States Against Assisting US Military",
      "impact": "השפעה מיידית מחושבת: +1.3",
      "direction": "up",
      "source": "southeastasiapost.com",
      "signal_id": "e761a92fc96641b6"
    }
  ],
  "signals": [
    {
      "id": "493905bfa9c82c04",
      "name": "32 - year - old Iranian scientist who was identified by DNA 10 days after martyrdom in US - Israeli attack",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "493905bfa9c82c04",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.622,
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
      "source": "presstv.co.uk",
      "url": "https://www.presstv.co.uk/Detail/2026/08/18/774610/32-year-old-iranian-scientist-identified-dna-10-days-after-martyrdom-us-israeli-attack",
      "published_at": "2026-08-19T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 15.3,
        "short": 12.0,
        "extended": 5.1
      },
      "carried_forward": true
    },
    {
      "id": "41f656e152823c59",
      "name": "Exclusive : Claims of Iranian Missile Strike on UAE Dismissed as Baseless ; Evidence Suggests Possible False Flag Operation",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "41f656e152823c59",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.771,
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
      "url": "https://www.islamicinvitationturkey.com/exclusive-claims-of-iranian-missile-strike-on-uae-dismissed-as-baseless-evidence-suggests-possible-false-flag-operation/",
      "published_at": "2026-08-19T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.6,
        "short": 5.4,
        "extended": 9.1
      },
      "carried_forward": true
    },
    {
      "id": "042ed37c633fd21d",
      "name": "United Arab Emirates Suspends Trade With Iran After Coming Under Renewed Missile Fire – 710am KURV",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "042ed37c633fd21d",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.668,
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
      "source": "kurv.com",
      "url": "https://www.kurv.com/united-arab-emirates-suspends-trade-with-iran-after-coming-under-renewed-missile-fire/",
      "published_at": "2026-08-19T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.6,
        "extended": 7.9
      },
      "carried_forward": true
    },
    {
      "id": "e761a92fc96641b6",
      "name": "Iran Again Warns Gulf States Against Assisting US Military",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e761a92fc96641b6",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.668,
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
      "url": "http://www.southeastasiapost.com/news/279251318/iran-again-warns-gulf-states-against-assisting-us-military",
      "published_at": "2026-08-19T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.4
      },
      "carried_forward": true
    },
    {
      "id": "c71eeeabb13ba45c",
      "name": "UAE suspends trade with Iran after renewed missile fire",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c71eeeabb13ba45c",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.622,
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
      "source": "crookwellgazette.com.au",
      "url": "https://www.crookwellgazette.com.au/story/9333770/uae-suspends-trade-with-iran-after-renewed-missile-fire/",
      "published_at": "2026-08-19T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.4
      },
      "carried_forward": true
    },
    {
      "id": "8fa6881db61fe13b",
      "name": "Iran Top Military Leader Issues Stern Warning to Gulf States Against Supporting Satanic US Forces",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8fa6881db61fe13b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.771,
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
      "url": "https://www.islamicinvitationturkey.com/irans-top-military-leader-issues-stern-warning-to-gulf-states-against-supporting-satanic-us-forces/",
      "published_at": "2026-08-19T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.5,
        "extended": 7.6
      },
      "carried_forward": true
    },
    {
      "id": "ce75f91b21294fbc",
      "name": "Iran wants to hit American bases in Europe : Bulgaria , Cyprus and submarine cables in its sights",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ce75f91b21294fbc",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.622,
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
      "source": "irishdentist.ie",
      "url": "https://www.irishdentist.ie/iran-wants-to-hit-american-bases-in-europe-bulgaria-cyprus-and-submarine-cables-in-its-sights/21146/",
      "published_at": "2026-08-19T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.6,
        "extended": 6.1
      },
      "carried_forward": true
    },
    {
      "id": "356305502d8c4cf4",
      "name": "Trump threatened to bomb Oman because he unhappy with country deal with Iran , officials say",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "356305502d8c4cf4",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.405,
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
      "url": "https://www.fox10tv.com/2026/08/18/trump-threatened-bomb-oman-because-hes-unhappy-with-countrys-deal-with-iran-officials-say/",
      "published_at": "2026-08-19T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.5
      },
      "carried_forward": true
    },
    {
      "id": "6c07feb0ae71044a",
      "name": "Flydubai and Air Arabia flights begin operating through Iranian airspace",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6c07feb0ae71044a",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.405,
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
      "source": "en.apa.az",
      "url": "https://en.apa.az/asia/flydubai-and-air-arabia-flights-begin-operating-through-iranian-airspace-520902",
      "published_at": "2026-08-19T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 4.0
      },
      "carried_forward": true
    },
    {
      "id": "8b6ffb9d61c6d456",
      "name": "Iran weighs strikes on US military targets in Europe if war escalates : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8b6ffb9d61c6d456",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.284,
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
      "url": "https://aa.com.tr/en/europe/iran-weighs-strikes-on-us-military-targets-in-europe-if-war-escalates-report/4031378",
      "published_at": "2026-08-19T12:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.8
      },
      "carried_forward": true
    },
    {
      "id": "345ad07bc49d5760",
      "name": "Pentagon mulls reducing US military presence in Gulf after Iran war ends : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "345ad07bc49d5760",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.284,
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
      "url": "https://timesofoman.com/article/175814-pentagon-mulls-reducing-us-military-presence-in-gulf-after-iran-war-ends-report",
      "published_at": "2026-08-19T12:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.8
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
    },
    {
      "timestamp": "2026-08-02T19:59:04.520866Z",
      "immediate": 33,
      "short": 34,
      "extended": 33
    },
    {
      "timestamp": "2026-08-02T21:06:42.147000Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-02T22:11:22.540988Z",
      "immediate": 31,
      "short": 31,
      "extended": 26
    },
    {
      "timestamp": "2026-08-02T23:14:51.543199Z",
      "immediate": 23,
      "short": 24,
      "extended": 20
    },
    {
      "timestamp": "2026-08-03T01:02:06.897076Z",
      "immediate": 11,
      "short": 12,
      "extended": 11
    },
    {
      "timestamp": "2026-08-03T04:41:56.787478Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-03T08:14:01.944532Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-03T11:52:21.324885Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-03T14:31:44.517809Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-03T16:58:10.017391Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-03T18:56:19.952979Z",
      "immediate": 3,
      "short": 8,
      "extended": 14
    },
    {
      "timestamp": "2026-08-03T20:37:25.787292Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-03T21:49:13.269264Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-03T22:51:14.498338Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-04T00:04:26.988979Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-04T03:38:04.737661Z",
      "immediate": 1,
      "short": 4,
      "extended": 6
    },
    {
      "timestamp": "2026-08-04T06:16:38.236016Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-04T09:18:38.504818Z",
      "immediate": 24,
      "short": 26,
      "extended": 25
    },
    {
      "timestamp": "2026-08-04T11:37:20.329599Z",
      "immediate": 16,
      "short": 24,
      "extended": 31
    },
    {
      "timestamp": "2026-08-04T13:25:28.767531Z",
      "immediate": 10,
      "short": 15,
      "extended": 19
    },
    {
      "timestamp": "2026-08-04T15:59:19.635413Z",
      "immediate": 9,
      "short": 24,
      "extended": 29
    },
    {
      "timestamp": "2026-08-04T18:00:45.525201Z",
      "immediate": 5,
      "short": 14,
      "extended": 17
    },
    {
      "timestamp": "2026-08-04T19:51:45.662748Z",
      "immediate": 3,
      "short": 7,
      "extended": 8
    },
    {
      "timestamp": "2026-08-04T21:06:57.110935Z",
      "immediate": 1,
      "short": 4,
      "extended": 4
    },
    {
      "timestamp": "2026-08-04T22:29:53.514814Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-04T23:37:04.476668Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-05T01:06:44.466020Z",
      "immediate": 3,
      "short": 9,
      "extended": 16
    },
    {
      "timestamp": "2026-08-05T04:30:26.239157Z",
      "immediate": 1,
      "short": 3,
      "extended": 4
    },
    {
      "timestamp": "2026-08-05T07:20:31.314677Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-05T10:03:52.436465Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-05T12:17:31.176260Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-05T14:42:35.156451Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-05T16:28:17.436434Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-05T18:05:15.475102Z",
      "immediate": 4,
      "short": 14,
      "extended": 22
    },
    {
      "timestamp": "2026-08-05T19:55:14.880133Z",
      "immediate": 4,
      "short": 14,
      "extended": 22
    },
    {
      "timestamp": "2026-08-05T21:21:46.752827Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-05T22:34:07.490789Z",
      "immediate": 22,
      "short": 29,
      "extended": 32
    },
    {
      "timestamp": "2026-08-05T23:39:31.811255Z",
      "immediate": 17,
      "short": 22,
      "extended": 24
    },
    {
      "timestamp": "2026-08-06T01:06:55.612082Z",
      "immediate": 11,
      "short": 15,
      "extended": 16
    },
    {
      "timestamp": "2026-08-06T04:31:58.441297Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-06T07:22:45.249444Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-08-06T10:09:15.786832Z",
      "immediate": 2,
      "short": 7,
      "extended": 11
    },
    {
      "timestamp": "2026-08-06T12:20:02.344967Z",
      "immediate": 1,
      "short": 4,
      "extended": 6
    },
    {
      "timestamp": "2026-08-06T14:44:12.723369Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-07T00:21:30.245770Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-07T03:26:10.995456Z",
      "immediate": 19,
      "short": 22,
      "extended": 22
    },
    {
      "timestamp": "2026-08-07T05:18:30.414311Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-07T06:39:30.672095Z",
      "immediate": 2,
      "short": 7,
      "extended": 11
    },
    {
      "timestamp": "2026-08-07T08:00:35.587116Z",
      "immediate": 21,
      "short": 24,
      "extended": 25
    },
    {
      "timestamp": "2026-08-07T09:12:24.499533Z",
      "immediate": 15,
      "short": 18,
      "extended": 18
    },
    {
      "timestamp": "2026-08-07T10:14:37.982513Z",
      "immediate": 11,
      "short": 13,
      "extended": 14
    },
    {
      "timestamp": "2026-08-07T11:13:15.026658Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-07T12:01:38.044429Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-08-07T13:32:53.294079Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-07T14:36:52.130190Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-07T15:37:34.923653Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-07T16:34:43.804117Z",
      "immediate": 23,
      "short": 27,
      "extended": 27
    },
    {
      "timestamp": "2026-08-07T17:34:30.795859Z",
      "immediate": 17,
      "short": 20,
      "extended": 21
    },
    {
      "timestamp": "2026-08-07T18:30:31.446034Z",
      "immediate": 15,
      "short": 21,
      "extended": 25
    },
    {
      "timestamp": "2026-08-07T19:36:42.620785Z",
      "immediate": 11,
      "short": 16,
      "extended": 19
    },
    {
      "timestamp": "2026-08-07T20:23:11.079402Z",
      "immediate": 9,
      "short": 13,
      "extended": 15
    },
    {
      "timestamp": "2026-08-07T21:10:50.417840Z",
      "immediate": 7,
      "short": 10,
      "extended": 12
    },
    {
      "timestamp": "2026-08-07T21:57:38.887064Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-07T22:49:49.589008Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-08-07T23:24:52.061725Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-08T00:03:05.027932Z",
      "immediate": 4,
      "short": 12,
      "extended": 21
    },
    {
      "timestamp": "2026-08-08T02:18:31.340311Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-08T03:48:54.794803Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-08T04:44:12.361889Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-08T05:33:05.365720Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-08T06:24:05.787449Z",
      "immediate": 1,
      "short": 4,
      "extended": 8
    },
    {
      "timestamp": "2026-08-08T07:32:11.133972Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-08T08:19:33.834886Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-08T09:07:35.529726Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-08T09:54:53.478172Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-08T10:44:24.269917Z",
      "immediate": 1,
      "short": 5,
      "extended": 8
    },
    {
      "timestamp": "2026-08-08T11:17:34.287936Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-08T11:50:33.391294Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-08T12:29:26.553832Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-08T13:29:43.762493Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-08T14:10:16.644792Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-08T14:51:01.392608Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-08T15:21:49.730260Z",
      "immediate": 5,
      "short": 16,
      "extended": 27
    },
    {
      "timestamp": "2026-08-08T15:56:09.931646Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-08T16:47:04.810913Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-08T17:18:57.747957Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-08T17:54:29.801653Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-08T18:52:33.328470Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-08T19:26:27.110556Z",
      "immediate": 3,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-08T19:57:49.051823Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-08T20:40:54.041589Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-08T21:12:36.809668Z",
      "immediate": 3,
      "short": 11,
      "extended": 19
    },
    {
      "timestamp": "2026-08-08T21:49:52.731170Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-08T22:18:00.131406Z",
      "immediate": 3,
      "short": 8,
      "extended": 14
    },
    {
      "timestamp": "2026-08-08T22:52:47.881293Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-08T23:28:37.779916Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-08T23:58:12.575381Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-09T02:23:32.519226Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-09T03:58:13.567886Z",
      "immediate": 22,
      "short": 27,
      "extended": 28
    },
    {
      "timestamp": "2026-08-09T05:13:38.095482Z",
      "immediate": 17,
      "short": 23,
      "extended": 27
    },
    {
      "timestamp": "2026-08-09T06:05:10.494344Z",
      "immediate": 13,
      "short": 18,
      "extended": 21
    },
    {
      "timestamp": "2026-08-09T07:16:46.190895Z",
      "immediate": 22,
      "short": 25,
      "extended": 26
    },
    {
      "timestamp": "2026-08-09T08:06:19.442281Z",
      "immediate": 17,
      "short": 21,
      "extended": 21
    },
    {
      "timestamp": "2026-08-09T09:03:01.689978Z",
      "immediate": 13,
      "short": 16,
      "extended": 17
    },
    {
      "timestamp": "2026-08-09T09:53:30.175859Z",
      "immediate": 10,
      "short": 13,
      "extended": 13
    },
    {
      "timestamp": "2026-08-09T10:34:11.246368Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-09T11:13:32.581518Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-09T11:49:14.191583Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-09T12:24:01.232926Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-09T13:33:38.474677Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-09T14:18:42.036641Z",
      "immediate": 10,
      "short": 13,
      "extended": 13
    },
    {
      "timestamp": "2026-08-09T14:58:24.394842Z",
      "immediate": 8,
      "short": 11,
      "extended": 11
    },
    {
      "timestamp": "2026-08-09T15:40:25.814871Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-09T16:13:33.547992Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-09T16:58:58.188836Z",
      "immediate": 22,
      "short": 25,
      "extended": 24
    },
    {
      "timestamp": "2026-08-09T17:40:25.189166Z",
      "immediate": 34,
      "short": 34,
      "extended": 28
    },
    {
      "timestamp": "2026-08-09T18:15:33.952636Z",
      "immediate": 32,
      "short": 34,
      "extended": 31
    },
    {
      "timestamp": "2026-08-09T19:09:14.427114Z",
      "immediate": 25,
      "short": 27,
      "extended": 25
    },
    {
      "timestamp": "2026-08-09T19:49:12.193575Z",
      "immediate": 22,
      "short": 26,
      "extended": 26
    },
    {
      "timestamp": "2026-08-09T20:18:16.886744Z",
      "immediate": 14,
      "short": 20,
      "extended": 24
    },
    {
      "timestamp": "2026-08-09T20:58:27.905765Z",
      "immediate": 11,
      "short": 17,
      "extended": 20
    },
    {
      "timestamp": "2026-08-09T21:41:43.168956Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-09T22:13:09.909709Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-09T22:54:14.549472Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-09T23:41:10.580925Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-10T00:36:51.796012Z",
      "immediate": 5,
      "short": 15,
      "extended": 23
    },
    {
      "timestamp": "2026-08-10T02:59:52.286014Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-10T04:48:56.777233Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-10T06:05:49.417154Z",
      "immediate": 3,
      "short": 9,
      "extended": 14
    },
    {
      "timestamp": "2026-08-10T08:05:12.924797Z",
      "immediate": 1,
      "short": 5,
      "extended": 8
    },
    {
      "timestamp": "2026-08-10T09:48:31.238945Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-10T10:55:00.886748Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-10T11:55:37.961836Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-10T13:36:32.331513Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-10T14:44:49.580796Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-08-10T15:46:16.922541Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-10T16:39:48.764374Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-10T17:38:47.265150Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-10T18:35:35.341333Z",
      "immediate": 3,
      "short": 9,
      "extended": 16
    },
    {
      "timestamp": "2026-08-10T19:42:55.187433Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-10T20:26:26.480614Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-10T21:23:05.079097Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-10T22:07:25.078189Z",
      "immediate": 22,
      "short": 24,
      "extended": 22
    },
    {
      "timestamp": "2026-08-10T22:57:04.288930Z",
      "immediate": 17,
      "short": 19,
      "extended": 18
    },
    {
      "timestamp": "2026-08-10T23:45:50.913684Z",
      "immediate": 14,
      "short": 16,
      "extended": 16
    },
    {
      "timestamp": "2026-08-11T00:44:04.613780Z",
      "immediate": 11,
      "short": 12,
      "extended": 12
    },
    {
      "timestamp": "2026-08-11T02:57:45.607364Z",
      "immediate": 6,
      "short": 7,
      "extended": 7
    },
    {
      "timestamp": "2026-08-11T04:35:57.666050Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-11T05:42:31.224975Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-11T06:39:55.780002Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-11T07:57:14.604140Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-11T09:11:07.333210Z",
      "immediate": 3,
      "short": 8,
      "extended": 14
    },
    {
      "timestamp": "2026-08-11T10:13:43.187492Z",
      "immediate": 2,
      "short": 6,
      "extended": 11
    },
    {
      "timestamp": "2026-08-11T11:08:51.079009Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-08-11T11:57:37.179994Z",
      "immediate": 1,
      "short": 3,
      "extended": 5
    },
    {
      "timestamp": "2026-08-11T13:25:57.345774Z",
      "immediate": 0,
      "short": 0,
      "extended": 0
    },
    {
      "timestamp": "2026-08-11T14:39:11.328637Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-11T15:40:48.911734Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-11T16:39:11.768571Z",
      "immediate": 32,
      "short": 34,
      "extended": 31
    },
    {
      "timestamp": "2026-08-11T17:42:13.439781Z",
      "immediate": 25,
      "short": 27,
      "extended": 25
    },
    {
      "timestamp": "2026-08-11T18:39:44.469471Z",
      "immediate": 19,
      "short": 21,
      "extended": 20
    },
    {
      "timestamp": "2026-08-11T19:47:02.671336Z",
      "immediate": 28,
      "short": 30,
      "extended": 29
    },
    {
      "timestamp": "2026-08-11T20:32:08.075258Z",
      "immediate": 23,
      "short": 25,
      "extended": 24
    },
    {
      "timestamp": "2026-08-11T21:27:19.000099Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-11T22:21:32.174206Z",
      "immediate": 28,
      "short": 31,
      "extended": 29
    },
    {
      "timestamp": "2026-08-11T23:11:31.561382Z",
      "immediate": 23,
      "short": 26,
      "extended": 25
    },
    {
      "timestamp": "2026-08-12T00:02:20.826391Z",
      "immediate": 13,
      "short": 20,
      "extended": 25
    },
    {
      "timestamp": "2026-08-12T02:39:50.461748Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-12T04:28:22.414191Z",
      "immediate": 5,
      "short": 17,
      "extended": 27
    },
    {
      "timestamp": "2026-08-12T06:02:23.991015Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-12T07:47:40.424975Z",
      "immediate": 2,
      "short": 7,
      "extended": 11
    },
    {
      "timestamp": "2026-08-12T08:57:18.666285Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-12T10:16:57.032598Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-12T11:14:39.310210Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-12T12:05:00.224059Z",
      "immediate": 3,
      "short": 11,
      "extended": 19
    },
    {
      "timestamp": "2026-08-12T13:47:38.008923Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-12T14:49:28.335620Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-12T15:48:52.860286Z",
      "immediate": 2,
      "short": 7,
      "extended": 11
    },
    {
      "timestamp": "2026-08-12T16:43:32.806970Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-12T17:45:25.973370Z",
      "immediate": 1,
      "short": 4,
      "extended": 7
    },
    {
      "timestamp": "2026-08-12T18:43:43.820403Z",
      "immediate": 25,
      "short": 28,
      "extended": 28
    },
    {
      "timestamp": "2026-08-12T19:55:07.605721Z",
      "immediate": 18,
      "short": 21,
      "extended": 21
    },
    {
      "timestamp": "2026-08-12T20:57:32.130590Z",
      "immediate": 13,
      "short": 16,
      "extended": 16
    },
    {
      "timestamp": "2026-08-12T21:56:42.358432Z",
      "immediate": 10,
      "short": 12,
      "extended": 12
    },
    {
      "timestamp": "2026-08-12T22:53:49.343773Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-12T23:53:07.858593Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-13T01:51:18.691789Z",
      "immediate": 25,
      "short": 28,
      "extended": 29
    },
    {
      "timestamp": "2026-08-13T04:06:16.593161Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-08-13T05:49:13.367158Z",
      "immediate": 34,
      "short": 34,
      "extended": 32
    },
    {
      "timestamp": "2026-08-13T07:10:48.286301Z",
      "immediate": 34,
      "short": 34,
      "extended": 31
    },
    {
      "timestamp": "2026-08-13T08:45:08.693829Z",
      "immediate": 33,
      "short": 33,
      "extended": 28
    },
    {
      "timestamp": "2026-08-13T09:52:05.692527Z",
      "immediate": 17,
      "short": 22,
      "extended": 24
    },
    {
      "timestamp": "2026-08-13T10:58:33.425915Z",
      "immediate": 13,
      "short": 19,
      "extended": 23
    },
    {
      "timestamp": "2026-08-13T11:55:44.677146Z",
      "immediate": 10,
      "short": 15,
      "extended": 18
    },
    {
      "timestamp": "2026-08-13T13:38:03.638074Z",
      "immediate": 34,
      "short": 34,
      "extended": 33
    },
    {
      "timestamp": "2026-08-13T14:45:08.462881Z",
      "immediate": 31,
      "short": 31,
      "extended": 25
    },
    {
      "timestamp": "2026-08-13T15:45:54.836185Z",
      "immediate": 34,
      "short": 34,
      "extended": 32
    },
    {
      "timestamp": "2026-08-13T16:42:20.136050Z",
      "immediate": 34,
      "short": 34,
      "extended": 29
    },
    {
      "timestamp": "2026-08-13T17:45:31.731349Z",
      "immediate": 22,
      "short": 23,
      "extended": 19
    },
    {
      "timestamp": "2026-08-13T18:44:09.124826Z",
      "immediate": 18,
      "short": 22,
      "extended": 23
    },
    {
      "timestamp": "2026-08-13T19:49:48.986966Z",
      "immediate": 13,
      "short": 16,
      "extended": 17
    },
    {
      "timestamp": "2026-08-13T20:30:30.912050Z",
      "immediate": 11,
      "short": 14,
      "extended": 14
    },
    {
      "timestamp": "2026-08-13T21:26:23.410574Z",
      "immediate": 9,
      "short": 11,
      "extended": 11
    },
    {
      "timestamp": "2026-08-13T22:22:02.912265Z",
      "immediate": 1,
      "short": 3,
      "extended": 6
    },
    {
      "timestamp": "2026-08-13T23:11:42.729947Z",
      "immediate": 34,
      "short": 34,
      "extended": 30
    },
    {
      "timestamp": "2026-08-14T00:02:15.057038Z",
      "immediate": 27,
      "short": 28,
      "extended": 24
    },
    {
      "timestamp": "2026-08-14T02:41:01.228154Z",
      "immediate": 10,
      "short": 11,
      "extended": 11
    },
    {
      "timestamp": "2026-08-14T04:31:21.686740Z",
      "immediate": 33,
      "short": 33,
      "extended": 26
    },
    {
      "timestamp": "2026-08-14T06:03:14.591776Z",
      "immediate": 32,
      "short": 34,
      "extended": 26
    },
    {
      "timestamp": "2026-08-14T07:47:36.081027Z",
      "immediate": 20,
      "short": 22,
      "extended": 17
    },
    {
      "timestamp": "2026-08-14T08:55:03.522566Z",
      "immediate": 15,
      "short": 16,
      "extended": 12
    },
    {
      "timestamp": "2026-08-14T10:13:20.725936Z",
      "immediate": 34,
      "short": 34,
      "extended": 33
    },
    {
      "timestamp": "2026-08-14T11:11:18.587725Z",
      "immediate": 34,
      "short": 34,
      "extended": 28
    },
    {
      "timestamp": "2026-08-14T11:59:42.660819Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-14T13:33:56.761644Z",
      "immediate": 34,
      "short": 34,
      "extended": 29
    },
    {
      "timestamp": "2026-08-14T14:39:48.949138Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-14T15:34:58.692551Z",
      "immediate": 34,
      "short": 34,
      "extended": 29
    },
    {
      "timestamp": "2026-08-14T16:32:52.704593Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-14T17:35:55.334472Z",
      "immediate": 30,
      "short": 31,
      "extended": 26
    },
    {
      "timestamp": "2026-08-14T18:34:06.560729Z",
      "immediate": 13,
      "short": 20,
      "extended": 25
    },
    {
      "timestamp": "2026-08-14T19:38:14.114132Z",
      "immediate": 10,
      "short": 15,
      "extended": 19
    },
    {
      "timestamp": "2026-08-14T20:16:09.230012Z",
      "immediate": 8,
      "short": 13,
      "extended": 16
    },
    {
      "timestamp": "2026-08-14T20:52:21.808178Z",
      "immediate": 7,
      "short": 11,
      "extended": 14
    },
    {
      "timestamp": "2026-08-14T21:22:02.538744Z",
      "immediate": 2,
      "short": 7,
      "extended": 11
    },
    {
      "timestamp": "2026-08-14T21:49:25.710984Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-14T22:11:26.832525Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-14T22:43:42.811125Z",
      "immediate": 3,
      "short": 11,
      "extended": 19
    },
    {
      "timestamp": "2026-08-14T23:03:38.526935Z",
      "immediate": 3,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-14T23:33:33.953870Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-14T23:57:29.633632Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-15T01:45:06.341202Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-08-15T02:42:27.166736Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-15T03:24:49.940165Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-15T04:06:17.913808Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-15T04:48:06.745519Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-15T05:14:14.600707Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-15T05:47:08.034722Z",
      "immediate": 2,
      "short": 8,
      "extended": 14
    },
    {
      "timestamp": "2026-08-15T06:17:17.301878Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-15T07:04:24.977838Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-15T07:44:49.388569Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-15T08:13:14.472760Z",
      "immediate": 3,
      "short": 8,
      "extended": 14
    },
    {
      "timestamp": "2026-08-15T08:48:34.972183Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-15T09:13:51.966330Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-15T09:46:40.693165Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-15T10:10:28.928009Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-08-15T10:42:15.936174Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-15T11:01:21.417037Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-15T11:30:47.577604Z",
      "immediate": 4,
      "short": 12,
      "extended": 21
    },
    {
      "timestamp": "2026-08-15T11:51:35.254062Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-08-15T12:28:58.680528Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-15T13:09:58.751677Z",
      "immediate": 3,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-15T13:45:20.471550Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-15T14:10:06.299924Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-15T14:41:39.648403Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-15T15:01:26.838112Z",
      "immediate": 24,
      "short": 26,
      "extended": 25
    },
    {
      "timestamp": "2026-08-15T15:32:31.247233Z",
      "immediate": 21,
      "short": 23,
      "extended": 22
    },
    {
      "timestamp": "2026-08-15T15:53:44.221514Z",
      "immediate": 19,
      "short": 21,
      "extended": 20
    },
    {
      "timestamp": "2026-08-15T16:24:22.795703Z",
      "immediate": 16,
      "short": 18,
      "extended": 18
    },
    {
      "timestamp": "2026-08-15T16:54:58.602951Z",
      "immediate": 14,
      "short": 16,
      "extended": 15
    },
    {
      "timestamp": "2026-08-15T17:29:49.108231Z",
      "immediate": 30,
      "short": 32,
      "extended": 29
    },
    {
      "timestamp": "2026-08-15T17:51:52.909810Z",
      "immediate": 27,
      "short": 30,
      "extended": 28
    },
    {
      "timestamp": "2026-08-15T18:24:48.799466Z",
      "immediate": 34,
      "short": 34,
      "extended": 34
    },
    {
      "timestamp": "2026-08-15T18:59:28.218880Z",
      "immediate": 34,
      "short": 33,
      "extended": 28
    },
    {
      "timestamp": "2026-08-15T19:29:27.239361Z",
      "immediate": 19,
      "short": 24,
      "extended": 25
    },
    {
      "timestamp": "2026-08-15T19:50:41.251245Z",
      "immediate": 18,
      "short": 22,
      "extended": 23
    },
    {
      "timestamp": "2026-08-15T20:13:55.386889Z",
      "immediate": 16,
      "short": 20,
      "extended": 22
    },
    {
      "timestamp": "2026-08-15T20:44:17.268662Z",
      "immediate": 15,
      "short": 22,
      "extended": 27
    },
    {
      "timestamp": "2026-08-15T21:09:35.470493Z",
      "immediate": 14,
      "short": 20,
      "extended": 24
    },
    {
      "timestamp": "2026-08-15T21:36:26.101682Z",
      "immediate": 12,
      "short": 18,
      "extended": 21
    },
    {
      "timestamp": "2026-08-15T21:57:44.749990Z",
      "immediate": 11,
      "short": 17,
      "extended": 22
    },
    {
      "timestamp": "2026-08-15T22:32:44.233717Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-15T22:55:14.563704Z",
      "immediate": 3,
      "short": 11,
      "extended": 19
    },
    {
      "timestamp": "2026-08-15T23:28:38.797764Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-15T23:50:45.272072Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-16T00:50:37.497561Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-16T02:18:19.830894Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-16T03:24:34.022977Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-16T04:10:45.403734Z",
      "immediate": 34,
      "short": 34,
      "extended": 33
    },
    {
      "timestamp": "2026-08-16T04:52:28.706303Z",
      "immediate": 30,
      "short": 31,
      "extended": 28
    },
    {
      "timestamp": "2026-08-16T05:25:48.336530Z",
      "immediate": 26,
      "short": 27,
      "extended": 24
    },
    {
      "timestamp": "2026-08-16T05:57:22.984528Z",
      "immediate": 22,
      "short": 24,
      "extended": 21
    },
    {
      "timestamp": "2026-08-16T06:54:32.434779Z",
      "immediate": 17,
      "short": 18,
      "extended": 17
    },
    {
      "timestamp": "2026-08-16T07:39:42.221376Z",
      "immediate": 16,
      "short": 23,
      "extended": 27
    },
    {
      "timestamp": "2026-08-16T08:02:08.466093Z",
      "immediate": 15,
      "short": 21,
      "extended": 25
    },
    {
      "timestamp": "2026-08-16T08:44:18.671921Z",
      "immediate": 12,
      "short": 17,
      "extended": 20
    },
    {
      "timestamp": "2026-08-16T09:14:54.052834Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-16T09:48:14.696957Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-16T10:10:31.685635Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-16T10:42:50.644496Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-16T11:02:26.721010Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-16T11:31:09.285286Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-16T11:53:28.463158Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-16T12:37:36.752277Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-16T13:19:42.981235Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-16T13:50:23.450906Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-16T14:15:30.146837Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-16T14:44:59.473872Z",
      "immediate": 3,
      "short": 11,
      "extended": 19
    },
    {
      "timestamp": "2026-08-16T15:09:36.779509Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-16T15:36:18.751585Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-16T15:57:54.852387Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-16T16:36:41.267593Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-16T17:01:29.130901Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-16T17:30:15.356226Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-08-16T17:52:05.463322Z",
      "immediate": 4,
      "short": 14,
      "extended": 24
    },
    {
      "timestamp": "2026-08-16T18:22:44.234212Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-16T18:56:31.673258Z",
      "immediate": 34,
      "short": 34,
      "extended": 26
    },
    {
      "timestamp": "2026-08-16T19:28:58.478067Z",
      "immediate": 32,
      "short": 30,
      "extended": 23
    },
    {
      "timestamp": "2026-08-16T19:49:10.379761Z",
      "immediate": 30,
      "short": 28,
      "extended": 21
    },
    {
      "timestamp": "2026-08-16T20:08:49.148743Z",
      "immediate": 28,
      "short": 27,
      "extended": 23
    },
    {
      "timestamp": "2026-08-16T20:38:43.834784Z",
      "immediate": 26,
      "short": 30,
      "extended": 29
    },
    {
      "timestamp": "2026-08-16T20:59:37.928058Z",
      "immediate": 24,
      "short": 28,
      "extended": 26
    },
    {
      "timestamp": "2026-08-16T21:30:24.823323Z",
      "immediate": 21,
      "short": 24,
      "extended": 23
    },
    {
      "timestamp": "2026-08-16T21:51:22.376744Z",
      "immediate": 12,
      "short": 17,
      "extended": 20
    },
    {
      "timestamp": "2026-08-16T22:15:25.853432Z",
      "immediate": 11,
      "short": 15,
      "extended": 18
    },
    {
      "timestamp": "2026-08-16T22:43:31.841848Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-16T23:01:26.533549Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-16T23:30:23.892692Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-16T23:52:22.098456Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-17T01:02:59.442242Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-17T02:33:52.353092Z",
      "immediate": 1,
      "short": 5,
      "extended": 8
    },
    {
      "timestamp": "2026-08-17T03:31:44.312719Z",
      "immediate": 20,
      "short": 27,
      "extended": 27
    },
    {
      "timestamp": "2026-08-17T04:23:42.426115Z",
      "immediate": 16,
      "short": 21,
      "extended": 22
    },
    {
      "timestamp": "2026-08-17T05:08:41.571955Z",
      "immediate": 6,
      "short": 17,
      "extended": 21
    },
    {
      "timestamp": "2026-08-17T05:51:42.305498Z",
      "immediate": 5,
      "short": 14,
      "extended": 18
    },
    {
      "timestamp": "2026-08-17T06:42:31.945767Z",
      "immediate": 4,
      "short": 11,
      "extended": 14
    },
    {
      "timestamp": "2026-08-17T07:40:40.033918Z",
      "immediate": 20,
      "short": 24,
      "extended": 25
    },
    {
      "timestamp": "2026-08-17T08:25:53.098974Z",
      "immediate": 16,
      "short": 19,
      "extended": 21
    },
    {
      "timestamp": "2026-08-17T09:21:44.130434Z",
      "immediate": 12,
      "short": 15,
      "extended": 16
    },
    {
      "timestamp": "2026-08-17T10:04:52.483400Z",
      "immediate": 11,
      "short": 16,
      "extended": 19
    },
    {
      "timestamp": "2026-08-17T10:48:53.125109Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-17T11:14:18.797492Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-17T11:46:44.981414Z",
      "immediate": 1,
      "short": 3,
      "extended": 5
    },
    {
      "timestamp": "2026-08-17T12:16:39.735760Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-17T13:12:51.602099Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-17T13:55:47.725480Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-17T14:37:52.135882Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-17T15:02:22.687892Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-17T15:36:15.141868Z",
      "immediate": 3,
      "short": 9,
      "extended": 16
    },
    {
      "timestamp": "2026-08-17T16:00:08.035167Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-17T16:39:44.575477Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-17T17:05:32.103742Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-17T17:45:49.107447Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-17T18:18:47.176895Z",
      "immediate": 5,
      "short": 17,
      "extended": 27
    },
    {
      "timestamp": "2026-08-17T19:04:48.151805Z",
      "immediate": 5,
      "short": 17,
      "extended": 28
    },
    {
      "timestamp": "2026-08-17T19:43:06.945135Z",
      "immediate": 4,
      "short": 15,
      "extended": 24
    },
    {
      "timestamp": "2026-08-17T20:03:48.112506Z",
      "immediate": 5,
      "short": 17,
      "extended": 27
    },
    {
      "timestamp": "2026-08-17T20:44:40.172211Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-17T21:14:35.560573Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-08-17T21:46:34.270542Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-08-17T22:11:44.956056Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-17T22:44:33.799369Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-17T23:11:17.745760Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-17T23:40:19.773877Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-17T23:59:54.135063Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-18T01:46:43.405106Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-18T02:45:31.951769Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-18T03:34:26.768229Z",
      "immediate": 3,
      "short": 9,
      "extended": 16
    },
    {
      "timestamp": "2026-08-18T04:20:54.923167Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-18T05:01:24.902817Z",
      "immediate": 2,
      "short": 6,
      "extended": 10
    },
    {
      "timestamp": "2026-08-18T05:39:49.406258Z",
      "immediate": 16,
      "short": 21,
      "extended": 23
    },
    {
      "timestamp": "2026-08-18T06:04:26.615789Z",
      "immediate": 14,
      "short": 18,
      "extended": 20
    },
    {
      "timestamp": "2026-08-18T07:05:01.188347Z",
      "immediate": 11,
      "short": 14,
      "extended": 16
    },
    {
      "timestamp": "2026-08-18T07:54:50.375757Z",
      "immediate": 9,
      "short": 11,
      "extended": 13
    },
    {
      "timestamp": "2026-08-18T08:49:24.945394Z",
      "immediate": 7,
      "short": 9,
      "extended": 10
    },
    {
      "timestamp": "2026-08-18T09:21:06.400983Z",
      "immediate": 1,
      "short": 4,
      "extended": 6
    },
    {
      "timestamp": "2026-08-18T09:56:40.224449Z",
      "immediate": 22,
      "short": 23,
      "extended": 20
    },
    {
      "timestamp": "2026-08-18T10:39:30.612910Z",
      "immediate": 18,
      "short": 19,
      "extended": 17
    },
    {
      "timestamp": "2026-08-18T11:03:50.946105Z",
      "immediate": 16,
      "short": 17,
      "extended": 16
    },
    {
      "timestamp": "2026-08-18T11:36:25.070333Z",
      "immediate": 15,
      "short": 18,
      "extended": 18
    },
    {
      "timestamp": "2026-08-18T12:02:05.489418Z",
      "immediate": 15,
      "short": 20,
      "extended": 24
    },
    {
      "timestamp": "2026-08-18T13:04:27.836565Z",
      "immediate": 4,
      "short": 14,
      "extended": 22
    },
    {
      "timestamp": "2026-08-18T13:57:31.170998Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-18T14:44:38.373979Z",
      "immediate": 3,
      "short": 9,
      "extended": 14
    },
    {
      "timestamp": "2026-08-18T15:19:38.014997Z",
      "immediate": 2,
      "short": 7,
      "extended": 12
    },
    {
      "timestamp": "2026-08-18T15:54:41.179284Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-08-18T16:42:30.748473Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-18T17:12:11.907912Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-18T17:46:59.126654Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-08-18T18:18:15.671934Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-18T19:04:18.662643Z",
      "immediate": 3,
      "short": 11,
      "extended": 19
    },
    {
      "timestamp": "2026-08-18T19:41:43.720039Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-18T20:00:38.367297Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-18T20:36:12.009287Z",
      "immediate": 4,
      "short": 13,
      "extended": 21
    },
    {
      "timestamp": "2026-08-18T21:00:58.761946Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-18T21:34:08.553052Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-18T21:58:55.762050Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-18T22:35:02.451480Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-18T23:01:24.062305Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-18T23:32:53.088487Z",
      "immediate": 3,
      "short": 9,
      "extended": 15
    },
    {
      "timestamp": "2026-08-18T23:55:19.915620Z",
      "immediate": 5,
      "short": 17,
      "extended": 28
    },
    {
      "timestamp": "2026-08-19T01:47:46.058360Z",
      "immediate": 3,
      "short": 11,
      "extended": 17
    },
    {
      "timestamp": "2026-08-19T02:47:46.338644Z",
      "immediate": 2,
      "short": 8,
      "extended": 13
    },
    {
      "timestamp": "2026-08-19T03:36:09.429358Z",
      "immediate": 2,
      "short": 6,
      "extended": 11
    },
    {
      "timestamp": "2026-08-19T04:22:28.275896Z",
      "immediate": 2,
      "short": 5,
      "extended": 9
    },
    {
      "timestamp": "2026-08-19T05:02:10.973121Z",
      "immediate": 5,
      "short": 17,
      "extended": 27
    },
    {
      "timestamp": "2026-08-19T05:43:10.234618Z",
      "immediate": 5,
      "short": 18,
      "extended": 29
    },
    {
      "timestamp": "2026-08-19T06:18:05.942692Z",
      "immediate": 5,
      "short": 15,
      "extended": 25
    },
    {
      "timestamp": "2026-08-19T07:12:39.298148Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-19T07:56:26.939990Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-19T08:49:44.139909Z",
      "immediate": 5,
      "short": 16,
      "extended": 26
    },
    {
      "timestamp": "2026-08-19T09:23:20.822099Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-19T09:58:41.780011Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-19T10:39:23.833827Z",
      "immediate": 4,
      "short": 12,
      "extended": 19
    },
    {
      "timestamp": "2026-08-19T11:03:16.583847Z",
      "immediate": 3,
      "short": 10,
      "extended": 17
    },
    {
      "timestamp": "2026-08-19T11:36:09.868332Z",
      "immediate": 3,
      "short": 10,
      "extended": 16
    },
    {
      "timestamp": "2026-08-19T12:01:28.040949Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-19T13:05:44.975435Z",
      "immediate": 2,
      "short": 8,
      "extended": 14
    },
    {
      "timestamp": "2026-08-19T13:57:45.438538Z",
      "immediate": 4,
      "short": 13,
      "extended": 22
    },
    {
      "timestamp": "2026-08-19T14:45:05.762277Z",
      "immediate": 3,
      "short": 11,
      "extended": 18
    },
    {
      "timestamp": "2026-08-19T15:19:10.050353Z",
      "immediate": 4,
      "short": 14,
      "extended": 23
    },
    {
      "timestamp": "2026-08-19T15:54:18.546602Z",
      "immediate": 4,
      "short": 12,
      "extended": 20
    },
    {
      "timestamp": "2026-08-19T16:41:20.449649Z",
      "immediate": 21,
      "short": 25,
      "extended": 26
    },
    {
      "timestamp": "2026-08-19T17:09:39.576734Z",
      "immediate": 18,
      "short": 22,
      "extended": 23
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-08-19T16:41:20.449649Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "HTTP Error 429: Too Many Requests",
        "carried_forward": 11
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
