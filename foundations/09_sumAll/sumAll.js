/*
I can create a loop that will increment from the lowest number to the largest.
Then ass all values to get the total sum.
How do I make sure to always start from the lowest number, regardless of the order of the numbers
I can use toSorted and modify it to work with numbers
*/
const sumAll = function (a, b) {
  //check to see if function argument is a number
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  //check to see if function argument is negative
  if (a < 0 || b < 0) return "ERROR";
  //swap function arguments if b is > a
  if (a > b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }
  //loop over the function and sum up all integers between the range given
  let sum = 0;
  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
};
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
