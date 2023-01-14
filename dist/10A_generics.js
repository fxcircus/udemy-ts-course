"use strict";
// const inputEl = document.querySelector("#username")
// inputEl.value = "SOME TEXT!"
// const inputEl2 = document.querySelector<HTMLInputElement>("#username")!
// inputEl2.value = "SOME TEXT!"
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
    const res = arr[randIdx];
    console.log(res);
    return res;
};
getRandomElement([1, 2, 3]);
getRandomElement(["a", "b", "c"]);
