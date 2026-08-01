window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "degraded",
  "generated_at": "2026-08-01T17:29:11.211350Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 30,
      "low": 14,
      "high": 46,
      "confidence": 48,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 30,
      "low": 14,
      "high": 46,
      "confidence": 48,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 24,
      "low": 8,
      "high": 40,
      "confidence": 48,
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
      "time": "17:15",
      "text": "Iran warns against  flames of war  amid US strike threats on energy sites | US - Israel war on Iran News",
      "impact": "השפעה מיידית מחושבת: +10.8",
      "direction": "up",
      "source": "aljazeera.com",
      "signal_id": "bdaedb208b6b6948"
    },
    {
      "time": "17:15",
      "text": "Iran names Saudi , UAE , Qatar and Israeli energy sites as targets if Trump weighs new strikes",
      "impact": "השפעה מיידית מחושבת: +9.8",
      "direction": "up",
      "source": "moneycontrol.com",
      "signal_id": "454d3204ad58af2f"
    },
    {
      "time": "17:15",
      "text": "ईरान पर बड़े हमले की तैयारी में अमेरिका और इजरायल , ऊर्जा ठिकानों को निशाना बनाने की योजना | us - israel - plan - airstrikes - on - iran - energy - targets - trump - report",
      "impact": "השפעה מיידית מחושבת: +9.8",
      "direction": "up",
      "source": "deshbandhu.co.in",
      "signal_id": "e3625cc9eb693d12"
    },
    {
      "time": "16:00",
      "text": "Reports : US , Israel planning heavy strikes on Iran energy targets",
      "impact": "השפעה מיידית מחושבת: +6.8",
      "direction": "up",
      "source": "naharnet.com:443",
      "signal_id": "154dddc7f63179fe"
    }
  ],
  "signals": [
    {
      "id": "bdaedb208b6b6948",
      "name": "Iran warns against  flames of war  amid US strike threats on energy sites | US - Israel war on Iran News",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "bdaedb208b6b6948",
      "strength": 0.55,
      "reliability": 0.56,
      "freshness": 0.397,
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
      "url": "https://www.aljazeera.com/news/2026/8/1/iran-warns-against-fire-of-war-amid-us-strike-threats-on-energy-sites",
      "published_at": "2026-08-01T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 10.8,
        "short": 8.4,
        "extended": 3.6
      },
      "carried_forward": true
    },
    {
      "id": "454d3204ad58af2f",
      "name": "Iran names Saudi , UAE , Qatar and Israeli energy sites as targets if Trump weighs new strikes",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "454d3204ad58af2f",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.397,
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
      "source": "moneycontrol.com",
      "url": "https://www.moneycontrol.com/world/iran-names-saudi-uae-qatar-and-israeli-energy-sites-as-targets-if-trump-weighs-new-strikes-article-13990954.html",
      "published_at": "2026-08-01T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 9.8,
        "short": 7.6,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "e3625cc9eb693d12",
      "name": "ईरान पर बड़े हमले की तैयारी में अमेरिका और इजरायल , ऊर्जा ठिकानों को निशाना बनाने की योजना | us - israel - plan - airstrikes - on - iran - energy - targets - trump - report",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e3625cc9eb693d12",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.397,
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
      "source": "deshbandhu.co.in",
      "url": "https://www.deshbandhu.co.in/featured-news/us-israel-plan-airstrikes-on-iran-energy-targets-trump-report-313245",
      "published_at": "2026-08-01T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 9.8,
        "short": 7.6,
        "extended": 3.2
      },
      "carried_forward": true
    },
    {
      "id": "154dddc7f63179fe",
      "name": "Reports : US , Israel planning heavy strikes on Iran energy targets",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "154dddc7f63179fe",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.278,
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
      "source": "naharnet.com:443",
      "url": "https://www.naharnet.com:443/stories/en/321596-reports-us-israel-planning-heavy-strikes-on-iran-energy-targets",
      "published_at": "2026-08-01T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 6.8,
        "short": 5.3,
        "extended": 2.3
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
      "source": "sitkasentinel.com",
      "url": "http://www.sitkasentinel.com/stories/trump-threatens-more-strikes-on-iran-and-other-developments-in-the-middle-east,160658",
      "published_at": "2026-08-01T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.3
      },
      "carried_forward": true
    },
    {
      "id": "6c8d8f46f9740214",
      "name": "שגרירות ארה  ב לאזרחיה : התכוננו לעזוב במקרה של הסלמה ; בכוויית דווח על טילים מאיראן - מדיני ביטחוני",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6c8d8f46f9740214",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.528,
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
      "source": "themarker.com",
      "url": "https://www.themarker.com/hrtz/news/politics/2026-08-01/ty-article/.premium/0000019f-bc0d-d3b5-a99f-bded7a520000",
      "published_at": "2026-08-01T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.7,
        "extended": 6.2
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
      "freshness": 0.528,
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
        "immediate": 1.0,
        "short": 3.4,
        "extended": 5.9
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
      "freshness": 0.528,
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
      "source": "1290wlby.com",
      "url": "https://www.1290wlby.com/2026/08/01/trump-threatens-further-strikes-as-iran-conflict-deepens/",
      "published_at": "2026-08-01T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.4,
        "extended": 5.9
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
      "freshness": 0.491,
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
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.4
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
      "freshness": 0.491,
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
      "source": "orlandosentinel.com",
      "url": "https://www.orlandosentinel.com/2026/08/01/trump-threatens-more-strikes-on-iran-tensions-from-hormuz-to-kuwait-and-gaza-lead-to-more-warnings/",
      "published_at": "2026-08-01T15:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.4
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
      "freshness": 0.528,
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
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.2
      },
      "carried_forward": true
    },
    {
      "id": "a19a353f2003be17",
      "name": "Iran threatens Middle East with  fire of war  as US  planning new attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a19a353f2003be17",
      "strength": 0.45,
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
      "source": "express.co.uk",
      "url": "https://www.express.co.uk/news/world/2235125/iran-threat-middle-east-war-us",
      "published_at": "2026-08-01T14:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.7
      },
      "carried_forward": true
    },
    {
      "id": "0f22433adff89ad8",
      "name": "Trump threatens more strikes on Iran , and other developments in the Middle East – KTBB News , Weather , Talk",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0f22433adff89ad8",
      "strength": 0.45,
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
      "source": "ktbb.com",
      "url": "https://ktbb.com/post/?p=1530256",
      "published_at": "2026-08-01T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      },
      "carried_forward": true
    },
    {
      "id": "e0aff59d26a4cefa",
      "name": "Kuwait says Iranian drones targeted  vital  facilities",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e0aff59d26a4cefa",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.369,
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
      "url": "https://www.yahoo.com/news/world/articles/kuwait-says-iranian-drones-targeted-130328199.html",
      "published_at": "2026-08-01T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      },
      "carried_forward": true
    },
    {
      "id": "6b739b467e136341",
      "name": "US embassies in Middle East warn Americans as Trump weighs fresh strikes on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6b739b467e136341",
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
      "source": "moneycontrol.com",
      "url": "https://www.moneycontrol.com/world/us-embassies-in-middle-east-warn-americans-as-trump-weighs-fresh-strikes-on-iran-article-13990944.html",
      "published_at": "2026-08-01T14:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 3.9
      },
      "carried_forward": true
    },
    {
      "id": "5cf9b98c1302c88f",
      "name": "President Trump threatens more strikes on Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5cf9b98c1302c88f",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.369,
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
      "source": "breakingnews.ie",
      "url": "https://www.breakingnews.ie/world/president-trump-threatens-more-strikes-on-iran-1934765.html",
      "published_at": "2026-08-01T14:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      },
      "carried_forward": true
    },
    {
      "id": "156af34acf8a7b31",
      "name": "Kuwait Says It Downed Iranian Drones",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "156af34acf8a7b31",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.278,
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
      "source": "politicalwire.com",
      "url": "https://politicalwire.com/2026/08/01/kuwait-says-it-downed-iranian-drones/",
      "published_at": "2026-08-01T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 1.9,
        "extended": 3.3
      },
      "carried_forward": true
    },
    {
      "id": "9dd40c4519e83f63",
      "name": "Trump considering attacks on Iran energy infrastructure , report says",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9dd40c4519e83f63",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.298,
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
      "url": "https://www.livemint.com/news/us-news/trump-considering-attacks-on-irans-energy-infrastructure-report-says-11785587578235.html",
      "published_at": "2026-08-01T13:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.7,
        "extended": 2.9
      },
      "carried_forward": true
    },
    {
      "id": "1c8e7c30d1154901",
      "name": "From Hormuz to Bab el - Mandeb to Suez : Iran war machine is threatening global shipping – Ya Libnan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1c8e7c30d1154901",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.241,
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
      "source": "yalibnan.com",
      "url": "https://yalibnan.com/2026/08/01/from-hormuz-to-bab-el-mandeb-to-suez-irans-war-machine-is-threatening-global-shipping/",
      "published_at": "2026-08-01T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "43dca93f0d1b6161",
      "name": "Trump Considering Strikes On Iranian Energy Targets",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "43dca93f0d1b6161",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.278,
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
      "source": "politicalwire.com",
      "url": "https://politicalwire.com/2026/08/01/trump-considering-strikes-on-iranian-energy-targets/",
      "published_at": "2026-08-01T13:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.6,
        "extended": 2.7
      },
      "carried_forward": true
    },
    {
      "id": "fddd7ee796cd1589",
      "name": "Ejército iraní anuncia el uso de una nueva generación de drones contra EEUU",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fddd7ee796cd1589",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.241,
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
      "source": "hispantv.com",
      "url": "https://www.hispantv.com/noticias/defensa/648055/ejercito-irani-nueva-drones-eeuu",
      "published_at": "2026-08-01T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.7,
        "extended": 2.9
      },
      "carried_forward": true
    },
    {
      "id": "a73953749457401c",
      "name": "Iranian Foreign Minister Advises united kingdom : Do Not Provide Military Aid to the US",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a73953749457401c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.241,
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
      "source": "khaskhabar.com",
      "url": "https://www.khaskhabar.com/news/world-news/news-iranian-foreign-minister-advises-uk-do-not-provide-military-aid-to-the-us-news-hindi-1-833230-KKN.html",
      "published_at": "2026-08-01T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.4
      },
      "carried_forward": true
    },
    {
      "id": "cdc9f34b99825d57",
      "name": "Iranian Kurdish parties in Iraq face a delicate balance amid Iran attacks - Dominican Republic Post – Caribbean News , Business , Travel & Culture",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "cdc9f34b99825d57",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.241,
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
      "url": "https://dominicanrepublicpost.com/iranian-kurdish-parties-in-iraq-face-a-delicate-balance-amid-iran-attacks/",
      "published_at": "2026-08-01T12:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.4,
        "short": 1.4,
        "extended": 2.4
      },
      "carried_forward": true
    },
    {
      "id": "92b1c7c658e110c6",
      "name": "Iran military accuses US of  escalating tension in region",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "92b1c7c658e110c6",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.241,
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
      "source": "naharnet.com",
      "url": "https://naharnet.com/stories/en/321597-iran-military-accuses-us-of-escalating-tensions-in-region",
      "published_at": "2026-08-01T12:30:00Z",
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
    }
  ],
  "health": {
    "pipeline": "degraded",
    "message": "מקור האיסוף הזמני לא ענה; מוצגים אותות עדכניים מהעדכון האחרון.",
    "last_success": "2026-08-01T16:16:11.360570Z",
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
