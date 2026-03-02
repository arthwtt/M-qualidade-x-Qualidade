function applyPercentage(value, percentage) {
  return value + value * percentage;
}

function calculateTotalWithFee(items, feePercentage) {
  return items.reduce((total, item) => total + applyPercentage(item.price, feePercentage), 0);
}

console.log(calculateTotalWithFee([{ price: 100 }], 0.1));
console.log(calculateTotalWithFee([{ price: 200 }], 0.1));