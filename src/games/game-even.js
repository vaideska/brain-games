import {
  getRandomNumber, templateGame, isEvenNumber,
} from '../index.js';

const playGameEven = () => {
  const textRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => getRandomNumber();
  const getCorrectAnswer = (num) => (isEvenNumber(num) ? 'yes' : 'no');

  templateGame(textRules, getQuestion, getCorrectAnswer);
};

export default playGameEven;
