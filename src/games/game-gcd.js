import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1);
  const num2 = getRandomNumber(1);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, String(answer)];
};

const initGameGCD = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default initGameGCD;
