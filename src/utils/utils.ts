export const limiter = (num: number, min: number, max: number) => {
  if (num >= max) return max;
  if (num <= min) return min;
  return num;
};

export const fillArray = (length: number, fill: string | number) => {
  return new Array(length).fill(fill);
};
