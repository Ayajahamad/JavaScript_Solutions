// Default Parameters
// Default parameters allow you to set default values for function parameters, making them optional.

function defaultParam(name = 'Null', age = 'Empty') {
    return `Your age is ${age}, and name is ${name}`
}

console.log(defaultParam(name = "Suraj", age = 19));


// Rest Parameters (...args)
// The ...args syntax allows you to accept a variable number of arguments into a function and treats them as an array.

function restParm(...args){
    console.log(args);
}
restParm(1, 2, 3, 4, 5)


// Spread Syntax
/*
The spread syntax (...) expands an array or object into individual elements.
const expanded = [...iterable];
The spread syntax is used for array concatenation, object merging, and passing array elements as individual arguments to functions.
*/
const arr = [1, 2, 3];
console.log(...arr); // Output: 1 2 3 (each element of the array is treated as an individual item)

arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
combinedArr = [...arr1, ...arr2]
console.log(combinedArr);

// string
str = "Hello"
arrStr = [...str]
console.log(...str);
console.log(arrStr);


// Closures
// A closure is a function that retains access to its outer scope even after the outer function has executed.

function Outer(params) {
    let count = 0
    return function Inner(params) {
        count++
        console.log(count);
    }
}

let func = Outer()
func()
func()
func()

// Callback Functions
// A callback is a function passed as an argument to another function, to be executed later.

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Output after 1 second: Data fetched!




