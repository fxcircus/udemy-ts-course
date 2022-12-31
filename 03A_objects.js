// Accepting an object as a parameter
// ----------------------------------
var printName = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
printName({ first: "11", last: 'Hopper' });
// Variable with object type assigning values
// ------------------------------------------ 
var coordinate = { x: 34, y: 2 };
// Function with object as return type
// ------------------------------------------------------
var randomCoordinate = function () {
    return { x: Math.random(), y: Math.random() };
};
var age = 32;
var coordinateAlias = { x: 34, y: 2 };
var randomCoordinateAlias = function () {
    return { x: Math.random(), y: Math.random() };
};
var doublePoint = function (point) {
    return { x: point.x * 2, y: point.y * 2 };
};
var yesterday = {
    title: 'Yesterday',
    artist: 'The Beatles',
    numStreams: 9999999999,
    credits: {
        producer: 'Sir George Martin',
        writer: 'Sir Paul McCartney'
    }
};
var calculatePayout = function (song) {
    return song.numStreams * 0.0033;
};
console.log(calculatePayout(yesterday));
var user1 = {
    id: 123,
    username: 'Roy'
};
var happyFace = {
    radius: 4,
    color: 'Yellow'
};
var spalding = {
    radius: 5,
    color: 'Orange',
    bounces: 100
};
