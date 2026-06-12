/*
How can I do this??
I have to use loops to implement the function, but what loop?
A for loop might do the trick (or even a while loop)

I was so close to figuring this out on my own. Had to look at the solution.
I was about 90% correct with my implementation.

All tests passed!
*/

const repeatString = function (string, num) {
  let i = 0;
  let concatString = "";

  if (num < 0) {
    return "ERROR";
  }

  while (i < num) {
    concatString += string;
    i++;
  }
  return concatString;
};
repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("", 10);
// Do not edit below this line
module.exports = repeatString;
