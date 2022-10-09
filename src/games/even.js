import startGame from '../index.js';
import random from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const startGameEvenRound = () => {
  const num = random();
  const expression = num;
  const rightAnswer = isEven(num) ? 'yes' : 'no';

  return { expression, rightAnswer };
};

const startGameEven = () => startGame(rules, startGameEvenRound);

export default startGameEven;
