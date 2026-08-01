window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-08-01T19:56:30.933744Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 34,
      "low": 18,
      "high": 50,
      "confidence": 51,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 34,
      "low": 18,
      "high": 50,
      "confidence": 51,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 29,
      "low": 13,
      "high": 45,
      "confidence": 50,
      "status": "מוגבר"
    }
  },
  "coverage": {
    "percent": 50,
    "available": 1,
    "expected": 2
  },
  "velocity": {
    "level": "יציב",
    "points_60m": 0
  },
  "changes": [
    {
      "time": "21:00",
      "text": "Report : U . S . Short on Forces to Defend Israel From Iranian Missiles , General Warns",
      "impact": "השפעה מיידית מחושבת: +25.5",
      "direction": "up",
      "source": "haaretz.com",
      "signal_id": "33daa76f53f57911"
    },
    {
      "time": "21:00",
      "text": "Iran War Day 155 : U . S . and Israel Planning Massive Attack , CBS News Reports",
      "impact": "השפעה מיידית מחושבת: +14.1",
      "direction": "up",
      "source": "theamericanconservative.com",
      "signal_id": "a7476619c3a98ab5"
    },
    {
      "time": "19:15",
      "text": "Iran warns of strikes on Israeli and US energy facilities if attacked – The Indian Awaaz",
      "impact": "השפעה מיידית מחושבת: +9.4",
      "direction": "up",
      "source": "theindianawaaz.com",
      "signal_id": "3a25be4d76dbd255"
    },
    {
      "time": "21:00",
      "text": "Trump Threatens Further Strikes as Iran Conflict Deepens",
      "impact": "השפעה מיידית מחושבת: +1.1",
      "direction": "up",
      "source": "kabc.com",
      "signal_id": "545af8c0f97b069d"
    }
  ],
  "signals": [
    {
      "id": "33daa76f53f57911",
      "name": "Report : U . S . Short on Forces to Defend Israel From Iranian Missiles , General Warns",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "33daa76f53f57911",
      "strength": 0.63,
      "reliability": 0.8,
      "freshness": 0.574,
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
      "source": "haaretz.com",
      "url": "https://www.haaretz.com/israel-news/israel-security/2026-08-01/ty-article/report-u-s-lacks-forces-to-defend-israel-from-iranian-missiles-general-warns/0000019f-bd56-ded7-adbf-fddf0d070000",
      "published_at": "2026-08-01T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 25.5,
        "short": 19.9,
        "extended": 8.4
      },
      "carried_forward": true
    },
    {
      "id": "a7476619c3a98ab5",
      "name": "Iran War Day 155 : U . S . and Israel Planning Massive Attack , CBS News Reports",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a7476619c3a98ab5",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.574,
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
      "source": "theamericanconservative.com",
      "url": "https://www.theamericanconservative.com/iran-war-day-155-u-s-and-israel-planning-massive-attack-cbs-news-reports/",
      "published_at": "2026-08-01T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 14.1,
        "short": 11.0,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "3a25be4d76dbd255",
      "name": "Iran warns of strikes on Israeli and US energy facilities if attacked – The Indian Awaaz",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3a25be4d76dbd255",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.348,
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
      "source": "theindianawaaz.com",
      "url": "https://theindianawaaz.com/iran-warns-of-strikes-on-israeli-and-us-energy-facilities-if-attacked/",
      "published_at": "2026-08-01T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 9.4,
        "short": 7.4,
        "extended": 3.1
      },
      "carried_forward": true
    },
    {
      "id": "545af8c0f97b069d",
      "name": "Trump Threatens Further Strikes as Iran Conflict Deepens",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "545af8c0f97b069d",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.574,
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
      "source": "kabc.com",
      "url": "https://www.kabc.com/2026/08/01/trump-threatens-further-strikes-as-iran-conflict-deepens/",
      "published_at": "2026-08-01T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.4
      },
      "carried_forward": true
    },
    {
      "id": "1757bcfb169e4f2a",
      "name": "Trump threatens more strikes on Iran . Tensions from Hormuz to Kuwait and Gaza lead to more warnings",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1757bcfb169e4f2a",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.498,
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
      "source": "durangoherald.com",
      "url": "https://www.durangoherald.com/articles/associated-press/trump-threatens-more-strikes-on-iran-and-other-developments-in-the-middle-east/",
      "published_at": "2026-08-01T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.2,
        "extended": 5.5
      },
      "carried_forward": true
    },
    {
      "id": "eb4b4c5e57b858ed",
      "name": "Trump threatens strikes on Iran , other Mideast developments",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "eb4b4c5e57b858ed",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.498,
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
      "source": "wsbradio.com",
      "url": "https://www.wsbradio.com/news/world/trump-threatens-more/WRLSS3MNRAYANBHUC66UF4WURE/",
      "published_at": "2026-08-01T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.2,
        "extended": 5.5
      },
      "carried_forward": true
    },
    {
      "id": "4f9ad16ed549ae46",
      "name": "Trump threatens more strikes on Iran , and other developments in the Middle East",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "4f9ad16ed549ae46",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.402,
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
      "url": "https://www.breitbart.com/news/trump-threatens-more-strikes-on-iran-and-other-developments-in-the-middle-east/",
      "published_at": "2026-08-01T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.5
      },
      "carried_forward": true
    },
    {
      "id": "5e1162ef2b9a8485",
      "name": "Kuwait air defences respond to Iranian drone attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5e1162ef2b9a8485",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.348,
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
      "source": "thenationalnews.com",
      "url": "https://www.thenationalnews.com/news/mena/2026/08/01/kuwaits-air-defences-respond-to-iranian-drone-attacks/",
      "published_at": "2026-08-01T16:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      },
      "carried_forward": true
    },
    {
      "id": "abffe2dbf57b1338",
      "name": "Top US General warns Pentagon it lacks enough naval forces to keep defending Israel from Iranian attacks : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "abffe2dbf57b1338",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.324,
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
      "url": "https://www.livemint.com/news/us-news/top-us-general-warns-pentagon-it-lacks-enough-naval-forces-to-keep-defending-israel-from-iranian-attacks-report-11785594943756.html",
      "published_at": "2026-08-01T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.1,
        "extended": 3.6
      },
      "carried_forward": true
    },
    {
      "id": "b64d8f2f0cc7a8ee",
      "name": "Iran warns against  fire of war  amid US strike threats on energy sites - Grenada Chronicle – Daily Grenada And Caribbean News",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b64d8f2f0cc7a8ee",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.262,
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
      "url": "https://grenadachronicle.com/iran-warns-against-fire-of-war-amid-us-strike-threats-on-energy-sites/",
      "published_at": "2026-08-01T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.7,
        "extended": 2.9
      },
      "carried_forward": true
    },
    {
      "id": "ab1e6f52b2157fbe",
      "name": "Iran warns against  fire of war  amid US strike threats on energy sites - Dominican Republic Post – Caribbean News , Business , Travel & Culture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ab1e6f52b2157fbe",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.244,
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
      "url": "https://dominicanrepublicpost.com/iran-warns-against-fire-of-war-amid-us-strike-threats-on-energy-sites/",
      "published_at": "2026-08-01T15:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "1d82e1bed5618d65",
      "name": "White House signals Trump is weighing new strikes on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1d82e1bed5618d65",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.262,
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
      "source": "jcpost.com",
      "url": "https://jcpost.com/posts/97b4f0fb-5aaa-4a00-9abd-76b367583a0c",
      "published_at": "2026-08-01T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.5,
        "extended": 2.6
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-08-01T18:33:35.275493Z",
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
