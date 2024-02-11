export function plusMinus(arr: number[]) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((num) => {
    if (num > 0) positive++;
    if (num === 0) zero++;
    if (num < 0) negative++;
  });

  return [
    (positive / arr.length).toFixed(6),
    (negative / arr.length).toFixed(6),
    (zero / arr.length).toFixed(6),
  ];
}
