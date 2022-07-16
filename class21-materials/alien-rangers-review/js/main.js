//Arrays

//q1 Create and array of tv shows. Loop through and print each show to the console
let shows = ['tmkoc', 'bbgph', 'fir'];
shows.forEach((show) => {
  console.log(show);
});

//q2 Create and array of numbers
let numbers = [1, 2, 5, 3, 8, 4, 6, 10, 7];

//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEven = (arr) => arr.filter((n) => n % 2 === 0);

console.log(onlyEven(numbers));

//q3 Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

let arr = [1, 2, 4, 7];

function sumofNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  let result = sorted[1] + sorted[sorted.length - 2];
  console.log(result);
}

sumofNumbers(arr);
