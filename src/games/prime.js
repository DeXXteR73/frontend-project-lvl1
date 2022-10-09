import startGame, { createYesNoGame } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (Number(num % i) === 0) return false;
  }

  return true;
};

const startGamePrime = () => {
  const [rules, questions, rightAnswers] = createYesNoGame('prime', isPrime);

  startGame(rules, questions, rightAnswers);
};

export default startGamePrime;
