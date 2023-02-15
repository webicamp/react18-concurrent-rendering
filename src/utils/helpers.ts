export const createNumberArr = (length: number, multiplier: number): number[] =>
  [...Array(length)].map((_, i) => i * multiplier);
