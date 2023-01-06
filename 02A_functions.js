"use strict";
// Function declaration
// --------------------
function greet(name) {
    console.log(`hi ${name}`);
}
greet('Roy');
// Function expression (arrow function syntax)
// -------------------------------------------
const sayHi = (name, age) => {
    console.log(`Hello ${name}, you are ${age} year old`);
};
sayHi('Moses', 120);
// Default params
// --------------
const hi = (name = "Roy") => {
    console.log(`Hi ${name}`);
};
// Return type annotation
// ----------------------
const sumNums = (x, y) => {
    return x + y;
};
// Void return type
// ----------------
const printMessage = (msg) => {
    console.log(msg);
};
// Never
// -----
function makeError(msg) {
    throw new Error(msg);
    // return msg // Type 'string' is not assignable to type 'never'.ts(2322)
}
