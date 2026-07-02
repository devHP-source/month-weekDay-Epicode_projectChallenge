/*
ESERCIZI IN JS
* ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
* ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
* ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
* ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

* ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella;
questa classe deve modificare la visibilità/invisibilità dell'immagine

* ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente,
ogni volta che viene invocata
*/

const h1 = document.getElementById('main-title'); // ES 7
const changeBGbutton = document.querySelector('.changeBG'); // ES 8
const storeAddress = document.querySelector('.store-address'); // ES 9
const links = document.querySelectorAll('a');

/* ES 7: Change contenuto di H1 using function() */
function changeTitle() {
    h1.innerText = 'Apple Store v2';
}
changeTitle();

/* ES 8: Change BACKGROUND COLOR using function() */
function changeBGcolor() {
    document.body.style.backgroundColor = 'lightgrey';
}
changeBGbutton.addEventListener('click', changeBGcolor)

/* ES 9: Change ADDRESS */
function changeAddress() {
    storeAddress.innerText = 'DITTA AMAZON SRC';
}
storeAddress.addEventListener('mouseenter', changeAddress);

/* ES 10: ADD CSS to amazon links */
function addClassToAmazonLinks() {
    for (link of links) {
        link.classList.add("amazon-link")
    }
}
addClassToAmazonLinks()
// links[0].addEventListener('click', addClassToAmazonLinks)
// links.addEventListener('mouseenter', addClassToAmazonLinks);
// onClick().addEventListener()


/* ES 11: AGGIUNGI/TOGLI una classe CSS a tuttle le immagini */
function toggleTabImagesVis() {
    const tableImg = document.querySelectorAll('table img'); // seleziona gli img dentro la table

    for (let i = 0; i < tableImg.length; i++) {
        const img = tableImg[i];
        img.classList.toggle('hidden-img') // prende il css dichiarato
    }
}
const ctaBtn = document.getElementById('toggle-btn'); // il button in HTML, presa tramite ID
ctaBtn.addEventListener('click', toggleTabImagesVis); // collegato la funzione con l'evento 'click'


/* ES 12: CHANGE PRICE COLOR, solo quando viene invocata */
function changeColorPrice() {
    const allPrice = document.querySelectorAll('.price'); // prendo tutte le "price" classi 

    for (let j = 0; j < allPrice.length; j++) { // ciclo for per ogni "price"
        const currentPrice = allPrice[j];

        // numeri casuali tra 0 e 255
        const firstColor = Math.floor(Math.random() * 256);
        const secondColor = Math.floor(Math.random() * 256);
        const thirdColor = Math.floor(Math.random() * 256);

        // stringa di colori
        const finalColors = "rgb(" + firstColor + "," + secondColor + "," + thirdColor + ")";

        currentPrice.style.color = finalColors; // applicazione del colore
    }
}

const colorBTN = document.getElementById('price-btn');
colorBTN.addEventListener('click', changeColorPrice);


