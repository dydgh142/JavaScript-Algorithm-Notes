const fs = require('fs');

let a = fs.readFileSync('input.txt').toString().split('\n');

const checker = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < a.length - 1; i++) {
  let count = 0;
  if (a[i] == '#') break;
  for (let char of a[i].toLowerCase()) {
    if (checker.includes(char)) {
      count += 1;
    }
  }
  console.log(count);
}
// for (let j = 0; j < a.length - 1; j++) {
//   console.log(count[j]);
// }
