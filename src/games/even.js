import startGame, {
  questions, rightAnswers, totalAttempts,
} from '../index.js';
import random from '../utils.js';

const isEven = (num) => (num % 2);

const startGameEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    questions[attempt] = random();
    rightAnswers[attempt] = isEven(questions[attempt]) ? 'no' : 'yes';
  }

  startGame(rules, questions, rightAnswers);
};

export default startGameEven;
