import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowPulse Insight",
  description: "Firemní rentgen z dat, která už máte."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
