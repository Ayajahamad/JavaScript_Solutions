<<<<<<< HEAD
/*
An array in JavaScript is a special type of object used for storing an ordered collection of values. 
Arrays can store elements of any type: numbers, strings, objects, or even other arrays.
*/

// Creating an Array

// Using array literal
let arr1 = [1, 2, 3, 4];

// Using the Array constructor
let arr2 = new Array(5, 6, 7, 8);


arr = [1, 2, 3, 4]

// Methods
/*
push() Method
Purpose: Adds one or more elements to the end of the array and returns the new length of the array.

arr.push(element1, element2, ..., elementN);

*/

let arrPush = arr.push(5, 6)
console.log(arrPush);
console.log(arr);

/*
pop() Method
Purpose: Removes the last element from an array and returns that element. This method modifies the original array.

let removedElement = arr.pop();

*/

let poppedElement = arr.pop();
console.log(arr); // Output: [1, 2, 3]
console.log(poppedElement); // Output: 4


/*
shift() Method
Purpose: Removes the first element from an array and returns that element. The array length is reduced by 1.

let removedElement = arr.shift();
*/

let arrRemove = arr.shift()
console.log(arrRemove);
console.log(arr);

/*
Purpose: Adds one or more elements to the beginning of the array and returns the new length of the array.

arr.unshift(element1, element2, ..., elementN);
*/

arrUn = arr.unshift(-2, -1, 1)
console.log(arr);

/*
splice() Method
Purpose: Changes the content of an array by removing, replacing, or adding elements. It can be used to add 
elements at a specific position, remove elements, or replace elements.

arr.splice(start, deleteCount, item1, item2, ..., itemN);

start: The index at which to start changing the array.
deleteCount: The number of elements to remove.
item1, item2, ..., itemN: The elements to add (optional).
*/

// Removing
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // Start at index 2, remove 2 elements
console.log(arr); // Output: [1, 2, 5]


// Adding
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // Start at index 2, remove 2 elements
console.log(arr); // Output: [1, 2, 5]


// Replace
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'x', 'y'); // Start at index 1, remove 2 elements, add 'x' and 'y'
console.log(arr); // Output: [1, 'x', 'y', 4, 5]


/*
slice() Method
Purpose: Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

let newArray = arr.slice(start, end);

start: The index at which to start extracting elements (inclusive).
end: The index at which to stop extracting elements (exclusive).
Note: slice() does not modify the original array.
*/

arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); // Extract from index 1 to index 4 (exclusive)
console.log(newArr); // Output: [2, 3, 4]
console.log(arr); // Original array is unchanged: [1, 2, 3, 4, 5]

// Example (No end parameter):
let arrNoend = arr.slice(2)
console.log(arrNoend);
=======
/*
An array in JavaScript is a special type of object used for storing an ordered collection of values. 
Arrays can store elements of any type: numbers, strings, objects, or even other arrays.
*/

// Creating an Array

// Using array literal
let arr1 = [1, 2, 3, 4];

// Using the Array constructor
let arr2 = new Array(5, 6, 7, 8);


arr = [1, 2, 3, 4]

// Methods
/*
push() Method
Purpose: Adds one or more elements to the end of the array and returns the new length of the array.

arr.push(element1, element2, ..., elementN);

*/

let arrPush = arr.push(5, 6)
console.log(arrPush);
console.log(arr);

/*
pop() Method
Purpose: Removes the last element from an array and returns that element. This method modifies the original array.

let removedElement = arr.pop();

*/

let poppedElement = arr.pop();
console.log(arr); // Output: [1, 2, 3]
console.log(poppedElement); // Output: 4


/*
shift() Method
Purpose: Removes the first element from an array and returns that element. The array length is reduced by 1.

let removedElement = arr.shift();
*/

let arrRemove = arr.shift()
console.log(arrRemove);
console.log(arr);

/*
Purpose: Adds one or more elements to the beginning of the array and returns the new length of the array.

arr.unshift(element1, element2, ..., elementN);
*/

arrUn = arr.unshift(-2, -1, 1)
console.log(arr);

/*
splice() Method
Purpose: Changes the content of an array by removing, replacing, or adding elements. It can be used to add 
elements at a specific position, remove elements, or replace elements.

arr.splice(start, deleteCount, item1, item2, ..., itemN);

start: The index at which to start changing the array.
deleteCount: The number of elements to remove.
item1, item2, ..., itemN: The elements to add (optional).
*/

// Removing
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // Start at index 2, remove 2 elements
console.log(arr); // Output: [1, 2, 5]


// Adding
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // Start at index 2, remove 2 elements
console.log(arr); // Output: [1, 2, 5]


// Replace
arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'x', 'y'); // Start at index 1, remove 2 elements, add 'x' and 'y'
console.log(arr); // Output: [1, 'x', 'y', 4, 5]


/*
slice() Method
Purpose: Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

let newArray = arr.slice(start, end);

start: The index at which to start extracting elements (inclusive).
end: The index at which to stop extracting elements (exclusive).
Note: slice() does not modify the original array.
*/

arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); // Extract from index 1 to index 4 (exclusive)
console.log(newArr); // Output: [2, 3, 4]
console.log(arr); // Original array is unchanged: [1, 2, 3, 4, 5]

// Example (No end parameter):
let arrNoend = arr.slice(2)
console.log(arrNoend);
>>>>>>> 741678f (Saving local changes before pulling)
