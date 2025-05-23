// Spinner setup
const startButton = document.getElementById('startButton');
const display = document.getElementById('display');

// Dart system setup
const totalRounds = 5;
let dartsLeft = totalRounds;
let score1 = 0;
let score2 = 0;

const availableDarts = document.getElementById('availableDarts');
const player1Darts = document.getElementById('player1Darts');
const player2Darts = document.getElementById('player2Darts');

const add1 = document.getElementById('add1');
const sub1 = document.getElementById('sub1');
const add2 = document.getElementById('add2');
const sub2 = document.getElementById('sub2');

// Display styling
function setDisplayClass(className) {
  display.className = '';
  display.classList.add(className);
}

// Spinner logic
startButton.addEventListener('click', () => {
  countdown(3);
});

function countdown(count) {
  setDisplayClass('countdown');
  display.textContent = count;

  if (count > 0) {
    setTimeout(() => countdown(count - 1), 1000);
  } else {
    spinNumbers();
  }
}

function spinNumbers() {
  setDisplayClass('spinning');
  const spinDuration = Math.floor(Math.random() * 5 + 1) * 1000;

  const spinner = setInterval(() => {
    const number = Math.floor(Math.random() * 20 + 1);
    display.textContent = number;
  }, 100);

  setTimeout(() => {
    clearInterval(spinner);
    const finalNumber = Math.floor(Math.random() * 20 + 1);
    setDisplayClass('final');
    display.textContent = finalNumber;
  }, spinDuration);
}

// Dart rendering
function renderDarts(container, count) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dart = document.createElement('span');
    dart.textContent = '🎯';
    dart.className = 'dart';
    container.appendChild(dart);
  }
}

function updateUI() {
  renderDarts(availableDarts, dartsLeft);
  renderDarts(player1Darts, score1);
  renderDarts(player2Darts, score2);
}

// Scoring logic
function addScore(player) {
  if (dartsLeft === 0) return;

  if (player === 1 && score1 < totalRounds) {
    score1++;
    dartsLeft--;
  } else if (player === 2 && score2 < totalRounds) {
    score2++;
    dartsLeft--;
  }
  updateUI();
}

function subtractScore(player) {
  if (player === 1 && score1 > 0) {
    score1--;
    dartsLeft++;
  } else if (player === 2 && score2 > 0) {
    score2--;
    dartsLeft++;
  }
  updateUI();
}

// Button events
add1.addEventListener('click', () => addScore(1));
sub1.addEventListener('click', () => subtractScore(1));
add2.addEventListener('click', () => addScore(2));
sub2.addEventListener('click', () => subtractScore(2));

// Initial render
updateUI();
