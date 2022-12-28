// Function declaration
// --------------------
function greet(name: string) {
    console.log(`hi ${name}`)
}
greet('Roy')

// Function expression (arrow function syntax)
// -------------------------------------------
const sayHi = (name: string, age: number) => {
    console.log(`Hello ${name}, you are ${age} year old`)
}
sayHi('Moses', 120)

// Default params
// --------------
const hi = (name: string = "Roy") => {
    console.log(`Hi ${name}`)
}

// Return type annotation
// ----------------------
const sumNums = (x: number, y: number): number => {
	return x + y
}