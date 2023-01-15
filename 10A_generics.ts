// const inputEl = document.querySelector("#username")
// inputEl.value = "SOME TEXT!"

import { getThemeAdminByName } from "@frontegg/js"


// const inputEl2 = document.querySelector<HTMLInputElement>("#username")!
// inputEl2.value = "SOME TEXT!"

// -------------------------------
// Writing functions with generics
// -------------------------------
// identity function
// accept some arg and returns the same arg based on type
const numberIdentity = (item: number): number => {
    return item
}
const stringIdentity = (item: string): string => {
    return item
}
const booleanIdentity = (item: boolean): boolean => {
    return item
}
// "any" is NOT the same - there's no relationship between input and output type
const anyIdentity = (item: any): any => {
    return item
}

// USING GENERICS:
const identity = <Type>(item: Type): Type => {
    return item
}
identity<number>(7) // identity(item: number): number
identity<string>("Hi") // const identity: <string>(item: string) => string

// Shorter syntax:
const identity2 = <T>(item: T): T => {
    return item
}

// EX2: function that returns random el from array, adapted to the type
const getRandomElement = <T>(arr: T[]): T => {
    const randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx]
}

getRandomElement<number>([1, 2, 3])
getRandomElement<string>(["a", "b", "c"])


// -------------------------------
// generics with multiple types with 
// -------------------------------
function merge1<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}
const comboObj1 = merge1 ({ name: "Roy"} , { age: 32 })

// Type constraint - Limiting the allowed type to be object:
function merge2<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}
// error: Argument of type 'number' is not assignable to parameter of type 'object'
// const comboObj2 = merge2 ({ name: "Roy"} , 9) 


// Default values:
function makeEmptyaArray<T = number>(): T[] {
    return []
}
const nums = makeEmptyaArray() // nums: number[]
const bools = makeEmptyaArray<boolean>() // bools: boolean[]


// Generics & Classes
// ------------------

interface MySong {
    title: string
    artist: string
}
interface Video {
    title: string
    creator: string
    resolution: string
}

class Playlist<T> {
    public queue: T[] = []
    add(el: T) {
        this.queue.push(el)
    }
}
const songs = new Playlist<MySong>()
const videos = new Playlist<Video>()
videos.add()