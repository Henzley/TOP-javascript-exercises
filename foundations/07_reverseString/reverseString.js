// I did some googling on this one.
// Was really not even that difficult(yeah, in retrospect)
const reverseString = function (string) {
  let splitString = string.split("");
  let reverseString = splitString.reverse();
  let joinedString = reverseString.join("");
  return joinedString;
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
