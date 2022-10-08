import startGame from '../src/index.js';

export default function startGameProgression() {
  const rules = 'What number is missing in the progression?';

  const questions = ['', '', ''];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = Math.floor(Math.random() * (6)) + 5; // from 5 to 10
    let numToGuess;
    // from 1 to progressionLength
    const numToGuessIndex = Math.floor(Math.random() * (progressionLength)) + 1;
    const startIndex = Math.floor(Math.random() * (20)) + 1; // from 1 to 20
    const diff = Math.floor(Math.random() * (4)) + 2; // from 2 to 5

    for (let num = 1; num <= progressionLength; num += 1) {
      if (num === numToGuessIndex) {
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
