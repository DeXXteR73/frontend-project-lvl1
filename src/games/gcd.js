import startGame from '../index.js';
import random from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 > num1) return findGcd(num2, num1);
  if (!num2) return num1;
  return findGcd(num2, num1 % num2);
};

const startGameGcdRound = () => {
  const num1 = random();
  const num2 = random();

  const expression = `${num1} ${num2}`;

  const rightAnswer = findGcd(num1, num2);

  return { expression, rightAnswer };
};

const startGameGcd = () => startGame(rules, startGameGcdRound);

export default startGameGcd;
