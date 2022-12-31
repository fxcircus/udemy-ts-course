// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff2
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff2 = [];
stuff2 = [1, 2, 3];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (names) {
    if (typeof (names) === 'string') {
        console.log("Hello, ".concat(names));
    }
    else {
        for (var n in names) {
            console.log("Hello, '".concat(n));
        }
    }
};
