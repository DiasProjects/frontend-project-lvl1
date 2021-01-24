import readlineSync from 'readline-sync';

const settings = {
  questionsCount: 3,
};

const messages = {
  welcome: 'Welcome to the Brain Games!',
  getAnswer: 'Your answer: ',
  getUserName: 'May I have your name? ',
  correct: 'Correct!',
  hello: 'Hello,',
  question: 'Question:',
  wrongAnswer: 'is wrong answer ;(. Correct answer was',
  tryAgain: "Let's try again",
  final: 'Congratulations,',
};

const getUserAnswer = () => {
  const answer = readlineSync.question(messages.getAnswer);
  return answer;
};

const gameEngine = (options) => {
  const { rules, getQuestionData } = options;

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
      console.log(`${messages.tryAgain}, ${userName}!`);
      return;
    }

    console.log(messages.correct);
  }

  console.log(`${messages.final} ${userName}!`);
};

export default gameEngine;
