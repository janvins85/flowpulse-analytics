import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.flowlens.cz";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Firemni rentgen — zjistete, kde vase firma ztraci penize",
          template: "%s | Firemni rentgen",
    },
    description:
          "Firemni rentgen pomaha malym a strednim firmam odhalit, kde ztraci cas, penize a kapacitu lidi. Srozumitelny prehled nad daty, ktera uz mate.",
    keywords: [
          "firemni rentgen",
          "audit procesu",
          "procesni analyza",
          "datova analytika firmy",
          "ztraty ve firme",
          "efektivita firmy",
          "prehled firmy",
          "vytizeni zamestnancu",
          "business intelligence",
        ],
    authors: [{ name: "FlowLens" }],
    creator: "FlowLens",
    publisher: "FlowLens",
    robots: {
          index: true,
          follow: true,
          googleBot: {
                  index: true,
                  follow: true,
                  "max-image-preview": "large",
                  "max-snippet": -1,
          },
    },
    alternates: {
          canonical: siteUrl,
    },
    openGraph: {
          type: "website",
          locale: "cs_CZ",
          url: siteUrl,
          siteName: "Firemni rentgen",
          title: "Firemni rentgen — zjistete, kde vase firma ztraci penize",
          description:
                  "Zjistete, kde vase firma ztraci cas, penize a kapacitu lidi. Srozumitelny prehled nad daty, ktera uz mate.",
          images: [
            {
                      url: "/og-image.png",
                      width: 1200,
                      height: 630,
                      alt: "Firemni rentgen — flowlens.cz",
            },
                ],
    },
    twitter: {
          card: "summary_large_image",
          title: "Firemni rentgen — zjistete, kde vase firma ztraci penize",
          description:
                  "Zjistete, kde vase firma ztraci cas, penize a kapacitu lidi.",
          images: ["/og-image.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
          <html lang="cs">
                <body>{children}</body>body>
          </html>html>
        );
}</html>
