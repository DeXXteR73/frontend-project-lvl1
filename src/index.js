import readlineSync from 'readline-sync';

export function startGame (rules, questions, rightAnswers) {
    // greeting
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    // rules
    console.log(rules);

    var attempt;
    for (attempt = 0; attempt < 3; attempt++) {
        const answer = readlineSync.question('Question: ' + questions[attempt] + '\n');

        if (answer == rightAnswers[attempt]) {
            console.log("Correct!");
        } else {
            console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + rightAnswers[attempt] + "'.");
            break;
        }
    }

    if (attempt == 3) {
        console.log("Congratulations, " + name + "!");
    } else {
        console.log("Let's try again, " + name + "!");
    }
}