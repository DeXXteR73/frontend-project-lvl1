import { startGame } from "../src/index.js";

function gcd (num1, num2) {
	if (num2 > num1) return gcd(num2, num1);
	if (!num2) return num1;
	return gcd(num2, num1 % num2);
}

export function startGameGcd() {
    const rules = 'Find the greatest common divisor of given numbers.';

    var questions = [];
    var rightAnswers = [];
    for (let i = 0; i < 3; i++) {
        var num1 = Math.floor(Math.random() * (101));
        var num2 = Math.floor(Math.random() * (101));

        questions[i] = num1 + ' ' + num2;
        
        rightAnswers[i] = gcd(num1, num2);
    }
    
    startGame(rules, questions, rightAnswers);
}