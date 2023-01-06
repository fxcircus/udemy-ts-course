"use strict";
// EX1: age variable that can be used as number OR string:
let age = 32;
age = "string value";
age = "24";
let coordinaes = { x: 1, y: 34 };
coordinaes = { lat: 123, long: 345 };
// EX3: function parameters:
const printAge = (age) => {
    console.log(`You are ${age} years old`);
};
printAge("32");
printAge("thirty two");
const caculateTax = (price, tax) => {
    if (typeof price === "string") {
        // removing the $ sign and converting to a number
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
};
console.log(caculateTax("$100", 0.8)); // 80
// array that can hold numbers AND string values (AT THE SAME TIME), using union types
const stuffNumsOrStrs = [];
// array that can ONLY hold numbers OR strings, (NOT AT THE SAME TIME)
let stuffOnlyOne = [];
let today = "Tuesday";
let mood = "Happy";
