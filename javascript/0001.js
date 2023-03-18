'use strict';

let sum = 0;
const maxCount = 1000;
const answer = 233168;

for (let i = 0; i < maxCount; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

if (sum === answer) {
  console.info('success', sum);
} else {
  console.error('error', sum);
}

