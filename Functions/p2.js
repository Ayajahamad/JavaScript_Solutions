// 1. Named Functions
// A named function has an explicit name that makes it reusable and easier to identify in debugging.

function myFunc(a, b) {
    return a+b
}
console.log(myFunc(2, 3))

// 2. Anonymous Functions
// Anonymous functions have no name and are often used as arguments in higher-order functions or as immediately invoked function expressions (IIFE).
const sum = function (a, b) {
    console.log(this)
    return a+b
}

console.log(sum(2, 3))


// 3. Arrow Functions
// Arrow functions provide a shorter syntax for writing functions. They are anonymous by default and bind the this context lexically.

let arrow = () => {
    console.log(this)
}
arrow();

// 4. Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that runs immediately after it is defined.

(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!


// 5. Constructor Functions
// Constructor functions are used to create objects using the new keyword.
function Person(name, age) {
    this.name = name
    this.age = age
}

P1 = new Person('abc', 19)
console.log(P1)


// 6. Generator Functions
// Generator functions allow you to pause and resume execution using yield.
function* numbers() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

let num = numbers();
console.log(num.next().value)
console.log(num.next().value)
/*
The * symbol defines a generator function.
yield pauses the function's execution, and next() resumes it.
*/

// 7. Async Functions
// Async functions allow you to write asynchronous code using async and await.

async function functionName() {
    const result = await promise;
    return result;
}


// 8. Higher-Order Functions
// Higher-order functions accept other functions as arguments or return a function.
function higherOrder(fn, value) {
    return fn(value);
}

const double = (n) => n * 2;
console.log(higherOrder(double, 5)); // Output: 10

// 9. Callback Functions
// A callback function is passed as an argument to another function and executed later.
function greet(name, callback) {
    console.log(`Hello : ${name}`)
    callback();
}

function democall(){
    console.log("Good Morning..!")
}

greet('abc', democall)

// 10. Rest Parameters in Functions
// Rest parameters allow indefinite arguments to be passed into a function.
function restparameters(...numb) {
    console.log(numb)
}
restparameters(1,2,3,4,5)