var thirteen = require('thirteen');
var isThirteen = require('is-thirteen');

var someNumbers = ["1", "337"];

for (index in someNumbers) {
  var aNumber = someNumbers[index]
  if (isThirteen(thirteen(aNumber))) {
    console.log('YES!!! ' + aNumber + ' times 13 is thirteen 💖');
  } else {
    console.log('I\'m sorry! ' + aNumber + ' times 13 is not thirteen 😢');
  }
}
