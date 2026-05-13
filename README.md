# FlowPulse Insight

FlowPulse Insight je demo webové aplikace pro službu firemní datové analýzy. Ukazuje, kde firma ztrácí peníze, čas a kapacitu lidí, které procesy se zdržují a kde má změna největší praktický dopad.

Projekt je určený jako obchodní ukázka pro menší a střední firmy, které chtějí využít data, která už mají, ale nepotřebují složitý korporátní reporting ani další nástroj na ruční vyplňování.

## Demo scénář

Aplikace používá čistě fiktivní data firmy **Novák & Partneři s.r.o.** z oboru velkoobchod, sklad a servisní tým.

Ukázka řeší:

- zpožděné expedice,
- pomalou reakci na obchodní příležitosti,
- nerovnoměrné vytížení lidí,
- požadavky bez odpovědné osoby,
- úkoly bez odhadu pracnosti,
- úkoly po termínu,
- odhad finančních dopadů,
- doporučené kroky ke zlepšení.

V projektu nejsou žádná reálná firemní data, reálná jména lidí, interní názvy systémů, tokeny ani napojení na skutečné služby.

## Pro koho je FlowPulse Insight

- menší a střední firmy,
- obchodní společnosti,
- sklady a logistika,
- výrobní firmy,
- servisní týmy,
- firmy s rostoucím počtem požadavků,
- firmy, které mají data v Excelu, CRM, ERP nebo jiných systémech, ale neumí je využít pro řízení.

## Technologie

- Next.js
- React
- TypeScript
- Tailwind CSS
- Recharts
- statická demo data v `data/demoData.ts`
- bez backendu
- bez API tokenů
- připraveno pro Vercel

## Spuštění lokálně

```bash
npm install
npm run dev
```

Potom otevřete:

```text
http://localhost:3000
```

Produkční build lze ověřit příkazem:

```bash
npm run build
npm run start
```

## Nasazení na Vercel

1. Připojte GitHub repozitář `flowpulse-analytics`.
2. Ve Vercelu zvolte **Add New Project**.
3. Vyberte framework preset **Next.js**.
4. Build command ponechte `npm run build`.
5. Install command ponechte `npm install`.
6. Environment variables nejsou potřeba.

Vercel URL:

```text
https://flowpulse-insight.vercel.app/
```

## Možné budoucí konektory

- Excel / CSV
- CRM
- ERP
- skladový systém
- účetní systém
- helpdesk
- plánování práce
- e-shop

## GitHub

```text
https://github.com/janvins85/flowpulse-analytics
```
