const findTheOldest = function (personArray) {
  //
  const orderedPersonArray = personArray.sort((a, b) => {
    let currentPersonAge;
    let nextPersonAge;
    const currentYear = new Date().getFullYear();

    if (!a.yearOfDeath) {
      currentPersonAge = currentYear - a.yearOfBirth;
    } else {
      currentPersonAge = a.yearOfDeath - a.yearOfBirth;
    }

    if (!b.yearOfDeath) {
      nextPersonAge = currentYear - b.yearOfBirth;
    } else {
      nextPersonAge = b.yearOfDeath - b.yearOfBirth;
    }

    return currentPersonAge > nextPersonAge ? 1 : -1;
  });

  return orderedPersonArray[orderedPersonArray.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
