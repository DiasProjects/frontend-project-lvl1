import gameEngine from '../src/index.js';
import { getRandomInt, calcNod } from '../src/utils.js';

const settings = {
  min: 0,
  max: 100,
};

const getQuestionData = () => {
  const x = getRandomInt(settings.min, settings.max);
  const y = getRandomInt(settings.min, settings.max);
  const correctAnswer = calcNod(x, y);

  return {
    questionValue: `${x} ${y}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const gameGcd = () => {
  gameEngine({
    rules: 'Find the greatest common divisor of given numbers.',
    getQuestionData,
  });
};

export default gameGcd;
