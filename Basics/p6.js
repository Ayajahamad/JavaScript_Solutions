// Functions in JavaScript
// Functions in JavaScript are blocks of reusable code that are designed to perform a specific task. Functions help organize and modularize code, making it more efficient and easier to maintain.

// ----------------- Function Declaration -------------------
// A function declaration defines a function with a specific name. The function can then be called or invoked later.

function functionName(parameters) {
    // code to be executed
}

// Example: function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
// function calling
greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!


// -------------------- Function Expression ----------------------
// A function expression creates a function and assigns it to a variable. The function can be anonymous (without a name) or named.
const functionName1 = function(parameters) {
    // code to be executed
};

const expFunc = function () {
    console.log("This is expression Function..!")
}
expFunc()

// Example with arguments
const sum = function (a, b) {
    return a+b
}
console.log("calling Expression function :", sum(2, 3))

// ------------------ Arrow Function Expression ---------------------------
// Arrow functions provide a more concise syntax for writing functions. They are particularly useful for short functions.
const functionName3 = (parameters) => {
    // code to be executed
};

const arrFunc = () => {
    console.log("Arrow Function..!")
}
arrFunc()

// Example with arguments
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Output: 20

// ------------------ Returning Values from Functions -------------------------------
// Functions can return values, which can be used in other parts of the program.
function functionName4(parameters) {
    return value;
}

// Example
function square(num) {
    return num * num
}
console.log("function Return :", square(3))

// ------------------ Function with Default Parameters ----------------------
// JavaScript allows you to set default values for parameters if no value or undefined is passed during the function call.
function functionName5(param1 = defaultValue, param2 = defaultValue) {
    // code to be executed
}

function defaultValue(par1 = 'xyz', par2 = 'abc') {
    console.log('par1 :',par1, ' par2 :',par2)
}
defaultValue(par1 = 'ghj')

// Example
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet();        // Output: Hello, Guest!


// -------------------------- Function Scope and Closures -----------------------------
/*
- Functions in JavaScript have their own scope, which determines the visibility of variables.
- Local Scope: Variables declared inside a function are not accessible outside the function.
- Global Scope: Variables declared outside functions are accessible from anywhere in the program.
*/
function outer() {
    let outerVar = "I am outside!";
    
    function inner() {
        let innerVar = "I am inside!";
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }
    
    inner();
    console.log(outerVar); // Accessible
    // console.log(innerVar); // Error: innerVar is not defined
}

outer();
