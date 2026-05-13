import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proc vetsina firem netusi, kolik stoji chaos v pozadavcich | Firemni rentgen",
  description:
    "Nerizene pozadavky, duplicitni ukoly, neproritizovana prace. Tichy zabijecky efektivity, ktere firma nezaznamena — az do chvile, kdy je pozde.",
  alternates: {
    canonical: "https://www.flowlens.cz/blog/chaos-v-pozadavcich",
  },
};

export default function Article3() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-5 py-16">
      <div className="max-w-2xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">
            Firemni rentgen
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          {" / "}
          <span className="text-slate-400">Chaos v pozadavcich</span>
        </nav>

        <div className="mb-4 text-blue-400 text-sm font-bold uppercase tracking-wider">
          Efektivita processu
        </div>
        <h1 className="text-4xl font-black mb-6 leading-tight">
          Proc vetsina firem netusi, kolik stoji chaos v pozadavcich
        </h1>
        <p className="text-slate-400 text-sm mb-8">13. kvetna 2026 &bull; 8 minut cteni</p>

        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-lg text-slate-200">
            Ve vetsine malych a strednich firem neni zadny system na rizeni
            pozadavku. Prichazi emailem, Slackem, telefonem, na porade. Zaznam
            neni, priorita neni, zodpovednost neni jasna. A prece firma funguje —
            lide to nejak zvladaji. Az do okamziku, kdy nestihaji.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Co je to vlastne chaos v pozadavcich
          </h2>
          <p>
            Chaos v pozadavcich neznamena, ze firma nema zadny system. Casto ma
            system — jen neni sdileny a dodrzovany. Kazdy odde dela veci jinak.
            Technicky tym ma Jiru, obchod ma Excel, provoz ma email. Zadna z tech
            informaci se neprolina.
          </p>
          <p>
            Vysledkem jsou:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Duplicitni ukoly — tri lide delaji to same, aniz o sobe vedi</li>
            <li>Zapomente pozadavky — zakaznik ceka tydny, nikdo si nevsiml</li>
            <li>Prekvapive urgence — veci, ktere meli byt hotove davno</li>
            <li>Nejasna zodpovednost — "myslel jsem, ze to dela kolega"</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Kolik to skutecne stoji
          </h2>
          <p>
            Tezko se to pocita, protoze je to neviditelna ztrata. Neni na
            fakture. Ale zkuste si to: kdyz kazdemu ze 10 zamestnancu zaberou
            nerizene pozadavky 30 minut denne na hledani informaci, zadani
            kontextu, reseni konfliktu — to je 5 hodin tyydne na cloveka.
            Pri prumernem nakladu 500 Kc/hodinu je to 20 000 Kc tyydne. Mesicne
            80 000 Kc. Za rok skoro million.
          </p>
          <p>
            A to je jen cas. Nezapocitavame chyby, klientske stiznosti,
            prepraci a ztracene obchody.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Kde zacit
          </h2>
          <p>
            Nelze zavest idealni system ze dne na den. Ale lze zacit s timto:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-2">
            <li><strong className="text-white">Zmapujte, odkud pozadavky prichazeji</strong> — email, telefon, porady, nahodne koridorove rozhovory. Bez teto znalosti nelze nic menit.</li>
            <li><strong className="text-white">Definujte jednoho vlastnika na kazdy typ pozadavku</strong> — ne rozhodce, ale toho, kdo zajisti, ze se na veci nezapomente.</li>
            <li><strong className="text-white">Zaznamenavejte vsechno na jednom miste</strong> — nemusí to byt sofistikovaný nastroj. Staci jeden sdileny backlog.</li>
            <li><strong className="text-white">Pravidelne revidujte, co ceka</strong> — tyydne 30 minut na prubehu priorit uszori vic, nez cela porada o planovani.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Proc se to neresi samo
          </h2>
          <p>
            Protoze chaos je pohodlny pro ty, kteri ho zpusobuji. Kdyz neni
            zaznam, neni zodpovednost. Kdyz neni priorita, lze vzdy rici "to
            nebylo jasne zadane". Systemy rizeni pozadavku odstranuji tuto
            nejednoznacnost — a ne vsem se to libi.
          </p>
          <p>
            Proto zmena musi jit shora. A proto je uzitecne mit nejdrive jasny
            obraz toho, jak to aktualne funguje — nez zacnete menit.
          </p>
          <p>
            Prave to dela <Link href="/#prehled" className="text-blue-400 hover:text-blue-300">firemni rentgen</Link>: pred tim, nez cokoliv doporucime menit,
            pokazeme vam, jak to skutecne funguje dnes. Nad daty, ktera uz mate.
          </p>

          <div className="mt-10 p-6 bg-slate-900 rounded-lg border border-slate-800">
            <p className="text-white font-bold mb-2">
              Chcete vidět, kde mizí čas ve vaší firmě?
            </p>
            <p className="text-slate-400 mb-4">
              Firemni rentgen vam ukaze jasny obraz behem 10-14 dni.
            </p>
            <Link
              href="/#kontakt"
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Domluvit ukázku &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
          <Link href="/blog" className="text-slate-400 hover:text-white transition-colors text-sm">
            &larr; Vsechny clanky
          </Link>
          <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
            Firemni rentgen &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
