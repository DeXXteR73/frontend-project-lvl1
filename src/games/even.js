import startGame, {
  questions, rightAnswers, totalAttempts,
} from '../index.js';
import random from '../utils.js';

const isEven = (num) => (num % 2);

const startGameEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < totalAttempts; i += 1) {
    const num = random();
    questions[i] = num;

    const rAnswer = isEven(num) ? 'no' : 'yes';
    rightAnswers[i] = rAnswer;
  }

  startGame(rules, questions, rightAnswers);
};

export default startGameEven;
