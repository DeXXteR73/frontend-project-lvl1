import startGame from '../index.js';
import random from '../utils.js';

function findGcd(num1, num2) {
  if (num2 > num1) return findGcd(num2, num1);
  if (!num2) return num1;
  return findGcd(num2, num1 % num2);
}

export default function startGameGcd() {
  const rules = 'Find the greatest common divisor of given numbers.';

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(1, 100);
    const num2 = random(1, 100);

    questions[i] = `${num1} ${num2}`;

    rightAnswers[i] = findGcd(num1, num2);
  }

  startGame(rules, questions, rightAnswers);
}
