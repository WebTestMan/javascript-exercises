const leapYears = function (yearToCheckIfLeapYear) {
    const isYearDivisibleByFour = yearToCheckIfLeapYear % 4 === 0;
    const isCentury = yearToCheckIfLeapYear % 100 === 0;
    const isYearDivisibleByFourHundred = yearToCheckIfLeapYear % 400 === 0;
  
    if (
      isYearDivisibleByFour &&
      (!isCentury || isYearDivisibleByFourHundred)
    ) {
      return true;
    } else {
      return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
