import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Jak poznat pretizeny tym driv, nez zacne nestihat | Firemni rentgen",
    description:
          "Pretizeni se neobjevuje najednou. Zacina tichy — meskajicimi terminy, narustajicimi chybami, klesajici komunikaci. Jak ho rozpoznat vcas?",
    alternates: {
          canonical: "https://www.flowlens.cz/blog/pretizeny-tym",
    },
};

export default function Article2() {
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
                                  <span className="text-slate-400">Pretizeny tym</span>
                        </nav>
                
                        <div className="mb-4 text-blue-400 text-sm font-bold uppercase tracking-wider">
                                  Rizeni lidi
                        </div>
                        <h1 className="text-4xl font-black mb-6 leading-tight">
                                  Jak poznat pretizeny tym driv, nez zacne nestihat
                        </h1>
                        <p className="text-slate-400 text-sm mb-8">13. kvetna 2026 &bull; 6 minut cteni</p>
                
                        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
                                  <p className="text-lg text-slate-200">
                                              Pretizeni neni viditelne na prvni pohled. Lide se nestezuji hned.
                                              Nejdrive zacnou drobnosti — o trochu delsi prodleva pri odpovedi na
                                              email, ukol doruceny o den pozdeji, mensi pozornost detailum. Pokud
                                              to zachytite v teto fazi, je reseni jednoduche. Kdyz to nezachytite,
                                              plati se mnohem vys.
                                  </p>
                        
                                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                                              Proc pretizeni tak casto ujde pozornosti
                                  </h2>h2>
                                  <p>
                                              Vetsina vedoucich vidi vysledky, ne vytizeni. Clovek dorucuje, takze
                                              je v poradku. Problem je, ze dorucuje za cenu prace navic, nebo na
                                              ukor kvality, ktera se projevi az pozdeji — v reklamacich, napravach,
                                              ztratach zakazniku.
                                  </p>
                                  <p>
                                              Pretizeni se take maskuje za spolehlivost. "On to vzdycky nejak vyresi."
                                              Az do chvile, kdy nevyresi.
                                  </p>
                        
                                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                                              7 signalu, ze vas tym zacina byt pretizeny
                                  </h2>h2>
                                  <p>
                                              Tady je seznam znameni, na ktere se vyplati daval pozor:
                                  </p>
                                  <ol className="list-decimal list-inside space-y-3 ml-2">
                                              <li><strong className="text-white">Prodluzujici se dodaci casy</strong> — ukoly, ktere drive trvaly 2 dny, najednou trvaji 5.</li>
                                              <li><strong className="text-white">Narustajici pocet chyb</strong> — drobne, ale caste. Preklepy, zapomente informace, chybejici podrobnosti.</li>
                                              <li><strong className="text-white">Kratsi odpovedi v komunikaci</strong> — kde driv psal odstavce, pise ted jednu vetu.</li>
                                              <li><strong className="text-white">Zapomine na schuzky nebo prichazi nepripraveny</strong> — kognitivni kapacita je vyerpana.</li>
                                              <li><strong className="text-white">Zvysene cerpani dovolene nebo nemocenska</strong> — organismus se zacina branil.</li>
                                              <li><strong className="text-white">Odmitani novych ukolu</strong> — u lidi, kteri drive brali vsechno.</li>
                                              <li><strong className="text-white">Pokles aktivity na spolecnych platformach</strong> — Slack, Teams, porady.</li>
                                  </ol>
                        
                                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                                              Co s tim muzete delat
                                  </h2>h2>
                                  <p>
                                              Prvni krok je zmerit, ne hadnout. Kolik ukolu ma kazdy clovek
                                              v danou chvili? Jak starych jsou? Ktere jsou dulezite a ktere
                                              cekaji mesice bez pohybu?
                                  </p>
                                  <p>
                                              Presne toto ukazuje <Link href="/#zjisteni" className="text-blue-400 hover:text-blue-300">firemni rentgen</Link> —
                                              vizualni prehled vytizeni lidi nad daty z vasich systemu, bez
                                              potreby noveho softwaru nebo dotazniku.
                                  </p>
                                  <p>
                                              Kdyz vite, kde je bottleneck, muzete reagovat: prerozdelit ukoly,
                                              zrusit zbytecne projekty, nebo najit externi pomoc tam, kde to skutecne
                                              potrebujete.
                                  </p>
                        
                                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                                              Prevence je levnejsi nez nasledky
                                  </h2>h2>
                                  <p>
                                              Nahradit zkuseneho zamestnance stoji firmu 6-12 mesicnich platu, kdyz
                                              zapoctete naberani, zakoleni a ztratu kontextu. Vyhoreni neni
                                              nevyhnutelne — je to casto system, ktery to zpusobuje, ne clovek.
                                  </p>
                                  <p>
                                              Firmy, ktere pravidelne sledujici vytizeni, vidi burnout pristy
                                              o 2-3 mesice drive. To je dost casu na to neco delat.
                                  </p>
                        
                                  <div className="mt-10 p-6 bg-slate-900 rounded-lg border border-slate-800">
                                              <p className="text-white font-bold mb-2">
                                                            Chcete vedet, jak jsou vytizeni vasi lide?
                                              </p>
                                              <p className="text-slate-400 mb-4">
                                                            Firemni rentgen vam to uka beh 10-14 dni nad daty, ktera uz mate.
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
