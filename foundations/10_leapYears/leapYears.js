// If year is divisible by 4, it is a leap year.
// If year is divisible by 100 it is not a leap year, unless it is divisible by 400.

const leapYears = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

leapYears(700);
// Do not edit below this line
module.exports = leapYears;
