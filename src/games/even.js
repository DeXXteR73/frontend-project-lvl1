import startGame, { createYesNoGame } from '../index.js';

const isEven = (num) => !(num % 2);

const startGameEven = () => {
  const [rules, questions, rightAnswers] = createYesNoGame('even', isEven);

  startGame(rules, questions, rightAnswers);
};

export default startGameEven;
