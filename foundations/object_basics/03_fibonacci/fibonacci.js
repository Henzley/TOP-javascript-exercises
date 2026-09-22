const fibonacci = function (num) {
  if (num < 0 || typeof num !== "number" || Number.isNaN(num)) {
    return "OOPS";
  }

  if (num === 0) {
    return 0;
  } else {
    let num1 = 1;
    let num2 = 0;
    for (let i = 2; i <= num; i++) {
      let current = num1 + num2;
      num2 = num1;
      num1 = current;
    }
    return num1;
  }
};

// Do not edit below this line
module.exports = fibonacci;
