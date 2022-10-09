import startGame from '../index.js';
import random from '../utils.js';

const rules = 'What is the result of the expression?';

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

const startGameCalcRound = () => {
  const num1 = random(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[random(0, operators.length - 1)];
  const num2 = random(1, 10);

  const expression = `${num1} ${operator} ${num2}`;

  const rightAnswer = calcExpression(num1, operator, num2);

  return { expression, rightAnswer };
};

const startGameCalc = () => startGame(rules, startGameCalcRound);

export default startGameCalc;
