import startGame, { createYesNoGame } from '../index.js';

const isEven = (num) => !(num % 2);

const startGameEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const [questions, rightAnswers] = createYesNoGame(isEven);

  startGame(rules, questions, rightAnswers);
};

export default startGameEven;
