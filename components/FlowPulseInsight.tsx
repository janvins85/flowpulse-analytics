"use client";

import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Coins,
  Factory,
  Gauge,
  HandCoins,
  LineChart,
  PackageCheck,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users
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
import { demoData, type RiskLevel } from "@/data/demoData";
import { formatCurrency, formatNumber, riskLabel } from "@/lib/format";

const chartColors = ["#2563eb", "#0f9f6e", "#d97706", "#dc2626", "#7c3aed", "#0f766e"];

const navItems = [
  { href: "#prehled", label: "Přehled" },
  { href: "#zjisteni", label: "Zjištění" },
  { href: "#penize", label: "Peníze" },
  { href: "#lide", label: "Lidé" },
  { href: "#doporuceni", label: "Doporučení" },
  { href: "#spoluprace", label: "Spolupráce" }
];

const iconMap: Record<string, LucideIcon> = {
  warehouse: PackageCheck,
  sales: TrendingUp,
  people: Users,
  responsibility: ClipboardList
};

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
  icon: LucideIcon;
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
      <div className={`text-2xl font-extrabold leading-tight ${color}`}>{value}</div>
      <div className="mt-2 text-sm text-slate-400">{sub}</div>
    </div>
  );
}

function Panel({
  title,
  children,
  className = "",
  subtitle
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}) {
  return (
    <section className={`panel rounded-[8px] p-5 ${className}`}>
      <div className="mb-1 section-title">{title}</div>
      {subtitle ? <p className="mb-5 text-sm leading-6 text-slate-400">{subtitle}</p> : null}
      {children}
    </section>
  );
}

function RiskBadge({ level }: { level: RiskLevel }) {
  const cls =
    level === "vysoke"
      ? "bg-red-500/15 text-red-200"
      : level === "stredni"
        ? "bg-amber-500/15 text-amber-200"
        : "bg-emerald-500/15 text-emerald-200";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${cls}`}>{riskLabel(level)}</span>;
}

function PriorityBadge({ priority }: { priority: string }) {
  const cls =
    priority === "Vysoká"
      ? "bg-red-500/15 text-red-200"
      : priority === "Střední"
        ? "bg-amber-500/15 text-amber-200"
        : "bg-emerald-500/15 text-emerald-200";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${cls}`}>{priority}</span>;
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-[8px] border border-slate-700 bg-slate-950 p-3 text-sm shadow-soft">
      <div className="font-semibold text-slate-100">{label}</div>
      {payload.map((item: any) => (
        <div key={item.dataKey} className="text-slate-300">
          {item.name}: {typeof item.value === "number" && item.value > 999 ? formatNumber(item.value) : item.value}
        </div>
      ))}
    </div>
  );
}

function MoneyTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-[8px] border border-slate-700 bg-slate-950 p-3 text-sm shadow-soft">
      <div className="font-semibold text-slate-100">{label}</div>
      <div className="text-slate-300">{formatCurrency(payload[0].value)}</div>
    </div>
  );
}

export function FlowPulseInsight() {
  const kpi = demoData.kpiSummary;

  return (
    <main>
      <nav className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <a href="#uvod" className="flex items-center gap-2 text-sm font-black text-white">
            <Gauge className="h-5 w-5 text-blue-300" />
            FlowPulse Insight
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-[7px] px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="uvod" className="border-b border-slate-800 bg-slate-950/72">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
              <Factory className="h-4 w-4" />
              {demoData.company} | {demoData.field}
            </div>
            <h1 className="text-4xl font-black tracking-normal text-white md:text-6xl">FlowPulse Insight</h1>
            <p className="mt-4 text-xl font-semibold text-blue-100">Firemní rentgen z dat, která už máte.</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Pomůžeme vám z dostupných firemních dat zjistit, kde vznikají zbytečné náklady, proč se některé věci
              nestíhají, které týmy jsou přetížené a kde má změna největší finanční dopad.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Bez složitých implementací. Bez výměny systémů. Srozumitelně, česky a prakticky.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#prehled"
                className="inline-flex items-center gap-2 rounded-[7px] bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
              >
                Zobrazit ukázku přehledu <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#zjisteni"
                className="inline-flex items-center gap-2 rounded-[7px] border border-slate-600 px-4 py-2.5 text-sm font-bold text-slate-100 hover:bg-slate-800"
              >
                Co dokážeme odhalit <Search className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-[430px]">
            <KpiCard label="Odhad měsíčních ztrát" value={formatCurrency(kpi.monthlyLossEstimate)} sub="praktický odhad dopadu" icon={LineChart} tone="yellow" />
            <KpiCard label="Ohrožené tržby" value={formatCurrency(kpi.threatenedRevenue)} sub="obchodní příležitosti" icon={Coins} tone="red" />
            <KpiCard label="Ztracené hodiny měsíčně" value={`${formatNumber(kpi.hoursLostMonthly)} h`} sub="čas lidí a čekání" icon={Clock3} tone="purple" />
            <KpiCard label="Odhadovaná úspora" value={formatCurrency(kpi.estimatedSavings)} sub="po zavedení opatření" icon={Target} tone="green" />
          </div>
        </div>
      </header>

      <section id="prehled" className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          <KpiCard label="Odhad měsíčních ztrát" value={formatCurrency(kpi.monthlyLossEstimate)} sub="součet hlavních oblastí" icon={LineChart} tone="yellow" />
          <KpiCard label="Ohrožené tržby" value={formatCurrency(kpi.threatenedRevenue)} sub="pomalá reakce obchodu" icon={HandCoins} tone="red" />
          <KpiCard label="Ztracené hodiny měsíčně" value={`${formatNumber(kpi.hoursLostMonthly)} h`} sub="neefektivní práce a čekání" icon={Clock3} tone="purple" />
          <KpiCard label="Odhadovaná úspora" value={formatCurrency(kpi.estimatedSavings)} sub="při prvních změnách" icon={Target} tone="green" />
          <KpiCard label="Úkoly po termínu" value={formatNumber(kpi.overdueWork)} sub="napříč firmou" icon={AlertTriangle} tone="red" />
          <KpiCard label="Vytížení týmu" value={`${kpi.teamLoad} %`} sub="průměr za období" icon={Gauge} tone="teal" />
        </div>

        <Panel title="Manažerské shrnutí">
          <p className="text-base leading-7 text-slate-200">{demoData.managementSummary}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {demoData.summaryHighlights.map((item) => {
              const cls =
                item.tone === "red"
                  ? "border-red-400/25 bg-red-500/10 text-red-100"
                  : item.tone === "amber"
                    ? "border-amber-400/25 bg-amber-500/10 text-amber-100"
                    : "border-emerald-400/25 bg-emerald-500/10 text-emerald-100";
              return (
                <div key={item.label} className={`rounded-[8px] border p-4 ${cls}`}>
                  <div className="text-sm font-bold text-slate-300">{item.label}</div>
                  <div className="mt-2 text-base font-black">{item.value}</div>
                </div>
              );
            })}
          </div>
        </Panel>
      </section>

      <section id="zjisteni" className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <Panel title="Největší zjištění">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {demoData.keyFindings.map((finding) => {
              const Icon = iconMap[finding.icon] ?? BarChart3;
              return (
                <div key={finding.title} className="rounded-[8px] border border-slate-700 bg-slate-900 p-4">
                  <Icon className="h-6 w-6 text-blue-300" />
                  <h3 className="mt-4 text-lg font-black text-white">{finding.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{finding.description}</p>
                </div>
              );
            })}
          </div>
        </Panel>
      </section>

      <section id="penize" className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Panel title="Kde firmě utíkají peníze" subtitle="Přehled oblastí, kde vznikají největší ztráty nebo nevyužitý potenciál.">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demoData.moneyLossAreas}>
                <CartesianGrid stroke="#2d3149" vertical={false} />
                <XAxis dataKey="area" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `${formatNumber(v / 1000)} tis.`} />
                <Tooltip content={<MoneyTooltip />} />
                <Bar dataKey="monthlyLoss" name="Odhad měsíční ztráty" radius={[6, 6, 0, 0]}>
                  {demoData.moneyLossAreas.map((entry, index) => (
                    <Cell key={entry.area} fill={entry.risk === "vysoke" ? "#dc2626" : chartColors[index % chartColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Oblasti s prioritou řešení">
          <div className="space-y-3">
            {demoData.moneyLossAreas.map((item) => (
              <div key={item.area} className={`rounded-[8px] border p-4 risk-${item.risk}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-black text-white">{item.area}</h3>
                  <PriorityBadge priority={item.priority} />
                </div>
                <div className="mt-2 text-lg font-black text-white">{formatCurrency(item.monthlyLoss)}</div>
                <p className="mt-2 text-sm text-slate-300">Hlavní příčina: {item.cause}</p>
                <p className="mt-2 text-sm text-slate-300">Doporučené opatření: {item.measure}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Panel title="Stav procesů">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Požadavky bez odpovědné osoby", demoData.processState.requestsWithoutResponsiblePerson, Users, "text-red-300"],
              ["Úkoly bez odhadu pracnosti", demoData.processState.workWithoutEstimate, ClipboardList, "text-amber-300"],
              ["Úkoly po termínu", demoData.processState.overdueTasks, Clock3, "text-violet-300"],
              ["Překročená doba řešení", demoData.processState.exceededResolutionTime, AlertTriangle, "text-blue-300"],
              ["Průměrné zpoždění", `${demoData.processState.averageDelayDays} dne`, LineChart, "text-emerald-300"],
              ["Opakující se problémy", demoData.processState.recurringProblems, ShieldCheck, "text-teal-300"]
            ].map(([label, value, Icon, color]) => {
              const TypedIcon = Icon as LucideIcon;
              return (
                <div key={label as string} className="rounded-[8px] border border-slate-700 bg-slate-900 p-4">
                  <TypedIcon className={`h-5 w-5 ${color}`} />
                  <div className={`mt-3 text-3xl font-black ${color}`}>{value as string}</div>
                  <div className="mt-1 text-sm text-slate-400">{label as string}</div>
                </div>
              );
            })}
          </div>
        </Panel>

        <Panel title="Odhad finančního dopadu">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[8px] border border-red-400/25 bg-red-500/10 p-4">
              <div className="text-sm text-slate-400">Aktuální odhad měsíčních ztrát</div>
              <div className="mt-2 text-2xl font-black text-red-200">{formatCurrency(demoData.finance.monthlyLossEstimate)}</div>
            </div>
            <div className="rounded-[8px] border border-emerald-400/25 bg-emerald-500/10 p-4">
              <div className="text-sm text-slate-400">Možná úspora po opatřeních</div>
              <div className="mt-2 text-2xl font-black text-emerald-200">{formatCurrency(demoData.finance.possibleSavings)}</div>
            </div>
            <div className="rounded-[8px] border border-blue-400/25 bg-blue-500/10 p-4">
              <div className="text-sm text-slate-400">Návratnost úprav</div>
              <div className="mt-2 text-2xl font-black text-blue-200">{demoData.finance.returnEstimate}</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Nejde o účetní audit. Jde o praktický odhad, který pomáhá vedení rozhodnout, kde má největší smysl začít.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {demoData.finance.highestPriorityAreas.map((area) => (
              <span key={area} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-200">
                {area}
              </span>
            ))}
          </div>
        </Panel>
      </section>

      <section id="lide" className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <Panel title="Vytížení lidí a týmů">
          <div className="h-[330px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={demoData.people}>
                <CartesianGrid stroke="#2d3149" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} interval={0} angle={-25} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip content={<ChartTooltip />} />
                <Legend />
                <Bar dataKey="plannedCapacity" name="Plánovaná kapacita" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="actualLoad" name="Skutečné vytížení" fill="#d97706" radius={[4, 4, 0, 0]} />
                <Line dataKey="openTasks" name="Otevřené úkoly" stroke="#0f9f6e" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Přehled lidí">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left text-xs uppercase text-slate-400">
                  <th className="py-3 pr-4">Jméno</th>
                  <th className="py-3 pr-4">Tým</th>
                  <th className="py-3 pr-4">Role</th>
                  <th className="py-3 pr-4">Plánovaná kapacita</th>
                  <th className="py-3 pr-4">Skutečné vytížení</th>
                  <th className="py-3 pr-4">Otevřené úkoly</th>
                  <th className="py-3 pr-4">Po termínu</th>
                  <th className="py-3 pr-4">Riziko</th>
                </tr>
              </thead>
              <tbody>
                {demoData.people.map((person) => (
                  <tr key={person.name} className="border-b border-slate-800 text-slate-300 hover:bg-white/[0.03]">
                    <td className="py-3 pr-4 font-bold text-white">{person.name}</td>
                    <td className="py-3 pr-4">{person.team}</td>
                    <td className="py-3 pr-4">{person.role}</td>
                    <td className="py-3 pr-4">{formatNumber(person.plannedCapacity)} h</td>
                    <td className="py-3 pr-4">{formatNumber(person.actualLoad)} h</td>
                    <td className="py-3 pr-4">{person.openTasks}</td>
                    <td className="py-3 pr-4">{person.overdueTasks}</td>
                    <td className="py-3 pr-4"><RiskBadge level={person.risk} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-8 xl:grid-cols-3 lg:px-8">
        <Panel title="Obchodní příležitosti">
          <div className="grid gap-3 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Aktivní obchodní příležitosti</span><strong>{demoData.sales.activeOpportunities}</strong></div>
            <div className="flex items-center justify-between"><span>Hodnota otevřených příležitostí</span><strong>{formatCurrency(demoData.sales.openOpportunityValue)}</strong></div>
            <div className="flex items-center justify-between"><span>Příležitosti bez včasné reakce</span><strong>{demoData.sales.lateResponseOpportunities}</strong></div>
            <div className="flex items-center justify-between"><span>Průměrná doba reakce</span><strong>{demoData.sales.averageResponseHours} h</strong></div>
            <div className="flex items-center justify-between"><span>Odhad ztracených tržeb</span><strong>{formatCurrency(demoData.sales.estimatedLostRevenue)}</strong></div>
          </div>
        </Panel>

        <Panel title="Sklad a provoz">
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={demoData.warehouse.reasons} dataKey="count" nameKey="reason" outerRadius={82} innerRadius={46}>
                  {demoData.warehouse.reasons.map((entry, index) => (
                    <Cell key={entry.reason} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid gap-2 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Počet objednávek</span><strong>{formatNumber(demoData.warehouse.orders)}</strong></div>
            <div className="flex items-center justify-between"><span>Zpožděné expedice</span><strong>{demoData.warehouse.delayedShipments}</strong></div>
            <div className="flex items-center justify-between"><span>Chybovost přípravy</span><strong>{demoData.warehouse.preparationErrorRate} %</strong></div>
            <div className="flex items-center justify-between"><span>Průměrná doba expedice</span><strong>{demoData.warehouse.averageDispatchDays} dne</strong></div>
            <div className="flex items-center justify-between"><span>Odhad finančního dopadu</span><strong>{formatCurrency(demoData.warehouse.financialImpact)}</strong></div>
          </div>
          <p className="mt-3 text-sm text-slate-400">Nejčastější důvod zpoždění: {demoData.warehouse.topDelayReason}</p>
        </Panel>

        <Panel title="Požadavky a úkoly">
          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={demoData.requests.trend}>
                <CartesianGrid stroke="#2d3149" vertical={false} />
                <XAxis dataKey="week" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="created" name="Nové požadavky" fill="#dc2626" radius={[4, 4, 0, 0]} />
                <Line dataKey="finished" name="Vyřízeno" stroke="#0f9f6e" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="grid gap-2 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Otevřené požadavky</span><strong>{demoData.requests.openRequests}</strong></div>
            <div className="flex items-center justify-between"><span>Požadavky po termínu</span><strong>{demoData.requests.overdueRequests}</strong></div>
            <div className="flex items-center justify-between"><span>Bez odpovědné osoby</span><strong>{demoData.requests.requestsWithoutResponsiblePerson}</strong></div>
            <div className="flex items-center justify-between"><span>Průměrná doba vyřízení</span><strong>{demoData.requests.averageResolutionHours} h</strong></div>
          </div>
        </Panel>
      </section>

      <section id="doporuceni" className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <Panel
          title="Doporučené kroky"
          subtitle="Na základě ukázkových dat systém navrhuje konkrétní oblasti, kde má změna největší dopad."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {demoData.recommendations.map((item) => (
              <div key={item.action} className="rounded-[8px] border border-slate-700 bg-slate-900 p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-500/15 px-2 py-1 text-xs font-bold text-blue-200">{item.difficulty}</span>
                  <Target className="h-4 w-4 text-emerald-300" />
                </div>
                <h3 className="font-black text-white">{item.action}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Dopad: {item.impact}</p>
                <p className="mt-2 text-sm text-slate-300">Odhadovaná úspora: <strong className="text-white">{formatCurrency(item.savings)}</strong></p>
                <p className="mt-2 text-sm text-slate-400">První krok: {item.firstStep}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <Panel title="Ukázková tabulka požadavků, úkolů, zakázek a procesních problémů">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left text-xs uppercase text-slate-400">
                  <th className="py-3 pr-4">ID</th>
                  <th className="py-3 pr-4">Typ</th>
                  <th className="py-3 pr-4">Oblast</th>
                  <th className="py-3 pr-4">Název</th>
                  <th className="py-3 pr-4">Odpovědná osoba</th>
                  <th className="py-3 pr-4">Stav</th>
                  <th className="py-3 pr-4">Odhad pracnosti</th>
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
                    <td className="py-3 pr-4">{item.responsiblePerson ?? <span className="text-red-300">Bez odpovědné osoby</span>}</td>
                    <td className="py-3 pr-4">{item.status}</td>
                    <td className="py-3 pr-4">{item.workEstimateHours ? `${item.workEstimateHours} h` : <span className="text-amber-300">Bez odhadu</span>}</td>
                    <td className="py-3 pr-4">{formatCurrency(item.financialImpact)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </section>

      <section id="spoluprace" className="mx-auto grid max-w-7xl gap-5 px-5 pb-12 lg:grid-cols-2 lg:px-8">
        <Panel title="Pro koho je FlowPulse Insight">
          <div className="grid gap-2 text-sm text-slate-300">
            {demoData.audience.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Jak probíhá spolupráce">
          <div className="space-y-4">
            {demoData.cooperationSteps.map((step, index) => (
              <div key={step.title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-black text-blue-200">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Co FlowPulse Insight není">
          <div className="grid gap-3 text-sm text-slate-300">
            {[
              "Není to složitý korporátní reporting.",
              "Není to náhrada vašeho účetního, skladového nebo obchodního systému.",
              "Není to další nástroj, který musí lidé složitě vyplňovat.",
              "Je to přehledná vrstva nad daty, která už ve firmě máte."
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                {item}
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Co FlowPulse Insight je">
          <div className="grid gap-3 text-sm text-slate-300">
            {[
              "Praktický firemní rentgen.",
              "Manažerský přehled pro rozhodování.",
              "Způsob, jak odhalit ztráty, zdržení a přetížení lidí.",
              "Podklad pro konkrétní změny a úspory."
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-500">
        FlowPulse Insight | Ukázková data | Excel / CSV, CRM, ERP, skladový systém, účetní systém, zákaznická podpora, plánování práce a e-shop.
      </footer>
    </main>
  );
}
