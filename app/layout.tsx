import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowPulse Analytics",
  description: "Demo dashboard pro analyzu casu, penez, kapacit a firemnich bottlenecku."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
