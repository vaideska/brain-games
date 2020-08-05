import readlineSync from 'readline-sync';
import greetUser from './sli.js';

const maxNumRand = 100;
const countCorrectAnswer = 3;
const lengthProgression = 10;
const maxDiffProgression = 10;

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

const templateGame = (textRules, getQuestion, getCorrectAnswer) => {
  const name = greetUser();
  console.log(textRules);
  let correctCount = 0;

  while (correctCount < countCorrectAnswer) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ');

    correctCount = checkAnswer(name, userAnswer, correctAnswer, correctCount);
  }
  console.log(`Congratulations, ${name}!`);
};

const getGCD = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gtc = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) gtc = i;
  }
  return gtc;
};

const isEvenNumber = (num) => num % 2 === 0;

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default readlineSync;

export {
  getRandomNumber, templateGame,
  getGCD, isPrimeNumber, isEvenNumber,
  countCorrectAnswer, lengthProgression, maxDiffProgression,
};
