import startGame from '../src/index.js';

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
}

export default function startGamePrime() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const num1 = Math.floor(Math.random() * (101));
  const num2 = Math.floor(Math.random() * (101));
  const num3 = Math.floor(Math.random() * (101));
  const questions = [num1, num2, num3];

  const rAnswer1 = isPrime(num1) ? 'yes' : 'no';
  const rAnswer2 = isPrime(num2) ? 'yes' : 'no';
  const rAnswer3 = isPrime(num3) ? 'yes' : 'no';
  const rightAnswers = [rAnswer1, rAnswer2, rAnswer3];

  startGame(rules, questions, rightAnswers);
}
