const fs = require('fs');

let a = fs.readFileSync('input.txt').toString().split('\n');

const checker = ['a', 'e', 'i', 'o', 'u'];
let count = [];
for (let i = 0; i < a.length - 1; i++) {
  count.push(0);
}

for (let i = 0; i < a.length - 1; i++) {
  if (a[i] == '#') break;
  for (let char of a[i].toLowerCase()) {
    if (checker.includes(char)) {
      count[i] += 1;
    }
  }
  console.log(count[i]);
}
// for (let j = 0; j < a.length - 1; j++) {
//   console.log(count[j]);
// }
