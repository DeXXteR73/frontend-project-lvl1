import startGame from '../src/index.js';

function random(max) {
  return Math.floor(Math.random() * (max));
}

export default function startGameEven() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const num1 = random(101);
  const num2 = random(101);
  const num3 = random(101);
  const questions = [num1, num2, num3];

  const rAnswer1 = (num1 % 2) ? 'no' : 'yes';
  const rAnswer2 = (num2 % 2) ? 'no' : 'yes';
  const rAnswer3 = (num3 % 2) ? 'no' : 'yes';
  const rightAnswers = [rAnswer1, rAnswer2, rAnswer3];

  startGame(rules, questions, rightAnswers);
}
