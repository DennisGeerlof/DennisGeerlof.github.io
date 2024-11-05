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
  
  // Sla de huidige modus op in localStorage
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.setItem('theme', 'light');
  }
});

// Controleer en pas de modus aan bij het laden van de pagina
window.addEventListener('DOMContentLoaded', (event) => {
  const theme = localStorage.getItem('theme');
  
  if (theme === 'dark') {
      document.body.classList.add('dark-mode');
  } else if (theme === 'light') {
      document.body.classList.remove('dark-mode');
  }
});


//Spotify pop-up
document.getElementById("popupButton1").addEventListener("click", function() {
    var popupDiv = document.getElementById("popupDiv");
    if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
      popupDiv.style.display = "block";
    } else {
      popupDiv.style.display = "none";
    }
  });

  //Pedro pop-up
document.getElementById("popupButton2").addEventListener("click", function() {
  var popupDiv = document.getElementById("Pedro");
  if (popupDiv.style.display === "none" || popupDiv.style.display === "") {
    popupDiv.style.display = "block";
  } else {
    popupDiv.style.display = "none";
  }
});


