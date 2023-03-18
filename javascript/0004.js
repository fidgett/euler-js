'use strict';

let maxPalindrome = 0;
const maxNumber = 999;
const answer = 906609;

function isPalindrome(num) {
  const array = num.toString().split("");

  if (array.length < 2) {
    return false;
  }

  const reverse = Number(array.reverse().join(""));
  return num === reverse;
}

for (let i = 1; i <= maxNumber; i++) {
  for (let j = 1; j <= maxNumber; j++) {
    const ij = i * j;
    if (isPalindrome(ij) && ij > maxPalindrome) {
      maxPalindrome = ij;
    }
  }
}

if (maxPalindrome === answer) {
  console.info('success', maxPalindrome);
} else {
  console.error('error', maxPalindrome);
}
