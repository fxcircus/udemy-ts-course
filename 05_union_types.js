// EX1: age variable that can be used as number OR string:
var age = 32;
age = "string value";
age = "24";
var coordinaes = { x: 1, y: 34 };
coordinaes = { lat: 123, long: 345 };
// EX3: function parameters:
var printAge = function (age) {
    console.log("You are ".concat(age, " years old"));
};
printAge("32");
printAge("thirty two");
var caculateTax = function (price, tax) {
    if (typeof price === "string") {
        // removing the $ sign and converting to a number
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
};
console.log(caculateTax("$100", 0.8));
