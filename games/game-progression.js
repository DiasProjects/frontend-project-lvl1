import gameEngine from '../src/index.js';
import { getRandomInt, generateProgression } from '../src/utils.js';

const settings = {
  progressionLengthMin: 5,
  progressionLengthMax: 10,
  progressionStartMin: 0,
  progressionStartMax: 20,
  progressionStepMin: 0,
  progressionStepMax: 10,
};

const getQuestionData = () => {
  const progression = generateProgression({
    length: getRandomInt(settings.progressionLengthMin, settings.progressionLengthMax),
    startValue: getRandomInt(settings.progressionStartMin, settings.progressionStartMax),
    step: getRandomInt(settings.progressionStepMin, settings.progressionStepMax),
  });

  const answerIndex = getRandomInt(0, progression.length - 1);
  const questionValue = [...progression].fill('..', answerIndex, answerIndex + 1).join(' ');

  return {
    questionValue,
    correctAnswer: progression[answerIndex].toString(),
  };
};

const gameProgression = () => {
  gameEngine({
    rules: 'What number is missing in the progression?',
    getQuestionData,
  });
};

export default gameProgression;
