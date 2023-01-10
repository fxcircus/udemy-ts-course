// class Player {
//     readonly first: string
//     public readonly last: string
//     private score: number = 0

//     constructor(first: string, last: string) {
//         this.first = first
//         this.last = last
//         this.secretMethod() // This works! (we can access private from the constructor)
//     }

//     private secretMethod(): void {
//         console.log("Secret method!")
//     }
// }

class Player {
    constructor(
        public readonly first: string,
        public last: string,
        private _score: number,
        protected _region: string = "US"
        ) {
            this.secretMethod() // This works! (we can access private from the constructor)
        }

    private secretMethod(): void {
        console.log("Secret method!")
    }

    // fullName will be set as readonly by default
    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error ("Score cannot be negative")
        }
        this._score = newScore
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true

    switchToEuRegion() {
        this._region = "EU"
    }
}

const player1 = new Player("Cooper", "dog", 0)
console.log(player1)
// player1.secretMethod() // Property 'secretMethod' is private and only accessible within class 'Player'.
player1.score
// player1.score = -1 // Uncaught Error: Score cannot be negativee

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) {} 
}

const bike1 = new Bike ("red")

// --------------------------------------------------------
// Abstract classes -> MUST be implemented by a child class
// --------------------------------------------------------
abstract class Employee {
    constructor(public first: string, public last: string) {}

    abstract getPay(): number // abstract method -> REQUIRED in all child classes

    greet() { console.log ("Hi") } // NOT required
}

class FullTimeEmployee extends Employee {
    getPay(): number {
        return 13
    }
}