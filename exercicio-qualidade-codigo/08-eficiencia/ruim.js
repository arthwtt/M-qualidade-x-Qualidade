function hasDuplicate(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) return true;
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5, 3]));