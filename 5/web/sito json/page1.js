// Funzione per caricare e visualizzare la prima metà del contenuto JSON
async function loadAndDisplayContent() {
    // Effettua una richiesta al file JSON
    const response = await fetch("content.json");
    // Converte la risposta in un oggetto JavaScript
    const data = await response.json();

    // Calcola la metà del contenuto
    const halfway = Math.ceil(data.items.length / 2);
    // Estrae la prima metà del contenuto
    const firstHalf = data.items.slice(0, halfway);

    // Seleziona il contenitore nella pagina
    const container = document.getElementById("content-container");

    // Itera attraverso la prima metà degli elementi e li aggiunge al contenitore
    firstHalf.forEach(item => {
        const div = document.createElement("div"); // Crea un elemento div
        div.className = "content-item"; // Assegna una classe per lo stile
        div.textContent = item; // Imposta il testo del div
        container.appendChild(div); // Aggiunge il div al contenitore
    });
}

// Chiama la funzione per inizializzare il caricamento del contenuto
loadAndDisplayContent();