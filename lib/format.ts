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
  if (level === "vysoke") return "Vysoké riziko";
  if (level === "stredni") return "Střední riziko";
  return "Nízké riziko";
}
