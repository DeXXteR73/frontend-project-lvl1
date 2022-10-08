import startGame from '../index.js';
import random from '../utils.js';

function calcExpression(num1, operation, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error("Can't calc the expression");
  }
}

export default function startGameCalc() {
  const rules = 'What is the result of the expression?';

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = random(1, 10);
    const operations = ['+', '-', '*'];
    const operation = operations[random(0, 2)]; // 0 = '+', 1 = '-', 2 = '*'
    const num2 = random(1, 10);

    questions[i] = `${num1} ${operation} ${num2}`;

    rightAnswers[i] = calcExpression(num1, operation, num2);
  }

  startGame(rules, questions, rightAnswers);
}
