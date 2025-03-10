// Variables (var, let, const)
// Variables are containers for storing data values.

// var: The old way to declare variables. Its scope is function or global, and it is hoisted but not block-scoped.
var name = 'Jhon'

if (true) {
    var age = 19
}
console.log("Name From Global :",name, "and Age From local : ",age)

// let: Introduced in ES6. Block-scoped, meaning it's limited to the block, statement, or expression in which it is declared.
let city = "New York";
if (true) {
    let country = "USA"; // Block-scoped
}
console.log(city); // "New York"
// console.log(country); // Error: country is not defined


// const: Block-scoped like let, but the value cannot be reassigned.
const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable
