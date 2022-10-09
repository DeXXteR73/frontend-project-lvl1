import readlineSync from 'readline-sync';

const totalAttempts = 3;

const startGame = (rules, startGameRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < totalAttempts; i += 1) {
    const question = startGameRound();
    const answer = readlineSync.question(`Question: ${String(question.expression)}\n`);
    const rightAnswer = String(question.rightAnswer);

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
