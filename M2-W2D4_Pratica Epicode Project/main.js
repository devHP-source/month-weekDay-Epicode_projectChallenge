// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
* A partire da una lista di prezzi, (ARRAY)
* un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer
(il 90% del dati che maneggerai saranno array di OGGETTI!!) quindi 
assicurati di COMPRENDERE la logica.

Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 


                            //BOLEAN: TRUE O FALSE
Se l'utente ha la proprietà "isAmbassador" con valore true,
il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione
(anche gli utenti speciali pagano le spedizioni).


 // OGGETTO
Se l'utente ha la proprietà "isAmbassador" con valore false,
il carrello NON deve venire scontato.

IF: 100 >= totalCart "SPEDIZIONE GRATUITA"
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100.

ELSE: totalCart + ShippingCost
Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.

 // ARRAY DI utenti = []
 // utenti.push
Crea un array di utenti (usando .push) e stampa,

                // FOR LOOP                    "user.name + user.lastName" 
per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador"
basandoti sui dati contenuti nell'oggetto.

ESEMPIO:                FOR
L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"

        // CONTROLLO solo per gli ambassador
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: false,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: true,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: true,
}

const prices = [34, 5, 2] // ARRAY (sono i prezzi)
const shippingCost = 50
let utenteCheEffettuaLAcquisto = paul //cambia il valore qui per provare se il tuo algoritmo funziona!


let totalCart = 0;
for (let i = 0; i < prices.length; i++) {
  totalCart += prices[i]; // Calcola il prezzo totale del carrello (ARRAY)
// totalCart = totalCart + prices[i]
}

// const discount = 0.3;

// Effettua lo sconto di 30% IF l'user è un ambassador
if (utenteCheEffettuaLAcquisto.isAmbassador) {
    totalCart = totalCart * 0.7; // 30%
   //totalCart += totalCart * discount;
}

if (totalCart <= 100) { // Se il totale del carrello è minore di 100,
    totalCart = totalCart + shippingCost; // aggiungi il costo di shippingCost ovvero: 50
// totalCart += shippinhCost;
}

/*
prices = [34, 5, 2] = 41
41 [prices] - 30% (0.3) = 28.7
BELOW 100, quindi:
28.7 + 50 (shippingCost) = 78.7
*/

console.log("Il prezzo finale per " + utenteCheEffettuaLAcquisto.name + " è: " + totalCart + "€")

console.log("----------------------------------------")

const users = []
users.push(marco, paul, amy)

// LOOP per gli users, stampa
const ambassadorsOnly = [] // push here

for (let j = 0; j < users.length; j++) {
    const user = users[j]
    let ambassadorName = user.name + " " + user.lastName

    if (user.isAmbassador) {
        ambassadorName += " [E'] un ambassador"
        ambassadorsOnly.push(user) // IF è vero, push user nel ambassadorsOnly
    } else {
        ambassadorName += " [NON] è un ambassador"
    }
    console.log(ambassadorName)
}

console.log("----------------------------------------")

console.log("Gli ambassador sono:")
for (let k = 0; k < ambassadorsOnly.length; k++) {
    const ambassador = ambassadorsOnly[k]
    console.log(ambassador.name + " " + ambassador.lastName)
}