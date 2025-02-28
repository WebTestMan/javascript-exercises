const removeFromArray = function (arrayToRemove, ...args) {
  const returnArray = [];
  arrayToRemove.forEach((item) => {
    if (!args.includes(item)) {
      returnArray.push(item);
    }
  });
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
