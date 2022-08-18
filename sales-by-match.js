function sockMerchant(n, ar) {
  // Write your code here
  const sorrtedArr = ar.sort();
  let currentPosition = 0;
  let nextPosition = 0;
  let counter = 0;
  for (let i = 0; i < n - 1; i++) {
    currentPosition = sorrtedArr[i];
    nextPosition = sorrtedArr[i + 1];
    if (currentPosition === nextPosition) {
      counter++;
      i++;
    }
  }
  return counter;
}
