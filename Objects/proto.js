// In JavaScript, prototypes are the mechanism by which objects inherit properties and methods from other objects.

/*
Key Points:
Every JavaScript object has a hidden property called [[Prototype]] (accessible via __proto__), which points to another object (the prototype).
Prototypes allow objects to share methods and properties, promoting memory efficiency.
The prototype chain is the hierarchy of objects from which an object can inherit properties and method
*/

const parent = {
    name: 'Parent',
    number: 12,
    address: function () {
        console.log(`Name is ${this.name}`);
    }
}

parent.address()

const child = Object.create(parent)
child.name = 'Child'

child.address()
console.log(child.name);