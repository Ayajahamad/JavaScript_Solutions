/*
Understanding async/await in JavaScript
async/await is a modern way to handle asynchronous code in JavaScript. It provides a more synchronous and 
readable syntax for working with Promises, making asynchronous code easier to write and debug.
*/

async function loadData(params) {
    let data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data is Loaded")
        }, 1000);
    })
    console.log(data);
    console.log("data");
}
loadData()

/*
Flow of async/await
The function marked with async is called and returns a Promise.
Inside the async function:
Execution pauses at each await until the Promise resolves or rejects.
Once resolved, the function resumes execution from where it paused.
*/