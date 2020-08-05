import {
  getRandomNumber, templateGame, isPrimeNumber,
} from '../index.js';

const playGamePrime = () => {
  const textRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => getRandomNumber();
  const getCorrectAnswer = (num) => (isPrimeNumber(num) ? 'yes' : 'no');

  templateGame(textRules, getQuestion, getCorrectAnswer);
};

export default playGamePrime;
