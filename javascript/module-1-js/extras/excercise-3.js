//
// Prompt user for n;
//
// Print the result of n/n-1. Print if n/n-1 is Even or Odd.

var prompt = require('prompt-sync')();

var x = Number(prompt('Number = '));

console.log(x / (x - 1));

if (x %2==0) {
      console.log("even");
   }
   else {
      console.log("odd");
   }
