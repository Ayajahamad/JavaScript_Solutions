// Higher-Order Functions
// Higher-order functions either accept other functions as arguments or return a function.

/*
map: Transforms each element in the array.
filter: Returns elements that satisfy a condition.
reduce: Reduces the array to a single value.
*/

let arr = [1, 2, 3, 4, 5, 6]

// map
/*
The map() method in JavaScript is used to create a new array by applying a transformation (callback function) 
to every element of an existing array. It does not modify the original array but instead returns a new array 
with the transformed values.

- Use map to transform each element in an array.

let newArray = array.map(callback(currentValue, index, array));

callback: A function that will be executed for each element in the array.
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The original array on which map was called.
Returns: A new array with the results of applying the callback function to every element in the array.

*/
let squares = arr.map((num) => {
    return num*2
})
console.log(squares);

// filter
/*
- The filter method creates a new array with all elements that satisfy the provided condition. The callback function in filter must return a truthy or falsy value for each element in the array:
- If the value is truthy, the element is included in the resulting array.
- If the value is falsy, the element is excluded.

let newArray = arr.filter(callback(currentValue, index, array));

*/
let even = arr.filter((num) => num % 2 == 0 )
console.log(even);

// reduce
/*
The reduce() method applies a reducer function to each element of the array (from left to right) to reduce 
it to a single value. It is often used for summing values, multiplying elements, or other cumulative operations.

let result = arr.reduce(callback(accumulator, currentValue, index, array), initialValue);

*/
let sum = arr.reduce((total, cur) => {
    return total + cur
}, 0)

console.log(sum);


/*
- forEach() Method
- The forEach() method executes a provided function once for each element in the array. 
Unlike map(), filter(), and reduce(), forEach() does not return a new array and is used for side effects, 
like logging values or modifying an external variable.

arr.forEach(callback(currentValue, index, array));

forEach() Method : undefined (No return) - not have return..
*/

arr.forEach((num) => {
    console.log(num*2);
})