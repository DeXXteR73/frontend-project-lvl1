import startGame, {
  questions, rightAnswers, totalAttempts,
} from '../index.js';
import random from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (Number(num % i) === 0) return false;
  }

  return true;
};

const startGamePrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    questions[attempt] = random();
    rightAnswers[attempt] = isPrime(questions[attempt]) ? 'yes' : 'no';
  }

  startGame(rules, questions, rightAnswers);
};

export default startGamePrime;
