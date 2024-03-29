// const inputEl = document.querySelector("#username")
// inputEl.value = "SOME TEXT!"
// const inputEl2 = document.querySelector<HTMLInputElement>("#username")!
// inputEl2.value = "SOME TEXT!"
// -------------------------------
// Writing functions with generics
// -------------------------------
// identity function
// accept some arg and returns the same arg based on type
const numberIdentity = (item) => {
    return item;
};
const stringIdentity = (item) => {
    return item;
};
const booleanIdentity = (item) => {
    return item;
};
// "any" is NOT the same - there's no relationship between input and output type
const anyIdentity = (item) => {
    return item;
};
// USING GENERICS:
const identity = (item) => {
    return item;
};
identity(7); // identity(item: number): number
identity("Hi"); // const identity: <string>(item: string) => string
// Shorter syntax:
const identity2 = (item) => {
    return item;
};
// EX2: function that returns random el from array, adapted to the type
const getRandomElement = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
};
getRandomElement([1, 2, 3]);
getRandomElement(["a", "b", "c"]);
// -------------------------------
// generics with multiple types with 
// -------------------------------
function merge1(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj1 = merge1({ name: "Roy" }, { age: 32 });
// Type constraint - Limiting the allowed type to be object:
function merge2(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
// error: Argument of type 'number' is not assignable to parameter of type 'object'
// const comboObj2 = merge2 ({ name: "Roy"} , 9) 
// Default values:
function makeEmptyaArray() {
    return [];
}
const nums = makeEmptyaArray(); // nums: number[]
const bools = makeEmptyaArray(); // bools: boolean[]
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
videos.add();
export {};
