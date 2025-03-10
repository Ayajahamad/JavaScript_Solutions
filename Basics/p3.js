// Operators:
// Operators perform operations on variables and values.

// ---------------------------Arithmetic Operators-------------------------
let a = 10, b = 3;

console.log(a + b); // Addition: 10 + 3 = 13
console.log(a - b); // Subtraction: 10 - 3 = 7
console.log(a * b); // Multiplication: 10 * 3 = 30
console.log(a / b); // Division: 10 / 3 = 3.333...
console.log(a % b); // Modulus: 10 % 3 = 1
console.log(a ** b); // Exponentiation: 10^3 = 1000

a++; // Increment: Increases `a` by 1
console.log(a); // 11

b--; // Decrement: Decreases `b` by 1
console.log(b); // 2

// --------------------------------Assignment Operators-----------------------------
// Assign values to variables.
let x = 5;

x += 3; // x = x + 3
console.log(x); // 8

x -= 2; // x = x - 2
console.log(x); // 6

x *= 2; // x = x * 2
console.log(x); // 12

x /= 4; // x = x / 4
console.log(x); // 3

x %= 2; // x = x % 2
console.log(x); // 1

// ------------------------------- Comparison Operators------------------------
// Compare values and return a boolean.
console.log(5 == "5"); // true: Loose equality, converts types
console.log(5 === "5"); // false: Strict equality, no type conversion
console.log(5 != "5"); // false: Loose inequality
console.log(5 !== "5"); // true: Strict inequality
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false

// ----------------------------------Logical Operators-----------------------------
// Combine or invert boolean values.
console.log(true && false); // AND: false
console.log(true || false); // OR: true
console.log(!true); // NOT: false

// -------------------------------Bitwise Operators-------------------------------
// Operate on binary representations.
let c = 5, d = 1; // Binary: 5 = 101, 1 = 001

console.log(c & d); // AND: 101 & 001 = 001 (1)
console.log(c | d); // OR: 101 | 001 = 101 (5)
console.log(c ^ d); // XOR: 101 ^ 001 = 100 (4)
console.log(~c); // NOT: ~101 = -110 (-6)
console.log(c << 1); // Left Shift: 101 << 1 = 1010 (10)
console.log(c >> 1); // Right Shift: 101 >> 1 = 010 (2)

// ------------------------------String Operators----------------------------
// Concatenate strings.
let str1 = "Hello", str2 = "World";
console.log(str1 + " " + str2); // "Hello World"

let str = "Hello";
str += " JavaScript";
console.log(str); // "Hello JavaScript"

// ----------------------Type Operators----------------------
// Check or manipulate the type.
let num1 = 42, strs = "Hello";

console.log(typeof num1); // "number"
console.log(typeof strs); // "string"

let arr1 = [];
console.log(arr1 instanceof Array); // true: `arr` is an instance of `Array`

// ------------------------Conditional (Ternary) Operator------------------------
// A shorthand for if...else.
// condition ? exprIfTrue : exprIfFalse

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// ------------- Nullish Coalescing Operator----------------------
// Handle null or undefined values.
let name = null;
de = name ?? "Default Name"
console.log(de); // "Default Name"

// ----------------------Unary Operators-----------------------
let xx = "5";
console.log(+xx); // Unary plus: Converts to number: 5
console.log(-xx); // Unary negation: Converts and negates: -5
console.log(typeof xx); // "string"

// --------------Comma Operator--------------
// Evaluate multiple expressions and return the last value.
let result = (1, 2, 3); // Evaluates 1, 2, 3, returns 3
console.log(result); // 3






