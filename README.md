# FlowPulse Analytics

FlowPulse Analytics je prezencni/demo webova aplikace pro obchodni ukazku firemni analytiky. Ukazuje, kde ve firme utika cas, penize a kapacita: bottlenecky v obchodu, skladu, supportu, financich, procesech a vytizeni lidi.

Demo je postavene podle principu dashboardu `sprint-review-dashboard`: KPI karty, manazerske shrnuti, grafy, rizikove oblasti, kategorie, doporuceni a detailni datova tabulka. Obsah je ale kompletne oddeleny od internich dat a nepouziva zadne realne firemni nazvy, osoby, tokeny ani napojeni.

## Demo scenar

Aplikace simuluje fiktivni firmu **Demo Manufacturing Group**, ktera resi:

- obchod nestiha follow-upy,
- sklad ma zpozdene expedice,
- support ma vysoky pocet otevrenych ticketu,
- lide jsou nerovnomerne vytizeni,
- cast prace nema vlastnika,
- cast ukolu nema odhad,
- nektere procesy maji vysoky financni dopad,
- management nevidi, kde presne vznikaji ztraty.

## Technologie

- Next.js
- React
- TypeScript
- Tailwind CSS
- Recharts
- staticka demo data v `data/demoData.ts`
- bez backendu
- bez API tokenu
- pripraveno pro Vercel

## Spusteni lokalne

```bash
npm install
npm run dev
```

Potom otevri:

```text
http://localhost:3000
```

Produkci lze overit prikazem:

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Vytvor GitHub repozitar `flowpulse-analytics`.
2. Pushni tento projekt do `main` branche.
3. Ve Vercelu zvol **Add New Project**.
4. Vyber GitHub repozitar `flowpulse-analytics`.
5. Framework preset: **Next.js**.
6. Deploy bez environment variables.

Vercel URL:

```text
TODO: doplnit po vytvoreni Vercel projektu
```

## Data

Vsechna data jsou fiktivni a slouzi pouze pro demo. Projekt neobsahuje realna firemni data, realna jmena lidi, interni nazvy systemu, API tokeny ani napojeni na skutecne sluzby.

## Budouci mozne konektory

- CRM
- ERP
- Helpdesk
- Jira
- Azure DevOps
- Excel / CSV
- skladovy system
- ucetni system

## GitHub

Planovany repozitar:

```text
https://github.com/janvins85/flowpulse-analytics
```
