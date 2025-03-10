// Removing Duplicates 
let str = "Mangoes Bananam"
let uniq = ""
let dup = ""

for (let i = 0; i < str.length; i++) {
    if (!uniq.includes(str[i])) {
        uniq+=str[i]
    } else {
        dup+=str[i]
    }
}
console.log("Original :",str);
console.log("Unique :", uniq);
console.log("Duplicate :", dup);

// Using set
let s = new Set(str)
arr = [...s].join('')
console.log(arr);

// using reduce
s = str.split('').reduce((a, c) => {
    return !a.includes(c) ? a+c : a
}, '')
console.log(s);

