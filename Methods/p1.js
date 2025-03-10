
// call()
function myFunc(name, age) {
    let s = `${this.message} ${name} Your Age is : ${age}`
    console.log(s);
}

const msg = { message: "Hello" }
myFunc.call(msg, 'Alice', 19)

// apply()
function myFuncA(name, age) {
    let s = `${this.message} ${name} Your Age is : ${age}`
    console.log(s);
}

const msgA = { message: "Good Morning" }
myFuncA.apply(msgA,['Jhon',12])

// bind()
function myFuncB(name,age) {
    let s = `${this.message} ${name} Your Age is : ${age}`
    console.log(s);
}

const msgB = { message: "Good Evening" }

let varBind = myFuncB.bind(msgB, 'Harry', 23)
varBind()