import startGame from '../index.js';
import random from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGamePrimeRound = () => {
  const num = random();
  const expression = num;

  let rightAnswer = 'yes';

  if (num <= 3) rightAnswer = 'yes';

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (Number(num % i) === 0) rightAnswer = 'no';
  }

  return { expression, rightAnswer };
};

const startGamePrime = () => startGame(rules, startGamePrimeRound);

export default startGamePrime;
