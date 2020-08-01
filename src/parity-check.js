import readlineSync from 'readline-sync';
import greetUser from './sli.js';

const playParityCheck = () => {
  const getRandomNamber = () => Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER));

  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctCount = 0;

  while (correctCount < 3) {
    const num = getRandomNamber();
    console.log(`Question: ${num}`);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      correctCount = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playParityCheck;
