import startGame, { totalAttempts } from '../index.js';
import random from '../utils.js';

const newProgression = (progressionLength, numToGuessIndex, startIndex, diff) => {
  let numToGuess = 0;
  let question = '';

  for (let num = 1; num <= progressionLength; num += 1) {
    if (Number(num) === Number(numToGuessIndex)) {
      numToGuess = startIndex + numToGuessIndex + diff * num;
      question += '.. ';
    } else {
      question += `${startIndex + num + diff * num} `;
    }
  }

  return [question, numToGuess];
};

const startGameProgression = () => {
  const rules = 'What number is missing in the progression?';

  const questions = [];
  const rightAnswers = [];
  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    const progressionLength = random(5, 10);
    const numToGuessIndex = random(1, progressionLength);
    const startIndex = random(1, 20);
    const diff = random(2, 5);
    const [
      question,
      numToGuess,
    ] = newProgression(progressionLength, numToGuessIndex, startIndex, diff);

    questions[attempt] = question;
    rightAnswers[attempt] = numToGuess;
  }

  startGame(rules, questions, rightAnswers);
};

export default startGameProgression;
