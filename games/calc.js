import { question } from "readline-sync";
import { startGame } from "../src/index.js";

function random(max) {
    return Math.floor(Math.random() * (max));
}

export function startGameCalc() {
    const rules = 'What is the result of the expression?';

    var questions;
    var rightAnswers;
    for (let i = 0; i < 3; i++) {
        var num1 = Math.floor(Math.random() * (11));
        var operations = ['+', '-', '*'];
        var operation = operations[Math.floor(Math.random() * (3))]; // 0 = '+', 1 = '-', 2 = '*'
        var num2 = Math.floor(Math.random() * (11));

        questions[i] = num1 + ' ' + operation + ' ' + num2;
        
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