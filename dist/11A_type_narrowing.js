"use strict";
// 1) "Typeof" Narrowing:
// ----------------------
const triple = (value) => {
    if (typeof value === "string") {
        return value.repeat(3); // value: string
    }
    return value * 3; // value: number
};
// 2) "Truthiness" Guard:
// ----------------------
const el = document.getElementById("idk"); // el: HTMLElement | null
if (el) {
    el; // el: HTMLElement
}
else {
    el; // el: null
}
const printSomething = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char); // word: string
        }
    }
    else {
        console.log("You did not pass a word!"); // word: string | undefined
        // (Word can still be falsy like an empty string for example)
    }
};
// 3) Equality Narrowing:
// ----------------------
const someDemo = (x, y) => {
    if (x === y) {
        x.toUpperCase(); //  x: string
        // (the only way x==y so we can assume it's string)
    }
};
const getRunTime = (media) => {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration; // media: TVShow
    }
    return media.duration; // media: MyMovie
};
// 5) Instanceof Narrowing:
// ------------------------
// EX1:
const printDate = (date) => {
    if (date instanceof Date) {
        console.log(date.toUTCString()); // date: string | Date
    }
    else {
        console.log(new Date(date).toUTCString()); // date: string
    }
};
// EX2:
class UserClass {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
const printSomeName = (entity) => {
    if (entity instanceof UserClass) {
        entity; // entity: UserClass
    }
    else {
        entity; // entity: Company
    }
};
// We create a REUSABLE function->
function isCat(animal) {
    return animal.numLives !== undefined; // true if numLives property exists
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow"; // animal: Cat
    }
    else {
        return "Woof"; // animal: Dog
    }
}
const getFarmAnimalSound = (animal) => {
    switch (animal.kind) {
        case ("pig"):
            return "Oink!"; // animal: Pig
        case ("cow"):
            return "Moo!"; // animal: Cow
        case ("rooster"):
            return "Coocoo!"; // animal: Rooster
        // Exhaustivness checks with Never:
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
};
