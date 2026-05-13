import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowLens — Firemní rentgen z dat",
  description:
    "FlowLens pomáhá malým a středním firmám zjistit, kde ztrácí čas, peníze a kapacitu lidí. Srozumitelný přehled nad daty, která už máte.",
  keywords: [
    "firemní rentgen",
    "datová analytika",
    "audit procesů",
    "procesní analýza",
    "firemní data",
    "úspory ve firmě",
    "FlowLens"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
