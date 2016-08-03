var prompt = require('prompt-sync')();

var i = Number(prompt('Give me a number? '));

if (i %2==0) {
      console.log("even");
   }
   else {
      console.log("odd");
   }
