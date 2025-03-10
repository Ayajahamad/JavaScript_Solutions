// Only subset of a string

// let str = 'ABC'
// let sub = []

// for (let i = 0; i < str.length; i++) {
//     let w = ''

//     for (let j = i; j < str.length; j++){
//         w += str[j]
//         // console.log(w);
//         sub.push(w)
//     }
// }
// console.log(sub);

let str = "ABC"

for (let i = 0; i<str.length;i++){
    let w = ""
    for (let j = i; j < str.length; j++) {
        w += str[j]
        console.log(w);
    }
    
}
