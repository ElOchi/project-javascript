var prompt = require('prompt-sync')();

function getArray(size){
  return new Array(size);
}

var size = Number(prompt('What\'s size = '));
console.log(getArray(size));
