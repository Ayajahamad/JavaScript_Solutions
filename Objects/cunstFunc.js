
function myFunc(name, age) {
    this.name = name
    this.age = age
}

myFunc.prototype.greet1 = function () {
    console.log('Greetings');
}

let person = new myFunc('Alice',19)
person.name = 'Abc'
person.age = 20

person.greet = function(params) {
    console.log(this.name,this.age);
}

console.log(person);
person.greet()
person.greet1()
