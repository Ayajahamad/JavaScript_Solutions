// Find Maximum in an Array
let arr = [3, 6, 8, 9, 1, 3]
console.log(Math.max(...arr));


arr.sort((a,b)=>b-a)
console.log(arr[0]);

// Factorial of a Number
let num = 5
let fact = 1
for (let i = 1; i <= num; i++) {
    fact*=i
}
console.log("fact :", fact);

// Check for Prime Number
let n = 12
let c = 0

for (let i = 1; i <= n; i++) {
    if (n%i == 0) {
        c+=1
    }
}
if (c==2) {
    console.log("prime");
} else {
    console.log("not prime");
}
// another method

function prime(nn) {
    for (let i = 2; i < nn; i++) {
        if (nn % i === 0) return false
    }
    return true
}

console.log(prime(59));

// // fetch 
// let promise = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(promise); // Promise {<pending>}

// promise.then((data) => {
//     return data.json()
// }).then((data) => {
//     console.log(data);
// })

// Generate Fibonacci Sequence
let fib = [0, 1]
let f = 10

for (let i = 2; i < f; i++) {
    fib.push(fib[i-1] + fib[i-2])
}
console.log(fib);

