import gameEngine from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const settings = {
  min: 0,
  max: 10,
  operations: [
    {
      label: '+',
      func: (x, y) => x + y,
    },
    {
      label: '-',
      func: (x, y) => x - y,
    },
    {
      label: '*',
      func: (x, y) => x * y,
    },
  ],
};

const getQuestionData = () => {
  const x = getRandomInt(settings.min, settings.max);
  const y = getRandomInt(settings.min, settings.max);
  const operationId = getRandomInt(0, settings.operations.length - 1);
  const operation = settings.operations[operationId];

  const questionValue = `${x} ${operation.label} ${y}`;
  const correctAnswer = operation.func(x, y);

  return {
    questionValue,
    correctAnswer: correctAnswer.toString(),
  };
};

const gameCalc = () => {
  gameEngine({
    rules: 'What is the result of the expression?',
    getQuestionData,
  });
};

export default gameCalc;
