/*
Data Types In Js:
Data types describe the different types or kinds of data that we're gonna be working with and storing in variables.

-------------------------------------------------------
1. Primitive Data Types
Primitive data types are the most basic data types in JavaScript. They represent simple values that are immutable (cannot be changed after they are created) and are passed by value.

Characteristics of Primitive Data Types:
Immutable: You cannot change the value of a primitive once it is set. For example, strings and numbers are immutable.
Passed by Value: When you assign a primitive to a new variable, it creates a copy of the original value.

--------------------------------------------------------
2. Non-Primitive (Reference) Data Types
Non-primitive data types are more complex types. They include objects, arrays, and functions, which can hold multiple values or properties. They are mutable (can be modified), and when they are assigned to a new variable or passed to a function, they are passed by reference (both variables point to the same object in memory).

Characteristics of Non-Primitive Data Types:
Mutable: You can modify the contents of a non-primitive data type after it is created.
Passed by Reference: When you assign a non-primitive to a new variable, both variables point to the same object in memory. Changes made to one will affect the other.
*/

/*
Primitive :
- When a primitive value is assigned to a variable, the actual value is copied into the new variable.
- Each variable has its own independent copy of the data.
- Changes to one variable do not affect the other.
Created by Value: The data is stored independently, and changes to one variable do not affect others.

Non Primitive :
- When a non-primitive value (e.g., an object or array) is assigned to a variable, the reference to the object in memory is assigned, not the object itself.
- Multiple variables can point to the same reference (memory location).
- Changes to the object through one variable affect all variables referencing that object.
Created by Reference: Multiple variables share a reference to the same object, so changes to one variable affect all others referencing it.
*/

// ---------------------------------- PRIMITIVE TYPES: ----------------------------------

// 1. String: Represents a sequence of characters.
let name = 'Alice'
console.log(typeof(name))

// 2. Number: Represents both integer and floating-point numbers.
let int_number = 123
console.log("TypeOf :",int_number ,"=",typeof(int_number))
let float_number = 123.900
console.log("TypeOf :", float_number, "=", typeof (float_number))

// 3. BigInt: Represents integers that are too large to be represented by the Number type.
let largeNumber = 1234567890123456789012345678901234567890n;

// 4. Boolean: Represents a logical value of true or false.
let isActive = true;
console.log("TypeOf :", isActive, "=", typeof (bool))

// 5. Undefined: Represents a variable that has been declared but not assigned a value.
let x;
console.log("TypeOf :", x, "=", typeof (x))

// 6. Null: Represents an intentional absence of value (not the same as undefined).
let y = null;
console.log("TypeOf :", y, "=", typeof (y))

// 7. Symbol: Represents a unique and immutable value often used for object property keys.
const uniqueId = Symbol('id');
console.log("TypeOf :", uniqueId, "=", typeof (uniqueId))

// Example of Passing by Value:
// Here, a and b are independent because they hold copies of the value of a (10).
let a = 10;
let b = a;  // Copying the value of a
b = 20;
console.log(a);  // 10
console.log(b);  // 20

// ---------------------------------- NON PRIMITIVE TYPES: ----------------------------------
// 1. Object: A collection of key-value pairs.
let person = { name: 'Jhon', age: 19 };
console.log("TypeOf :", person, "=", typeof (person))

// 2. Array: An ordered collection of values (special type of object).
const numbers = [1, 2, 3, 4, 5, 6]
console.log("TypeOf :", numbers, "=", typeof (numbers))

// 3. Function: A callable block of code that can be executed.
function greet() {
    console.log("Hello!");
  }
greet()  

// console.log("TypeOf :", greet(), "=", typeof (greet()))

// Date: Represents date and time.
let currentDate = new Date();
console.log(currentDate)

// Example of Passing by Reference:
let person1 = { name: "Alice", age: 25 };
let anotherPerson = person1;  // Reference to the same object

anotherPerson.age = 30;  // Modifying the object via the reference
console.log(person1.age);  // 30 (The change is reflected in the original object)

/*
Primitive types hold their actual value, while non-primitive types hold a reference to their value in memory.
Modifying a primitive type doesn’t affect the original value, whereas modifying a non-primitive type affects all references to that object.
*/

// --------------------- Type Conversion ----------------------
/*
Type Conversion:
JavaScript also allows type conversion or type coercion, where a value of one type can be converted to 
another type implicitly or explicitly:
*/

// Implicit conversion (automatically by JavaScript):
let result = 5 + "5"; // Output: "55" (number converted to string)
console.log("TypeOf :", result, "=", typeof (result))

// Explicit conversion (using methods like String(), Number(), etc.):
let num = "123";
let convertedNum = Number(num); // 123 as a number
console.log("TypeOf :", num, "=", typeof (num))
console.log("TypeOf :", convertedNum, "=", typeof (convertedNum))

