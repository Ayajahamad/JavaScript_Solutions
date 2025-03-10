// Async/Await

async function asyncFunc() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("First Resolve");
            resolve()
        }, 1000);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second Resolve");
            resolve()
        }, 100);
    })
    console.log("Completed");
}

asyncFunc()

// Without ASYNC/AWAIT

function cmnFunction() {
     new Promise((resolve) => {
        setTimeout(() => {
            console.log("First Resolve");
            resolve()
        }, 1000);
    })

     new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second Resolve");
            resolve()
        }, 100);
    })
    console.log("Completed");
}

cmnFunction()