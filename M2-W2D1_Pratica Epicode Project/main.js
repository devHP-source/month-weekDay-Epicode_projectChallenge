//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let firstNum = 20;
let secondNum = 10;

if (firstNum > secondNum) {
    console.log("Il numero più grande è: " + firstNum)
} else {
    console.log("Il numero più grande è: " + secondNum)
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = Number(prompt("Inserisci un numero:"));

if (num < 5) {
    console.log("Tiny");
} else if (num < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente,
  ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let i = 0;

for (i = 0; i <= 10; i++) {
    if (i === 3 || i === 8) {
        continue;
    }
    console.log(i);
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15.
  Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari,
  e mostrare il risultato in console.
*/

let j = 0;

for (j= 0; j < 15; j++) {
    if (j % 2 === 0) {
        console.log(j + " è un numero pari");
    } else {
        console.log(j + " è un numero disparo");
    }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che,
  dati due numeri interi,
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const a = 10;
const b = 2;
const c = 8;

if (a === c || b === c || (a+b) === c || (a-b) === c || (b-a) === c) {
    console.log("Una delle condizioni è uguale ad " + c);
} else {
    console.log("NON ci sono condizioni è stato soddisfatto");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce.
Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".

C'è una promozione in corso: se il totale del carrello supera 50,
l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale
che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = Number(prompt("Inserisci il totale del carrello:"));
const shippingCost = 10;
let totalAmount;

if (totalShoppingCart > 50) {
    totalAmount = totalShoppingCart;
    console.log("Hai un totale di [" + totalAmount + "]€ e hai la spedizione gratuita applicata!")
} else {
    totalAmount = totalShoppingCart + shippingCost;
    console.log("E' stato applicato un costo di spedizione di [" + shippingCost + "] €")
    console.log("Quindi, [" + totalShoppingCart + "] + [" + shippingCost + "]")
}
console.log("L'importo TOTALE dovuto è: [" + totalAmount + "]€")

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
  determinando, usando l'algoritmo del codice precedente,
  se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

const DISCOUNT = 0.20; // 20% di SCONTO
/* 
const productOne = {
    name: "iPhone Ultra Pro",
    price: 1699
}

const productTwo = {
    name: "Samsung Galaxy SX",
    price: 1599
}

const productThree = {
    name: "Nothing Phone 4 Max",
    price: 899
}
*/

// totalShoppingCart = Number(prompt("Il totale del carello è: " + totalAmount));
totalShoppingCart = totalAmount;
console.log("Prezzo originale: [" + totalAmount + "] €");

// (1 - 0.20) è = 0.80, per avere il prezzo finale GIA SCONTATO
let discountTotal = totalShoppingCart * (1 - DISCOUNT) // Calcola il prezzo scontato


console.log("Prezzo dovuto con lo SCONTO applicato di 20% per motivi di BLACK FRIDAY è: [" + discountTotal + "]€");



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

const isMale = false;
const GENDER = isMale
? "male"
: "female";
console.log("The gender assigned is: " + GENDER);


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100,
  stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!),
  stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz".
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

let k;

for (k = 1; k <= 100; k++) {

    if (k % 3 === 0 && k % 5 === 0) { // Controliamo se le due condizioni
        console.log("FizzBuzz")
    }
    // Verifichiamo le inviduali multipli
    else if (k % 3 === 0) {
        console.log("Fizz")
    }
    else if (k % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(k) // se nessuna delle condizioni, stampiamo solo il numero
    }
} 