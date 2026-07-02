/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori,
 ma se il loro valore è lo stesso allora deve ritornare la loro somma
 moltiplicata per 3.
*/
console.log("Esercizio 1:");
let numOne = 5;
let numTwo = 5;

function crazySum(numOne, numTwo) {
    const sumTotal = numOne + numTwo;
    if (numOne === numTwo) {
        return sumTotal * 3;
    }
    return sumTotal;
}

// (5+5) * 3 = 30
const resultOne = crazySum(numOne, numTwo);
console.log(resultOne);

// (15+5) = 20
const resultTwo = crazySum(15, 5);
console.log(resultTwo);
console.log("------------------------------");

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary",
 che accetta un numero intero come parametro e ritorna true
 se tale parametro è incluso tra 20 e 100 (incluso)
 o se è esattamente uguale a 400.
*/
console.log("Esercizio 2:");

// BOOLEAN true IF = 20 <= num <= 100 || num === 400

function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(20));  // true (inclusive)
console.log(boundary(100)); // true (inclusive)
console.log(boundary(400)); // true (exact match)
console.log(boundary(50));  // true (in range)
console.log(boundary(15));  // false (outside range)
console.log(boundary(401)); // false (not 400, not in range)

console.log("------------------------------");

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString",
 che accetta una stringa come parametro e la ritorna invertita
 (es.: EPICODE => EDOCIPE).
*/
console.log("Esercizio 3:");

function reverseString(str) {
    const charArray = str.split("");
    const reversedArray = charArray.reverse();
    const stringJoin = reversedArray.join("");

    return stringJoin;
}

const originalString = "EPICODE";
const reversed = reverseString(originalString); // reverseString 

console.log("The original string is: " + originalString); // EPICODE
console.log(reversed); // EDOCIPE

console.log("------------------------------");

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst",
 che accetta una stringa come parametro e
 la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
* split() : metodo per dividere una stringa in un array di parole
* charAt(0) : metodo per prendere la prima lettera,
* toUpperCase() : metodo per rendere maiuscola,
* slice(1) : metodo per prendere il resto della parola
* push() : metodo per aggiungere un elemento alla fine dell'array
* join() : metodo per unire gli elementi di un array in una stringa, con uno spazio tra le parole
*/

console.log("Esercizio 4:");

function upperFirst(stringa) {
    const parola = stringa.split(" ");
    const parolaMaiuscola = []; // array vuoto per contenere le parole con la prima lettera maiuscola
    
    for (let i = 0; i < parola.length; i++) { // ciclo FOR per vedere ogni singola parola
        const primaParola  = parola[i];

        if (primaParola.length > 0) { // controllo se le parole non sono vuote
            const parolaFix = primaParola.charAt(0).toUpperCase() + primaParola.slice(1);
            parolaMaiuscola.push(parolaFix);
         } else {
            parolaMaiuscola.push("");
         }
    }
    return parolaMaiuscola.join(" ");
}

console.log(upperFirst("ciao epicode"));
console.log(upperFirst("esercizio quattro"));

console.log("------------------------------");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom",
 che accetta come parametro un numero chiamato n e
 ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
console.log("Esercizio 5:");

function giveMeRandom(n) {
    const randomN = [];

    for (let j = 0; j < n; j++) {
        const randomNumber = Math.floor(Math.random() * 11); // Genera un numero random

        randomN.push(randomNumber); // Aggiunge il numero all'array
    }
    return randomN;
}
const result = giveMeRandom(6); 
console.log(result);


console.log("------------------------------");
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2)
 e calcola l'area del rettangolo associato.
*/

console.log("Esercizio EXTRA 1: ");

// AREA = BASE * ALTEZZA
// AREA = L1 * L2

function area(l1, l2) {
    const calcoloArea = l1 * l2;

return calcoloArea;
}
const b = 10;
const h = 5;
const risultatoArea = area(b, h);

console.log("L'area del rettangolo è: " + risultatoArea);

console.log("------------------------------");

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta
 tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19,
 la funzione deve tornare tale risultato moltiplicato per 3.
*/

console.log("Esercizio EXTRA 2: ");

function crazyDiff(numCD) {
    const diffAssoluta = Math.abs(numCD - 19);

    if (diffAssoluta > 19) {
        return diffAssoluta * 3;
    } else {
        return diffAssoluta;
    }
}

const testUno = crazyDiff(10);
console.log("La differenza assoluta è: " + testUno);

const testTwo = crazyDiff(30);
console.log("La differenza assoluta è: " + testTwo);

const testThree = crazyDiff(-3);
console.log("La differenza assoluta è: " + testThree);

console.log("------------------------------");

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa
 fornita e ritornare il risultato,
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla
 senza modifiche.
*/

const errorText = "Errore: l'input deve essere una: ";

console.log("Esercizio EXTRA 3: ");

function codify(testo) {
    if (typeof testo !== "string") {
        return errorText + typeof errorText;
    }
    const prefisso = "code ";

    if (testo.startsWith(prefisso)) {
        return testo;
    } else {
        return prefisso + testo;
    }
}

console.log(codify(123));
console.log(codify("in HTML and CSS"));
console.log(codify("in JavaScript"));

console.log("------------------------------");

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo
 come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7,
 e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

console.log("Esercizio EXTRA 4: ");

function check3and7(numero) {
    if (numero <= 0 || !Number.isInteger(numero)) {
        return false;
    }
    const isMultiple3 = 3;
    const isMultiple7 = 7;

    if (numero % isMultiple3 === 0 || numero % isMultiple7 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(9));
console.log(check3and7(3));
console.log(check3and7(22));

console.log("------------------------------");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString",
 che accetta una stringa come parametro e la ritorna senza il primo e
 l'ultimo carattere.
*/

console.log("Esercizio EXTRA 5: ");

function cutString(texto) {
    if (texto.length <= 2) {
        return "";
    }
const risultatoCut = texto.slice(1, -1);

return risultatoCut;
}

const myString = "Epicode";
const resultCut = cutString(myString);

console.log(resultCut); // "picod" ritorna senza la "E" e la "e" finale.

console.log("------------------------------");
