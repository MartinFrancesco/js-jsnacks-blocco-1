//ESERCIZIO1 - JSnack 1
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

var number1 = parseInt ( prompt ("Inserisci il primo numero"));
console.log (number1);

var number2 = parseInt ( prompt ("Inserisci il secondo numero"));
console.log (number2);

if (number1 > number2) {
  console.log ("number1 è maggiore di number2" + number1)
} else if (number2 > number1) {
  console.log ("number2 è maggiore di number1" + number2)
} else {
  console.log ("I numeri scelti sono uguali");
}

//ESERCIZIO2 - JSnack 2
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.

var word1 = prompt( "Inserisci una parola" );

var word2 = prompt( "Inserisci una seconda parola" );

if (word1.length > word2.length) {
  console.log (word2 + " " + word1);
} else {
  console.log (word1 + " " + word2);
}

//ESERCIZIO3 - JSnack 3
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

var somma = 0;

for (var i = 0; i < 4; i++) {
  var number = parseInt( prompt("inserisci un numero"));
  somma = somma + number;
}

console.log (somma);

//ESERCIZIO4 - JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
// Chiedi all’utente il suo nome
//  Comunicagli se può partecipare o no alla festa.

var invitations = ["Paolo", "Fabio", "Lorenzo"];
var username = prompt( "Inserisca cortesemente il suo nome" );

var check = false;

for (var i = 0; i < invitations.length; i++) {

  var userchecked = invitations[i];

  if (username == userchecked) {
  check = true;
  }
}

if (check == true) {
  console.log ("Benvenuto alla festa sir " + username);
} else {
  console.log ("Siamo spiacenti, il suo nome non risulta tra gli invitati.");
}

//ESERCIZIO5 - JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero.
// Se è dispari inseriscilo nell’array.

var empty = [];

for (var i = 0; i < 6; i++) {
  var number = parseInt( prompt( "Inserisci un numero"));
  console.log (number);

  if (number % 2 != 0 ) {
    empty.push(number);
    console.log (empty);
  }
}
