import readlineSync from 'readline-sync';

const settings = {
  questionsCount: 3,
  min: 0,
  max: 100,
};

const getRandomIntInclusive = (min, max) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;
};

const askQuestion = () => {
  const number = getRandomIntInclusive(settings.min, settings.max);
  console.log(`Question: ${number}`);
  return {
    number,
    correctAnswer: number % 2 === 0 ? 'yes' : 'no',
  };
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const gameEven = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;

  for (let i = 0; i < settings.questionsCount; i += 1) {
    const { correctAnswer } = askQuestion();
    const userAnswer = getUserAnswer();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      correctAnswersCount += 1;
    }
  }

  if (correctAnswersCount === settings.questionsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameEven;
