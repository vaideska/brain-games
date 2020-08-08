import readlineSync from 'readline-sync';
import greetUser from './sli.js';

const maxNumRand = 100;
const countCorrectAnswer = 3;

const getRandomNumber = (num = maxNumRand) => Math.floor(Math.random() * num);

const checkAnswer = (userName, userAnswer, correctAnswer, correctCount) => {
  let resultCorrectCount = 0;
  if (String(correctAnswer) === String(userAnswer)) {
    console.log('Correct!');
    resultCorrectCount = correctCount + 1;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  }
  return resultCorrectCount;
};

const templateGame = (textRules, getQuestionAndAnswer) => {
  const name = greetUser();
  console.log(textRules);
  let correctCount = 0;

  while (correctCount < countCorrectAnswer) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    correctCount = checkAnswer(name, userAnswer, correctAnswer, correctCount);
  }
  console.log(`Congratulations, ${name}!`);
};

export default readlineSync;

export {
  getRandomNumber, templateGame,
};
