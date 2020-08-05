import {
  getRandomNumber, templateGame, getGCD,
} from '../index.js';

const playGameGCD = () => {
  const textRules = 'Find the greatest common divisor of given numbers.';

  const getQuestion = () => `${getRandomNumber()} ${getRandomNumber()}`;

  const getCorrectAnswer = (expression) => {
    const space = expression.indexOf(' ');
    const num1 = Number(expression.substring(0, space));
    const num2 = Number(expression.substring(space + 1));
    return getGCD(num1, num2);
  };

  templateGame(textRules, getQuestion, getCorrectAnswer);
};

export default playGameGCD;
