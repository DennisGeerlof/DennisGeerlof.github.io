// Logica om het extra veld in het formulier te tonen/verbergen
function toggleMeerPersonen() {
    const radioAlleen = document.querySelector('input[value="Alleen"]');
    const extraVeld = document.getElementById('meer-personen-veld');
    
    if (radioAlleen.checked) {
        extraVeld.style.display = 'none';
        // Wis de inhoud als ze zich bedenken
        document.getElementById('wie-en-hoeveel').value = ''; 
    } else {
        extraVeld.style.display = 'block';
    }
}

// Logica voor de Auto/OV tabbladen
function openTab(evt, tabName) {
    // Verberg alle tab content
    let tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }

    // Verwijder de "active" class van alle knoppen
    let tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Toon de huidige tab en voeg een "active" class toe aan de knop
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Logica om het formulier te verzenden zonder doorsturen
const form = document.querySelector("form");

form.addEventListener("submit", async function(event) {
    // 1. Voorkom dat de pagina standaard doorstuurt naar Formspree
    event.preventDefault(); 
    
    const data = new FormData(event.target);
    const button = event.target.querySelector("button[type='submit']");
    const origineleTekst = button.innerText;
    
    // 2. Zet de knop op laden zodat ze niet dubbel klikken
    button.innerText = "Bezig met verzenden...";
    button.disabled = true;

    try {
        // 3. Stuur de data "onder water" naar Formspree
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        // 4. Controleer of het is gelukt
        if (response.ok) {
            // Vervang het hele formulier door een succesmelding (kleur aangepast naar lila thema)
            form.innerHTML = "<h3 style='text-align: center; color: #A390CA; padding: 30px;'>Bedankt! De RSVP is succesvol verzonden.</h3>";
        } else {
            // Als er iets misgaat bij Formspree
            alert("Oeps! Er ging iets mis. Probeer het later nog eens.");
            button.innerText = origineleTekst;
            button.disabled = false;
        }
    } catch (error) {
        // Als er een netwerkfout is (bijv. geen internet)
        alert("Netwerkfout. Controleer je internetverbinding en probeer het opnieuw.");
        button.innerText = origineleTekst;
        button.disabled = false;
    }
});