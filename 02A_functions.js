// Function declaration
// --------------------
function greet(name) {
    console.log("hi ".concat(name));
}
greet('Roy');
// Function expression (arrow function syntax)
// -------------------------------------------
var sayHi = function (name, age) {
    console.log("Hello ".concat(name, ", you are ").concat(age, " year old"));
};
sayHi('Moses', 120);
// Default params
// --------------
var hi = function (name) {
    if (name === void 0) { name = "Roy"; }
    console.log("Hi ".concat(name));
};
// Return type annotation
// ----------------------
var sumNums = function (x, y) {
    return x + y;
};
