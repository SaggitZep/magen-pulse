window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-24T18:53:44.127282Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 10,
      "low": 0,
      "high": 23,
      "confidence": 67,
      "status": "נמוך"
    },
    "short": {
      "label": "6 שעות",
      "score": 26,
      "low": 13,
      "high": 39,
      "confidence": 67,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 32,
      "low": 19,
      "high": 45,
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
    "level": "עלייה מתונה",
    "points_60m": 5
  },
  "changes": [
    {
      "time": "21:30",
      "text": "Iran rebuilds missile sites after airstrikes",
      "impact": "השפעה מיידית מחושבת: +5.3",
      "direction": "up",
      "source": "pakistantoday.com.pk",
      "signal_id": "038bab9faadc8122"
    },
    {
      "time": "19:45",
      "text": "Jordan intercepts 7 missiles , 6 drones as Iran warns civilians near US bases",
      "impact": "השפעה מיידית מחושבת: +1.6",
      "direction": "up",
      "source": "al-monitor.com",
      "signal_id": "5d8ca5c222a157c8"
    },
    {
      "time": "21:30",
      "text": "How Chinese tech and Russian tactics are aiding Iran bombing of US bases | Iran",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "theguardian.com",
      "signal_id": "2e8513822427f8b3"
    },
    {
      "time": "20:45",
      "text": "Drones target northern Iraqi city where US forces are based as US - Iran fighting escalates",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "adn.com",
      "signal_id": "68615bd58a87296c"
    }
  ],
  "signals": [
    {
      "id": "038bab9faadc8122",
      "name": "Iran rebuilds missile sites after airstrikes",
      "finding": "דיווח על יכולת, פריסה או היערכות צבאית איראנית.",
      "category": "capability",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "038bab9faadc8122",
      "strength": 0.54,
      "reliability": 0.56,
      "freshness": 0.893,
      "max_effect": {
        "immediate": 34,
        "short": 48,
        "extended": 42
      },
      "relevance": {
        "immediate": 0.58,
        "short": 1.0,
        "extended": 0.84
      },
      "source": "pakistantoday.com.pk",
      "url": "https://www.pakistantoday.com.pk/2026/07/24/iran-swiftly-repairs-missile-sites-and-other-facilities-after-airstrikes-report-says",
      "published_at": "2026-07-24T18:30:00Z",
      "active": true,
      "computed": {
        "immediate": 5.3,
        "short": 13.0,
        "extended": 9.5
      }
    },
    {
      "id": "5d8ca5c222a157c8",
      "name": "Jordan intercepts 7 missiles , 6 drones as Iran warns civilians near US bases",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5d8ca5c222a157c8",
      "strength": 0.53,
      "reliability": 0.74,
      "freshness": 0.542,
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
      "url": "https://www.al-monitor.com/originals/2026/07/jordan-intercepts-7-missiles-6-drones-iran-warns-civilians-near-us-bases",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.6,
        "short": 5.5,
        "extended": 9.4
      }
    },
    {
      "id": "2e8513822427f8b3",
      "name": "How Chinese tech and Russian tactics are aiding Iran bombing of US bases | Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2e8513822427f8b3",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.893,
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
      "source": "theguardian.com",
      "url": "https://www.theguardian.com/world/2026/jul/24/irans-much-improved-missile-systems-pose-a-real-threat-to-the-us",
      "published_at": "2026-07-24T18:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.2,
        "extended": 8.8
      }
    },
    {
      "id": "68615bd58a87296c",
      "name": "Drones target northern Iraqi city where US forces are based as US - Iran fighting escalates",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "68615bd58a87296c",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.721,
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
      "source": "adn.com",
      "url": "https://www.adn.com/nation-world/2026/07/24/drones-target-northern-iraqi-city-where-us-forces-are-based-as-us-iran-fighting-escalates/",
      "published_at": "2026-07-24T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.0,
        "extended": 8.5
      }
    },
    {
      "id": "8dfadf7bf79d0f34",
      "name": "Trump Threatens To Use Iranian Assets To Pay For Shipping Damage",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8dfadf7bf79d0f34",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.721,
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
      "source": "beijingbulletin.com",
      "url": "http://www.beijingbulletin.com/news/279206772/trump-threatens-to-use-iranian-assets-to-pay-for-shipping-damage",
      "published_at": "2026-07-24T17:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.4,
        "short": 4.7,
        "extended": 8.0
      }
    },
    {
      "id": "e3e836044cbbad1e",
      "name": "US strikes Iran from south to north after Trump threats over Red Sea shipping – Ya Libnan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e3e836044cbbad1e",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.671,
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
      "url": "https://yalibnan.com/2026/07/24/us-strikes-iran-from-south-to-north-after-trump-threats-over-red-sea-shipping/",
      "published_at": "2026-07-24T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.4
      }
    },
    {
      "id": "9ad6985850824fe5",
      "name": "Trump threatens a major escalation in Iran as the war nears the 5 - month mark",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9ad6985850824fe5",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.625,
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
      "source": "houstonpublicmedia.org",
      "url": "https://www.houstonpublicmedia.org/npr/2026/07/24/g-s1-135417/trump-threatens-a-major-escalation-in-iran-as-the-war-nears-the-5-month-mark/",
      "published_at": "2026-07-24T17:15:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.1,
        "extended": 6.9
      }
    },
    {
      "id": "af349c254d45754b",
      "name": "US Scored First Kill of Iranian Drone With System Proven in Ukraine",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "af349c254d45754b",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.582,
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
      "source": "businessinsider.com",
      "url": "https://www.businessinsider.com/us-military-kill-iranian-drone-system-proven-in-ukraine-2026-7",
      "published_at": "2026-07-24T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.9
      }
    },
    {
      "id": "9d038936cb40d781",
      "name": "Trump Weighs  Massive Attack  on Iran as War Expands and Support Erodes at Home",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "9d038936cb40d781",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.671,
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
      "source": "themainewire.com",
      "url": "https://www.themainewire.com/2026/07/trump-weighs-massive-attack-on-iran-as-war-expands-and-support-erodes-at-home/",
      "published_at": "2026-07-24T17:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.9,
        "extended": 6.6
      }
    },
    {
      "id": "8450f6461fe09e8a",
      "name": "US Missiles Strike Across Iran After Houthis Announce",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8450f6461fe09e8a",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.542,
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
      "source": "marinelink.com",
      "url": "https://www.marinelink.com/news/us-missiles-strike-across-iran-houthis-541513",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.4
      }
    },
    {
      "id": "2c8a8d29cbf36589",
      "name": "Explosive drones target US forces as Iran conflict widens",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "2c8a8d29cbf36589",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.542,
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
      "source": "cbs12.com",
      "url": "https://cbs12.com/news/nation-world/explosive-drones-target-us-forces-irbil-iraq-as-iran-war-conflict-widens-bahrain-central-command-american-military-strait-of-hormuz-shipping-oil-prices-houthi-rebels-oil-tankers-red-sea-president-trump",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.1,
        "short": 3.8,
        "extended": 6.4
      }
    },
    {
      "id": "5f9daba425bbe6ec",
      "name": "Rubio Warns Tehran As Iran Hits Kuwait Bases , Houthis Claim Strikes On Tankers",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5f9daba425bbe6ec",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260723-rferl01.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "7a21c4222feb0b15",
      "name": "Report : Iran Terrorist IRGC Flew into Yemen to Help Houthis Block Shipping",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "7a21c4222feb0b15",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.582,
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
      "url": "https://www.breitbart.com/middle-east/2026/07/24/report-irans-terrorist-irgc-flew-into-yemen-to-help-houthis-block-shipping/",
      "published_at": "2026-07-24T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.4,
        "extended": 5.7
      }
    },
    {
      "id": "dc88a6cadad4cd17",
      "name": "Iran unleashes wave of attacks on US bases",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "dc88a6cadad4cd17",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.582,
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
      "source": "calcuttanews.net",
      "url": "http://www.calcuttanews.net/news/279207676/iran-unleashes-wave-of-attacks-on-us-bases",
      "published_at": "2026-07-24T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.4,
        "extended": 5.7
      }
    },
    {
      "id": "a69d8be39d114d50",
      "name": "Iran threatens US hotels , banks and Trump properties as attacks reported in Bahrain , Iraq and Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a69d8be39d114d50",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.542,
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
      "source": "nypost.com",
      "url": "https://nypost.com/2026/07/24/world-news/iran-threatens-us-hotels-banks-and-trump-properties-as-attacks-reported-in-bahrain-iraq-and-jordan/",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "0f02fdad17c9c023",
      "name": "U . S . military launches new strikes on Iran as clashes escalate over shipping routes",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0f02fdad17c9c023",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.582,
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
      "source": "santafenewmexican.com",
      "url": "https://www.santafenewmexican.com/news/u-s-military-launches-new-strikes-on-iran-as-clashes-escalate-over-shipping-routes/article_c797d646-71ac-5147-b455-43d9a2660773.html",
      "published_at": "2026-07-24T17:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.4,
        "extended": 5.7
      }
    },
    {
      "id": "208b62c5aacebc80",
      "name": "Iranian Army launches drone attacks on three US bases in Kuwait",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "208b62c5aacebc80",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260723-irna07.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "e3b6328a5cebec8f",
      "name": "US strikes Iran after Trump threats over Red Sea ships",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e3b6328a5cebec8f",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.542,
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
      "url": "https://www.theadvocate.com.au/story/9316713/us-strikes-iran-after-trump-threats-over-red-sea-ships/",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "0c4adb2b6c2133e6",
      "name": "Iran FM blasts US asset seizure threat , warns Trump of  incendiary precedent",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0c4adb2b6c2133e6",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260724-irna01.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "e3f0ebd48d766a16",
      "name": "The four Iranian nuclear plants in Trump sights after president threat to hit Pickaxe Mountain",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e3f0ebd48d766a16",
      "strength": 0.45,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "url": "https://www.independent.co.uk/news/world/middle-east/iran-nuclear-sites-trump-pickaxe-mountain-war-b3019498.html",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "81edd850db951473",
      "name": "Jordan says it intercepts 7 missiles , 6 drones launched from Iran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "81edd850db951473",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "url": "https://aa.com.tr/en/us-israel-iran-war/jordan-says-it-intercepts-7-missiles-6-drones-launched-from-iran/4008233",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.5,
        "extended": 6.0
      }
    },
    {
      "id": "a0cf8d15c3dc29ca",
      "name": "Trump weighing  massive  US strikes on Iran : Axios",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a0cf8d15c3dc29ca",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/military/library/news/2026/07/mil-260723-azertac02.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "018e223f39a7849d",
      "name": "Iran IRGC claims fresh strikes at US bases and assets",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "018e223f39a7849d",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "prokerala.com",
      "url": "https://www.prokerala.com/news/articles/a1792076.html",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "8088677f1e185361",
      "name": "Trump loses faith in Iran diplomacy , military option gains ground",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "8088677f1e185361",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.542,
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
      "source": "middle-east-online.com",
      "url": "https://www.middle-east-online.com/en/trump-loses-faith-iran-diplomacy-military-option-gains-ground",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.3
      }
    },
    {
      "id": "0b2ffebc11d36608",
      "name": "IRGC targets US base in retaliation for strike on Arbaeen pilgrim route",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0b2ffebc11d36608",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260723-irna09.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "3882dbd98cc7cb21",
      "name": "Iran conducts drone strikes on US bases in Kuwait , Bahrain , Jordan after 13th straight night of US attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3882dbd98cc7cb21",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.437,
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
      "url": "http://www.arabherald.com/news/279207412/iran-conducts-drone-strikes-on-us-bases-in-kuwait-bahrain-jordan-after-13th-straight-night-of-us-attacks",
      "published_at": "2026-07-24T16:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.0,
        "extended": 5.2
      }
    },
    {
      "id": "5cf1076e289e0179",
      "name": "Iranian Army Says Destroyed THAAD Radar , Patriot System at US Base in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5cf1076e289e0179",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260723-sputnik03.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "262bdb6e25aa250c",
      "name": "US and Iran trade strikes after Trump vows  punishment , as Red Sea blockade pushes up oil prices",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "262bdb6e25aa250c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.542,
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
      "source": "abc.net.au",
      "url": "https://www.abc.net.au/news/2026-07-25/us-and-iran-trade-strikes-across-region/106957106",
      "published_at": "2026-07-24T16:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.1,
        "extended": 5.3
      }
    },
    {
      "id": "df7da895df8e5c6e",
      "name": "Trump Says He on the Brink of Approving Biggest Iran Strikes of the War",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "df7da895df8e5c6e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "source": "globalsecurity.org",
      "url": "https://www.globalsecurity.org/wmd/library/news/iran/2026/07/iran-260723-sputnik01.htm",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "db4777e3d6ceeb4e",
      "name": "Bahrain says air defenses intercepted Iranian aerial attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "db4777e3d6ceeb4e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.504,
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
      "url": "https://aa.com.tr/en/us-israel-iran-war/bahrain-says-air-defenses-intercepted-iranian-aerial-attacks/4008202",
      "published_at": "2026-07-24T16:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 2.9,
        "extended": 5.0
      }
    },
    {
      "id": "000c4a6a65e91ca1",
      "name": "Iran Claims Drone Attacks on US Military Bases in Bahrain , Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "000c4a6a65e91ca1",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.407,
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
      "source": "opinionnigeria.com",
      "url": "https://www.opinionnigeria.com/iran-claims-drone-attacks-on-us-military-bases-in-bahrain-jordan/",
      "published_at": "2026-07-24T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.8,
        "extended": 4.8
      }
    },
    {
      "id": "b175953355f0e65f",
      "name": "Explosions are heard near a US base in northern Iraq as US - Iran fighting escalates",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b175953355f0e65f",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.407,
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
      "source": "theitem.com",
      "url": "http://www.theitem.com/stories/explosions-are-heard-near-a-us-base-in-northern-iraq-as-us-iran-fighting-escalates,445368",
      "published_at": "2026-07-24T15:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.0
      }
    },
    {
      "id": "4b276e0963c7e668",
      "name": "US - Iran Conflict Escalates as Air Strikes Continue , Iran Retaliates Across the Gulf",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "4b276e0963c7e668",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.353,
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
      "source": "countercurrents.org",
      "url": "https://countercurrents.org/2026/07/us-iran-conflict-escalates-as-air-strikes-continue-iran-retaliates-across-the-gulf/",
      "published_at": "2026-07-24T15:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.5
      }
    },
    {
      "id": "00a369011431e753",
      "name": "Trump considering a  massive attack  on Iran as Tehran labels united kingdom  accomplice  to America",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "00a369011431e753",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.379,
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
      "source": "cnbcafrica.com",
      "url": "https://www.cnbcafrica.com/2026/trump-considering-a-massive-attack-on-iran-as-tehran-labels-uk-accomplice-to-america",
      "published_at": "2026-07-24T15:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.2,
        "extended": 3.7
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-24T18:53:44.127282Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 34
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
