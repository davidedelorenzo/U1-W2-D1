/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* RISPOSTA ESERCIZIO 1

I datatypes sono dei valori assegnati ad una variabile, ognuno con uno scopo ben definito. I principali datatypes sono: stringhe (strings), numeri interi e numeri decimali (integers / floats), valori booleani (boolean values), undefined e null.


// STRINGHE
Le stringhe servono ad assegnare un valore testuale ad una variabile.

esempio:

let my_name: "Davide";


// NUMERI (INTEGERS, FLOATS)

I numeri servono ad assegnare un valore numerico ad una variabile.

esempio:

let int_number = 2 --> NUMERO INTERO 
let fl_number = 2.5 --> NUMERO DECIMALE


// VALORI BOOLEANI (BOOLEAN VALUES)

I valori booleani assegnano un valore di vero o falso (true or false) alla variabile.

ESEMPIO: 
let is_true = true


// UNDEFINED / NULL

undefined e null sono dei datatype che si verificano quando una variabile è inizializzata ma non ha nessun contenuto all'interno.

null, come undefined, è un valore vuoto e si assegna volontariamente, ovvero quando si vuole rendere una variabile vuota.*/



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa. 

/* SCRIVI QUI LA TUA RISPOSTA */

/* SOLUZIONE ESERCIZIO 2 

let myName = "Davide"
*/



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20. 

/* SCRIVI QUI LA TUA RISPOSTA 

 // SOLUZIONE ESERCIZIO 3

 let numbers = 12 + 20
 console.log(numbers)

*/



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* SOLUZIONE ESERCIZIO 4

let x = 12
*/



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* SOLUZIONE ESERCIZIO 5

myName = 'De Lorenzo'

const random = 'random value'
random = 'random value 2'
console.log(random) --> Uncaught TypeError: invalid assignment to const 'random' 

*/ 



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* SOLUZIONE ESERCIZIO 6 

let x = 12
let result = 4 - x
console.log(result)

*/



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* SOLUZIONE ESERCIZIO 7

let name1 = "john"
let name2 = "John"

// VERIFICO SE IL CONTENUTO DI name1 SIA UGUALE O DIVERSO DAL CONTENUTO DI name2

let check = name1 == name2
console.log(check)*/

// VERIFICO SE IL CONTENUTO DI name1 SIA UGUALE O DIVERSO DAL CONTENUTO DI name2 E INOLTRE VERIFICO SE name1 E name2 SONO UGUALI RISPETTO AL LORO DATATYPE

/*let check2 = name1 === name2
console.log(check2)*/


/* EXTRA

console.log(name1.toLowerCase() === name2.toLowerCase())

*/