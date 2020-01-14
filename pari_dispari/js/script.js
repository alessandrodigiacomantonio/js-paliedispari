do {
  var oddOrEven = prompt('Scegli tra \'pari\' o \'dispari\'').toLowerCase();
} while (oddOrEven != 'pari' && oddOrEven != 'dispari');
do {
  var number = parseInt(prompt('Scegli un numero pari o dispari, in base alla tua scelta precedente'));
} while (
  (isNaN(number) || oddOrEven == 'pari' && number % 2 != 0)
  ||
  (isNaN(number) || oddOrEven == 'dispari' && number % 2 == 0)
);
var result = (Math.ceil(Math.random()*10))+number;
if (result % 2 == 0 && oddOrEven == 'pari') alert('Hai vinto');
else if (result % 2 != 0 && oddOrEven == 'dispari') alert('Hai vinto');
else alert('Hai perso');
