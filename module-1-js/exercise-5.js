var prompt = require('prompt-sync')();


var y = Number(prompt('Give me a  Value! '));
var x = Number(prompt('Give me a  Second Value! '));
  if(y %2 == 0 || x %2 == 0 ){
    console.log("yes");
  }else{
    console.log("no");
  }
