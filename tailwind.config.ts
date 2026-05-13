import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        graphite: "#1f2937",
        mist: "#f5f7fb",
        pulse: "#12b981",
        signal: "#f59e0b",
        risk: "#ef4444",
        lake: "#2563eb"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
