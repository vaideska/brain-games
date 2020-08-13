import getRandomNumber from '../function.js';
import playGame from '../index.js';

const isEvenNumber = (num) => num % 2 === 0;

const getGameDataEven = () => {
  const textRule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const answer = isEvenNumber(question) ? 'yes' : 'no';
    return [question, answer];
  };

  playGame(textRule, getQuestionAndAnswer);
};

export default getGameDataEven;
