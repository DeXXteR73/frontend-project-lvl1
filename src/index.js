import readlineSync from 'readline-sync';

export const totalAttempts = 3;

const startGame = (rules, questions, rightAnswers) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // rules
  console.log(rules);

  let lastAttemptIndex;
  for (lastAttemptIndex = 0; lastAttemptIndex < totalAttempts; lastAttemptIndex += 1) {
    const answer = readlineSync.question(`Question: ${questions[lastAttemptIndex]}\n`);
    const rightAnswer = rightAnswers[lastAttemptIndex];

    if (String(answer) !== String(rightAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }
    console.log('Correct!');
  }

  if (lastAttemptIndex === totalAttempts) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default startGame;
