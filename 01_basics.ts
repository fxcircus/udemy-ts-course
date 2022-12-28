console.log('Hello')
console.log('Goobye')
console.log(Math.round(7.879234))

let movieTitle: string = 'Men in Black'
movieTitle = 'Avengers'
// movieTitle = 5 // Type 'number' is not assignable to type 'string'.
// Math.round(movieTitle) // Argument of type 'string' is not assignable to parameter of type 'number'.

let someNum: number =  1
someNum += 1
// someNum = "Two" // Type 'string' is not assignable to type 'number'.ts(2322)

let someBool: boolean = true
someBool = false
// someBool = 1 // Type 'number' is not assignable to type 'boolean'.ts(2322)
