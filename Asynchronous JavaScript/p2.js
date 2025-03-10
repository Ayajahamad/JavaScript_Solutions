// Asynchronous JavaScript
/*
JavaScript is single-threaded, meaning it can handle one task at a time. However, it uses asynchronous programming 
to manage time-consuming tasks like fetching data, reading files, or running timers without blocking the 
execution of other code.
*/

// Callback
/*
A callback is a function passed as an argument to another function, executed later when the asynchronous 
operation completes.
*/

function fetchData(callback) {
    console.log("hello");
    setTimeout(() => {
        callback()
        console.log('Fetching data');
    }, 1000);
}


function data() {
    setTimeout(() => {
        console.log("Data fetched..!");
    }, 1000);
}

fetchData(data)
console.log("hai");
