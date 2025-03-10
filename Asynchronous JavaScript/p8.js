
function first(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First");
            resolve()
        }, 2000);
    })
}
// first()

function second(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second");
            resolve()
        }, 2000);
    })
}
// second()


async function exe(params) {
    await first()
    await second()
}
exe()

/*
Sequential Execution with await:
await first() will pause the execution of the exe() function until first() finishes (i.e., after 1 second).
After first() completes, await second() is executed, which will then pause the execution for another 500 milliseconds.

Parallel Execution:
If you want to run first() and second() in parallel, you can use Promise.all(). This will allow both functions to start at the same time and wait for both to finish.
*/

// async function exe() {
//     // Running both functions in parallel
//     await Promise.all([first(), second()]);
//   }
  
//   exe();