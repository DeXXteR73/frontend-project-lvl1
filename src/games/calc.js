import startGame, {
  questions, rightAnswers, totalAttempts,
} from '../index.js';
import random from '../utils.js';

const calcExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Can't calc the expression - '${operator}' operator is not supported`);
  }
};

const startGameCalc = () => {
  const rules = 'What is the result of the expression?';

  for (let attempt = 0; attempt < totalAttempts; attempt += 1) {
    const num1 = random(1, 10);
    const operators = ['+', '-', '*'];
    const operator = operators[random(0, operators.length - 1)];
    const num2 = random(1, 10);

    questions[attempt] = `${num1} ${operator} ${num2}`;

    rightAnswers[attempt] = calcExpression(num1, operator, num2);
  }

  startGame(rules, questions, rightAnswers);
};

export default startGameCalc;
