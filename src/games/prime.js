import startGame from '../index.js';
import random from '../utils.js';

function isPrime(num) {
  if (num <= 1) return 'no';

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (Number(num % i) === 0) return 'no';
  }

  return 'yes';
}

export default function startGamePrime() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const num3 = random(1, 100);
  const questions = [num1, num2, num3];

  const rAnswer1 = isPrime(num1);
  const rAnswer2 = isPrime(num2);
  const rAnswer3 = isPrime(num3);
  const rightAnswers = [rAnswer1, rAnswer2, rAnswer3];

  startGame(rules, questions, rightAnswers);
}
