import startGame from '../src/index.js';

function gcd(num1, num2) {
  if (num2 > num1) return gcd(num2, num1);
  if (!num2) return num1;
  return gcd(num2, num1 % num2);
}

export default function startGameGcd() {
  const rules = 'Find the greatest common divisor of given numbers.';

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * (101));
    const num2 = Math.floor(Math.random() * (101));

    questions[i] = `${num1} ${num2}`;

    rightAnswers[i] = gcd(num1, num2);
  }

  startGame(rules, questions, rightAnswers);
}
