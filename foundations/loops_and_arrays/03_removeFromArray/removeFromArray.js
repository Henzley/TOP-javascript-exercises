// Next time, just go to the articles that the Readme file refers you to.
// I looked at the solution for this one as well.

const removeFromArray = function (arr, ...args) {
  return arr.filter((num) => !args.includes(num));
};
let arr = [1, 2, 3];
removeFromArray(arr, "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
