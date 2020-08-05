import {
  getRandomNumber, templateGame,
} from '../index.js';

const playGameCalc = () => {
  const textRules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  const getQuestion = () => `${getRandomNumber()} ${operators[getRandomNumber(3)]} ${getRandomNumber()}`;

  const getCorrectAnswer = (expression) => {
    const space = expression.indexOf(' ');
    const operand1 = Number(expression.substring(0, space));
    const operation = expression.substring(space + 1, space + 2);
    const operand2 = Number(expression.substring(space + 3));

    let answer;
    switch (operation) {
      case '+': answer = operand1 + operand2;
        break;
      case '-': answer = operand1 - operand2;
        break;
      case '*': answer = operand1 * operand2;
        break;
      default: answer = NaN;
    }
    return answer;
  };

  templateGame(textRules, getQuestion, getCorrectAnswer);
};

export default playGameCalc;
