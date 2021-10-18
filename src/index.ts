// Basic Types
let id : number = 5;
let company : string = 'Me Inc.';
let isPub : boolean = true;
let x : any = 'Hello';

// Arrays
let ids : number[] = [1, 2, 3, 4, 5];

// Tuple
let person : [number, string, boolean] = [1, 'me', true];

// Tuple Array
let employee : [number, string][] = [
  [
    1, 'me'
  ],
  [2, 'you']
];

// Unions - either or
let pid : string | number = 22;

pid = 22;
pid = '22';

// ENUM - constants list - default index 0
enum Direction {
  Up,
  Down,
  Left,
  Right
}

// ENUM - constants list - change index 0 and rest change to be next in numeric
// sequence
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right
}

// ENUM - constants list - can equate to string instead of index number
enum Direction3 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

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

// Objects and Type Assertions
// Defining more complex types such as Objects inline can seen a bit awkward 
// To solve this we can separate out the Type by using a Type Assertion
type User = {
  id: number,
  name: string
}
const user : User = {
  id: 1,
  name: 'Jane'
}

// Type Assertion
// Defines a type for one variable different from the the type of the variable being assigned
let cid: any = 1;
let customerId = <number>cid;   // one way
let customerId2 = cid as number; // another way

// Causes type error since type boolean is not assignable to type number
// customerId = true; 

// Functions
function add(x:number, y:number): number {
  // return 'my name is...' // produces error because return type mus be number
  return x + y;    // returns a number which is valid
}

// Functions - when nothing returned - use 'void'
function logMessage(message: number | string): void {
  console.log(message);
}
