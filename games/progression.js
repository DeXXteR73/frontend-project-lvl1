import { startGame } from "../src/index.js";

export function startGameProgression() {
    const rules = 'What number is missing in the progression?';

    var questions = ['', '', ''];
    var rightAnswers = [];
    for (let i = 0; i < 3; i++) {
        var progressionLength = Math.floor(Math.random() * (6)) + 5; // from 5 to 10
        var numToGuess;
        var numToGuessIndex = Math.floor(Math.random() * (progressionLength)) + 1; // from 1 to progressionLength
        var startIndex = Math.floor(Math.random() * (20)) + 1; // from 1 to 20
        var diff = Math.floor(Math.random() * (4)) + 2; // from 2 to 5

        for (let num = 1; num <= progressionLength; num++) {
            if (num == numToGuessIndex) {
                numToGuess = startIndex + numToGuessIndex + diff*num;
                questions[i] += '.. ';
            } else {
                questions[i] += startIndex + num + diff*num + ' ';
            }
        }

        rightAnswers[i] = numToGuess;
    }
    
    startGame(rules, questions, rightAnswers);
}