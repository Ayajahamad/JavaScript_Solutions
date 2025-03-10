str = "Hello JavaScript"
console.log(str);

// ------------------------------ 1. Searching and Extracting---------------------------------

// charAt(index): Returns the character at the specified index.
console.log(str.charAt(4));

// charCodeAt(index): Returns the Unicode of the character at the specified index.
console.log(str.charCodeAt(1))

// at(index): Returns the character at the specified index (supports negative indexing).
console.log(str.at(-1));

// includes(searchString, position): Checks if a string contains a specific sequence of characters.
console.log(str.includes('a',10));

// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a value.
console.log(str.indexOf('p',4));

// lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a value.
console.log(str.lastIndexOf('l'));

// startsWith(searchString, position): Checks if a string starts with a specific sequence.
console.log(str.startsWith('H'));

// endsWith(searchString, length): Checks if a string ends with a specific sequence.
console.log((str.endsWith('o', 5)));

// [index] (ES6) : Access the character at index (like an array).
console.log(str[0]);