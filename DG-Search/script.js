function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

updateTime(); // Update time when the page loads

// Update time every second
setInterval(updateTime, 1000);

// Darkmode
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


//Spotify pop-up
document.getElementById("popupButton").addEventListener("click", function() {
    var popupDiv = document.getElementById("popupDiv");
    if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
      popupDiv.style.display = "block";
    } else {
      popupDiv.style.display = "none";
    }
  });
