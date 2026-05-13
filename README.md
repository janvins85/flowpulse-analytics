# Firemní rentgen (FlowLens)

Služba zaměřená na odhalování ztrát, neefektivity a přetížení ve firmách pomocí datové analýzy.

Hlavní komunikační motiv:

```text
Firemní rentgen
```

Firemní rentgen pomáhá malým a středním firmám zjistit, kde ztrácí čas, peníze a kapacitu lidí. Nejde o další složitý systém, ale o přehlednou analytickou vrstvu nad daty, která už firma má. FlowLens zůstává sekundární technické označení analytického přístupu.

## Pro koho je projekt určený

- malé a střední firmy,
- firmy o velikosti 5–200 lidí,
- obchodní firmy,
- sklady a logistika,
- servisní týmy,
- majitelé, jednatelé, provozní manažeři a vedoucí týmů.

## Demo data

Demo používá fiktivní data ukázkové firmy **Novák & Partneři s.r.o.** z oblasti velkoobchodu, skladu a servisního týmu.

V projektu nejsou žádná reálná firemní data, reálná jména lidí, interní názvy systémů, tokeny ani napojení na skutečné služby.

## Bezpečnost dat

Firemní rentgen je v této podobě prezentační demo nad fiktivními daty. Při budoucím napojení na reálná data počítá s tím, že data zůstávají pod kontrolou klienta, používají se pouze pro dohodnutou analýzu a lze pracovat i s anonymizovaným nebo omezeným rozsahem dat.

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

```text
honza.vins@gmail.com
```

## Provoz

- Web běží přes Vercel.
- Kód je napojený na GitHub.
- Produkční doména: https://flowlens.cz
- Kontaktní e-mail: honza.vins@gmail.com

## Technologie

- Next.js
- React
- TypeScript
- Tailwind CSS
- statická demo data v `data/demoData.ts`
- bez backendu
- bez API tokenů

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

1. Připojte GitHub repozitář.
2. Ve Vercelu zvolte **Add New Project**.
3. Vyberte framework preset **Next.js**.
4. Build command ponechte `npm run build`.
5. Install command ponechte `npm install`.
6. Environment variables nejsou potřeba.

Produkční doména:

```text
https://flowlens.cz
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
- zákaznická podpora
- plánování práce
- e-shop
