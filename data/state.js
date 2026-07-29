window.MAGEN_STATE = {
  "schema_version": 4,
  "mode": "live",
  "generated_at": "2026-07-29T12:27:06.479703Z",
  "next_refresh_minutes": 10,
  "assessment": {
    "immediate": {
      "label": "60 דקות",
      "score": 23,
      "low": 10,
      "high": 36,
      "confidence": 66,
      "status": "מוגבר"
    },
    "short": {
      "label": "6 שעות",
      "score": 28,
      "low": 15,
      "high": 41,
      "confidence": 65,
      "status": "מוגבר"
    },
    "extended": {
      "label": "24 שעות",
      "score": 30,
      "low": 17,
      "high": 43,
      "confidence": 65,
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
    "points_60m": 18
  },
  "changes": [
    {
      "time": "14:30",
      "text": "Israel served as launchpad for US attacks on Iran , says foreign minister",
      "impact": "השפעה מיידית מחושבת: +18.8",
      "direction": "up",
      "source": "middleeasteye.net",
      "signal_id": "86057142e828e9bf"
    },
    {
      "time": "15:00",
      "text": "Jordan intercepts Iranian missiles as U . S . and Saudi Arabia strike militias in Iraq",
      "impact": "השפעה מיידית מחושבת: +1.8",
      "direction": "up",
      "source": "knpr.org",
      "signal_id": "0d0b0d0d48f46ccf"
    },
    {
      "time": "14:30",
      "text": "Jordan blocks 5 Iranian missiles as brief lull in Mideast war breaks",
      "impact": "השפעה מיידית מחושבת: +1.6",
      "direction": "up",
      "source": "dailysabah.com",
      "signal_id": "e3d01f10a9694d3e"
    },
    {
      "time": "15:00",
      "text": "Iran - US war latest : Saudis join US strikes on Tehran - backed militia in Iraq as conflict spreads throughout region",
      "impact": "השפעה מיידית מחושבת: +1.5",
      "direction": "up",
      "source": "independent.co.uk",
      "signal_id": "84f3ccc844fba05b"
    }
  ],
  "signals": [
    {
      "id": "86057142e828e9bf",
      "name": "Israel served as launchpad for US attacks on Iran , says foreign minister",
      "finding": "דיווח על כוונה, איום או פעולה ישירה הקשורים לישראל.",
      "category": "direct_intent",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "86057142e828e9bf",
      "strength": 0.5,
      "reliability": 0.56,
      "freshness": 0.762,
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
      "source": "middleeasteye.net",
      "url": "https://www.middleeasteye.net/live-blog/live-blog-update/israel-served-launchpad-us-attacks-iran-says-foreign-minister",
      "published_at": "2026-07-29T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 18.8,
        "short": 14.6,
        "extended": 6.2
      }
    },
    {
      "id": "0d0b0d0d48f46ccf",
      "name": "Jordan intercepts Iranian missiles as U . S . and Saudi Arabia strike militias in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0d0b0d0d48f46ccf",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.879,
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
      "url": "https://knpr.org/npr/2026-07-29/jordan-intercepts-iranian-missiles-as-u-s-and-saudi-arabia-strike-militias-in-iraq",
      "published_at": "2026-07-29T12:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.8,
        "short": 6.1,
        "extended": 10.4
      }
    },
    {
      "id": "e3d01f10a9694d3e",
      "name": "Jordan blocks 5 Iranian missiles as brief lull in Mideast war breaks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "e3d01f10a9694d3e",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.762,
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
      "url": "https://www.dailysabah.com/world/mid-east/jordan-blocks-5-iranian-missiles-as-brief-lull-in-mideast-war-breaks",
      "published_at": "2026-07-29T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.6,
        "short": 5.3,
        "extended": 9.0
      }
    },
    {
      "id": "84f3ccc844fba05b",
      "name": "Iran - US war latest : Saudis join US strikes on Tehran - backed militia in Iraq as conflict spreads throughout region",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "84f3ccc844fba05b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.879,
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
      "url": "https://www.independent.co.uk/news/world/middle-east/iran-us-war-live-trump-tehran-surprise-attack-saudi-b3023470.html",
      "published_at": "2026-07-29T12:00:00Z",
      "active": true,
      "computed": {
        "immediate": 1.5,
        "short": 5.1,
        "extended": 8.7
      }
    },
    {
      "id": "b0e2f21746650ba2",
      "name": "Jordan says it intercepts 5 Iranian missiles",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b0e2f21746650ba2",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.615,
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
      "url": "https://en.apa.az/asia/jordan-says-it-intercepts-5-iranian-missiles-518023",
      "published_at": "2026-07-29T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.3
      }
    },
    {
      "id": "039fc6d2a3958618",
      "name": "Iran Set to Receive Up to 400 Chinese Shoulder - Fired Air Defence Systems : Reuters",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "039fc6d2a3958618",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.762,
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
      "source": "khaama.com",
      "url": "https://www.khaama.com/iran-set-to-receive-up-to-400-chinese-shoulder-fired-air-defence-systems-reuters/",
      "published_at": "2026-07-29T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "5a258e807b122a8c",
      "name": "Iran launches surprise attack on U . S . bases in the Middle East",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5a258e807b122a8c",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.762,
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
      "source": "greatbendpost.com",
      "url": "https://greatbendpost.com/posts/21d78ab8-bf5c-4d44-a3f5-c1fc3588381f",
      "published_at": "2026-07-29T11:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.4,
        "extended": 7.5
      }
    },
    {
      "id": "212cf5387d963595",
      "name": "Jordan intercepts Iranian missiles – NBC New York",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "212cf5387d963595",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.615,
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
      "source": "nbcnewyork.com",
      "url": "https://www.nbcnewyork.com/news/national-international/jordan-intercepts-iran-missiles-us-saudi-arabia-launch-strikes-iraq/6531385/",
      "published_at": "2026-07-29T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.3
      }
    },
    {
      "id": "d36f93d169f44569",
      "name": "Iran to get Chinese shoulder - launched missile systems in weeks , sources say",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d36f93d169f44569",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.615,
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
      "url": "https://en.apa.az/asia/iran-to-get-chinese-shoulder-launched-missile-systems-in-weeks-sources-say-518056",
      "published_at": "2026-07-29T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.3,
        "short": 4.3,
        "extended": 7.3
      }
    },
    {
      "id": "3aa88d1866f6e6bc",
      "name": "More US Aircraft At Risk ? China To Equip Iranian Military With 400 Shoulder - Fired Missile System",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3aa88d1866f6e6bc",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.573,
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
      "source": "newsx.com",
      "url": "https://www.newsx.com/world/more-us-aircraft-at-risk-china-to-equip-iranian-military-with-400-shoulder-fired-missile-system-253976/",
      "published_at": "2026-07-29T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.2,
        "short": 4.0,
        "extended": 6.8
      }
    },
    {
      "id": "ff1afe590c1b33cb",
      "name": "Iran  considered attacking Ukrainian port in revenge for strikes on Caspian Sea ships heading for Russia  as two wars continue to merge",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "ff1afe590c1b33cb",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.573,
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
      "url": "https://www.dailymail.com/news/article-16012941/Iran-considered-attacking-Ukrainian-port-revenge-strikes-Caspian-Sea-ships-heading-Russia-two-wars-continue-merge.html",
      "published_at": "2026-07-29T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "1412fc6cde81e76e",
      "name": "US - Iran war : No quick end to the war as US and Saudis strike Iran allies in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1412fc6cde81e76e",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.573,
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
      "source": "theage.com.au",
      "url": "https://www.theage.com.au/world/middle-east/no-quick-end-to-the-war-as-us-and-saudi-strike-iran-s-allies-in-iraq-20260729-p60jsg.html",
      "published_at": "2026-07-29T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "1f7fd45f9f2ac84b",
      "name": "Major Gulf fighting restarts as US and Saudi strike Iran allies in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1f7fd45f9f2ac84b",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.615,
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
      "source": "asiaone.com",
      "url": "https://www.asiaone.com/world/major-gulf-fighting-restarts-us-and-saudi-strike-irans-allies-iraq",
      "published_at": "2026-07-29T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "72ed192c8938b3e1",
      "name": "US , Saudi Forces Strike Iran - Aligned Targets in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "72ed192c8938b3e1",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.615,
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
      "url": "http://www.beijingbulletin.com/news/279214386/us-saudi-forces-strike-iran-aligned-targets-in-iraq",
      "published_at": "2026-07-29T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "6816b207e2c4f6ae",
      "name": "Guerra in Iran , la diretta | Teheran attacca una base united states in Giordania e tre petroliere , prezzi del greggio in rialzo",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "6816b207e2c4f6ae",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.573,
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
      "source": "milanofinanza.it",
      "url": "https://www.milanofinanza.it/news/guerra-in-iran-la-diretta-teheran-attacca-una-base-usa-in-giordania-e-tre-petroliere-prezzi-del-greggio-202607290942288941",
      "published_at": "2026-07-29T10:30:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.3,
        "extended": 5.6
      }
    },
    {
      "id": "1ace1f0978aaa143",
      "name": "NYT : Iran considered retaliatory strike on Ukrainian seaport",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1ace1f0978aaa143",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.615,
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
      "url": "https://en.apa.az/america/nyt-iran-considered-retaliatory-strike-on-ukrainian-seaport-518026",
      "published_at": "2026-07-29T10:45:00Z",
      "active": true,
      "computed": {
        "immediate": 1.0,
        "short": 3.6,
        "extended": 6.1
      }
    },
    {
      "id": "20ec2070df150458",
      "name": "Iran claims missile strike on US base in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "20ec2070df150458",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.462,
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
      "source": "pakobserver.net",
      "url": "https://pakobserver.net/iran-claims-missile-strike-on-us-base-in-jordan/",
      "published_at": "2026-07-29T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
      }
    },
    {
      "id": "1a36d72b42b3c212",
      "name": "Iran to get Chinese shoulder - launched missile systems in weeks : Reuters - International",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "1a36d72b42b3c212",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.462,
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
      "source": "dailymirror.lk",
      "url": "https://www.dailymirror.lk/breaking-news/Iran-to-get-Chinese-shoulder-launched-missile-systems-in-weeks-Reuters/108-346880",
      "published_at": "2026-07-29T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
      }
    },
    {
      "id": "0f2f1b0a0cc17b0b",
      "name": "Iran Missile Attack and US - Saudi Strikes Raise Regional Tensions",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "0f2f1b0a0cc17b0b",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.462,
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
      "source": "kvor.com",
      "url": "https://www.kvor.com/2026/07/29/iran-missile-attack-and-us-saudi-strikes-raise-regional-tensions/",
      "published_at": "2026-07-29T09:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.9,
        "short": 3.2,
        "extended": 5.5
      }
    },
    {
      "id": "27238afb5421c5ab",
      "name": "DIRECT - Guerre au Moyen - Orient : larmée américaine annonce avoir intercepté des missiles lancés par lIran",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "27238afb5421c5ab",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.373,
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
      "source": "lalibre.be",
      "url": "https://www.lalibre.be/international/moyen-orient/iran/2026/07/29/direct-guerre-au-moyen-orient-larmee-americaine-annonce-avoir-intercepte-des-missiles-lances-par-liran-B3353E6IOBDJ5MIN3QQGZBCCMY/",
      "published_at": "2026-07-29T09:00:00Z",
      "active": true,
      "computed": {
        "immediate": 0.8,
        "short": 2.6,
        "extended": 4.4
      }
    },
    {
      "id": "a21bd5cc06d9de4f",
      "name": "Iran sharpens missile strikes as US faces growing challenge",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "a21bd5cc06d9de4f",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "https://www.moneycontrol.com/world/iran-sharpens-missile-strikes-as-us-faces-growing-challenge-article-13987035.html",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "b131be04ca035e5e",
      "name": "Iran set to get hundreds of Chinese air defence missiles amid US tensions",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b131be04ca035e5e",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "https://www.samaa.tv/2087354352-iran-set-to-get-hundreds-of-chinese-air-defence-missiles-amid-us-tensions",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "3e699fb67eb009af",
      "name": "Pentagon Monitors Fallout After Alleged Iranian Strike Against US Positions in the Middle East",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "3e699fb67eb009af",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.401,
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
      "source": "ibtimes.co.uk",
      "url": "https://www.ibtimes.co.uk/pentagon-evaluates-impact-irans-alleged-missile-attack-1811256",
      "published_at": "2026-07-29T09:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 4.0
      }
    },
    {
      "id": "fd2a51f28d8f4294",
      "name": "US , Saudi forces strike Iran - backed groups in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "fd2a51f28d8f4294",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.401,
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
      "source": "manilatimes.net",
      "url": "https://www.manilatimes.net/2026/07/29/world/us-saudi-forces-strike-iran-backed-groups-in-iraq/2393776",
      "published_at": "2026-07-29T09:15:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.3,
        "extended": 4.0
      }
    },
    {
      "id": "f021ed754b49d4d6",
      "name": "Jordan intercepts Iranian missiles – NBC 5 Dallas - Fort Worth",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "f021ed754b49d4d6",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "source": "nbcdfw.com",
      "url": "https://www.nbcdfw.com/news/national-international/jordan-intercepts-iran-missiles-us-saudi-arabia-launch-strikes-iraq/4055434/",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "57ee37ca055a7122",
      "name": "Jordan intercepts Iranian missiles – NBC Bay Area",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "57ee37ca055a7122",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "source": "nbcbayarea.com",
      "url": "https://www.nbcbayarea.com/news/national-international/jordan-intercepts-iran-missiles-us-saudi-arabia-launch-strikes-iraq/4120379/",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "27319afaa8e93679",
      "name": "US , Saudi Arabia target Iran - backed groups in Iraq after drone attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "27319afaa8e93679",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "https://www.samaa.tv/2087354354-us-saudi-arabia-target-iran-backed-groups-in-iraq-after-drone-attacks",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "87b3fecf0e09ff82",
      "name": "Saudi - US strikes target Iran - backed militias in Iraq after drone attacks",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "87b3fecf0e09ff82",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "https://www.middle-east-online.com/en/saudi-us-strikes-target-iran-backed-militias-iraq-after-drone-attacks",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "5178600498d6dbb7",
      "name": "Sources reveal Iran to receive Chinese - made missile systems",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "5178600498d6dbb7",
      "strength": 0.48,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "https://www.middle-east-online.com/en/sources-reveal-iran-receive-chinese-made-missile-systems",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.7,
        "short": 2.4,
        "extended": 4.1
      }
    },
    {
      "id": "b743471970c261d0",
      "name": "IRGC claims attack on US air base and CENTCOM facility in Jordan",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "b743471970c261d0",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "https://www.samaa.tv/2087354359-irgc-claims-attack-on-us-air-base-and-centcom-facility-in-jordan",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.4
      }
    },
    {
      "id": "034811385f8e18c5",
      "name": "Iran demands restitution for Kievs deadly attack",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "034811385f8e18c5",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.347,
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
      "url": "http://www.arabherald.com/news/279214341/iran-demands-restitution-for-kievs-deadly-attack",
      "published_at": "2026-07-29T08:45:00Z",
      "active": true,
      "computed": {
        "immediate": 0.6,
        "short": 2.0,
        "extended": 3.4
      }
    },
    {
      "id": "d21060110bc93da0",
      "name": "Iran conflict resumes as US , Saudis strike in Iraq",
      "finding": "דיווח על הסלמה אזורית שעשויה להשפיע על חלון הסיכון.",
      "category": "regional_escalation",
      "direction": "up",
      "evidence_type": "report",
      "dependency_group": "d21060110bc93da0",
      "strength": 0.4,
      "reliability": 0.56,
      "freshness": 0.323,
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
      "source": "rte.ie",
      "url": "https://www.rte.ie/news/middle-east/2026/0729/1585551-us-iran-iraq/",
      "published_at": "2026-07-29T08:30:00Z",
      "active": true,
      "computed": {
        "immediate": 0.5,
        "short": 1.9,
        "extended": 3.2
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
    }
  ],
  "health": {
    "pipeline": "ok",
    "message": "האיסוף הושלם והנתונים מוצגים.",
    "last_success": "2026-07-29T12:27:06.479703Z",
    "sources": {
      "gdelt": {
        "ok": true,
        "items": 150,
        "relevant": 33
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
