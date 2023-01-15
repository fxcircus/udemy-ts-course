export const add = (x: number, y: number): number => {
    return x + y
}

export default class User {
    constructor (public username: string, public email: string) {}
    logout() {
        console.log(`${this.username} is logged out!`)
    }
}