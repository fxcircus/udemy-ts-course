// 1) "Typeof" Narrowing:
// ----------------------
const triple = (value: number | string) => {
    if(typeof value === "string") {
        return value.repeat(3)              // value: string
    }
    return value  * 3                       // value: number
}

// 2) "Truthiness" Guard:
// ----------------------
const el = document.getElementById("idk")   // el: HTMLElement | null
if (el) {
    el                                      // el: HTMLElement
} else {
    el                                      // el: null
}

const printSomething = (word?: string) => {
    if(word) {                            
        for (let char of word) {
            console.log(char)               // word: string
        }
    } else {
        console.log("You did not pass a word!")  // word: string | undefined
        // (Word can still be falsy like an empty string for example)
         
    }
}

// 3) Equality Narrowing:
// ----------------------
const someDemo = (x: string | number, y: string | boolean) => {
    if (x === y) {
        x.toUpperCase()                     //  x: string
        // (the only way x==y so we can assume it's string)
    }
}

// 4) Narrowing With The "in" Operator:
// ------------------------------------
interface MyMovie {
    title: string
    duration: number
}
interface TVShow {
    title: string
    numEpisodes: number
    episodeDuration: number
}
const getRunTime = (media: MyMovie | TVShow) => {
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration    // media: TVShow
    }
    return media.duration                                   // media: MyMovie
}

// 5) Instanceof Narrowing:
// ------------------------
// EX1:
const printDate = (date: string | Date) => {
    if(date instanceof Date) {
        console.log(date.toUTCString())                     // date: string | Date
    } else {
        console.log(new Date(date).toUTCString())           // date: string
    }
}
// EX2:
class UserClass {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}
const printSomeName = (entity: UserClass | Company) => {
    if(entity instanceof UserClass) {
        entity                                              // entity: UserClass
    } else {
        entity                                              // entity: Company
    }
}

// 6) Type Predicates:
// -------------------
interface Cat {
    name: string
    numLives: number
}
interface Dog {
    name: string
    breed: string
}
// We create a REUSABLE function->
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined           // true if numLives property exists
}
function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal
        return "Meow"                                       // animal: Cat
    } else {
        return "Woof"                                       // animal: Dog
    }
}

// 6) Discriminated Unions:
// ------------------------
