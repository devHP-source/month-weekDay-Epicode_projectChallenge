/*
REGOLE:
- Tutte le risposte devono essere scritte in JavaScript

- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant

- Puoi usare Google / StackOverflow ma solo quanto ritieni
di aver bisogno di qualcosa che non è stato spiegato a lezione

- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta

- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o
quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/*
ESERCIZIO 1
 Elenca e descrivi i principali DATATYPE in JavaScript.
 Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* RISPOSTA
I DATATYPE sono diversi tipi di cose che puoi mettere dentro queste scatole, tipo
non puoi mettere l'acqua in una scatola di cartone, in linguaggio JS ogni tipo di informazione
ha il suo formato speciale, cioè:

1. String - le parole
Pensa magari ad un'etichetta scritta il tuo nome,
La STRING è qualsiasi testo, parola o frase, per far capire al computer che si tratta
di una stringa che però questi (testi, parole e frasi) dobbiamo metterli sempre dentro le
virgolette "Hello World!"

2. Number - per contare
a differenza del STRING, i NUMBER si scrivono senza virgolette,
così il computer sa che può farci le somme o sottrazioni

3. Boolean - un interruttore
E' un tipo di dato che ha solo DUE OPZIONI: true o false
immagina che l'interruttore della luce nella stanza, può essere solo
Acceso o Spento, Boolean funziona allo stesso modo, o vero o falso.

4. Undefined - una scatola dimenticata
Immagina una scatola che tu hai preparato ma ti sei dimenticato di mettere
un nuovo giocattolo, hai scritto che tipo di giocattolo ma poi ti sei distratto
e l'hai lasciata aperta senza metterci nulla, esiste ma non è ancora stato definito
cosa ci sia dentro

5. Null - una scatola ma l'hai svuotata
Molto simile ad Undefined, ma c'è una differenza. Sei stato tu proprio a dire
al computer che questa scatola lo vuoi completamente vuota.

6. Object - uno zaino
Uno zaino che contiene tante tasche, ognuna tasca ha un'etichetta sopra.
In un OBJECT puoi mettere insieme tante informazioni diverse che riguarda
la stessa cosa.
*/

/* ESERCIZIO 2
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const a = 12
const b = 20
const risulato = a+b
console.log(risulato)

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
const x = 12

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const name = "Paulo"

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
const num = 4
let esercizioCinque = x - 4
    console.log(esercizioCinque)

/* ESERCIZIO 6
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john",
 e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2
 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono
 trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john"
const name2 = "John"
const domanda = "I due STRING dichiarati, sono le stesse nomi?"
const comparison = name1 === name2
console.log(domanda + " La rispota e': " + comparison)
// console.log(name1 === name2)

console.log(name1.toLowerCase() === name2.toLowerCase())
