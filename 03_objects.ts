// Accepting an object as a parameter
// ----------------------------------
const printName = (person: {first: string, last: string}): void => {
    console.log(`${person.first} ${person.last}`)
}
printName({first: "11", last:'Hopper'})

// Variable with object type assigning values
// ------------------------------------------ 
let coordinate: {x: number, y: number } = {x:34, y: 2}

// Function with object as return type
// ------------------------------------------------------
const randomCoordinate = (): {x: number, y:number} => {
    return {x: Math.random(), y: Math.random()}
}

// Type Alias
// ----------
type MyNum = number
let age: MyNum = 32

type Point = {
    x: number
    y: number
}

let coordinateAlias: Point = {x: 34, y:2}

const randomCoordinateAlias = (): Point => {
    return {x: Math.random(), y: Math.random()}
}

const doublePoint = (point: Point): Point => {
    return {x: point.x * 2, y: point.y * 2}
}


// Nested objects with alias
type Song = {
    title: string
    artist: string
    numStreams: number
    credits: {producer: string, writer: string}
}

const yesterday: Song = {
    title: 'Yesterday',
    artist: 'The Beatles',
    numStreams: 9999999999,
    credits: {
        producer: 'Sir George Martin',
        writer: 'Sir Paul McCartney'
    }
}

const calculatePayout = (song: Song): number => {
    return song.numStreams * 0.0033
}
console.log(calculatePayout(yesterday))

// readonly modifier
// ----------------
type User = {
    readonly id: number
    username: string
}
const user1: User = {
    id: 123,
    username: 'Roy'
}
// user1.id = 321 // Cannot assign to 'id' because it is a read-only property.ts(2540)

// Intersection Types
// ------------------
type Circle = { radius: number }
type Colorful = { color: string }
type ColorFulCircle = Circle & Colorful

const happyFace: ColorFulCircle = {
    radius: 4,
    color: 'Yellow'
}

// Adding (extending) more properties
type BasketBall = Circle & Colorful & {
    bounces: number
}

const spalding: BasketBall = {
    radius: 5,
    color: 'Orange',
    bounces: 100
}