import readlineSync from 'readline-sync';
import greetUser from './greetUser.js';

const countCorrectAnswer = 3;

const playGame = (textRules, getQuestionAndAnswer) => {
  const userName = greetUser();
  console.log(textRules);
  let correctCount = 0;

  while (correctCount < countCorrectAnswer) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      correctCount = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
