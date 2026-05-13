import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firemní rentgen — zjistěte, kde vaše firma ztrácí peníze",
  description:
    "Firemní rentgen pomáhá firmám odhalit, kde ztrácí čas, peníze a kapacitu lidí. Srozumitelný přehled nad daty, která už máte.",
  keywords: [
    "firemní rentgen",
    "audit procesů",
    "ztráty ve firmě",
    "procesní analýza",
    "datová analýza firmy",
    "úspory ve firmě"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
