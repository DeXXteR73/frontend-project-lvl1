import startGame from '../index.js';
import random from '../utils.js';

function isEven(num) {
  return (num % 2) ? 'no' : 'yes';
}

export default function startGameEven() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const num1 = random(1, 100);
  const num2 = random(1, 100);
  const num3 = random(1, 100);
  const questions = [num1, num2, num3];

  const rAnswer1 = isEven(num1);
  const rAnswer2 = isEven(num2);
  const rAnswer3 = isEven(num3);
  const rightAnswers = [rAnswer1, rAnswer2, rAnswer3];

  startGame(rules, questions, rightAnswers);
}
