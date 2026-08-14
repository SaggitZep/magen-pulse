window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-08-14T06:03:14.591776Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 32,
      "low": 19,
      "high": 45,
      "confidence": 68,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 34,
      "low": 21,
      "high": 47,
      "confidence": 68,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 26,
      "low": 13,
      "high": 39,
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
    "level": "יציב",
    "points_60m": -1
  },
  "changes": [
    {
      "time": "07:15",
      "text": "Israel warned US of Iran plots against Trump , but US could not verify threats",
      "impact": "השפעה מיידית מחושבת: +16.2",
      "direction": "up",
      "source": "economictimes.indiatimes.com",
      "signal_id": "1776de1296d778d5"
    },
    {
      "time": "06:30",
      "text": "Sniper , knife , missile threats : Israel warned US of alleged Iran plot to assassinate Donald Trump",
      "impact": "השפעה מיידית מחושבת: +15.0",
      "direction": "up",
      "source": "timesofindia.indiatimes.com",
      "signal_id": "e001ad521f7fb075"
    },
    {
      "time": "08:15",
      "text": "The US threatens  indefinite naval blockade  of Iran as oil crisis resurges",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "sbs.com.au",
      "signal_id": "f673bfb2980d4ba2"
    },
    {
      "time": "08:15",
      "text": "Vance puts cheap energy ahead of Iran nuclear threat as US tightens pressure",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "ynetnews.com",
      "signal_id": "fc40ee8645f9d239"
    }
  ],
  "signals": [
    {
      "id": "1776de1296d778d5",
      "name": "Israel warned US of Iran plots against Trump , but US could not verify threats",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1776de1296d778d5",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.597,
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
      "source": "economictimes.indiatimes.com",
      "url": "https://economictimes.indiatimes.com/news/international/global-trends/israel-warned-us-of-iran-plots-against-trump-but-us-could-not-verify-threats/articleshow/133227786.cms",
      "published_at": "2026-08-14T04:15:00Z",
      "active": true,
      "computed": {
        "immediate": 16.2,
        "short": 12.6,
        "extended": 5.4
      }
    },
    {
      "id": "e001ad521f7fb075",
      "name": "Sniper , knife , missile threats : Israel warned US of alleged Iran plot to assassinate Donald Trump",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e001ad521f7fb075",
      "strength": 0.63,
      "reliability": 0.56,
      "freshness": 0.482,
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
      "source": "timesofindia.indiatimes.com",
      "url": "https://timesofindia.indiatimes.com/world/us/sniper-knife-missile-threats-israel-warned-us-of-alleged-iran-plot-to-assassinate-donald-trump/articleshow/133227970.cms",
      "published_at": "2026-08-14T03:30:00Z",
      "active": true,
      "computed": {
        "immediate": 15.0,
        "short": 11.7,
        "extended": 5.0
      }
    },
    {
      "id": "f673bfb2980d4ba2",
      "name": "The US threatens  indefinite naval blockade  of Iran as oil crisis resurges",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f673bfb2980d4ba2",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.795,
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
      "source": "sbs.com.au",
      "url": "https://www.sbs.com.au/news/article/the-us-threatens-indefinite-naval-blockade-of-iran-as-oil-crisis-resurges/9kzf1e95h",
      "published_at": "2026-08-14T05:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.2,
        "extended": 8.8
      }
    },
    {
      "id": "fc40ee8645f9d239",
      "name": "Vance puts cheap energy ahead of Iran nuclear threat as US tightens pressure",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fc40ee8645f9d239",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.795,
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
      "source": "ynetnews.com",
      "url": "https://www.ynetnews.com/article/sjez7wnimx",
      "published_at": "2026-08-14T05:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.2,
        "extended": 8.8
      }
    },
    {
      "id": "fdff24b1144ffb93",
      "name": "UAE accuses Iran of attacks on two ADNOC vessels in Strait of Hormuz",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fdff24b1144ffb93",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.795,
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
      "url": "https://www.aljazeera.com/news/2026/8/14/uae-accuses-iran-of-attacks-on-two-adnoc-vessels-in-strait-of-hormuz",
      "published_at": "2026-08-14T05:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.6,
        "extended": 7.8
      }
    },
    {
      "id": "8d85cba31343b29e",
      "name": "UAE points finger at Iran as two ADNOC ships attacked in Strait of Hormuz",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8d85cba31343b29e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.74,
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
      "url": "https://economictimes.indiatimes.com/news/defence/uae-points-finger-at-iran-as-two-adnoc-ships-attacked-in-strait-of-hormuz/articleshow/133229037.cms",
      "published_at": "2026-08-14T05:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.3
      }
    },
    {
      "id": "fe9200219cdd451e",
      "name": "How Iranian missile threat sparked a secret operation to move Trump out of Turkey as Air Force One flew as a decoy",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fe9200219cdd451e",
      "strength": 0.53,
      "reliability": 0.56,
      "freshness": 0.597,
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
      "source": "timesofindia.indiatimes.com",
      "url": "https://timesofindia.indiatimes.com/world/us/how-iranian-missile-threat-sparked-a-secret-operation-to-move-trump-out-of-turkey-as-air-force-one-flew-as-a-decoy/articleshow/133228504.cms",
      "published_at": "2026-08-14T04:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.6,
        "extended": 7.8
      }
    },
    {
      "id": "33e4f11b668b6c85",
      "name": "UAE strongly condemns Iranian attack on two ADNOC vessels",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "33e4f11b668b6c85",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.641,
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
      "source": "tag911.ae",
      "url": "https://www.tag911.ae/news/local-news/uae-strongly-condemns-iranian-attack-on-two-adnoc-vessels/",
      "published_at": "2026-08-14T04:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.3
      }
    },
    {
      "id": "cb12d80b688e35e8",
      "name": "Oil steadies after US threatens indefinite blockade of Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "cb12d80b688e35e8",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.597,
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
      "source": "dunyanews.tv",
      "url": "https://dunyanews.tv/en/Business/967874-oil-steadies-after-us-threatens-indefinite-blockade-of-iran",
      "published_at": "2026-08-14T04:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.9,
        "extended": 6.6
      }
    },
    {
      "id": "34afc67eb1898f45",
      "name": "Oil prices edge higher after US threatens indefinite blockade of Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "34afc67eb1898f45",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.597,
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
      "source": "business-standard.com",
      "url": "https://www.business-standard.com/markets/commodities/oil-prices-edge-higher-after-us-threatens-indefinite-blockade-of-iran-126081400107_1.html",
      "published_at": "2026-08-14T04:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.9,
        "extended": 6.6
      }
    },
    {
      "id": "799cb2bfc5d5d34b",
      "name": "UAE accuses Iran of attacks on two ADNOC vessels in Strait of Hormuz - Dominican Republic Post – Caribbean News , Business , Travel & Culture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "799cb2bfc5d5d34b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.449,
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
      "url": "https://dominicanrepublicpost.com/uae-accuses-iran-of-attacks-on-two-adnoc-vessels-in-strait-of-hormuz/",
      "published_at": "2026-08-14T03:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      }
    },
    {
      "id": "8acb2b7a31f71bf1",
      "name": "AS Kehilangan 45 Drone Canggih MQ - 9 Reaper dalam Perang Iran , Rugi Rp23 Triliun",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8acb2b7a31f71bf1",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.389,
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
      "source": "international.sindonews.com",
      "url": "https://international.sindonews.com/read/1738847/43/as-kehilangan-45-drone-canggih-mq-9-reaper-dalam-perang-iran-rugi-rp23-triliun-1786669685",
      "published_at": "2026-08-14T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.7,
        "extended": 4.6
      }
    },
    {
      "id": "c966fad2d6ec16c5",
      "name": "Oil Price Today ( August 14 ): Crude oil dips below $88 despite Trump threat to blockade Iran indefinitely . What are experts saying ?",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "c966fad2d6ec16c5",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.389,
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
      "url": "https://economictimes.indiatimes.com/markets/commodities/news/oil-price-today-august-14-crude-oil-dips-below-88-despite-trumps-threat-to-blockade-iran-indefinitely-what-are-experts-saying/articleshow/133227242.cms",
      "published_at": "2026-08-14T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
      }
    },
    {
      "id": "28502d903def4503",
      "name": "Oil steadies after US threatens to blockade Iran indefinitely",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "28502d903def4503",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.389,
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
      "url": "https://economictimes.indiatimes.com/markets/commodities/news/oil-steadies-after-us-threatens-to-blockade-iran-indefinitely/articleshow/133227088.cms",
      "published_at": "2026-08-14T02:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.3
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-08-14T06:03:14.591776Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 14
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
