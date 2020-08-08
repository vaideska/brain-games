import {
  getRandomNumber, templateGame,
} from '../index.js';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const playGamePrime = () => {
  const textRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const num = getRandomNumber();
    const answer = isPrimeNumber(num) ? 'yes' : 'no';
    return [num, answer];
  };

  templateGame(textRules, getQuestionAndAnswer);
};

export default playGamePrime;
