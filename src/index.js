import readlineSync from 'readline-sync';

export default function startGame(rules, questions, rightAnswers) {
  // greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // rules
  console.log(rules);

  let attempt;
  for (attempt = 0; attempt < 3; attempt += 1) {
    const answer = readlineSync.question(`Question: ${questions[attempt]}\n`);
    const rightAnswer = rightAnswers[attempt];

    if (String(answer) !== String(rightAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }
    console.log('Correct!');
  }

  if (attempt === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
