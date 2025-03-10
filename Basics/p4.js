// Conditional Statements
// Conditional statements allow you to execute code based on a specific condition.

// ---------------------- if Statement ---------------------
// The if statement executes a block of code if a specified condition is true.
age = 18

if (age >= 18) {
    console.log("You can Drive..!")
}

// ----------------------- else Statement-------------------------
// The else statement runs if the condition in the if statement is false.

age1 = 17

if (age1>=18) {
    console.log("You can Drive..!")
} else {
    console.log("You cannot Drive..!")
}

// ---------------------------- else if Statement-----------------------
// The else if statement is used to check multiple conditions.

age = 18

if (age < 18) {
    console.log("You are an Minor You cannit Drive..!")
} else if (age >= 18 && age <= 60) {
    console.log("You are an Major You can Drive..!")
} else {
    console.log("Not in Selection..!")
}


// ----------------------- switch Statement-------------------------
// The switch statement is used for multiple possible conditions based on the value of a variable.

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
