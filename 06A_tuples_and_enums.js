"use strict";
// -------
// !TUPLES!
// --------
// EX1: "an array with 2 values, 1st val MUST be number, 2nd MUST be string:
let myTuple;
myTuple = [1, 'a'];
// EX2:  Tuple implementation of RGB, unlick union type, the tuple requires 3 and only 3 numbers.
const rgbTuple = [255, 0, 30];
const httpRes = [200, 'OK'];
// LIMITATION: we can we can push more values after init:
httpRes.push(123);
console.log(httpRes); // [ 200, 'OK', 123 ]
// -------
// !ENUMS!
// -------
// EX1:
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED; // (enum member) OrderStatus.DELIVERED = 2
const isDelivered = (status) => {
    return status === OrderStatus.DELIVERED;
};
isDelivered(OrderStatus.DELIVERED); // true
// EX2:
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
