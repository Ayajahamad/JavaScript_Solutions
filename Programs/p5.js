// How To Find All Possible Subsets of a String in JS
// Below are a few examples of inputs and Outputs.
// Examples
//  Input: ABC
//  Output: A AB ABC BC C
//  Input: RUN
//  Output: R RU RUN U UN N

// let str = 'ABC'


const str = "RUN";
const result = ['']; 
let sub = []

for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const newSubsets = [];

    for (let j = 0; j < result.length; j++) {
        newSubsets.push(result[j] + currentChar);
    }
    result.push(...newSubsets);
    // console.log(newSubsets);
}
let empty = result.indexOf('');
result.splice(empty, 1)
console.log(result);
for (const e of result) {
    console.log(e);
}

