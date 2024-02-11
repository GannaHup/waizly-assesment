export function miniMaxSum(arr: [number, number, number, number, number]) {
  const arrSorted = arr.sort((a, b) => a - b);

  const minSum = arrSorted
    .filter((_, idx) => idx < 4)
    .reduce((acc, current) => acc + current, 0);

  const maxSum = arrSorted
    .filter((_, idx) => idx > 0)
    .reduce((acc, current) => acc + current, 0);

  return [minSum, maxSum];
}
