let str = "Hello JavaScript"

// ------------------------------- 2. Modifying Strings---------------------------------------
// replace(searchValue, newValue): Replaces the first match of searchValue with newValue.
let rStr = str.replace('ello', 'ai')
console.log(rStr);

// replaceAll(searchValue, newValue): Replaces all matches of searchValue with newValue.
let raStr = str.replaceAll('l', 'y')
console.log(raStr);

// slice(start, end): Extracts a part of a string and returns it as a new string.
let str1 = str.slice(-5,-2)
console.log(str1);

// substring(start, end): Similar to slice but does not accept negative indices.
let str2 = str.substring(1, 6)
console.log(str2);

// substr(start, length): Returns a substring of a specified length (deprecated).
let str3 = str.substr(0, 5)
console.log(str3);

// toLowerCase(): Converts the string to lowercase.
let lower = str.toLowerCase()
console.log(lower);

// toUpperCase(): Converts the string to uppercase.
let upper = str.toUpperCase()
console.log(upper);

// trim(): Removes whitespace from both ends of a string.
let t1 = str.trim()
console.log(t1);

// trimStart(): Removes whitespace from the beginning of a string.
// trimEnd(): Removes whitespace from the end of a string.

// padStart(targetLength, padString): Pads the string at the start to a specified length.
let pads = str.padStart(20, 0)
console.log(pads);

// padEnd(targetLength, padString): Pads the string at the end to a specified length.
let pade = str.padEnd(20, 0)
console.log(pade);