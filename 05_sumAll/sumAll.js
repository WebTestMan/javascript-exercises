const sumAll = function (num1, num2) {
  let lowInput = 0;
  let highInput = 0;
  let resultReturn = 0;
  const errorMsg = "ERROR";

  console.log(`The inputs were ${num1} & ${num2}`);

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    console.log(errorMsg);
    return errorMsg;
  }

  if (num1 < 0 || num2 < 0) {
    console.log(errorMsg);
    return errorMsg;
  }

  if (num1 > num2) {
    highInput = num1;
    lowInput = num2;
  } else {
    highInput = num2;
    lowInput = num1;
  }

  for (let i = lowInput; i <= highInput; i++) {
    resultReturn += i;
  }

  return resultReturn;
};

// Do not edit below this line
module.exports = sumAll;
