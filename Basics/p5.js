// Looping Statements
// Loops allow you to execute a block of code (repeatedly) multiple times.

// ------------------- for Loop -----------------------
// The for loop runs for a specified number of iterations.

console.log('for loop  :')
for (let i = 0; i < 5; i++) {
    console.log(i); // Prints 0 to 4
}

// ------------------- while Loop ---------------------
// The while loop runs as long as the specified condition evaluates to true.

let i = 0;
console.log('while loop :')
while (i < 5) {
    console.log(i); // Prints 0 to 4
    i++;
}

// ---------------------------- do...while Loop -----------------
// The do...while loop runs at least once before checking the condition.

let i1 = 0
console.log('do while loop :')
do {
    console.log(i1)
    i1++
} while (i1 < 5);

