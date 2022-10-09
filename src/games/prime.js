import startGame from '../index.js';
import random from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num <= 3) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (Number(num % i) === 0) return false;
  }

  return true;
}

const startGamePrimeRound = () => {
  const num = random();
  const expression = num;

  const rightAnswer = isPrime(num) ? 'yes' : 'no';

  return { expression, rightAnswer };
};

const startGamePrime = () => startGame(rules, startGamePrimeRound);

export default startGamePrime;
