'use strict';

// Ответ: 233168

let sum = 0;
const maxCount = 1000;

for (let i = 0; i < maxCount; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum)
