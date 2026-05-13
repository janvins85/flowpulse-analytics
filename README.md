# FlowPulse Insight

**FlowPulse Insight — Firemní rentgen z dat, která už máte** je finální demo podoba webu pro prezentaci služby malým a středním firmám.

Ukazuje, jak lze z dostupných firemních dat srozumitelně odhalit:

- kde firma ztrácí peníze,
- kde se zdržuje práce,
- kde jsou lidé přetížení,
- které procesy nemají jasnou odpovědnost,
- kde má změna největší finanční dopad.

Nejde o účetní audit ani složitý reporting. Cílem je prakticky ukázat, kde má smysl začít.

## Pro koho je projekt určený

- malé a střední firmy,
- firmy o velikosti 5–200 lidí,
- obchodní firmy,
- sklady a logistika,
- servisní týmy,
- majitelé, jednatelé, provozní manažeři a vedoucí týmů.

## Demo data

Aplikace používá čistě fiktivní data ukázkové firmy **Novák & Partneři s.r.o.** z oblasti velkoobchodu, skladu a servisního týmu.

V projektu nejsou žádná reálná firemní data, reálná jména lidí, interní názvy systémů, tokeny ani napojení na skutečné služby.

## Jak demo použít

Demo je připravené pro reálné posílání potenciálním klientům a pro obchodní prezentaci služby.

Doporučený scénář:

1. Začněte sekcí **Co firmu stojí nejvíc**.
2. Ukažte finanční dopady v korunách.
3. Vysvětlete, proč problémy vznikají.
4. Ukažte možnost malého pilotu nad jednou oblastí.
5. Projděte doporučené kroky.
6. Uzavřete otázkou, jaká data má zákazník dnes k dispozici.

## Kontakt

Kontaktní e-mail pro domluvení nezávazné ukázky:

```text
honza.vins@gmail.com
```

## Technologie

- Next.js
- React
- TypeScript
- Tailwind CSS
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

## Jak projekt rozšířit

V budoucnu lze doplnit napojení na reálná data. Doporučený postup:

1. Zachovat demo data jako bezpečný prezentační režim.
2. Přidat samostatnou datovou vrstvu pro reálné zdroje.
3. Převést reálná data do stejné struktury jako `data/demoData.ts`.
4. Citlivé údaje držet mimo repozitář a používat proměnné prostředí.

## Možné budoucí zdroje dat

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
