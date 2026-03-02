function hasDuplicate(numbers) {
  const seen = new Set();

  for (const n of numbers) {
    if (seen.has(n)) return true;
    seen.add(n);
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5, 3]));