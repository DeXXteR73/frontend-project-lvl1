#!/usr/bin/env node
import { askName, askForEven } from '../src/cli.js';

console.log("Welcome to the Brain Games!");
const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let attempt;
for (attempt = 0; attempt < 3; attempt++) {
    var number = Math.floor(Math.random() * 100);
    var answer = askForEven(number);
    if (number % 2) { // odd
        if (answer == 'no') { // right
            console.log("Correct!");
        } else { // wrong
            console.log("'" + answer + "' is wrong answer ;(. Correct answer was 'no'.");
            break;
        }
    } else { // even
        if (answer == 'yes') { // right
            console.log("Correct!");
        } else { // wrong
            console.log("'" + answer + "' is wrong answer ;(. Correct answer was 'yes'.");
            break;
        }
    }
}
if (attempt == 3) {
    console.log("Congratulations, " + name + "!");
} else {
    console.log("Let's try again, " + name + "!");
}