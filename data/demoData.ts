export type RiskLevel = "vysoke" | "stredni" | "nizke";

export const demoData = {
  company: "Novák & Partneři s.r.o.",
  field: "Velkoobchod, sklad a servisní tým",
  period: "Ukázkové sledované období",
  kpiSummary: {
    monthlyLossEstimate: 420000,
    threatenedRevenue: 390000,
    hoursLostMonthly: 1250,
    estimatedSavings: 280000,
    overdueWork: 64,
    teamLoad: 84
  },
  managementSummary:
    "Ukázková firma aktuálně přichází přibližně o 420 000 Kč měsíčně. Největší dopad má zpožděná expedice, pomalá reakce obchodu a nerovnoměrné vytížení lidí. Při odstranění těchto tří oblastí lze výrazně zlepšit výkon firmy během několika týdnů.",
  summaryHighlights: [
    { label: "Hlavní problém", value: "Zpožděná expedice a nejasné odpovědnosti", tone: "red" },
    { label: "Finanční dopad", value: "420 000 Kč měsíčně", tone: "amber" },
    { label: "Doporučený první krok", value: "Zpřesnit odpovědnosti u požadavků a skladových úkolů", tone: "green" }
  ],
  topProblems: [
    {
      title: "Zpožděné expedice",
      amount: 145000,
      explanation: "Objednávky odcházejí později, než zákazníci očekávají, a firma řeší více urgencí i kompenzací."
    },
    {
      title: "Pomalá reakce obchodu",
      amount: 390000,
      explanation: "Část obchodních příležitostí čeká příliš dlouho na navázání kontaktu a postupně chladne."
    },
    {
      title: "Přetížení podpory",
      amount: 80000,
      explanation: "Požadavky se hromadí u několika lidí a běžná agenda se dostává po termínu."
    },
    {
      title: "Nejasná odpovědnost",
      amount: 60000,
      explanation: "Některé úkoly nemají jasně určenou odpovědnou osobu, takže se zbytečně čeká."
    },
    {
      title: "Úkoly bez odhadu",
      amount: 45000,
      explanation: "Vedení nevidí, kolik práce je skutečně před týmem, a neumí spolehlivě plánovat termíny."
    }
  ],
  keyFindings: [
    {
      title: "Sklad generuje největší ztrátu",
      description:
        "Zpožděné expedice a opakované chyby v přípravě objednávek způsobují odhadovanou ztrátu 145 000 Kč měsíčně.",
      icon: "warehouse"
    },
    {
      title: "Obchod reaguje pozdě",
      description:
        "Část obchodních příležitostí zůstává bez včasného kontaktu. Firma tím přichází o odhadované tržby ve výši 390 000 Kč.",
      icon: "sales"
    },
    {
      title: "Lidé nejsou vytíženi rovnoměrně",
      description:
        "Někteří pracovníci jsou přetížení, zatímco jinde zůstává volná kapacita. To komplikuje plánování práce.",
      icon: "people"
    },
    {
      title: "Chybí odpovědnost a odhady",
      description:
        "Část úkolů nemá jasně určenou odpovědnou osobu nebo odhad pracnosti, takže vedení nedokáže přesně predikovat termíny.",
      icon: "responsibility"
    }
  ],
  moneyLossAreas: [
    {
      area: "Sklad a expedice",
      monthlyLoss: 145000,
      cause: "Zpožděné expedice a opakované chyby v přípravě objednávek",
      measure: "Zavést denní kontrolu zpožděných objednávek a jasné předání mezi skladem a dopravou",
      priority: "Vysoká",
      risk: "vysoke" as RiskLevel
    },
    {
      area: "Obchod",
      monthlyLoss: 390000,
      cause: "Pozdní reakce na obchodní příležitosti",
      measure: "Nastavit připomínky pro včasné navázání kontaktu",
      priority: "Vysoká",
      risk: "vysoke" as RiskLevel
    },
    {
      area: "Požadavky a podpora",
      monthlyLoss: 80000,
      cause: "Část požadavků je bez odpovědné osoby nebo po termínu",
      measure: "Zavést pravidelnou kontrolu otevřených požadavků",
      priority: "Střední",
      risk: "stredni" as RiskLevel
    },
    {
      area: "Interní procesy",
      monthlyLoss: 60000,
      cause: "Nejasný průběh práce a chybějící odhady pracnosti",
      measure: "Doplnit odpovědné osoby a odhady k důležitým úkolům",
      priority: "Střední",
      risk: "stredni" as RiskLevel
    },
    {
      area: "Finance a administrativa",
      monthlyLoss: 45000,
      cause: "Ruční schvalování a zpožděné administrativní kroky",
      measure: "Zjednodušit schvalování opakujících se položek",
      priority: "Nižší",
      risk: "nizke" as RiskLevel
    }
  ],
  processState: {
    requestsWithoutResponsiblePerson: 24,
    workWithoutEstimate: 38,
    overdueTasks: 64,
    exceededResolutionTime: 27,
    averageDelayDays: 5.4,
    recurringProblems: 18
  },
  people: [
    {
      name: "Petr Novák",
      team: "Vedení",
      role: "Jednatel",
      plannedCapacity: 120,
      actualLoad: 112,
      openTasks: 18,
      overdueTasks: 4,
      tasksWithoutEstimate: 3,
      risk: "nizke" as RiskLevel
    },
    {
      name: "Jana Dvořáková",
      team: "Obchod",
      role: "Obchodní manažerka",
      plannedCapacity: 128,
      actualLoad: 154,
      openTasks: 31,
      overdueTasks: 11,
      tasksWithoutEstimate: 6,
      risk: "vysoke" as RiskLevel
    },
    {
      name: "Martin Černý",
      team: "Sklad",
      role: "Vedoucí skladu",
      plannedCapacity: 132,
      actualLoad: 168,
      openTasks: 36,
      overdueTasks: 14,
      tasksWithoutEstimate: 7,
      risk: "vysoke" as RiskLevel
    },
    {
      name: "Lucie Králová",
      team: "Finance",
      role: "Finanční kontrola",
      plannedCapacity: 118,
      actualLoad: 126,
      openTasks: 22,
      overdueTasks: 5,
      tasksWithoutEstimate: 4,
      risk: "stredni" as RiskLevel
    },
    {
      name: "Tomáš Veselý",
      team: "Servis",
      role: "Servisní technik",
      plannedCapacity: 130,
      actualLoad: 151,
      openTasks: 29,
      overdueTasks: 9,
      tasksWithoutEstimate: 5,
      risk: "vysoke" as RiskLevel
    },
    {
      name: "Eva Malá",
      team: "Administrativa",
      role: "Administrativa",
      plannedCapacity: 112,
      actualLoad: 96,
      openTasks: 16,
      overdueTasks: 2,
      tasksWithoutEstimate: 3,
      risk: "nizke" as RiskLevel
    },
    {
      name: "David Svoboda",
      team: "Provoz",
      role: "Provozní koordinátor",
      plannedCapacity: 136,
      actualLoad: 138,
      openTasks: 25,
      overdueTasks: 6,
      tasksWithoutEstimate: 4,
      risk: "stredni" as RiskLevel
    },
    {
      name: "Klára Němcová",
      team: "Zákaznická podpora",
      role: "Zákaznická péče",
      plannedCapacity: 124,
      actualLoad: 142,
      openTasks: 33,
      overdueTasks: 10,
      tasksWithoutEstimate: 6,
      risk: "stredni" as RiskLevel
    }
  ],
  sales: {
    activeOpportunities: 74,
    openOpportunityValue: 2850000,
    lateResponseOpportunities: 16,
    averageResponseHours: 34,
    estimatedLostRevenue: 390000,
    trend: [
      { month: "Leden", opportunities: 52, late: 8, responseHours: 22 },
      { month: "Únor", opportunities: 57, late: 10, responseHours: 25 },
      { month: "Březen", opportunities: 63, late: 12, responseHours: 29 },
      { month: "Duben", opportunities: 70, late: 14, responseHours: 31 },
      { month: "Květen", opportunities: 74, late: 16, responseHours: 34 }
    ]
  },
  warehouse: {
    orders: 940,
    delayedShipments: 42,
    preparationErrorRate: 4.2,
    averageDispatchDays: 3.4,
    topDelayReason: "Chybějící rezervace zboží před přípravou objednávky",
    financialImpact: 145000,
    reasons: [
      { reason: "Chybějící rezervace", count: 16 },
      { reason: "Pozdní příprava", count: 12 },
      { reason: "Předání dopravci", count: 7 },
      { reason: "Chybná adresa", count: 4 },
      { reason: "Kontrola kvality", count: 3 }
    ]
  },
  requests: {
    openRequests: 118,
    overdueRequests: 27,
    requestsWithoutResponsiblePerson: 19,
    averageResolutionHours: 36,
    byPriority: [
      { priority: "Vysoká", count: 28 },
      { priority: "Střední", count: 62 },
      { priority: "Nízká", count: 28 }
    ],
    trend: [
      { week: "1. týden", created: 35, finished: 29 },
      { week: "2. týden", created: 41, finished: 34 },
      { week: "3. týden", created: 46, finished: 38 },
      { week: "4. týden", created: 48, finished: 40 },
      { week: "5. týden", created: 43, finished: 42 }
    ]
  },
  finance: {
    monthlyLossEstimate: 420000,
    possibleSavings: 280000,
    returnEstimate: "3,1×",
    highestPriorityAreas: ["Sklad a expedice", "Obchod", "Požadavky bez odpovědné osoby"],
    lossesByArea: [
      { area: "Sklad", loss: 145000 },
      { area: "Obchod", loss: 390000 },
      { area: "Požadavky", loss: 80000 },
      { area: "Procesy", loss: 60000 },
      { area: "Finance", loss: 45000 }
    ]
  },
  causes: [
    "Chybí jasná odpovědnost.",
    "Úkoly nemají odhad pracnosti.",
    "Lidé jsou přetížení nerovnoměrně.",
    "Chybí přehled o prioritách.",
    "Procesy nejsou pravidelně vyhodnocovány."
  ],
  impactScenarios: [
    {
      change: "Pokud zkrátíte dobu expedice o 30 %",
      result: "ušetříte přibližně 120 000 Kč měsíčně"
    },
    {
      change: "Pokud zrychlíte reakci obchodu o 2 dny",
      result: "můžete zvýšit tržby až o 15 %"
    },
    {
      change: "Pokud vyrovnáte vytížení týmu",
      result: "snížíte zpoždění o 40 %"
    }
  ],
  recommendations: [
    {
      action: "Zkrátit dobu expedice ve skladu",
      impact: "Snížení zpožděných expedic a menší počet opakovaných chyb",
      difficulty: "Střední",
      savings: 120000,
      priority: "Vysoká",
      firstStep: "Zmapovat proces expedice a určit, kde nejčastěji vzniká zdržení."
    },
    {
      action: "Zavést jasné odpovědnosti u požadavků",
      impact: "Méně nevyřízené práce bez vlastníka a rychlejší rozhodování",
      difficulty: "Nízká",
      savings: 62000,
      priority: "Vysoká",
      firstStep: "U každého otevřeného požadavku doplnit odpovědnou osobu."
    },
    {
      action: "Nastavit pravidelné sledování úkolů po termínu",
      impact: "Vedení uvidí zpoždění dříve, než se promítne do nákladů",
      difficulty: "Nízká",
      savings: 45000,
      priority: "Střední",
      firstStep: "Jednou týdně projít seznam úkolů po termínu."
    },
    {
      action: "Automatizovat připomínky u obchodních příležitostí",
      impact: "Rychlejší reakce na zákazníky a menší ztráta obchodních příležitostí",
      difficulty: "Střední",
      savings: 54000,
      priority: "Střední",
      firstStep: "Nastavit upozornění u příležitostí bez reakce delší než 24 hodin."
    },
    {
      action: "Vyrovnat vytížení lidí mezi týmy",
      impact: "Méně přetížení klíčových lidí a lepší využití volné kapacity",
      difficulty: "Střední",
      savings: 38000,
      priority: "Střední",
      firstStep: "Porovnat skutečné vytížení týmů a přesunout opakovatelné úkoly."
    },
    {
      action: "Zavést týdenní manažerský přehled",
      impact: "Pravidelné rozhodování podle stejných čísel",
      difficulty: "Nízká",
      savings: 31000,
      priority: "Nízká",
      firstStep: "Vybrat pět hlavních ukazatelů pro vedení firmy."
    }
  ],
  workItems: [
    {
      id: "NP-1042",
      type: "Objednávka",
      area: "Sklad",
      title: "Zpožděná expedice pro důležitého zákazníka",
      responsiblePerson: "Martin Černý",
      status: "Po termínu",
      priority: "Vysoká",
      workEstimateHours: 10,
      ageDays: 7,
      financialImpact: 48000
    },
    {
      id: "NP-1088",
      type: "Obchodní příležitost",
      area: "Obchod",
      title: "Příležitost čeká na navázání kontaktu",
      responsiblePerson: "Jana Dvořáková",
      status: "Ohroženo",
      priority: "Vysoká",
      workEstimateHours: null,
      ageDays: 12,
      financialImpact: 82000
    },
    {
      id: "NP-1104",
      type: "Požadavek",
      area: "Zákaznická podpora",
      title: "Opakovaný problém s vystavením dokladu",
      responsiblePerson: "Klára Němcová",
      status: "Překročený termín",
      priority: "Vysoká",
      workEstimateHours: 6,
      ageDays: 5,
      financialImpact: 26000
    },
    {
      id: "NP-1121",
      type: "Úkol",
      area: "Interní procesy",
      title: "Schvalování výjimek nemá jasnou odpovědnou osobu",
      responsiblePerson: null,
      status: "Otevřeno",
      priority: "Střední",
      workEstimateHours: null,
      ageDays: 18,
      financialImpact: 34000
    },
    {
      id: "NP-1136",
      type: "Objednávka",
      area: "Sklad",
      title: "Opakovaná chyba v přípravě objednávky",
      responsiblePerson: "David Svoboda",
      status: "Řeší se",
      priority: "Střední",
      workEstimateHours: 8,
      ageDays: 4,
      financialImpact: 22000
    },
    {
      id: "NP-1149",
      type: "Finance",
      area: "Finance",
      title: "Zpožděné schválení ručních oprav",
      responsiblePerson: "Lucie Králová",
      status: "Po termínu",
      priority: "Vysoká",
      workEstimateHours: 12,
      ageDays: 9,
      financialImpact: 41000
    },
    {
      id: "NP-1160",
      type: "Požadavek",
      area: "Servis",
      title: "Požadavek bez odpovědné osoby",
      responsiblePerson: null,
      status: "Otevřeno",
      priority: "Vysoká",
      workEstimateHours: null,
      ageDays: 6,
      financialImpact: 18000
    },
    {
      id: "NP-1187",
      type: "Úkol",
      area: "Administrativa",
      title: "Chybí plán kapacit pro sezonní nárůst práce",
      responsiblePerson: "Eva Malá",
      status: "Řeší se",
      priority: "Střední",
      workEstimateHours: 5,
      ageDays: 3,
      financialImpact: 15000
    }
  ],
  audience: [
    "Firmy 5-200 lidí",
    "Obchodní firmy",
    "Sklady a logistika",
    "Servisní týmy",
    "Firmy s daty v Excelu nebo systému"
  ],
  cooperationSteps: [
    {
      title: "Podíváme se na vaše data",
      description:
        "Nemusíte měnit své systémy. Pracujeme s tím, co už používáte - Excel, účetní systém, CRM, skladový systém, zákaznickou podporu nebo jiné dostupné zdroje."
    },
    {
      title: "Vytvoříme přehled",
      description:
        "Data převedeme do manažerského přehledu, kterému rozumí vedení i běžní vedoucí týmů."
    },
    {
      title: "Najdeme problémy",
      description:
        "Ukážeme, kde vznikají zdržení, ztráty, přetížení lidí nebo nejasnosti v odpovědnosti."
    },
    {
      title: "Navrhneme řešení",
      description:
        "Výstupem nejsou jen grafy, ale konkrétní doporučení, co změnit a v jakém pořadí."
    }
  ]
};
