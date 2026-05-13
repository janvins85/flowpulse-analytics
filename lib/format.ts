export function formatCurrency(value: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("cs-CZ").format(value);
}

export function riskLabel(level: string) {
  if (level === "high") return "Vysoke riziko";
  if (level === "medium") return "Stredni riziko";
  return "Nizke riziko";
}
