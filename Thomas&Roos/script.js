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