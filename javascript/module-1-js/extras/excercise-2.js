// Prompt the user for width and length of a rectangle.
//
// Print out the area and perimeter of the rectangle.
//
// HINT: if you don't remember how to calculate the area or perimeter of a rectangle, Google it.



var prompt = require('prompt-sync')();

var x = Number(prompt('width = '));
var y = Number(prompt('lenght = ')); 

console.log('Area = ', x * y);
console.log('Perimeter =',( x + y) * 2);
