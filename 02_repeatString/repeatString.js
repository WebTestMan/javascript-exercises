const repeatString = function (stringToRepeat, amountToRepeat) {
if (amountToRepeat < 0) {
    return 'ERROR';
}
    let returnString = '';
    for (let i = 1; i <= amountToRepeat; i++) {
        returnString += stringToRepeat;
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
