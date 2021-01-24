import gameEngine from '../src/index.js';
import { getRandomInt, isPrime } from '../src/utils.js';

const settings = {
  min: 0,
  max: 100,
};

const getQuestionData = () => {
  const questionValue = getRandomInt(settings.min, settings.max);

  return {
    questionValue,
    correctAnswer: isPrime(questionValue) ? 'yes' : 'no',
  };
};

const gamePrime = () => {
  gameEngine({
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getQuestionData,
  });
};

export default gamePrime;
