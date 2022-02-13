'use strict';
// console.log(
//     (document.querySelector('.message').textContent = 'This is my project')

// );
// document.querySelector('.message').textContent = '<== Enter number in box';

const guessNo = Math.trunc(Math.random() * 100) + 1;
console.log(guessNo);

let highScore = 0;
let score = 15;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const temp = Number(document.querySelector('.guess').value);

  if (!temp) {
    document.querySelector('.message').textContent = 'Enter the Number';
  } else if (score == 0) {
    document.querySelector('.message').textContent = 'Game Over!';
  } else if (temp < guessNo) {
    document.querySelector('.message').textContent = 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (temp > guessNo) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Correct Answer';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = guessNo;
    document.querySelector('body').style.backgroundColor = 'green';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
