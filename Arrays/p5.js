<<<<<<< HEAD
/*
Array Destructuring in JavaScript:
Array destructuring is a concise way to extract values from an array and assign them to variables in a single 
statement. It simplifies the process of accessing elements in arrays and makes your code cleaner and easier 
to read.

let [var1, var2, ..., varN] = array;
*/

// 1. Basic Destructuring
let num = [1, 2, 3, 4]
let [a, b, c, d] = num
console.log(a, b, c, d);

// kipping Elements
// You can skip elements by leaving a blank space in the destructuring pattern:
let [first, , third] = num
console.log(first, third);

// Using Default Values
// If the array does not have enough elements, you can assign default values to avoid undefined.
let [e, f, h, i, g = 10] = num
console.log(e, f, h, i, g);

// Rest Operator with Destructuring
// The rest operator (...) collects the remaining elements into an array.
num = [1, 2, 3, 4, 5, 6, 7]
let [x, y, ...z] = num
console.log(x, y);
console.log(z);

// Swapping Variables
// Array destructuring allows an easy way to swap variables without needing a temporary variable
let x1 = 10, y1 = 20;
[x1, y1] = [y1, x1];
console.log(x1);
console.log(y1);



=======
/*
Array Destructuring in JavaScript:
Array destructuring is a concise way to extract values from an array and assign them to variables in a single 
statement. It simplifies the process of accessing elements in arrays and makes your code cleaner and easier 
to read.

let [var1, var2, ..., varN] = array;
*/

// 1. Basic Destructuring
let num = [1, 2, 3, 4]
let [a, b, c, d] = num
console.log(a, b, c, d);

// kipping Elements
// You can skip elements by leaving a blank space in the destructuring pattern:
let [first, , third] = num
console.log(first, third);

// Using Default Values
// If the array does not have enough elements, you can assign default values to avoid undefined.
let [e, f, h, i, g = 10] = num
console.log(e, f, h, i, g);

// Rest Operator with Destructuring
// The rest operator (...) collects the remaining elements into an array.
num = [1, 2, 3, 4, 5, 6, 7]
let [x, y, ...z] = num
console.log(x, y);
console.log(z);

// Swapping Variables
// Array destructuring allows an easy way to swap variables without needing a temporary variable
let x1 = 10, y1 = 20;
[x1, y1] = [y1, x1];
console.log(x1);
console.log(y1);



>>>>>>> 741678f (Saving local changes before pulling)
