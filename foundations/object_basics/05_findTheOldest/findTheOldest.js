//get age if person has no yearOfDeath
const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (arr) {
  return arr.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(current.yearOfDeath, current.yearOfBirth);

    return oldestAge < currentAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
