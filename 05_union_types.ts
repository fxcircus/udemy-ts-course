// EX1: age variable that can be used as number OR string:
let age: number | string = 32
age = "string value"
age = "24"

// EX2: Coordinae type that can be used as 2 different types
type Point = {
    x: number
    y: number
}

type Loc = {
    lat: number
    long: number
}

let coordinaes: Point | Loc = {x: 1, y: 34}
coordinaes = {lat: 123, long:345}

// EX3: function parameters:
const printAge = (age: number | string): void => {
    console.log(`You are ${age} years old`)
}
printAge("32")
printAge("thirty two")

const caculateTax = (price: number | string, tax: number) => {
    if (typeof price === "string") {
        // removing the $ sign and converting to a number
        price = parseFloat(price.replace("$", "")) 
    }
    return price * tax
}
console.log(caculateTax("$100", 0.8)) // 80

// array that can hold numbers AND string values (AT THE SAME TIME), using union types
const stuffNumsOrStrs: (number | string)[] = []

// array that can ONLY hold numbers OR strings, (NOT AT THE SAME TIME)
let stuffOnlyOne: number[] | string[] = []


// Literal types:
// -------------
type DayOfWeek = 
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"

let today: DayOfWeek = "Tuesday"

let mood: "Happy" | "Sad" = "Happy"
