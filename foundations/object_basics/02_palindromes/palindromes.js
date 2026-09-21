const palindromes = function (word) {
  const validCharacters = "acdefghijklmnopqrstuvwxyz0123456789";

  const cleansedWord = word
    .toLowerCase()
    .split("")
    .filter((letter) => validCharacters.includes(letter))
    .join("");

  const reversedWord = cleansedWord.split("").reverse().join("");

  if (cleansedWord === reversedWord) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
