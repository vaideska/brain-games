import {
  getRandomNumber, templateGame,
} from '../index.js';

const playGameCalc = () => {
  const textRules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  const getCorrectAnswer = (operand1, operand2, operation) => {
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

  const getQuestionAndAnswer = () => {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const operation = operators[getRandomNumber(3)];
    const question = `${operand1} ${operation} ${operand2}`;
    const answer = getCorrectAnswer(operand1, operand2, operation);
    return [question, answer];
  };

  templateGame(textRules, getQuestionAndAnswer);
};

export default playGameCalc;
