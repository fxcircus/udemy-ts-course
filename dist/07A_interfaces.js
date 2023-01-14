"use strict";
const pt = {
    locationName: "My old school",
    x: 1,
    y: 2,
    sayHi() {
        return "Hello!";
    },
    sayHi2() {
        return "How are you?";
    },
    startTrip(loc) {
        return `Beginning trip to ${loc}`;
    }
};
console.log(pt.startTrip("New school"));
const cooper = {
    name: "Cooper",
    age: 6,
    breed: "mut",
    job: "support",
    bark() {
        return "WOOOOFF";
    }
};
const bedroom = {
    doorColor: "white",
    bedSize: "queen",
    isFurnished: true
};
