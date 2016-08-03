//
// Prompt user for 3 numbers (x, y, z).
//
// The x one will be the top limit. y will be the bottom limit.
//
// Print 0 if z is: y < z < x Print 1 if z is: y < x < z Print -1 if z is: z < y < x

var prompt = require('prompt-sync')();

var y = Number(prompt('Give me a  Number! '));
var x = Number(prompt('Give me a  Number! '));
var z = Number(prompt('Give me a  Number! '));

if ((y < z) && (z < x)) {
    console.log(0);

} else if ((y < x) && (x < z)){
    console.log(1);
} else {
    console.log(-1);
}
