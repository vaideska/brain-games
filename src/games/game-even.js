import getRandomNumber from '../getGameData.js';
import playGame from '../index.js';

const isEvenNumber = (num) => num % 2 === 0;

const getGameDataEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const answer = isEvenNumber(question) ? 'yes' : 'no';
    return [question, answer];
  };

  playGame(rule, getQuestionAndAnswer);
};

export default getGameDataEven;
