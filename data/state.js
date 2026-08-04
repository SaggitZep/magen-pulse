window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-08-04T00:04:26.988979Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 3,
      "low": 0,
      "high": 19,
      "confidence": 49,
      "status": "לא זוהה אות חריג"
    },
    "short": {
      "label": "6 שעות",
      "score": 10,
      "low": 0,
      "high": 26,
      "confidence": 49,
      "status": "נמוך"
    },
    "extended": {
      "label": "24 שעות",
      "score": 17,
      "low": 1,
      "high": 33,
      "confidence": 49,
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
      "time": "01:00",
      "text": "Trump threatens more strikes on Iran ; Kuwait reports new drone attacks",
      "impact": "השפעה מיידית מחושבת: +1.2",
      "direction": "up",
      "source": "latimes.com",
      "signal_id": "bb4826505ada70b9"
    },
    {
      "time": "01:00",
      "text": "New talks are  last chance  for Iran to forge a deal and avoid escalation of US strikes , Trump says – Brandon Sun",
      "impact": "השפעה מיידית מחושבת: +0.9",
      "direction": "up",
      "source": "brandonsun.com",
      "signal_id": "feb1cf05955ee3b4"
    },
    {
      "time": "00:45",
      "text": "Strait of Hormuz could reopen by tomorrow , denuclearisation to be next phase of Iran talks : says President Trump on talks with Iran",
      "impact": "השפעה מיידית מחושבת: +0.9",
      "direction": "up",
      "source": "austinglobe.com",
      "signal_id": "05259b2fd1f8d1f5"
    },
    {
      "time": "00:30",
      "text": "Trump : Iran  Last Chance  as US Pauses Strike",
      "impact": "השפעה מיידית מחושבת: +0.8",
      "direction": "up",
      "source": "newkerala.com",
      "signal_id": "0df4047c9482fd01"
    }
  ],
  "signals": [
    {
      "id": "bb4826505ada70b9",
      "name": "Trump threatens more strikes on Iran ; Kuwait reports new drone attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "bb4826505ada70b9",
      "strength": 0.53,
      "reliability": 0.56,
      "freshness": 0.553,
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
      "source": "latimes.com",
      "url": "https://www.latimes.com/world-nation/story/2026-08-01/trump-threatens-more-strikes-on-iran-kuwait-reports-new-drone-attacks",
      "published_at": "2026-08-03T22:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.2,
        "extended": 7.2
      },
      "carried_forward": true
    },
    {
      "id": "feb1cf05955ee3b4",
      "name": "New talks are  last chance  for Iran to forge a deal and avoid escalation of US strikes , Trump says – Brandon Sun",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "feb1cf05955ee3b4",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.553,
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
      "source": "brandonsun.com",
      "url": "https://www.brandonsun.com/world/2026/08/03/trump-says-new-talks-are-last-chance-for-iran-to-forge-deal-and-avoid-escalation-of-us-strikes",
      "published_at": "2026-08-03T22:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
      },
      "carried_forward": true
    },
    {
      "id": "05259b2fd1f8d1f5",
      "name": "Strait of Hormuz could reopen by tomorrow , denuclearisation to be next phase of Iran talks : says President Trump on talks with Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "05259b2fd1f8d1f5",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.515,
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
      "source": "austinglobe.com",
      "url": "http://www.austinglobe.com/news/279221252/strait-of-hormuz-could-reopen-by-tomorrow-denuclearisation-to-be-next-phase-of-iran-talks-says-president-trump-on-talks-with-iran",
      "published_at": "2026-08-03T21:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.1
      },
      "carried_forward": true
    },
    {
      "id": "0df4047c9482fd01",
      "name": "Trump : Iran  Last Chance  as US Pauses Strike",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0df4047c9482fd01",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.479,
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
      "url": "https://www.newkerala.com/news/a/this-irans-last-chance-trump-says-us-paused-918.htm",
      "published_at": "2026-08-03T21:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "700c95f083e10819",
      "name": "Trump : Hormuz Reopening Soon , Iran Denuclearization Next",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "700c95f083e10819",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.479,
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
      "url": "https://www.newkerala.com/news/a/strait-hormuz-could-reopen-tomorrow-denuclearisation-next-phase-720.htm",
      "published_at": "2026-08-03T21:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "a3ccdd8af67513cf",
      "name": "This is Iran last chance : Trump says US paused planned attack after calls from Saudi Arabia , UAE , Qatar",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a3ccdd8af67513cf",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.446,
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
      "url": "http://www.arabherald.com/news/279221250/this-is-iran-last-chance-trump-says-us-paused-planned-attack-after-calls-from-saudi-arabia-uae-qatar",
      "published_at": "2026-08-03T21:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      },
      "carried_forward": true
    },
    {
      "id": "3fbae245fcb819a4",
      "name": "US military asks for  creative and unconventional idea to punish Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3fbae245fcb819a4",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.415,
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
      "source": "aol.com",
      "url": "https://www.aol.com/articles/us-military-asks-creative-unconventional-131804000.html",
      "published_at": "2026-08-03T21:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      },
      "carried_forward": true
    },
    {
      "id": "775b6c081d9cfbfc",
      "name": "Crude Oil Nosedives After Trump Calls Off Planned Attacks On Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "775b6c081d9cfbfc",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.271,
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
      "source": "finanzen.ch",
      "url": "https://www.finanzen.ch/nachrichten/aktien/crude-oil-nosedives-after-trump-calls-off-planned-attacks-on-iran-1036401656",
      "published_at": "2026-08-03T19:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "3da5b4362f9f768e",
      "name": "Trump claims Iran talks continue as IRGC commander issues threat warning",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3da5b4362f9f768e",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.235,
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
      "url": "https://gulfnews.com/world/mena/trump-says-iran-talks-ongoing-as-irgc-warns-it-is-ready-for-any-threat-1.500628738",
      "published_at": "2026-08-03T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.5,
        "extended": 2.6
      },
      "carried_forward": true
    },
    {
      "id": "9f50656648122bc4",
      "name": "Iran Nears Hormuz Deal with Oman but Denies Planned US Talks After Trump Halts Attack Threat",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9f50656648122bc4",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.235,
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
      "source": "newseveryday.com",
      "url": "http://www.newseveryday.com/articles/64890/20260803/iran-nears-hormuz-deal-with-oman-but-denies-planned-us-talks-after-trump-halts-attack-threat.htm",
      "published_at": "2026-08-03T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.5,
        "extended": 2.6
      },
      "carried_forward": true
    },
    {
      "id": "4af2c072858daebe",
      "name": "Trump says new talks are  last chance  for Iran to forge deal and avoid escalation of US strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "4af2c072858daebe",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.235,
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
      "source": "union-bulletin.com",
      "url": "https://www.union-bulletin.com/news/national/trump-says-new-talks-are-last-chance-for-iran-to-forge-deal-and-avoid-escalation/article_754640c3-9ea9-5c0d-a570-227e6885bc10.html",
      "published_at": "2026-08-03T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.3
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-08-03T22:51:14.498338Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "The read operation timed out",
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
