import startGame, {
  questions, rightAnswers, totalAttempts,
} from '../index.js';
import random from '../utils.js';

const findGcd = (num1, num2) => {
  if (num2 > num1) return findGcd(num2, num1);
  if (!num2) return num1;
  return findGcd(num2, num1 % num2);
};

const startGameGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < totalAttempts; i += 1) {
    const num1 = random();
    const num2 = random();

    questions[i] = `${num1} ${num2}`;

    rightAnswers[i] = findGcd(num1, num2);
  }

  startGame(rules, questions, rightAnswers);
};

export default startGameGcd;
