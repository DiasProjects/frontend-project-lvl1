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

const generateProgression = (options) => {
  const { length, startValue, step } = options;
  const arr = new Array(length).fill(startValue);
  return arr.map((item, index) => item + step * index);
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrtOfNum = Math.sqrt(number);
  for (let i = 2; i <= sqrtOfNum; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  calcNod,
  getRandomInt,
  generateProgression,
  isPrime,
};
