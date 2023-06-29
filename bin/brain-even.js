#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;
const isEven = (value) => value % 2 === 0;
const getCorrectAnswer = (value) => (isEven(value) ? 'yes' : 'no');

// brain-even
console.log('brain-even');
// Welcome to the Brain Games!
console.log('Welcome to the Brain Games!');
// May I have your name? Sam
const name = readlineSync.question('May I have your name? ');
// Hello, Sam!
console.log(`Hello, ${name}!`);
// Answer "yes" if the number is even, otherwise answer "no".
console.log('Answer "yes" if the number is even, otherwise answer "no"');
const suggestedNumber = getRandomArbitrary(0, 10);
// Question: 15
console.log(`Question: ${suggestedNumber}`);
// Your answer: no
const answer = readlineSync.question('Your answer: ');
const correctAnswer = getCorrectAnswer(suggestedNumber);
if (answer === correctAnswer) {
  console.log('Correct!');
} else {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}
// Correct!
// Question: 6
// Your answer: yes
// Correct!
// Question: 7
// Your answer: no
// Correct!
// Congratulations, Sam!
