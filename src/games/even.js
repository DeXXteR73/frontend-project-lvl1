import startGame from '../index.js';
import { randomArray } from '../utils.js';

function isEven(num) {
  return (num % 2) ? 'no' : 'yes';
}

export default function startGameEven() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questions = randomArray(1, 100);

  const rAnswer1 = isEven(questions[0]);
  const rAnswer2 = isEven(questions[1]);
  const rAnswer3 = isEven(questions[2]);

  const rightAnswers = [rAnswer1, rAnswer2, rAnswer3];

  startGame(rules, questions, rightAnswers);
}
