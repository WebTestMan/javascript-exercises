const palindromes = function (palindrome) {
  // convert string to array?
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const palindromeString = palindrome
    .toLowerCase()
    .split("")
    .filter((letter) => alphanumerical.includes(letter))
    .join("");
  // iterate over array from reverse to create new array
  const reversedPalindromeString = palindromeString
    .split("")
    .reverse()
    .join("");

  // compare both arrays?
  console.log("reversed " + reversedPalindromeString);
  console.log("forward " + palindromeString);

  return reversedPalindromeString === palindromeString;
};

// Do not edit below this line
module.exports = palindromes;
