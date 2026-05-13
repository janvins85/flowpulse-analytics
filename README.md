# FlowPulse Insight

FlowPulse Insight je demo firemního rentgenu: srozumitelná ukázka služby, která z dostupných firemních dat rychle ukáže, kde firma ztrácí peníze, čas a kapacitu lidí.

Ukázka je postavená jako příběh pro vedení firmy:

1. Co se ve firmě děje.
2. Kde jsou problémy.
3. Kolik to stojí.
4. Proč to vzniká.
5. Co s tím dělat.

Nejde o účetní audit ani složitý reporting. Cílem je prakticky ukázat, kde má změna největší dopad.

## Pro koho je demo

- firmy 5-200 lidí,
- obchodní firmy,
- sklady a logistika,
- servisní týmy,
- firmy s daty v Excelu nebo systému,
- majitelé, jednatelé, provozní manažeři a vedoucí týmů.

## Demo data

Aplikace používá čistě fiktivní data firmy **Novák & Partneři s.r.o.** z oblasti velkoobchodu, skladu a servisního týmu.

V projektu nejsou žádná reálná firemní data, reálná jména lidí, interní názvy systémů, tokeny ani napojení na skutečné služby.

## Jak demo použít

Demo je připravené pro obchodní prezentaci. Doporučený scénář:

1. Začněte sekcí **Co firmu stojí nejvíc**.
2. Ukažte finanční dopady v korunách.
3. Vysvětlete, proč problémy vznikají.
4. Projděte doporučené kroky.
5. Uzavřete otázkou, jaká data má zákazník dnes k dispozici.

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
