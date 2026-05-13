"use client";

import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Coins,
  Factory,
  Gauge,
  HelpCircle,
  LineChart,
  Search,
  ShieldAlert,
  Sparkles,
  Target
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { demoData } from "@/data/demoData";
import { formatCurrency, formatNumber, riskLabel } from "@/lib/format";

const chartColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"];

function KpiCard({
  label,
  value,
  sub,
  icon: Icon,
  tone = "blue"
}: {
  label: string;
  value: string;
  sub: string;
  icon: typeof Gauge;
  tone?: "blue" | "green" | "yellow" | "red" | "purple" | "teal";
}) {
  const color = {
    blue: "text-blue-300",
    green: "text-emerald-300",
    yellow: "text-amber-300",
    red: "text-red-300",
    purple: "text-violet-300",
    teal: "text-teal-300"
  }[tone];

  return (
    <div className="kpi-card rounded-[8px] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="section-title">{label}</span>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div className={`text-2xl font-extrabold leading-none ${color}`}>{value}</div>
      <div className="mt-2 text-sm text-slate-400">{sub}</div>
    </div>
  );
}

function Panel({
  title,
  children,
  className = ""
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel rounded-[8px] p-5 ${className}`}>
      <div className="mb-4 section-title">{title}</div>
      {children}
    </section>
  );
}

function RiskBadge({ level }: { level: string }) {
  const cls =
    level === "high"
      ? "bg-red-500/15 text-red-200"
      : level === "medium"
        ? "bg-amber-500/15 text-amber-200"
        : "bg-emerald-500/15 text-emerald-200";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${cls}`}>{riskLabel(level)}</span>;
}

const processHealthCards = [
  { label: "Ukoly bez vlastnika", value: demoData.processHealth.tasksWithoutOwner, icon: AlertTriangle, color: "text-red-300" },
  { label: "Ukoly bez odhadu", value: demoData.processHealth.tasksWithoutEstimate, icon: HelpCircle, color: "text-amber-300" },
  { label: "Overdue ukoly", value: demoData.processHealth.overdueTasks, icon: Clock3, color: "text-violet-300" },
  { label: "SLA breached", value: demoData.processHealth.slaBreached, icon: ShieldAlert, color: "text-blue-300" }
];

function MoneyTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-[8px] border border-slate-700 bg-slate-950 p-3 text-sm shadow-soft">
      <div className="font-semibold text-slate-100">{label}</div>
      <div className="text-slate-300">{formatCurrency(payload[0].value)}</div>
    </div>
  );
}

export function FlowPulseDashboard() {
  const kpi = demoData.kpiSummary;

  return (
    <main>
      <header className="border-b border-slate-800 bg-slate-950/72">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
              <Factory className="h-4 w-4" />
              Demo Manufacturing Group
            </div>
            <h1 className="text-4xl font-black tracking-normal text-white md:text-6xl">FlowPulse Analytics</h1>
            <p className="mt-4 text-xl font-semibold text-blue-100">
              Najdete, kde vam ve firme utika cas, penize a kapacita.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Napojime vase dostupna data, vytvorime prehledny manazersky dashboard a ukazeme, kde vznikaji
              ztraty, uzka mista a neefektivita. Bez vymeny systemu. Bez mesicu implementace. Z dat, ktera uz mate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#dashboard"
                className="inline-flex items-center gap-2 rounded-[7px] bg-blue-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-600"
              >
                Zobrazit demo dashboard <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#scope"
                className="inline-flex items-center gap-2 rounded-[7px] border border-slate-600 px-4 py-2.5 text-sm font-bold text-slate-100 hover:bg-slate-800"
              >
                Co lze analyzovat <Search className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-[390px]">
            <KpiCard label="Revenue at risk" value={formatCurrency(kpi.totalRevenueAtRisk)} sub="otevrena rizika" icon={Coins} tone="red" />
            <KpiCard label="Predicted savings" value={formatCurrency(kpi.predictedSavings)} sub="mesicni potencial" icon={Target} tone="green" />
            <KpiCard label="Hours lost" value={`${formatNumber(kpi.hoursLostMonthly)} h`} sub="mesicne" icon={Clock3} tone="yellow" />
            <KpiCard label="Capacity" value={`${kpi.capacityUtilization} %`} sub="prumerne vytizeni" icon={Gauge} tone="teal" />
          </div>
        </div>
      </header>

      <section id="scope" className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-3 lg:px-8">
        <Panel title="Co umime odhalit">
          <div className="grid gap-2 text-sm text-slate-300">
            {[
              "kde se ztraci cas lidi",
              "kde vznikaji zbytecne naklady",
              "proc se nestihaji terminy",
              "ktere tymy jsou pretizene",
              "kde chybi vlastnici a odhady",
              "jake jsou predikce vyvoje",
              "jaky je financni dopad problemu"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Pro koho je reseni vhodne">
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {["Obchod", "Sklady", "IT/helpdesk", "Finance", "HR", "Management", "SMB firmy"].map((item) => (
              <span key={item} className="rounded-[7px] border border-slate-700 bg-slate-900 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </Panel>
        <Panel title="Jak probiha spoluprace">
          <div className="grid gap-3 text-sm text-slate-300">
            {["Napojeni dostupnych dat", "Vytvoreni dashboardu", "Analyza problemu", "Doporuceni reseni", "Prubezne mereni dopadu"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-xs font-black text-blue-200">
                    {index + 1}
                  </span>
                  {item}
                </div>
              )
            )}
          </div>
        </Panel>
      </section>

      <section id="dashboard" className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-title">Demo dashboard</div>
            <h2 className="mt-2 text-3xl font-black text-white">Executive Overview</h2>
          </div>
          <div className="text-sm text-slate-400">Data jsou fiktivni. Zadny backend, tokeny ani realna API.</div>
        </div>

        <div className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <KpiCard label="Revenue at risk" value={formatCurrency(kpi.totalRevenueAtRisk)} sub="dopad otevrenych rizik" icon={Coins} tone="red" />
          <KpiCard label="Monthly loss" value={formatCurrency(kpi.monthlyLossEstimate)} sub="odhad ztrat" icon={LineChart} tone="yellow" />
          <KpiCard label="Hours lost" value={`${formatNumber(kpi.hoursLostMonthly)} h`} sub="mesicne" icon={Clock3} tone="purple" />
          <KpiCard label="Predicted savings" value={formatCurrency(kpi.predictedSavings)} sub="po prvnich opatrenich" icon={Target} tone="green" />
          <KpiCard label="Overdue work" value={formatNumber(kpi.overdueTasks)} sub="ukolu po terminu" icon={ShieldAlert} tone="red" />
          <KpiCard label="Capacity use" value={`${kpi.capacityUtilization} %`} sub={kpi.topBottleneckArea} icon={Gauge} tone="teal" />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Panel title="Executive Summary">
            <p className="text-base leading-7 text-slate-200">{demoData.executiveSummary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-3">
                <div className="text-sm text-slate-400">Zpozdene expedice</div>
                <div className="mt-1 text-2xl font-black text-red-300">{demoData.warehouse.delayedShipments}</div>
              </div>
              <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-3">
                <div className="text-sm text-slate-400">SLA breached</div>
                <div className="mt-1 text-2xl font-black text-amber-300">{demoData.support.slaBreached}</div>
              </div>
              <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-3">
                <div className="text-sm text-slate-400">Stagnujici dealy</div>
                <div className="mt-1 text-2xl font-black text-blue-300">{demoData.sales.stagnantDeals}</div>
              </div>
            </div>
          </Panel>

          <Panel title="Nejvetsi zjisteni">
            <div className="space-y-3">
              {demoData.insightReport.slice(0, 4).map((insight) => (
                <div key={insight} className="flex gap-3 rounded-[8px] border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-50">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" />
                  {insight}
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Panel title="Where money leaks">
            <div className="h-[310px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demoData.moneyLeaks}>
                  <CartesianGrid stroke="#2d3149" vertical={false} />
                  <XAxis dataKey="area" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                  <Tooltip content={<MoneyTooltip />} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {demoData.moneyLeaks.map((entry, index) => (
                      <Cell key={entry.area} fill={entry.risk === "high" ? "#ef4444" : chartColors[index % chartColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Bottleneck map">
            <div className="space-y-3">
              {demoData.bottlenecks.map((item) => (
                <div key={item.area} className={`rounded-[8px] border p-3 risk-${item.level}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-bold text-white">{item.area}</div>
                    <RiskBadge level={item.level} />
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-blue-400" style={{ width: `${item.score}%` }} />
                  </div>
                  <div className="mt-2 flex justify-between gap-3 text-sm text-slate-300">
                    <span>{item.signal}</span>
                    <span>{item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Panel title="Team Capacity">
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={demoData.people}>
                  <CartesianGrid stroke="#2d3149" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} interval={0} angle={-25} textAnchor="end" height={74} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="plannedCapacity" name="Plan" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="actualLoad" name="Skutecnost" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Line dataKey="tasks" name="Ukoly" stroke="#10b981" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Process Health">
            <div className="grid gap-3 sm:grid-cols-2">
              {processHealthCards.map(({ label, value, icon: TypedIcon, color }) => {
                return (
                  <div key={label} className="rounded-[8px] border border-slate-700 bg-slate-900 p-4">
                    <TypedIcon className={`h-5 w-5 ${color}`} />
                    <div className={`mt-3 text-3xl font-black ${color}`}>{value}</div>
                    <div className="mt-1 text-sm text-slate-400">{label}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 rounded-[8px] border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300">
              Prumerne zpozdeni otevrene prace je <strong className="text-white">{demoData.processHealth.averageDelayDays} dne</strong>.
            </div>
          </Panel>
        </div>

        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <Panel title="Sales Pipeline">
            <div className="grid gap-3 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Leady</span><strong>{demoData.sales.leads}</strong></div>
              <div className="flex items-center justify-between"><span>Pipeline</span><strong>{formatCurrency(demoData.sales.pipelineValue)}</strong></div>
              <div className="flex items-center justify-between"><span>Stagnujici dealy</span><strong>{demoData.sales.stagnantDeals}</strong></div>
              <div className="flex items-center justify-between"><span>Prum. follow-up</span><strong>{demoData.sales.averageFollowUpHours} h</strong></div>
              <div className="flex items-center justify-between"><span>Ztracene prilezitosti</span><strong>{demoData.sales.lostOpportunities}</strong></div>
            </div>
          </Panel>

          <Panel title="Warehouse & Operations">
            <div className="h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={demoData.warehouse.reasons} dataKey="count" nameKey="reason" outerRadius={88} innerRadius={48}>
                    {demoData.warehouse.reasons.map((entry, index) => (
                      <Cell key={entry.reason} fill={chartColors[index % chartColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-slate-300">Top duvod zpozdeni: {demoData.warehouse.topDelayReason}</div>
          </Panel>

          <Panel title="Helpdesk / Service Desk">
            <div className="h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={demoData.support.trend}>
                  <CartesianGrid stroke="#2d3149" vertical={false} />
                  <XAxis dataKey="week" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="created" name="Vzniklo" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Line dataKey="closed" name="Uzavreno" stroke="#10b981" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-slate-300">{demoData.support.unassignedTickets} ticketu je bez vlastnika.</div>
          </Panel>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Panel title="Finance Impact">
            <div className="space-y-3">
              {demoData.finance.lossesByArea.map((item) => (
                <div key={item.area}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-300">{item.area}</span>
                    <strong className="text-white">{formatCurrency(item.loss)}</strong>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-emerald-400"
                      style={{ width: `${Math.round((item.loss / demoData.finance.monthlyLossEstimate) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[8px] border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm text-emerald-50">
              ROI doporucenych opatreni: <strong>{demoData.finance.recommendedActionsRoi}x</strong>
            </div>
          </Panel>

          <Panel title="AI Insight Report">
            <div className="mb-4 rounded-[8px] border border-violet-400/25 bg-violet-500/10 p-4 text-sm text-violet-50">
              Predgenerovane insighty bez volani AI API. Sekce simuluje vystup analyzy po nacteni firemnich dat.
            </div>
            <div className="space-y-3">
              {demoData.insightReport.map((insight) => (
                <div key={insight} className="flex gap-3 rounded-[8px] border border-slate-700 bg-slate-900 p-3 text-sm text-slate-200">
                  <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                  {insight}
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel title="Doporucene kroky" className="mt-5">
          <div className="grid gap-3 lg:grid-cols-5">
            {demoData.recommendations.map((item) => (
              <div key={item.action} className="rounded-[8px] border border-slate-700 bg-slate-900 p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-500/15 px-2 py-1 text-xs font-bold text-blue-200">{item.priority}</span>
                  <Target className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="font-bold text-white">{item.action}</div>
                <div className="mt-2 text-sm text-slate-400">{item.owner}</div>
                <div className="mt-3 text-sm text-slate-300">{item.expectedImpact}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Demo datova tabulka ticketu, ukolu, zakazek a procesnich problemu" className="mt-5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left text-xs uppercase text-slate-400">
                  <th className="py-3 pr-4">ID</th>
                  <th className="py-3 pr-4">Typ</th>
                  <th className="py-3 pr-4">Oblast</th>
                  <th className="py-3 pr-4">Nazev</th>
                  <th className="py-3 pr-4">Vlastnik</th>
                  <th className="py-3 pr-4">Stav</th>
                  <th className="py-3 pr-4">Odhad</th>
                  <th className="py-3 pr-4">Dopad</th>
                </tr>
              </thead>
              <tbody>
                {demoData.workItems.map((item) => (
                  <tr key={item.id} className="border-b border-slate-800 text-slate-300 hover:bg-white/[0.03]">
                    <td className="py-3 pr-4 font-bold text-blue-200">{item.id}</td>
                    <td className="py-3 pr-4">{item.type}</td>
                    <td className="py-3 pr-4">{item.area}</td>
                    <td className="py-3 pr-4 text-slate-100">{item.title}</td>
                    <td className="py-3 pr-4">{item.owner ?? <span className="text-red-300">Bez vlastnika</span>}</td>
                    <td className="py-3 pr-4">{item.status}</td>
                    <td className="py-3 pr-4">{item.estimateHours ? `${item.estimateHours} h` : <span className="text-amber-300">Bez odhadu</span>}</td>
                    <td className="py-3 pr-4">{formatCurrency(item.financialImpact)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <footer className="py-8 text-center text-sm text-slate-500">
          FlowPulse Analytics | Demo data | CRM, ERP, Helpdesk, Jira, Azure DevOps, Excel/CSV, skladove a ucetni systemy.
        </footer>
      </section>
    </main>
  );
}
