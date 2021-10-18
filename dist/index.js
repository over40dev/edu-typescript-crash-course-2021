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
// Functions
function add(x, y) {
    // return 'my name is...' // produces error because return type mus be number
    return x + y; // returns a number which is valid
}
// Functions - when nothing returned - use 'void'
function logMessage(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Jane',
};
const p1 = 1;
// the interface can be applied to two different functions as long as they have the same type 'signature'
const mathAdd = (x, y) => x + y;
const mathSub = (x, y) => x - y;
// Classes - used as blueprints to create object instances
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const jane = new Person(1, 'Jane');
const joe = new Person(2, 'Joe');
console.log(jane);
console.log(joe);
// logs "Jane is now registered"
console.log(jane.register());
// gives error because of data accessibility set to private
// console.log(jane.id); 
// Extending Classes (sub-classes)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(3, 'Jane', 'PM');
const emp2 = new Employee(4, 'Joe', 'Dev');
// Jane is now registered
console.log(emp1.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'Jane', 'Joe']);
// pushing a string into the numArray will work because the type of array is defined as 'any[]' meaning any type of data
numArray.push('hello');
// to protect against this we can use 'Generics'
// use '<T>' as a Type placeholder
// This allows us to create re-usable components
function getArrayGeneric(items) {
    return new Array().concat(items);
}
// we pass the type to the Generics function using '<data-type>' between the function name and parens
let numArrayGenerics = getArrayGeneric([1, 2, 3, 4]);
let strArrayGenerics = getArrayGeneric(['Brad', 'Jane', 'Joe']);
// now trying to push a string into the array of numbers will not work but pushing a number will work. Same goes for the string array
// numArrayGenerics.push('hello');
numArrayGenerics.push(5);
// logs to the console...
// (5) [1, 2, 3, 4, 5] (3) ['Brad', 'Jane', 'Joe']
console.log(numArrayGenerics, strArrayGenerics);
