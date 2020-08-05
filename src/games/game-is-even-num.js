import {
  getRandomNumber, templateGame,
} from '../index.js';

const playGameIsEvenNum = () => {
  const textRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => getRandomNumber();
  const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

  templateGame(textRules, getQuestion, getCorrectAnswer);
};

export default playGameIsEvenNum;
