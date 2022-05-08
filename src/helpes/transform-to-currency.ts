export function transformToCurrency(amount: number, minimumFractionDigits: number): string {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits,
  }).format(amount);

  return currency
}