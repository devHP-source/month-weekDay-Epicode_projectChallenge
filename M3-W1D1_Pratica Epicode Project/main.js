/* EXTRA 1:
* Crea con JavaScript la funzionalità per RIMUOVERE il link "twitter" sotto alla sezione "Altro"
* nell'elemento "aside".
* Deve avvenire al caricamento della pagina, automticamente.
*/

/* EXTRA 2:
* Crea con JavaScript la funzionalità per RIMUOVERE il corrispondente elemento padre dal DOM
* onClick sul link "Continua a leggere".
*/

/* EXTRA 3:
* Crea con JavaScript la funzionalità per creare un ALERT col nome dell'autore ogni volta
* che il cursore passa sopra l'autore del post. (mouseover)
*/

// EXTRA 1: Rimuovere il link "Twitter" dalla sezione "Altro" nel <aside>
function removeTwitterLink() {
    const linkAltro = document.querySelectorAll(".blog-sidebar .p-4:last-of-type ol li a");

    for (let i = 0; i < linkAltro.length; i++) {
        if (linkAltro[i].textContent.trim().toLowerCase() === "twitter") {
            const liPadre = linkAltro[i].parentElement; // Rimuovo tutto l'intero <li>
            liPadre.remove();
            break; // Esco dal ciclo una volta trovato e rimosso
        }
    }
}
// removeTwitterLink();

// EXTRA 2: Rimuovere l'elemento padre con onClick sul link "Continua a leggere"
function removeElementOnClick() {
    const linkContinua = document.querySelectorAll("a");

    for (let j = 0; i < linkContinua.length; j++) {
        if (linkContinua[j].textContent.includes("Continua a leggere")) {
            linkContinua[j].addEventListener('click', function removePadre(event) {
                event.preventDefault(); // Impedisce al link di ricaricare la pagina o saltare in alto

                const boxToRemove = event.target.closest(".jumbotron .row.no.gutters");
                if (boxToRemove) {
                    boxToRemove.remove();
                }
            });
        }
    }
}
removeElementOnClick();


// EXTRA 3: ALERT con il nome dell'autore al 'mouseover'
function alertName() {
    const autoriLink = document.querySelectorAll(".blog-post-meta a")

    for (let k = 0; k < autoriLink.length; k++) {
        autoriLink[k].addEventListener('mouseover', function showAlert(event) {
            const nameAutore = event.target.textContent;
            alert("L'autore di questo post è: " + nameAutore);
        });
    }
}
alertName();
