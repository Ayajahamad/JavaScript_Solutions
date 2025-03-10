// function sum(num1) {
//     return function(num2) {
//         setTimeout(() => {
//             console.log(num1+num2);
//         }, 1000);
//     }
// }

// sum(2)(4)


function sum(num1) {
    return function (num2) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num1 + num2)
            }, 1000);
        })
    }
}

sum(2)(9).then((data)=>console.log(data))