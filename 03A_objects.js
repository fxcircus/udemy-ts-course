"use strict";
// Accepting an object as a parameter
// ----------------------------------
const printName = (person) => {
    console.log(`${person.first} ${person.last}`);
};
printName({ first: "11", last: 'Hopper' });
// Variable with object type assigning values
// ------------------------------------------ 
let coordinate = { x: 34, y: 2 };
// Function with object as return type
// ------------------------------------------------------
const randomCoordinate = () => {
    return { x: Math.random(), y: Math.random() };
};
let age = 32;
let coordinateAlias = { x: 34, y: 2 };
const randomCoordinateAlias = () => {
    return { x: Math.random(), y: Math.random() };
};
const doublePoint = (point) => {
    return { x: point.x * 2, y: point.y * 2 };
};
const yesterday = {
    title: 'Yesterday',
    artist: 'The Beatles',
    numStreams: 9999999999,
    credits: {
        producer: 'Sir George Martin',
        writer: 'Sir Paul McCartney'
    }
};
const calculatePayout = (song) => {
    return song.numStreams * 0.0033;
};
console.log(calculatePayout(yesterday));
const user1 = {
    id: 123,
    username: 'Roy'
};
const happyFace = {
    radius: 4,
    color: 'Yellow'
};
const spalding = {
    radius: 5,
    color: 'Orange',
    bounces: 100
};
