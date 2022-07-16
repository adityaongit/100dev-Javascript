// *Variables*
// q1 Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

var a = 'diwali';
a = a.toUpperCase();
console.log(a);

// q2 Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let b = 'aditya';
// alert(b.slice(-3));

// *Functions*
// q3 Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function sub100(n1, n2, n3, n4, n5) {
  return Math.abs(100 - (n1 + n2 + n3 + n4 + n5));
}
var res = sub100(5, 10, 15, 20, 25);
console.log(res);

// q4 Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowHigh(n1, n2, n3) {
  maxNum = Math.max(n1, n2, n3);
  minNum = Math.min(n1, n2, n3);

  console.log(maxNum);
  console.log(minNum);
}
lowHigh(10, 30, 70);

// *Conditionals*
//q5 Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headTail() {
  let res = Math.random();
  if (res < 0.5) {
    console.log('HEAD');
  } else {
    console.log('TAIL');
  }
}
headTail();

//*Loops*
//q6 Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function loop(n) {
  for (let i = 0; i < n; i++) {
    headTail();
  }
}

loop(5);
