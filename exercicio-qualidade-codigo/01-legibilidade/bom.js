/**
 * Soma preços de itens por status e acima de um limite mínimo.
 */
function sumPricesByStatusAboveMin(items, status, minPrice) {
  let totalPrice = 0;

  for (const item of items) {
    const isCorrectStatus = item.status === status;
    const isAboveMin = item.price > minPrice;

    if (isCorrectStatus && isAboveMin) {
      totalPrice += item.price;
    }
  }

  return totalPrice;
}

const items = [
  { price: 10, status: "ok" },
  { price: 50, status: "ok" },
  { price: 5, status: "no" }
];

console.log(sumPricesByStatusAboveMin(items, "ok", 9));