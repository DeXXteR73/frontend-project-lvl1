import startGame from '../src/index.js';

export default function startGameCalc() {
  const rules = 'What is the result of the expression?';

  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * (11));
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * (3))]; // 0 = '+', 1 = '-', 2 = '*'
    const num2 = Math.floor(Math.random() * (11));

    questions[i] = `${num1} ${operation} ${num2}`;

    switch (operation) {
      case '+':
        rightAnswers[i] = num1 + num2;
        break;
      case '-':
        rightAnswers[i] = num1 - num2;
        break;
      case '*':
        rightAnswers[i] = num1 * num2;
        break;
      default:
        break;
    }
  }

  startGame(rules, questions, rightAnswers);
}
