window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-07-26T22:15:01.284846Z",
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
      "score": 26,
      "low": 10,
      "high": 42,
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
      "time": "23:30",
      "text": "Iran claims Ukraine attacked vessel at Israel behest , warns retaliation",
      "impact": "השפעה מיידית מחושבת: +16.4",
      "direction": "up",
      "source": "ynetnews.com",
      "signal_id": "5f375727327452fa"
    },
    {
      "time": "23:30",
      "text": "Cannot Go Unanswered : Iran Threatens Action Against Ukraine , Claims Caspian Sea Strike Was Done  At Israel Behest",
      "impact": "השפעה מיידית מחושבת: +16.4",
      "direction": "up",
      "source": "newsx.com",
      "signal_id": "d316d36fcde3f94d"
    },
    {
      "time": "22:15",
      "text": "Biden admin . predicted how Israel would use Gaza war to escalate to Iran strikes",
      "impact": "השפעה מיידית מחושבת: +13.8",
      "direction": "up",
      "source": "jpost.com",
      "signal_id": "ac87ebe3baa57aae"
    },
    {
      "time": "23:00",
      "text": "They have to end their nuclear program : Israeli PM Netanyahu targets Iran ahead of US visit",
      "impact": "השפעה מיידית מחושבת: +13.0",
      "direction": "up",
      "source": "news.webindia123.com",
      "signal_id": "30c6836292b1f9b2"
    }
  ],
  "signals": [
    {
      "id": "5f375727327452fa",
      "name": "Iran claims Ukraine attacked vessel at Israel behest , warns retaliation",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5f375727327452fa",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "source": "ynetnews.com",
      "url": "https://www.ynetnews.com/article/r1o143qrmg",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 16.4,
        "short": 12.8,
        "extended": 5.4
      },
      "carried_forward": true
    },
    {
      "id": "d316d36fcde3f94d",
      "name": "Cannot Go Unanswered : Iran Threatens Action Against Ukraine , Claims Caspian Sea Strike Was Done  At Israel Behest",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d316d36fcde3f94d",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "source": "newsx.com",
      "url": "https://www.newsx.com/world/cannot-go-unanswered-iran-threatens-action-against-ukraine-claims-caspian-sea-strike-was-done-at-israels-behest-252956/",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 16.4,
        "short": 12.8,
        "extended": 5.4
      },
      "carried_forward": true
    },
    {
      "id": "ac87ebe3baa57aae",
      "name": "Biden admin . predicted how Israel would use Gaza war to escalate to Iran strikes",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ac87ebe3baa57aae",
      "strength": 0.5,
      "reliability": 0.74,
      "freshness": 0.424,
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
      "url": "https://www.jpost.com/israel-news/defense-news/article-903717",
      "published_at": "2026-07-26T19:15:00Z",
      "active": true,
      "computed": {
        "immediate": 13.8,
        "short": 10.8,
        "extended": 4.6
      },
      "carried_forward": true
    },
    {
      "id": "30c6836292b1f9b2",
      "name": "They have to end their nuclear program : Israeli PM Netanyahu targets Iran ahead of US visit",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "30c6836292b1f9b2",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.526,
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
      "source": "news.webindia123.com",
      "url": "https://news.webindia123.com/news/Articles/World/20260726/4479542.html",
      "published_at": "2026-07-26T20:00:00Z",
      "active": true,
      "computed": {
        "immediate": 13.0,
        "short": 10.1,
        "extended": 4.3
      },
      "carried_forward": true
    },
    {
      "id": "9030be0f34b80815",
      "name": "Ukraine attack on Iranian commercial vessel is to drag Europe into Israel war : Iran FM",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9030be0f34b80815",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.395,
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
      "source": "prokerala.com",
      "url": "https://www.prokerala.com/news/articles/a1792790.html",
      "published_at": "2026-07-26T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 9.7,
        "short": 7.6,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "70de17f836f0cf69",
      "name": "Abbas Araghchi Iran , यूक्रेन पर भड़का ईरान : अराघची बोले -  जेलेंस्की ने इजरायल के इशारे पर किया हमला , बदले की धमकी दी - ukraine attacked iranian ship at israel behest revenge will surely be taken says abbas araghchi -",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "70de17f836f0cf69",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.297,
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
      "source": "navbharattimes.indiatimes.com",
      "url": "https://navbharattimes.indiatimes.com/world/asian-countries/ukraine-attacked-iranian-ship-at-israel-behest-revenge-will-surely-be-taken-says-abbas-araghchi/articleshow/132644921.cms",
      "published_at": "2026-07-26T18:00:00Z",
      "active": true,
      "computed": {
        "immediate": 7.3,
        "short": 5.7,
        "extended": 2.4
      },
      "carried_forward": true
    },
    {
      "id": "de805f631eff2dea",
      "name": "As US calls off bombing , Iran hints itll halt strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "de805f631eff2dea",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "source": "theadvocate.com.au",
      "url": "https://www.theadvocate.com.au/story/9317858/as-us-calls-off-bombing-iran-hints-itll-halt-strikes/",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      },
      "carried_forward": true
    },
    {
      "id": "2222b7c2376ff1fc",
      "name": "U . S . pauses attacks on Iran for a second straight day and Tehran does too",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2222b7c2376ff1fc",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "source": "wnyc.org",
      "url": "https://wnyc.org/npr/g-s1-135593",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      },
      "carried_forward": true
    },
    {
      "id": "9bf44114b2071741",
      "name": "Iranian crown prince rebukes Trump :  They died for freedom , not a nuclear deal",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9bf44114b2071741",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "url": "https://www.ynetnews.com/article/h1y8dsxhfx",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      },
      "carried_forward": true
    },
    {
      "id": "a68d2231608ae57c",
      "name": "Iran supreme leader reaffirms support for Hezbollah , demands end to Israeli attacks on Lebanon",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a68d2231608ae57c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "url": "https://aa.com.tr/en/middle-east/iran-s-supreme-leader-reaffirms-support-for-hezbollah-demands-end-to-israeli-attacks-on-lebanon/4009994",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      },
      "carried_forward": true
    },
    {
      "id": "e6f535ccae0fb63c",
      "name": "Iran threatens war could expand further if US resumes strikes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e6f535ccae0fb63c",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.526,
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
      "url": "https://www.thenationalnews.com/news/mena/2026/07/26/iran-warns-war-could-expand-further-if-us-continues-strikes/",
      "published_at": "2026-07-26T20:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.4,
        "extended": 5.8
      },
      "carried_forward": true
    },
    {
      "id": "7140c258570be86c",
      "name": "Iran accuses Ukraine of deadly attack on ship in Caspian Sea",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7140c258570be86c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "source": "surinametimes.com",
      "url": "https://www.surinametimes.com/artikel/iran-accuses-ukraine-of-deadly-attack-on-ship-in-caspian-sea",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      },
      "carried_forward": true
    },
    {
      "id": "ec00b58e1b8c8723",
      "name": "CENTCOM chief advised halt of Iran strikes due to  exhausted  targets : Report",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ec00b58e1b8c8723",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.606,
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
      "url": "https://aa.com.tr/en/middle-east/centcom-chief-advised-halt-of-iran-strikes-due-to-exhausted-targets-report/4009985",
      "published_at": "2026-07-26T20:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      },
      "carried_forward": true
    },
    {
      "id": "b595efc157afd8fc",
      "name": "Cannot go unanswered : Araghchi condemns Ukraine Caspian Sea strike on Iranian vessel",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b595efc157afd8fc",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.526,
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
      "source": "news.webindia123.com",
      "url": "https://news.webindia123.com/news/Articles/World/20260726/4479537.html",
      "published_at": "2026-07-26T20:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.2
      },
      "carried_forward": true
    },
    {
      "id": "86a2a3a4d4bbd9c4",
      "name": "Why Iran Kheibar Shekan Missile Is Drawing Attention",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "86a2a3a4d4bbd9c4",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.424,
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
      "source": "newsweek.com",
      "url": "https://www.newsweek.com/why-irans-kheibar-shekan-missile-is-drawing-attention-12245644",
      "published_at": "2026-07-26T19:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      },
      "carried_forward": true
    },
    {
      "id": "396d19b77e183ee9",
      "name": "Ukraine claims Caspian Sea attack on ships carrying Iranian military hardware to Russia",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "396d19b77e183ee9",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.526,
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
      "url": "https://www.thenationalnews.com/news/europe/2026/07/26/ukraine-claims-caspian-sea-attack-on-ships-carrying-iranian-military-hardware-to-russia/",
      "published_at": "2026-07-26T20:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.2
      },
      "carried_forward": true
    },
    {
      "id": "255ae397a8886778",
      "name": "Iran threatens to attack Ukraine after an  attack  on one of its ships",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "255ae397a8886778",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.395,
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
      "source": "dailymail.com",
      "url": "https://www.dailymail.com/news/article-16006431/Iran-threatens-attack-Ukraine-attack-one-ships-carrying-hardware-Russia.html",
      "published_at": "2026-07-26T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      },
      "carried_forward": true
    },
    {
      "id": "dfca0df83f34fef3",
      "name": "US military says it fired on another merchant vessel trying to breach its blockade of Iranian ports",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "dfca0df83f34fef3",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.424,
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
      "source": "hellenicshippingnews.com",
      "url": "https://www.hellenicshippingnews.com/us-military-says-it-fired-on-another-merchant-vessel-trying-to-breach-its-blockade-of-iranian-ports/",
      "published_at": "2026-07-26T19:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.5,
        "extended": 4.2
      },
      "carried_forward": true
    },
    {
      "id": "a66c68141e063d91",
      "name": "US pauses attacks on Iran for a second straight day and Tehran does too - Las Vegas Sun News",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a66c68141e063d91",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.395,
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
      "source": "lasvegassun.com",
      "url": "https://lasvegassun.com/news/2026/jul/26/us-pauses-attacks-on-iran-for-a-second-straight-da/",
      "published_at": "2026-07-26T19:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "a8dc61fac611d1a9",
      "name": "Trump Pauses US Strikes in Iran After 13 Days of Attacks , White House Says",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a8dc61fac611d1a9",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.368,
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
      "source": "theepochtimes.com",
      "url": "https://www.theepochtimes.com/world/trump-pauses-us-strikes-in-iran-after-13-days-of-attacks-white-house-says-6067587",
      "published_at": "2026-07-26T18:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.1,
        "extended": 3.6
      },
      "carried_forward": true
    },
    {
      "id": "b2dbf642e87de7c9",
      "name": "PM Benjamin Netanyahu : Iran war will conclude with end of regime or nuclear program",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b2dbf642e87de7c9",
      "strength": 0.4,
      "reliability": 0.74,
      "freshness": 0.257,
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
      "url": "https://www.jpost.com/middle-east/iran-news/article-903705",
      "published_at": "2026-07-26T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.3
      },
      "carried_forward": true
    },
    {
      "id": "b9d10ae55067edcd",
      "name": "Iran threatens response to Ukraine attack on its ship in Caspian Sea",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b9d10ae55067edcd",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.24,
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
      "source": "arabnews.com",
      "url": "https://www.arabnews.com/node/2652374/middle-east",
      "published_at": "2026-07-26T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "7aca8a0d9fd54958",
      "name": "Iran warns Ukraine attack on commercial vessel  cannot go unanswered",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7aca8a0d9fd54958",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.24,
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
      "url": "https://www.dailysabah.com/world/mid-east/iran-warns-ukraine-attack-on-commercial-vessel-cannot-go-unanswered",
      "published_at": "2026-07-26T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "f0ff6d6ede467a4e",
      "name": "Netanyahu to press Trump to keep watch on Iran nuclear aims",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f0ff6d6ede467a4e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.24,
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
      "url": "https://www.moneycontrol.com/world/netanyahu-to-press-trump-to-keep-watch-on-iran-s-nuclear-aims-article-13983929.html",
      "published_at": "2026-07-26T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.4
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-07-26T21:09:53.072383Z",
    "sources": {
      "gdelt": {
        "ok": false,
        "error": "HTTP Error 429: Too Many Requests",
        "carried_forward": 24
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
