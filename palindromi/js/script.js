var pali = [''];
do {
  var parola = prompt('Scrivi una parola');
} while (parola.length == 0 );
// console.log(parola,parola.length);
for (var i = parola.length-1; i >= 0; i--) {
  // console.log('Sei entrato nel for?');
  pali[0] += parola[i];
  // console.log(pali[0]);
}
if (pali[0] == parola) alert('Hai inserito una parola palindroma');
else alert('Non hai inserito una parola palindroma');
