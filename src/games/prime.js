import startGame from '../index.js';
import { randomArray } from '../utils.js';

function isPrime(num) {
  if (num <= 1) return 'no';

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (Number(num % i) === 0) return 'no';
  }

  return 'yes';
}

export default function startGamePrime() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questions = randomArray(1, 100, 3);

  const rAnswer1 = isPrime(questions[0]);
  const rAnswer2 = isPrime(questions[1]);
  const rAnswer3 = isPrime(questions[2]);

  const rightAnswers = [rAnswer1, rAnswer2, rAnswer3];

  startGame(rules, questions, rightAnswers);
}
