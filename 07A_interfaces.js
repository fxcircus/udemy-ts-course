var pt = {
    locationName: "My old school",
    x: 1,
    y: 2,
    sayHi: function () {
        return "Hello!";
    },
    sayHi2: function () {
        return "How are you?";
    },
    startTrip: function (loc) {
        return "Beginning trip to ".concat(loc);
    }
};
console.log(pt.startTrip("New school"));
