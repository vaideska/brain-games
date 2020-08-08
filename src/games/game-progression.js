import {
  getRandomNumber, templateGame,
} from '../index.js';

const lengthProgression = 10;
const maxDiffProgression = 10;

const playGameProgression = () => {
  const textRules = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber();
    const diffProgression = getRandomNumber(maxDiffProgression) + 1;
    const skip = getRandomNumber(lengthProgression);
    const progression = [];
    for (let i = 0; i < lengthProgression; i += 1) {
      progression.push(firstNum + diffProgression * i);
    }
    const skipElement = progression[skip];
    progression[skip] = '..';
    return [progression.join(' '), skipElement];
  };

  templateGame(textRules, getQuestionAndAnswer);
};

export default playGameProgression;
