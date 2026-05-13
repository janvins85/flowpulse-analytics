import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Coins,
  Eye,
  Factory,
  Gauge,
  LineChart,
  PackageCheck,
  Search,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { demoData, type RiskLevel } from "@/data/demoData";
import { formatCurrency, formatNumber, riskLabel } from "@/lib/format";

const navItems = [
  { href: "#prehled", label: "Přehled" },
  { href: "#zjisteni", label: "Zjištění" },
  { href: "#penize", label: "Peníze" },
  { href: "#proc", label: "Proč" },
  { href: "#doporuceni", label: "Doporučení" },
  { href: "#spoluprace", label: "Spolupráce" },
  { href: "#kontakt", label: "Kontakt" }
];

const contactEmail = "honza.vins@gmail.com";
const contactHref = "mailto:honza.vins@gmail.com?subject=FlowPulse%20Insight%20-%20nezávazná%20ukázka";

const findingIcons: Record<string, LucideIcon> = {
  warehouse: PackageCheck,
  sales: TrendingUp,
  people: Users,
  responsibility: ClipboardList
};

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = ""
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-10 lg:px-8 ${className}`}>
      <div className="mb-6 max-w-3xl">
        {eyebrow ? <div className="section-title">{eyebrow}</div> : null}
        <h2 className="mt-2 text-3xl font-black tracking-normal text-white md:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 text-base leading-7 text-slate-300">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

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

export function FlowPulseInsight() {
  const kpi = demoData.kpiSummary;

  return (
    <main>
      <nav className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/94 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <a href="#uvod" className="flex items-center gap-2 text-sm font-black text-white">
            <Gauge className="h-5 w-5 text-blue-300" />
            FlowPulse Insight
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[7px] px-3 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="uvod" className="border-b border-slate-800 bg-slate-950/72">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
              <Factory className="h-4 w-4" />
              {demoData.company} | {demoData.field}
            </div>
            <h1 className="text-4xl font-black tracking-normal text-white md:text-6xl">FlowPulse Insight</h1>
            <p className="mt-4 text-2xl font-semibold text-blue-100">Firemní rentgen z dat, která už máte</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Zjistěte během několika dní, kde vaše firma ztrácí čas, peníze a kapacitu lidí.
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              Bez složitých implementací. Bez výměny systémů.
            </p>
            <p className="mt-5 max-w-2xl text-sm font-semibold text-slate-400">
              Možná vás překvapí, kde firma ztrácí nejvíc peněz.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
              <a
                href={contactHref}
                className="inline-flex items-center gap-2 rounded-[7px] border border-blue-400/40 px-4 py-2.5 text-sm font-bold text-blue-100 hover:bg-blue-500/10"
              >
                Domluvit nezávaznou ukázku <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {["Pro malé a střední firmy", "Funguje s daty z Excelu, CRM i skladových systémů", "Výstup obvykle do 14 dnů"].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-[8px] border border-slate-700 bg-slate-900/80 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <KpiCard label="Odhad měsíčních ztrát" value={formatCurrency(kpi.monthlyLossEstimate)} sub="praktický odhad dopadu" icon={LineChart} tone="yellow" />
            <KpiCard label="Ohrožené tržby" value={formatCurrency(kpi.threatenedRevenue)} sub="pomalá reakce obchodu" icon={Coins} tone="red" />
            <KpiCard label="Ztracené hodiny měsíčně" value={`${formatNumber(kpi.hoursLostMonthly)} h`} sub="čas lidí a čekání" icon={Clock3} tone="purple" />
            <KpiCard label="Odhadovaná úspora" value={formatCurrency(kpi.estimatedSavings)} sub="po prvních opatřeních" icon={Target} tone="green" />
          </div>
        </div>
      </header>

      <Section
        id="prehled"
        eyebrow="1. Co se ve firmě děje"
        title="Co firmu stojí nejvíc"
        subtitle="Tady začíná firemní rentgen: pět problémů, které mají v ukázkové firmě Novák & Partneři s.r.o. největší dopad na peníze, čas a kapacitu lidí."
        className="pb-6"
      >
        <div className="grid gap-3">
          {demoData.topProblems.map((problem, index) => (
            <div key={problem.title} className="grid gap-4 rounded-[8px] border border-slate-700 bg-slate-900 p-4 md:grid-cols-[48px_1fr_auto] md:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-lg font-black text-blue-200">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{problem.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">{problem.explanation}</p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-2xl font-black text-red-200">{formatCurrency(problem.amount)}</div>
                <div className="text-sm text-slate-400">měsíčně</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="2. Rychlé pochopení problému" title="Co jsme zjistili" className="pt-6">
        <div className="rounded-[8px] border border-blue-400/25 bg-blue-500/10 p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
            <div>
              <p className="text-lg leading-8 text-slate-100">
                Ukázková firma Novák & Partneři s.r.o. aktuálně přichází přibližně o{" "}
                <strong className="text-3xl font-black text-red-200">420 000 Kč měsíčně</strong>. Největší dopad má{" "}
                <strong className="text-white">zpožděná expedice</strong>,{" "}
                <strong className="text-white">pomalá reakce obchodu</strong> a{" "}
                <strong className="text-white">nerovnoměrné vytížení lidí</strong>. Při odstranění těchto tří oblastí
                lze výrazně zlepšit výkon firmy během několika týdnů.
              </p>
              <p className="mt-4 text-sm font-semibold text-blue-100">
                Většina firem tento problém vůbec nevidí, protože data leží na více místech.
              </p>
            </div>
            <div className="grid gap-3">
              {demoData.summaryHighlights.map((item) => (
                <div key={item.label} className="rounded-[8px] border border-slate-700 bg-slate-950/60 p-4">
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <div className="mt-2 font-black text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="zjisteni" eyebrow="3. Kde jsou problémy" title="Největší zjištění">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {demoData.keyFindings.map((finding) => {
            const Icon = findingIcons[finding.icon] ?? Eye;
            return (
              <div key={finding.title} className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
                <Icon className="h-6 w-6 text-blue-300" />
                <h3 className="mt-4 text-lg font-black text-white">{finding.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{finding.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        id="penize"
        eyebrow="4. Kolik to stojí"
        title="Kde firmě utíkají peníze"
        subtitle="Přehled oblastí, kde vznikají největší ztráty nebo nevyužitý potenciál. Méně složitosti, více jasných závěrů."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {demoData.moneyLossAreas.map((item) => (
            <div key={item.area} className={`rounded-[8px] border p-4 risk-${item.risk}`}>
              <div className="mb-3 flex items-center justify-between gap-2">
                <h3 className="font-black text-white">{item.area}</h3>
                <PriorityBadge priority={item.priority} />
              </div>
              <div className="text-2xl font-black text-red-100">{formatCurrency(item.monthlyLoss)}</div>
              <div className="mt-1 text-sm text-slate-400">odhad měsíční ztráty</div>
              <p className="mt-4 text-sm leading-6 text-slate-300">Hlavní problém: {item.cause}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Doporučení: {item.measure}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="proc" eyebrow="5. Proč to vzniká" title="Proč tyto problémy vznikají">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
            <p className="text-lg leading-8 text-slate-200">
              Tohle je místo, kde má změna největší dopad. Problém obvykle není v jednom člověku, ale v tom, že vedení
              nemá jednoduchý pohled na odpovědnosti, priority a přetížení týmů.
            </p>
          </div>
          <div className="grid gap-3">
            {demoData.causes.map((cause) => (
              <div key={cause} className="flex items-start gap-3 rounded-[8px] border border-slate-700 bg-slate-900 p-4 text-slate-200">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                <span className="font-semibold">{cause}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Začít lze i malým pilotem">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[8px] border border-blue-400/25 bg-blue-500/10 p-6">
            <p className="text-lg leading-8 text-slate-100">
              Nemusíte hned analyzovat celou firmu. První ukázkový výstup lze připravit nad jednou konkrétní oblastí
              — například obchodem, skladem, požadavky, financemi nebo kapacitou lidí. Cílem je rychle ověřit, jestli
              data ukážou něco, co má reálný dopad na řízení firmy.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "Pilot nad jednou oblastí",
              "Práce s dostupnými daty",
              "Výstup obvykle do 14 dnů",
              "Konkrétní zjištění a doporučení"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[8px] border border-slate-700 bg-slate-900 p-4 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="lide"
        eyebrow="Dopad na provoz"
        title="Vytížení lidí a stav práce"
        subtitle="Riziko musí být vidět hned. Proto je každý člověk zobrazený jako samostatná karta místo široké tabulky."
      >
        <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <KpiCard label="Úkoly po termínu" value={formatNumber(demoData.processState.overdueTasks)} sub="napříč firmou" icon={Clock3} tone="red" />
            <KpiCard label="Bez odpovědné osoby" value={formatNumber(demoData.processState.requestsWithoutResponsiblePerson)} sub="požadavků a úkolů" icon={Users} tone="yellow" />
            <KpiCard label="Bez odhadu pracnosti" value={formatNumber(demoData.processState.workWithoutEstimate)} sub="vedení nevidí náročnost" icon={ClipboardList} tone="purple" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {demoData.people.map((person) => {
              const loadPercent = Math.round((person.actualLoad / person.plannedCapacity) * 100);

              return (
                <article key={person.name} className={`rounded-[8px] border p-4 risk-${person.risk}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-black text-white">{person.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">{person.team} | {person.role}</p>
                    </div>
                    <RiskBadge level={person.risk} />
                  </div>

                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-slate-400">Vytížení proti plánu</span>
                      <strong className="text-white">{loadPercent} %</strong>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className={`h-2 rounded-full ${person.risk === "vysoke" ? "bg-red-300" : person.risk === "stredni" ? "bg-amber-300" : "bg-emerald-300"}`}
                        style={{ width: `${Math.min(loadPercent, 100)}%` }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      Plán {formatNumber(person.plannedCapacity)} h | skutečnost {formatNumber(person.actualLoad)} h
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-[7px] bg-slate-950/45 p-2">
                      <div className="text-lg font-black text-white">{person.openTasks}</div>
                      <div className="text-xs text-slate-400">Otevřené</div>
                    </div>
                    <div className="rounded-[7px] bg-slate-950/45 p-2">
                      <div className="text-lg font-black text-red-200">{person.overdueTasks}</div>
                      <div className="text-xs text-slate-400">Po termínu</div>
                    </div>
                    <div className="rounded-[7px] bg-slate-950/45 p-2">
                      <div className="text-lg font-black text-amber-200">{person.tasksWithoutEstimate}</div>
                      <div className="text-xs text-slate-400">Bez odhadu</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title="Jaký dopad mají změny" subtitle="Krátké modelové scénáře pomáhají vedení rychle pochopit, proč se vyplatí začít.">
        <div className="grid gap-4 md:grid-cols-3">
          {demoData.impactScenarios.map((scenario) => (
            <div key={scenario.change} className="rounded-[8px] border border-emerald-400/25 bg-emerald-500/10 p-5">
              <div className="text-base font-black text-white">{scenario.change}</div>
              <div className="my-4 text-3xl font-black text-emerald-200">→</div>
              <div className="text-sm leading-6 text-emerald-50">{scenario.result}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="doporuceni"
        eyebrow="6. Co s tím dělat"
        title="Co doporučujeme změnit"
        subtitle="Konkrétní kroky, které dávají smysl řešit jako první."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {demoData.recommendations.map((item) => (
            <div key={item.action} className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
              <div className="mb-4 flex items-center justify-between gap-2">
                <PriorityBadge priority={item.priority} />
                <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-300">Náročnost: {item.difficulty}</span>
              </div>
              <h3 className="text-lg font-black text-white">{item.action}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Dopad: {item.impact}</p>
              <p className="mt-3 text-sm text-slate-300">
                Odhadovaná úspora: <strong className="text-white">{formatCurrency(item.savings)} / měsíc</strong>
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">První krok: {item.firstStep}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Ukázková tabulka zjištění">
        <div className="overflow-x-auto rounded-[8px] border border-slate-700 bg-slate-900">
          <table className="w-full min-w-[980px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-left text-xs uppercase text-slate-400">
                <th className="py-3 pl-4 pr-4">ID</th>
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
                <tr key={item.id} className="border-b border-slate-800 text-slate-300 last:border-0">
                  <td className="py-3 pl-4 pr-4 font-bold text-blue-200">{item.id}</td>
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
      </Section>

      <Section id="spoluprace" title="Pro koho to je">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
            <div className="grid gap-3 text-sm text-slate-300">
              {demoData.audience.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
            <h3 className="text-xl font-black text-white">Jak probíhá spolupráce</h3>
            <div className="mt-5 space-y-4">
              {demoData.cooperationSteps.map((step, index) => (
                <div key={step.title} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-black text-blue-200">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-black text-white">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
            <h3 className="text-xl font-black text-white">Co FlowPulse Insight není</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
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
          </div>
          <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-5">
            <h3 className="text-xl font-black text-white">Co FlowPulse Insight je</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
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
          </div>
        </div>
      </section>

      <Section title="Kdo za tím stojí">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[8px] border border-slate-700 bg-slate-900 p-6">
            <p className="text-base leading-8 text-slate-200">
              FlowPulse Insight vzniká z praxe projektového řízení, firemních procesů, datové analytiky a každodenní
              práce s požadavky, prioritami a kapacitou lidí. Cílem není vytvářet další složitý systém, ale pomoci
              vedení firem lépe pochopit, co se ve firmě skutečně děje — srozumitelně, prakticky a nad daty, která už
              mají k dispozici.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "zkušenost s řízením IT a rozvojových projektů",
              "praktická znalost firemních procesů",
              "schopnost propojit data, provoz a manažerské rozhodování",
              "zaměření na konkrétní dopady, ne jen na hezké grafy"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[8px] border border-slate-700 bg-slate-900 p-4 text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section id="kontakt" className="border-y border-blue-400/20 bg-blue-500/10 px-5 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white">Chcete zjistit, kde vaše firma ztrácí čas a peníze?</h2>
          <p className="mt-4 text-base leading-7 text-blue-100">
            Ozvěte se mi a můžeme se nezávazně podívat, jestli má smysl připravit první firemní rentgen i pro vaši firmu.
          </p>
          <a href={`mailto:${contactEmail}`} className="mt-4 inline-block text-base font-black text-white">
            {contactEmail}
          </a>
          <a
            href={contactHref}
            className="mt-6 inline-flex items-center gap-2 rounded-[7px] bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            Domluvit nezávaznou ukázku <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-sm text-slate-500">
        FlowPulse Insight | Ukázková data | Excel / CSV, CRM, ERP, skladový systém, účetní systém, zákaznická podpora, plánování práce a e-shop.
      </footer>
    </main>
  );
}
