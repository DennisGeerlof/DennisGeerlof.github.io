// --- SLIDER LOGICA ---
const slider = document.getElementById('mijnSlider');
const btnRechts = document.getElementById('btn-rechts');
const btnLinks = document.getElementById('btn-links');

let huidigeSlide = 0;
const totaalSlides = 3;

function updateSlider() {
    slider.style.transform = `translateX(-${huidigeSlide * 100}vw)`;
}

btnRechts.addEventListener('click', () => {
    huidigeSlide = (huidigeSlide < totaalSlides - 1) ? huidigeSlide + 1 : 0;
    updateSlider();
});

btnLinks.addEventListener('click', () => {
    huidigeSlide = (huidigeSlide > 0) ? huidigeSlide - 1 : totaalSlides - 1;
    updateSlider();
});

// --- SCROLL REVEAL ANIMATIE ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); 

// --- CONTACTFORMULIER AFHANDELING (AJAX) ---
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Verander knop tekst tijdens verzenden
        submitBtn.disabled = true;
        submitBtn.innerText = "Verzenden...";

        const data = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.style.color = "#4BB543"; // Groen
                status.innerText = "Bedankt! Je bericht is succesvol verzonden.";
                form.reset();
            } else {
                const result = await response.json();
                status.style.color = "#ff3333"; // Rood
                status.innerText = "Oeps! Er ging iets mis: " + result.errors.map(error => error.message).join(", ");
            }
        } catch (error) {
            status.style.color = "#ff3333";
            status.innerText = "Fout bij verzenden. Controleer je internetverbinding.";
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = "Verstuur Bericht";
        }
    });
}