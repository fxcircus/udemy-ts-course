interface Coordinate {
    readonly locationName: string;
    x: number;
    y: number;
    z?: number;
    // Interface method! sayHi is a method that accepts 0 arguments, and returns a string (using arrow function syntax):
    sayHi: () => string 
    // Interface method using function declaration syntax:
    sayHi2(): string
    startTrip(location: string): string
}

const pt: Coordinate = {
    locationName: "My old school",
    x: 1,
    y: 2,
    sayHi() {
        return "Hello!"
    },
    sayHi2() {
        return "How are you?"
    },
    startTrip(loc: string) {
        return `Beginning trip to ${loc}`
    }
}

console.log(pt.startTrip("New school"))

// Re-Opening interfaces
// ---------------------
interface Dog {
    name: string
    age: number
}
interface Dog {
    breed: string
    bark(): string
}

// Extending interfaces:
// ---------------------
interface ServiceDog extends Dog {
    job: "sniffing" | "bomb" | "guide" | "support"
}

const cooper: ServiceDog = {
    name: "Cooper",
    age: 6,
    breed: "mut",
    job: "support",
    bark() {
        return "WOOOOFF"
    }
}

// Multiple inheritance
// --------------------

interface Door {
    doorColor: string
}
interface Bed {
    bedSize: "single" | "queen" | "king"
}
interface Room extends Door, Bed {
    isFurnished: boolean
}

const bedroom: Room = {
    doorColor: "white",
    bedSize: "queen",
    isFurnished: true
}