import gameEngine from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const settings = {
  min: 0,
  max: 100,
};

const getQuestionData = () => {
  const questionValue = getRandomInt(settings.min, settings.max);

  return {
    questionValue,
    correctAnswer: questionValue % 2 === 0 ? 'yes' : 'no',
  };
};

const gameEven = () => {
  gameEngine({
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    getQuestionData,
  });
};

export default gameEven;
