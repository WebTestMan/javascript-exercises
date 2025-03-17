const add = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else {
    return num1 + num2;
  }
};

const subtract = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else {
    return num1 - num2;
  }
};

const sum = function (numArray) {
  if (!Array.isArray(numArray)) {
    return "ERROR";
  } else {
    const productOfAllNums = numArray.reduce((total, currentItem) => {
      return total + currentItem;
    }, 0);
    return productOfAllNums;
  }
};

const multiply = function (numArray) {
  if (!Array.isArray(numArray)) {
    return "ERROR";
  } else {
    return numArray.reduce((product, current) => product * current);
  }
};

const power = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else {
    return Math.pow(num1, num2);
  }
};

const factorial = function (num1) {
  let product = 1;
  for (let i = num1; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
