// -------
// !TUPLES!
// --------

// EX1: "an array with 2 values, 1st val MUST be number, 2nd MUST be string:
let myTuple: [number, string]
myTuple = [1, 'a']

// EX2:  Tuple implementation of RGB, unlick union type, the tuple requires 3 and only 3 numbers.
const rgbTuple: [number, number, number] = [255, 0, 30]

// EX3: Response code type that uses tuple syntax
type HTTPResponse = [number, string]
const httpRes: HTTPResponse = [200, 'OK']

// LIMITATION: we can we can push more values after init:
httpRes.push(123) 
console.log(httpRes) // [ 200, 'OK', 123 ]


// -------
// !ENUMS!
// -------

// EX1:
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED // (enum member) OrderStatus.DELIVERED = 2

const isDelivered = (status: OrderStatus) => {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.DELIVERED) // true

// EX2:
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}