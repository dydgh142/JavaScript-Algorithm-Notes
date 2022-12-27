const fs=require('fs')
let ip=fs.readFileSync('/dev/stdin').toString().split(' ')
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

var sum = a+b+c

if (a+b+c > 100){
  console.log('OK');
}

else{
  var min=Math.min(a,Math.min(b,c));
  if(min==a) console.log("Soongsil");
  else if(min==b) console.log("Korea");
  else console.log("Hanyang");
}