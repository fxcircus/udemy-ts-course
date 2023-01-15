export const add = (x, y) => {
    return x + y;
};
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} is logged out!`);
    }
}
