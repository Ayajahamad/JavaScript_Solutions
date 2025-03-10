// Promises

/*
A Promise represents a value that may be available now, in the future, or never. It helps manage asynchronous 
tasks and avoids callback hell.

States of a Promise:
pending: Initial state.
fulfilled: The operation was successful.
rejected: The operation failed.

Chaining with .then(), .catch(), and .finally():

.then(): Executes when the promise is resolved.
.catch(): Handles errors when the promise is rejected.
.finally(): Executes code regardless of the promise's outcome.
*/

/*
Promise Flow
A promise is created using the Promise constructor.

The constructor takes a callback function with two arguments:

resolve: A function to call when the asynchronous operation completes successfully.
reject: A function to call when the asynchronous operation fails.

The promise's result is handled using .then(), .catch(), and .finally():

.then(onFulfilled): Executes when the promise is fulfilled.
.catch(onRejected): Executes when the promise is rejected.
.finally(onFinally): Executes regardless of the promise's outcome.
*/


// const fetchData = new Promise((resolve,reject) => {
//     let success = false
//     setTimeout(() => {
//         console.log("Pending...");
//         if (success) {
//             resolve("Success is True..!")
//         } else {
//             reject("Success is False..!")
//         }
//     }, 1000);
// })

// fetchData.then((data) => {
//     console.log("Success :",data);
// }).then(() => {
//     console.log("Another operation..!");
// }).catch((err) => {
//     console.log("Error :", err);
// }).finally(() => {
//     console.log("Completed");
// })


// // Example 2: Returned in First then
// const fetchData1 = (url) =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (url) {
//           resolve(`Data from ${url}`);
//         } else {
//           reject("No URL provided");
//         }
//       }, 1000);
//     });
  
//   fetchData1("https://api.example.com")
//     .then((data) => {
//       console.log(data);
//       return fetchData1("https://api.example.com/next");
//     })
//     .then((nextData) => {
//       console.log(nextData);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     })
//     .finally(() => {
//       console.log("All operations completed.");
//     });
  

//  Resolving Asynchronous Issues

let firstTask = () => {
    const user = true
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(() => {
                resolve("User is There.")
            }, 1000);
        } else {
            reject("User not Found")
        }
    })
}

let secondTask = () => {
    const password = false
    return new Promise((resolve, reject) => {
        if (password) {
            setTimeout(() => {
                resolve("logged In success")
            }, 500);
        } else {
            reject("Wrong password")
        }
    })
}

firstTask().then((data) => {
    console.log("Logged :", data);
    return secondTask()
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Completed");
})