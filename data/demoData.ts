export type RiskLevel = "high" | "medium" | "low";

export const demoData = {
  company: "Demo Manufacturing Group",
  generatedAt: "2026-05-13",
  kpiSummary: {
    totalRevenueAtRisk: 18400000,
    monthlyLossEstimate: 3260000,
    hoursLostMonthly: 1480,
    delayedOrders: 46,
    overdueTasks: 83,
    openTickets: 137,
    capacityUtilization: 91,
    predictedSavings: 2180000,
    topBottleneckArea: "Warehouse & dispatch"
  },
  executiveSummary:
    "Demo Manufacturing Group ztraci nejvice penez ve skladu, podpore a obchodnim follow-upu. Data ukazuji, ze cast prace nema vlastnika ani odhad, kapacity jsou rozlozene nerovnomerne a management vidi dopady az pozde. Tri hlavni bottlenecky generuji odhadovanou mesicni ztratu 3,26 mil. Kc.",
  moneyLeaks: [
    { area: "Sales", value: 720000, risk: "medium" as RiskLevel, note: "pomale follow-upy a stagnujici dealy" },
    { area: "Warehouse", value: 1180000, risk: "high" as RiskLevel, note: "zpozdene expedice a opakovane chyby kompletace" },
    { area: "Support", value: 540000, risk: "high" as RiskLevel, note: "SLA breach a prilis mnoho otevrenych ticketu" },
    { area: "Internal processes", value: 490000, risk: "medium" as RiskLevel, note: "ukoly bez vlastnika a odhadu" },
    { area: "Finance", value: 330000, risk: "low" as RiskLevel, note: "manualni kontrola vyjimek a zpozdene schvalovani" }
  ],
  bottlenecks: [
    { area: "Warehouse & dispatch", score: 94, level: "high" as RiskLevel, impact: "1,18 mil. Kc / mesic", signal: "46 zpozdenych expedic" },
    { area: "Support desk", score: 88, level: "high" as RiskLevel, impact: "540 tis. Kc / mesic", signal: "31 SLA breached" },
    { area: "Sales follow-up", score: 76, level: "medium" as RiskLevel, impact: "720 tis. Kc / mesic", signal: "18 stagnujicich dealu" },
    { area: "Ownership & estimation", score: 71, level: "medium" as RiskLevel, impact: "490 tis. Kc / mesic", signal: "25 % prace bez vlastnika nebo odhadu" },
    { area: "Finance approvals", score: 42, level: "low" as RiskLevel, impact: "330 tis. Kc / mesic", signal: "manualni vyjimky" }
  ],
  people: [
    { name: "Anna Novak", department: "Sales", role: "Account Manager", plannedCapacity: 128, actualLoad: 156, tasks: 31, overdueTasks: 9, tasksWithoutEstimate: 6, overloadRisk: "high" as RiskLevel },
    { name: "Marek Dvorak", department: "Sales", role: "Sales Operations", plannedCapacity: 120, actualLoad: 104, tasks: 23, overdueTasks: 4, tasksWithoutEstimate: 3, overloadRisk: "low" as RiskLevel },
    { name: "Tereza Malik", department: "Warehouse", role: "Dispatch Lead", plannedCapacity: 132, actualLoad: 174, tasks: 38, overdueTasks: 13, tasksWithoutEstimate: 7, overloadRisk: "high" as RiskLevel },
    { name: "Filip Urban", department: "Warehouse", role: "Inventory Planner", plannedCapacity: 136, actualLoad: 126, tasks: 27, overdueTasks: 5, tasksWithoutEstimate: 4, overloadRisk: "medium" as RiskLevel },
    { name: "Sofia Hruba", department: "Support", role: "Service Desk Specialist", plannedCapacity: 124, actualLoad: 166, tasks: 42, overdueTasks: 14, tasksWithoutEstimate: 8, overloadRisk: "high" as RiskLevel },
    { name: "David Kral", department: "IT", role: "Systems Analyst", plannedCapacity: 140, actualLoad: 118, tasks: 25, overdueTasks: 3, tasksWithoutEstimate: 4, overloadRisk: "low" as RiskLevel },
    { name: "Nina Svobodova", department: "Finance", role: "Controller", plannedCapacity: 118, actualLoad: 134, tasks: 29, overdueTasks: 7, tasksWithoutEstimate: 5, overloadRisk: "medium" as RiskLevel },
    { name: "Peter Lang", department: "HR", role: "People Operations", plannedCapacity: 112, actualLoad: 92, tasks: 18, overdueTasks: 2, tasksWithoutEstimate: 3, overloadRisk: "low" as RiskLevel }
  ],
  sales: {
    leads: 284,
    pipelineValue: 42600000,
    stagnantDeals: 18,
    averageFollowUpHours: 42,
    lostOpportunities: 11,
    estimatedLostMoney: 720000,
    monthlyTrend: [
      { month: "Jan", leads: 208, lost: 5, followUpHours: 28 },
      { month: "Feb", leads: 226, lost: 7, followUpHours: 31 },
      { month: "Mar", leads: 251, lost: 8, followUpHours: 36 },
      { month: "Apr", leads: 269, lost: 10, followUpHours: 39 },
      { month: "May", leads: 284, lost: 11, followUpHours: 42 }
    ]
  },
  warehouse: {
    orders: 1260,
    delayedShipments: 46,
    errorRate: 4.8,
    averageDispatchDays: 3.7,
    topDelayReason: "Missing stock reservation before packing",
    financialImpact: 1180000,
    reasons: [
      { reason: "Missing reservation", count: 18 },
      { reason: "Late picking", count: 13 },
      { reason: "Carrier handover", count: 8 },
      { reason: "Incorrect address", count: 4 },
      { reason: "Quality hold", count: 3 }
    ]
  },
  support: {
    openTickets: 137,
    slaBreached: 31,
    averageResolutionHours: 38,
    unassignedTickets: 19,
    byPriority: [
      { priority: "Critical", count: 9 },
      { priority: "High", count: 34 },
      { priority: "Normal", count: 71 },
      { priority: "Low", count: 23 }
    ],
    trend: [
      { week: "W01", created: 42, closed: 35 },
      { week: "W02", created: 48, closed: 39 },
      { week: "W03", created: 57, closed: 44 },
      { week: "W04", created: 63, closed: 48 },
      { week: "W05", created: 59, closed: 52 }
    ]
  },
  finance: {
    monthlyLossEstimate: 3260000,
    potentialSavings: 2180000,
    recommendedActionsRoi: 3.4,
    lossesByArea: [
      { area: "Warehouse", loss: 1180000 },
      { area: "Sales", loss: 720000 },
      { area: "Support", loss: 540000 },
      { area: "Internal processes", loss: 490000 },
      { area: "Finance", loss: 330000 }
    ]
  },
  processHealth: {
    tasksWithoutOwner: 37,
    tasksWithoutEstimate: 52,
    overdueTasks: 83,
    slaBreached: 31,
    averageDelayDays: 5.8
  },
  insightReport: [
    "Nejvetsi unik penez je ve skladu kvuli zpozdenym expedicim.",
    "Obchod ztraci prilezitosti kvuli pomalemu follow-upu.",
    "Support tym je pretizeny, ale cast ticketu nema spravnou prioritu.",
    "25 % ukolu nema vlastnika nebo odhad, coz znemoznuje predikci kapacit.",
    "Pri odstraneni tri hlavnich bottlenecku lze odhadovat usporu 2,18 mil. Kc mesicne."
  ],
  recommendations: [
    { action: "Zavest SLA rizeni", owner: "Support Lead", expectedImpact: "snizeni SLA breach o 35 %", priority: "High" },
    { action: "Upravit proces expedice", owner: "Operations Manager", expectedImpact: "zkraceni prumerne expedice o 1,1 dne", priority: "High" },
    { action: "Automatizovat follow-upy v obchode", owner: "Sales Operations", expectedImpact: "rychlejsi reakce na leady o 24 hodin", priority: "Medium" },
    { action: "Nastavit vlastniky a estimace", owner: "PMO", expectedImpact: "predikovatelnejsi kapacity", priority: "High" },
    { action: "Zavest tydenni management review", owner: "COO", expectedImpact: "drivejsi eskalace bottlenecku", priority: "Medium" }
  ],
  workItems: [
    { id: "DMG-1042", type: "Order", area: "Warehouse", title: "Delayed dispatch for strategic customer", owner: "Tereza Malik", status: "Overdue", priority: "High", estimateHours: 10, ageDays: 7, financialImpact: 180000 },
    { id: "DMG-1088", type: "Deal", area: "Sales", title: "Enterprise deal waiting for follow-up", owner: "Anna Novak", status: "At risk", priority: "High", estimateHours: null, ageDays: 12, financialImpact: 260000 },
    { id: "DMG-1104", type: "Ticket", area: "Support", title: "Recurring invoice export issue", owner: "Sofia Hruba", status: "SLA breached", priority: "Critical", estimateHours: 6, ageDays: 5, financialImpact: 90000 },
    { id: "DMG-1121", type: "Task", area: "Internal processes", title: "No owner assigned for approval workflow", owner: null, status: "Open", priority: "Normal", estimateHours: null, ageDays: 18, financialImpact: 70000 },
    { id: "DMG-1136", type: "Order", area: "Warehouse", title: "Picking error root cause analysis", owner: "Filip Urban", status: "Active", priority: "Normal", estimateHours: 8, ageDays: 4, financialImpact: 45000 },
    { id: "DMG-1149", type: "Finance", area: "Finance", title: "Manual exception approval backlog", owner: "Nina Svobodova", status: "Overdue", priority: "High", estimateHours: 12, ageDays: 9, financialImpact: 120000 },
    { id: "DMG-1160", type: "Ticket", area: "Support", title: "Unassigned priority routing issue", owner: null, status: "Open", priority: "High", estimateHours: null, ageDays: 6, financialImpact: 65000 },
    { id: "DMG-1187", type: "HR", area: "HR", title: "Capacity planning data missing for onboarding", owner: "Peter Lang", status: "Active", priority: "Normal", estimateHours: 5, ageDays: 3, financialImpact: 30000 }
  ]
};
