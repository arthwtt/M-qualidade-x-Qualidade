function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("a and b must be numbers");
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("a and b must not be NaN");
  }
  if (b === 0) {
    throw new RangeError("division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("Erro:", error.message);
}

console.log(divide(10, 2));