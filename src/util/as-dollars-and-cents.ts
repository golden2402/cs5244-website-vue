// from https://flaviocopes.com/how-to-format-number-as-currency-javascript/:
const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export default function (cents: number) {
  return PriceFormatter.format(cents / 100.0);
}
