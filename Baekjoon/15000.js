const fs = require('fs');
let a = fs.readFileSync('/dev/stdin').toString();

console.log(a.toUpperCase());
