import {
  getRandomNumber, templateGame, lengthProgression, maxDiffProgression,
} from '../index.js';

const playGameProgression = () => {
  const textRules = 'What number is missing in the progression?';

  const getQuestion = () => {
    const firstNum = getRandomNumber();
    const diffProgression = getRandomNumber(maxDiffProgression) + 1;
    const skip = getRandomNumber(lengthProgression) + 1;
    let progression = '';
    for (let i = 1; i <= lengthProgression; i += 1) {
      if (i === skip) progression = `${progression} ..`;
      else progression = `${progression} ${firstNum + diffProgression * i}`;
    }
    return progression.substr(1);
  };

  const getCorrectAnswer = (progression) => {
    let answer;
    const arrayProgr = progression.split(' ');
    const skipIndex = arrayProgr.indexOf('..');
    if (skipIndex === 0) { // предусматриваю, если lengthProgression = 3
      answer = 2 * arrayProgr[skipIndex + 1] - arrayProgr[skipIndex + 2];
    } else if (skipIndex === arrayProgr.length - 1) {
      answer = 2 * arrayProgr[skipIndex - 1] - arrayProgr[skipIndex - 2];
    } else {
      const diff = (arrayProgr[skipIndex + 1] - arrayProgr[skipIndex - 1]) / 2
      answer = arrayProgr[skipIndex + 1] - diff;
    }
    return answer;
  };

  templateGame(textRules, getQuestion, getCorrectAnswer);
};

export default playGameProgression;
