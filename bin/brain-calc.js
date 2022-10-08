#!/usr/bin/env node
import readlineSync from 'readline-sync';

function random(max) {
    return Math.floor(Math.random() * (max + 1));
}

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log('Hello, ' + name + '!');
console.log('What is the result of the expression?');

var attempt;
for (attempt = 0; attempt < 3; attempt++) {
    var num1 = Math.floor(Math.random() * (11));
    var operations = ['+', '-', '*'];
    var operation = operations[Math.floor(Math.random() * (3))]; // 0 = '+', 1 = '-', 2 = '*'
    var num2 = Math.floor(Math.random() * (11));
    const answer = readlineSync.question('Question: ' + num1 + ' ' + operation + ' ' + num2 + '\n');
    var rightAnswer;
    switch (operation) {
        case '+':
            rightAnswer = num1 + num2;
            break;
        case '-':
            rightAnswer = num1 - num2;
            break;
        case '*':
            rightAnswer = num1 * num2;
            break;
        default:
            break;
    }
    if (answer == rightAnswer) {
        console.log("Correct!");
    } else {
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + rightAnswer + "'.");
        break;
    }
}
if (attempt == 3) {
    console.log("Congratulations, " + name + "!");
} else {
    console.log("Let's try again, " + name + "!");
}