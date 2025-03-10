
// let str = "mam"
// let rev = ""

// for (let i = str.length-1; i >= 0; i--) {
//     rev+=str[i]
// }

// if (str==rev) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// -----------------------------
// let sentence = "Reverse each character of sentence"
// let lst = sentence.split(' ')
// let rev2 = []


// for (let i = 0; i < lst.length; i++) {
//     let rev1 = " "
//     for (let j = lst[i].length-1; j >= 0; j--) {
//         rev1 += lst[i][j]
//     }
//     rev2.push(rev1)
// }
// console.log(rev2);
// console.log(rev2.join(" "));

// ----------------------------------------

let sentence = "Reverse each character of sentence"
let lst = []
let word = ""

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
        word += sentence[i]
        // word = " "
    } else if (sentence[i] === " " && word !== "") {
        lst.push(word)
        word = ""
    }
}
lst.push(word)
console.log(lst);

rev = ""
for (let i = 0; i < lst.length; i++) {
    for (let j = lst[i].length-1; j >= 0; j--) {
        if (lst[i] == " " ) {
            rev+=" "
        } else {
            rev += lst[i][j]
        }
    }
    rev+=" "
}
console.log(rev);

// -----------------------------------------------