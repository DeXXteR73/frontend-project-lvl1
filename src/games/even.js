import startGame, { totalAttempts } from '../index.js';
import random from '../utils.js';

function isEven(num) {
  return (num % 2);
}

export default function startGameEven() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < totalAttempts; i += 1) {
    const num = random();
    questions[i] = num;

    const rAnswer = isEven(num) ? 'yes' : 'no';
    rightAnswers[i] = rAnswer;
  }

  startGame(rules, questions, rightAnswers);
}
