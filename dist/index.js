"use strict";
// Basic Types
let id = 5;
let company = 'Me Inc.';
let isPub = true;
let x = 'Hello';
// Arrays
let ids = [1, 2, 3, 4, 5];
// Tuple
let person = [1, 'me', true];
// Tuple Array
let employee = [
    [
        1, 'me'
    ],
    [2, 'you']
];
// Unions - either or
let pid = 22;
pid = 22;
pid = '22';
// ENUM - constants list - default index 0
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// ENUM - constants list - change index 0 and rest change to be next in numeric
// sequence
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// ENUM - constants list - can equate to string instead of index number
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
// Direction ENUM
console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3
// Direction2 ENUM
console.log(Direction2.Up); // 1
console.log(Direction2.Down); // 2
console.log(Direction2.Left); // 3
console.log(Direction2.Right); // 4
// Direction3 ENUM
console.log(Direction3.Down); // Up
console.log(Direction3.Up); // Down
console.log(Direction3.Left); // Left
console.log(Direction3.Right); // Right
const user = {
    id: 1,
    name: 'Jane'
};
// Type Assertion
// Defines a type for one variable different from the the type of the variable being assigned
let cid = 1;
let customerId = cid; // one way
let customerId2 = cid; // another way
// Causes type error since type boolean is not assignable to type number
// customerId = true; 
