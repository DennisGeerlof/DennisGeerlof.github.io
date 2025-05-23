const startButton = document.getElementById('startButton');
const display = document.getElementById('display');

startButton.addEventListener('click', () => {
  countdown(3);
});

function countdown(count) {
  display.textContent = count;
  if (count > 0) {
    setTimeout(() => countdown(count - 1), 1000);
  } else {
    spinNumbers();
  }
}

function spinNumbers() {
  const spinDuration = Math.floor(Math.random() * 5 + 1) * 1000; // 1 to 5 seconds
  const spinner = setInterval(() => {
    const number = Math.floor(Math.random() * 20 + 1);
    display.textContent = number;
  }, 100);

  setTimeout(() => {
    clearInterval(spinner);
    const finalNumber = Math.floor(Math.random() * 20 + 1);
    display.textContent = finalNumber;
  }, spinDuration);
}
