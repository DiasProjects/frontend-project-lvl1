import readlineSync from 'readline-sync';

const settings = {
  questionsCount: 3,
};

const messages = {
  welcome: 'Welcome to the Brain Games! engine',
  getAnswer: 'Your answer: ',
  getUserName: 'May I have your name? ',
  correct: 'Correct!',
  hello: 'Hello,',
  question: 'Question:',
  wrongAnswer: 'is wrong answer ;(. Correct answer was',
  tryAgain: "Let's try again",
  final: 'Congratulations,'
};

const getRandomInt = (min, max) => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return Math.floor(Math.random() * (maxRounded - minRounded + 1)) + minRounded;
};

const getUserAnswer = () => {
  const answer = readlineSync.question(messages.getAnswer);
  return answer;
};

const gameEngine = (options) => {
  const { rules, getQuestionData } = options;
  let correctAnswersCount = 0;

  console.log(messages.welcome);
  const userName = readlineSync.question(messages.getUserName);
  console.log(`${messages.hello} ${userName}!`);
  console.log(rules);

  for (let i = 0; i < settings.questionsCount; i += 1) {
    const { questionValue, correctAnswer } = getQuestionData();
    console.log(`${messages.question} ${questionValue}`);

    const userAnswer = getUserAnswer();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' ${messages.wrongAnswer} '${correctAnswer}'.`);
      console.log(`${messages.tryAgain} ${userName}!`);
      break;
    } else {
      console.log(messages.correct);
      correctAnswersCount += 1;
    }
  }

  if (correctAnswersCount === settings.questionsCount) {
    console.log(`${messages.final} ${userName}!`);
  }
};

export {
  gameEngine,
  getRandomInt,
};
