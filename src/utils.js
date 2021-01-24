const calcNod = (x, y) => {
  if (y > x) return calcNod(y, x);
  if (!y) return x;
  return calcNod(y, x % y);
};

const getRandomInt = (min, max) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;
};

export {
  calcNod,
  getRandomInt,
};
