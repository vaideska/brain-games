import getRandomNumber from '../getGameData.js';
import playGame from '../index.js';

const getGameDataCalc = () => {
  const rule = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];

  const getCorrectAnswer = (operand1, operand2, operation) => {
    let answer;
    switch (operation) {
      case '+': answer = operand1 + operand2;
        break;
      case '-': answer = operand1 - operand2;
        break;
      case '*': answer = operand1 * operand2;
        break;
      default: break;
    }
    return answer;
  };

  const getQuestionAndAnswer = () => {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    const operation = operations[getRandomNumber(0, operations.length)];
    const question = `${operand1} ${operation} ${operand2}`;
    const answer = getCorrectAnswer(operand1, operand2, operation);
    return [question, String(answer)];
  };

  playGame(rule, getQuestionAndAnswer);
};

export default getGameDataCalc;
