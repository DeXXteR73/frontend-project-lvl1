import startGame, { totalAttempts } from '../index.js';
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

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < totalAttempts; i += 1) {
    const num = random();
    questions[i] = num;

    const rAnswer = isPrime(num) ? 'yes' : 'no';
    rightAnswers[i] = rAnswer;
  }

  startGame(rules, questions, rightAnswers);
};

export default startGamePrime;
