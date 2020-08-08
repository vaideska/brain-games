import {
  getRandomNumber, templateGame,
} from '../index.js';

const isEvenNumber = (num) => num % 2 === 0;

const playGameEven = () => {
  const textRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const num = getRandomNumber();
    const answer = isEvenNumber(num) ? 'yes' : 'no';
    return [num, answer];
  };

  templateGame(textRules, getQuestionAndAnswer);
};

export default playGameEven;
