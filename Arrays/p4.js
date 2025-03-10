// Other Important Array Methods

// concat(): Combines two or more arrays into one new array without changing the original arrays.

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7]

let arr3 = arr1.concat(arr2)
console.log(arr3);

// join(): Joins all the elements of an array into a string, separated by a specified delimiter.
let arr = [1, 2, 3, 4, 5]

let arrJoin = arr.join('')
console.log(arrJoin);

// indexOf(): Returns the index of the first occurrence of a specified element, or -1 if not found.
arr = [1, 2, 3, 4, 5]
let arrIndOf = arr.indexOf(2)
console.log(arrIndOf);

// reverse(): Reverses the order of the elements in an array
arrRev = arr.reverse()
console.log(arrRev);

// sort(): Sorts the elements of an array in place. For numbers, it can sometimes give unexpected results due to string sorting.
// arr.sort([compareFunction]);
// ByDefault = The numbers are converted to strings ("10", "5", "20", "15") and sorted based on their Unicode code points.

arr = [4, 5, 2, 3, 1]
arr.sort();

console.log(arr);

// compareFunction
arr.sort((a, b) => b - a)
console.log(arr);

// forEach(): Executes a function on each element of the array, without returning anything.
arr = [1, 2, 3, 4, 5]

arr.forEach((num) => {
    console.log(num);
})

