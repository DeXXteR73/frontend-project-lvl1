import startGame from '../index.js';
import { random } from '../utils.js';

export default function startGameProgression() {
  const rules = 'What number is missing in the progression?';

  const questions = ['', '', ''];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = random(5, 10);
    let numToGuess;
    const numToGuessIndex = random(1, progressionLength);
    const startIndex = random(1, 20);
    const diff = random(2, 5);

    for (let num = 1; num <= progressionLength; num += 1) {
      if (Number(num) === Number(numToGuessIndex)) {
        numToGuess = startIndex + numToGuessIndex + diff * num;
        questions[i] += '.. ';
      } else {
        questions[i] += `${startIndex + num + diff * num} `;
      }
    }

    rightAnswers[i] = numToGuess;
  }

  startGame(rules, questions, rightAnswers);
}
