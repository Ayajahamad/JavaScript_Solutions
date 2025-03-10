<<<<<<< HEAD
arr = [1, 2, 3, 4, 5]

/*
find() Method
The find() method is used to search for the first element in an array that satisfies a provided condition. 
It returns the first matching element or undefined if no elements match the condition.

callback: The function that is executed on each element. It should return a truthy or falsy value for each element.
Return value: The first matching element or undefined if no element satisfies the condition.

let result = arr.find(callback(currentValue, index, array));
*/

let firstEven = arr.find((num) => {
    return num % 2== 0
})
console.log(firstEven);

let gt = arr.find((num) => {
    return num > 10
})
console.log(gt);


/*
some() Method
The some() method checks if at least one element in an array satisfies a provided condition. It returns true 
if any element matches, and false otherwise. The method stops as soon as it finds the first element that 
satisfies the condition.

callback: The function that is executed on each element. It should return a truthy or falsy value.
Return value: true if at least one element satisfies the condition, false otherwise.

let result = arr.some(callback(currentValue, index, array));

*/

let varSome = arr.some((num) => {
    return num > 12
})
console.log(varSome);


/*
every() Method
The every() method checks if all elements in an array satisfy a provided condition. It returns true if all 
elements meet the condition, and false if at least one element does not meet the condition.

let result = arr.every(callback(currentValue, index, array));

callback: The function that is executed on each element. It should return a truthy or falsy value.
Return value: true if all elements satisfy the condition, false if at least one element does not satisfy it.
*/

let varEvery = arr.every((num) => {
    return num  > 0
})
=======
arr = [1, 2, 3, 4, 5]

/*
find() Method
The find() method is used to search for the first element in an array that satisfies a provided condition. 
It returns the first matching element or undefined if no elements match the condition.

callback: The function that is executed on each element. It should return a truthy or falsy value for each element.
Return value: The first matching element or undefined if no element satisfies the condition.

let result = arr.find(callback(currentValue, index, array));
*/

let firstEven = arr.find((num) => {
    return num % 2== 0
})
console.log(firstEven);

let gt = arr.find((num) => {
    return num > 10
})
console.log(gt);


/*
some() Method
The some() method checks if at least one element in an array satisfies a provided condition. It returns true 
if any element matches, and false otherwise. The method stops as soon as it finds the first element that 
satisfies the condition.

callback: The function that is executed on each element. It should return a truthy or falsy value.
Return value: true if at least one element satisfies the condition, false otherwise.

let result = arr.some(callback(currentValue, index, array));

*/

let varSome = arr.some((num) => {
    return num > 12
})
console.log(varSome);


/*
every() Method
The every() method checks if all elements in an array satisfy a provided condition. It returns true if all 
elements meet the condition, and false if at least one element does not meet the condition.

let result = arr.every(callback(currentValue, index, array));

callback: The function that is executed on each element. It should return a truthy or falsy value.
Return value: true if all elements satisfy the condition, false if at least one element does not satisfy it.
*/

let varEvery = arr.every((num) => {
    return num  > 0
})
>>>>>>> 741678f (Saving local changes before pulling)
console.log(varEvery);