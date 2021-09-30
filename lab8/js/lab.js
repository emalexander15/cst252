/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   09.27.2021
 *
 * License: Public Domain
 **/


// Create an array of numbers and assign it to a variable.
array = [3, 21, 45, 67, 82, 101];
console.log("My array:", array);

// Create a named function that will take a single parameter, do a calculation \
// on it (sqrt, sqr, addition, etc), and return the result.
function addNum(x) {
  var results = x + 15;
  return results;
}

// Test your function with a few different numbers.
console.log("What is 3 + 15? ", addNum(3));
console.log("What is 21 + 15? ", addNum(21));
console.log("What is 45 + 15? ", addNum(45));

// Use map on your array to apply your function to all the numbers in
// your array.
var result = array.map(addNum)
console.log("Adding 15 to array: ", result);

// Now use a new anonymous function with map to do some new operation on each
// of the numbers in your array.
var result = array.map(function(x){
  return x * .05;
})
console.log("Multiplying .05 to array: ", result)
