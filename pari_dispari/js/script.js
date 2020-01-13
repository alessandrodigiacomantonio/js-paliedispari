do {
  var oddOrEven = prompt('Scegli tra \'pari\' o \'dispari\'').toLowerCase();
} while (oddOrEven != 'pari' && oddOrEven != 'dispari');
// console.log(oddOrEven);
// do {
  var number = parseInt(prompt('Scegli un numero pari o dispari, in base alla tua scelta precedente'))
//   console.log(number)
// } while ((oddOrEven == 'pari' && number % 2 != 0) || (oddOrEven == 'dispari' && number % 2 == 0));
// console.log(oddOrEven,number);
// while (number == isNaN && (oddOrEven == 'pari' && number % 2 != 0) && (oddOrEven == 'dispari' && number % 2 == 0));
var result = (Math.ceil(Math.random()*10))+number;
console.log(result);
if (result % 2 == 0 && oddOrEven == 'pari') alert('Hai vinto');
else if (result % 2 != 0 && oddOrEven == 'dispari') alert('Hai vinto');
else alert('Hai perso');
