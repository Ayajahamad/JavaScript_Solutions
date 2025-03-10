// Outer scope
const obj = {
    name: "Lexical Scope Example",
    regularFunction: function () {
        console.log("this  :",this)
        console.log(this.name); // Refers to `obj`
        
        // Nested arrow function
        const arrowFunc = () => {
            console.log("this  :",this)
            console.log(this.name); // Lexically inherits `this` from regularFunction
        };

        arrowFunc(); // Invoking the arrow function
    },
    arrowFunction: () => {
        console.log("this  :",this)
        console.log("name :", this.name); // Refers to `this` in the global or enclosing scope
    }
};

obj.regularFunction(); 
// Output:
// Lexical Scope Example (from `this` in regularFunction)
// Lexical Scope Example (from `this` inherited by arrowFunc)

obj.arrowFunction(); 
// Output:
// undefined (because `this` in the global scope doesn't have `name` property)
