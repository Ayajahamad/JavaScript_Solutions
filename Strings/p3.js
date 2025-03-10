let str = 'Hello JavaScript';

// ------------------------------- 3. Splitting and Joining----------------------------
// split(separator, limit): Splits a string into an array of substrings.
let split = str.split('',5)
console.log(split);

// concat(string1, ..., stringN): Combines strings into a new string.
str1 = 'Another'
let con = str.concat('..!',str1)
console.log(con);

// repeat(count) - Repeats the string count times.
console.log(str1.repeat(3));

// toString() : Converts the string to a string representation (default behavior).
let n = 123
let s = n.toString()
console.log(s, typeof (s));

// ------------------------------ 4. Accessing Properties---------------------------
// length: Returns the length of the string.
let l = str.length
console.log(l);

// -------------------------------- 5. Template Literals-------------------------------
// While not methods, template literals (`) are an advanced feature for embedding expressions into strings.
let t = `the string : ${str} is have length of : ${l}`
console.log(t);

