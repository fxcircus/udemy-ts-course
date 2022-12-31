// EX1: array of strings:
const strArr: string[] = []
strArr.push("steven")

// EX2: array of numbers:
const numArr: number[] = [45, 30]
numArr.push(1)

// EX3: array of custom type we define:
type customType = {
    key1: number
    key2: string
}

const typeArr: customType[] = []
typeArr.push({key1: 1, key2:"one"})


// EX4: Alternate syntax (with array of booleans)
let boolArr: Array<boolean> = []

// EX5: Multidimentional arrays:
const multiArr: string[][] = [[]]

const tikTakTo: string[][] = [
    ['x', 'y', 'z'],
    ['x', 'y', 'z']
]

