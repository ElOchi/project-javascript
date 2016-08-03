var prompt = require('prompt-sync')();


var x = Number(prompt('What do you want as your first number? '));
var y = Number(prompt('What do you want as your second number? '));
console.log('sum', x + y);
console.log('difference', x - y);
console.log('multiplication', x * y);
console.log('division', x / y);
console.log('modulus', x % y);
