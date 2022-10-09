import startGame from '../index.js';
import random from '../utils.js';

const rules = 'What number is missing in the progression?';

const newProgression = (progressionLength, numToGuessIndex, startIndex, diff) => {
  let rightAnswer = 0;
  let expression = '';

  for (let num = 1; num <= progressionLength; num += 1) {
    if (Number(num) === Number(numToGuessIndex)) {
      rightAnswer = startIndex + numToGuessIndex + diff * num;
      expression += '.. ';
    } else {
      expression += `${startIndex + num + diff * num} `;
    }
  }
  return [expression, rightAnswer];
};

const startGameProgressionRound = () => {
  const progressionLength = random(5, 10);
  const numToGuessIndex = random(1, progressionLength);
  const startIndex = random(1, 20);
  const diff = random(2, 5);

  const [expression,
    rightAnswer] = newProgression(progressionLength, numToGuessIndex, startIndex, diff);

  return { expression, rightAnswer };
};

const startGameProgression = () => startGame(rules, startGameProgressionRound);

export default startGameProgression;
