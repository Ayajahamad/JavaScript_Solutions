/*
Object Literals and Properties
Object literals are a way of defining objects directly using {} (curly braces) and specifying key-value pairs.
*/
const obj = { name: 'Alice', age: 22 }
console.log(obj);

/*
Methods in Objects
Methods are functions associated with an object. These methods are defined as part of the object using the syntax:
*/
const person = {
    name: 'Alice',
    age: 22,
    // Method
    isGood: function () {
        console.log('good');
    }
}

console.log(person);

/*
Object Destructuring
Object destructuring allows you to unpack values from objects into distinct variables in a more convenient syntax.
*/
const man = { name: 'Jhon', age: 23, isGood:true,isBad:false }
const { name, age, ...remaining } = man
console.log(name);
console.log(age);
console.log(remaining);

/*
The this Keyword
In JavaScript, this refers to the object that is executing the current function. It is commonly used in methods to refer to the object itself.
*/

const thisObj = {
    name: 'Alice',
    age: 23,
    details: function () {
        console.log(`Name :${this.name} Age: ${age}`);
        console.log(this);
    }
}
thisObj.details()

/*
Object Methods :
JavaScript provides several built-in methods for working with objects:
*/

const globalObj = {
    name: 'Alice',
    age: 23,
    number: 9089768765,
    add: 'xyz'
}

// Object.keys(): Returns an array of a given object's property names (keys).
console.log(Object.keys(globalObj));

// Object.values(): Returns an array of a given object's property values.
console.log(Object.values(globalObj));

// Object.entries(): Returns an array of the object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(globalObj));

// Object.assign(): Copies the values of all properties from one or more source objects to a target object.
const newObj = Object.assign(globalObj)
console.log(newObj);

// Object.freeze(): Freezes an object, meaning it cannot be modified (new properties can't be added, existing ones can't be deleted, and values can't be changed).
// Before freezing 
globalObj.isGood = true
console.log(globalObj.isGood);

Object.freeze(globalObj)

// After Freezing
globalObj.isGood = true
console.log(globalObj.isGood);

// Object.seal(): Seals an object, meaning new properties cannot be added, but existing properties can still be modified.