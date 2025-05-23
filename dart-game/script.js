// Get references to the button and display elements from the HTML
const startButton = document.getElementById('startButton');
const display = document.getElementById('display');

// Add an event listener to the start button to begin the countdown when clicked
startButton.addEventListener('click', () => {
  countdown(3); // Start countdown from 3
});

// Helper function to change the CSS class of the display for different visual states
function setDisplayClass(className) {
  display.className = ''; // Clear any existing class
  display.classList.add(className); // Apply the new class
}

// Countdown function that updates the display every second
function countdown(count) {
  setDisplayClass('countdown'); // Set text color to white
  display.textContent = count; // Show current countdown number

  if (count > 0) {
    // Wait 1 second, then call countdown again with a lower number
    setTimeout(() => countdown(count - 1), 1000);
  } else {
    // When countdown hits 0, start the spinning animation
    spinNumbers();
  }
}

// Function to simulate spinning numbers and then stop at a random number
function spinNumbers() {
  setDisplayClass('spinning'); // Set text color to red
  const spinDuration = Math.floor(Math.random() * 5 + 1) * 1000; // Duration between 1 and 5 seconds

  // Start changing the displayed number rapidly (every 100ms)
  const spinner = setInterval(() => {
    const number = Math.floor(Math.random() * 20 + 1); // Random number from 1 to 20
    display.textContent = number;
  }, 100);

  // After spinDuration, stop spinning and display the final number
  setTimeout(() => {
    clearInterval(spinner); // Stop the interval
    const finalNumber = Math.floor(Math.random() * 20 + 1); // Final random number
    setDisplayClass('final'); // Set text color to green
    display.textContent = finalNumber;
  }, spinDuration);
}
