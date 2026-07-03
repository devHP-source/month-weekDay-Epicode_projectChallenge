/* 1) Crea una funzione che controlli due numeri interi.
Ritorna "true" se uno dei due è 50 o se la somma dei due è 50. */
function checkNumbers(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1+num2) === 50) {
        return true;
    }
return false;
}
console.log("ES 1:", checkNumbers(20, 30));

console.log("==================================");
/* 2) Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
Passa la stringa e la posizione come parametri e ritorna la stringa modificata. */
function removeChar(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
    // prende tutti prima dei caratteri e tutti dopo
}
console.log("ES 2:", removeChar("Hello, World!", 5));

console.log("==================================");
/* 3) Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false' boolean. */
function checkRange(n1, n2) {
    let lowerRange = (n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60);
    let upperRange = (n1 >= 70 && n1 <= 100) && (n2 >= 70 && n2 <= 100);
    
    if (lowerRange || upperRange) {
        return true;
    }
    return false;
}
console.log("ES 3:", checkRange(45, 50));

console.log("==================================");
/* 4) Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso
se inizia con "Los" o "New", altrimenti ritorni 'false'. */
function checkCity(city) {
    let prefix = city.substring(0, 3);
    if (prefix === "Los" || prefix === "New") {
        return city;
    }
    return false;
}
console.log("ES 4:", checkCity("Los Angeles"));
console.log("ES 4:", checkCity("New York"));
console.log("ES 4:", checkCity("Roma"));

console.log("==================================");
/* 5) Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro. */ 
function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
console.log("ES 5:", sumArray([30, 50, 70]));

console.log("==================================");
/* 6) Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'. */
function checkArray(arr) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 1 || arr[j] === 3) {
            return false;
        }
    }
    return true;
}
console.log("ES 6:", checkArray([2, 4, 5]));
console.log("ES 6:", checkArray([2, 1, 5]));

console.log("==================================");
/* 7) Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
* Angolo acuto: meno di 90° -> ritorna 'acuto'
* Angolo ottuso: tra i 90° e i 180° gradi -> ritorna 'ottuso'
* Angolo retto: 90° -> ritorna 'retto'
* Angolo piatto: 180° -> ritorna 'piatto' */
function findAngleType(degrees) {
    if (degrees < 90) {
        return 'acuto';
    } else if (degrees === 90) {
        return 'retto';
    } else if (degrees > 90 && degrees < 180) {
        return 'ottuso';
    } else if (degrees === 180) {
        return 'piatto';
    }
    return 'angolo non valido';
}
console.log("ES 7:", findAngleType(45));
console.log("ES 7:", findAngleType(90));
console.log("ES 7:", findAngleType(120));
console.log("ES 7:", findAngleType(180));
console.log("ES 7:", findAngleType(200));

console.log("==================================");
/* 8) Crea una funzione che crei un acronimo a partire da una frase.
Es: "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT". */
function createAcronym(phrase) {
    let word = phrase.split(' ');
    let acronym = '';

    for (let k = 0; k < word.length; k++) {
        let firstLetter = word[k].charAt(0).toUpperCase();
        acronym += firstLetter;
    }
    return acronym;
}
console.log("ES 8:", createAcronym("Fabbrica Italiana Automobili Torino"));