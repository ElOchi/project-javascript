// BAC% = (A × 5.14/W × 0.69) - .015 × H
// Where:
//   A: Total alcohol consumed, in ounces (oz)
//   W: Body weight, in pounds (lbs)
//   H: Time passed since drinking, in hours
// Note:BAC can be measured by breath or blood test. The breath test will be translated into blood alcohol content (BAC).

var prompt = require('prompt-sync')();

//
// var weight = Number(prompt("How much you weight? "));
// var totalMedallas = Number(prompt("How many Medallas have drink today? ") * 10);
// var hours = Number(prompt("When was your last? "));
//
// console.log((totalMedallas * 5.14) / (weight * 0.69) - (0.015 * hours));
//
//


var ozConsumed = Number(prompt('Medallas = ') * 10);
var weight = Number(prompt('Weight = ') );
var gender = Number(prompt('Gender (0 = male || 1 = female) = '));
var hoursSinceLastDrink = Number(prompt('Hours since last Medalla = '));

if (gender === 0) {
  gender = 0.73
} else {
  gender = 0.66;
}

console.log((ozConsumed * 5.14) / (weight * gender) - (0.015 * hoursSinceLastDrink));
