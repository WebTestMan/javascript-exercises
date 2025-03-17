const fibonacci = function (sequenceNumber) {
  if (sequenceNumber < 0) {
    return "OOPS";
  }

  if (!Number.isInteger(sequenceNumber)) {
    sequenceNumber = Number(sequenceNumber);
  }

  if (sequenceNumber === 0) return 0;
  if (sequenceNumber === 1 || sequenceNumber === 2) return 1;

  const sequenceArray = [1, 1];

  for (i = 2; i < sequenceNumber; i++) {
    sequenceArray.push(sequenceArray[i - 1] + sequenceArray[i - 2]);
  }

  return sequenceArray[sequenceArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
