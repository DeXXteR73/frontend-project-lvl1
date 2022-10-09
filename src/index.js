import readlineSync from 'readline-sync';
import random from './utils.js';

export const totalAttempts = 3;

export const createYesNoGame = (func) => {
  const questions = [];
  const rightAnswers = [];
  for (let i = 0; i < totalAttempts; i += 1) {
    const num = random();
    questions[i] = num;

    const rAnswer = func(num) ? 'yes' : 'no';
    rightAnswers[i] = rAnswer;
  }
  return [questions, rightAnswers];
};

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
