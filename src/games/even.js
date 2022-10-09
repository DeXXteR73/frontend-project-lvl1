import startGame from '../index.js';
import random from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEvenRound = () => {
  const num = random();
  const expression = num;
  const rightAnswer = (num % 2) ? 'no' : 'yes';

  return { expression, rightAnswer };
};

const startGameEven = () => startGame(rules, startGameEvenRound);

export default startGameEven;
