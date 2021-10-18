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

// Interfaces - very similar to 'type' declaration
// 'age' is optional
// 'id' is readonly
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'Jane',
}

// Interface and Type differences (mostly the same) however you cannot use an interface with primitives or Unions as shown below:
type Point = number | string;
const p1: Point = 1;

// Function Interface
// this example takes in two numbers and returns a number
interface MathFunc {
  (x:number, y:number): number
}
// the interface can be applied to two different functions as long as they have the same type 'signature'
const mathAdd: MathFunc = (x, y) => x + y;
const mathSub: MathFunc = (x, y) => x - y;

// Implementing Interface in Class
// Note that all interface variable and method definitions are 'public'. You cannot use data modifiers such as 'private' or 'protected' - they can just be used in the class directly
// When a class implements an interface it must include ALL elements however the class itself is not limited to only using the variables and methods defined in the interface
interface PersonInterface {
  // id:number;
  name: string;
  // age?:number;
  register(): string;
}

// Classes - used as blueprints to create object instances
class Person implements PersonInterface {
  // data modifier - private only accessible from within class
  private id: number; 
    // data modifier - protected only accessible from within class or any class that derives from this class
    // We've also made 'age' optional by using the '?' mark after variable name and before colon defining type
  protected age?: number;
  // public by default so don't need 'public' keyword
  name: string; 

  constructor(id:number, name: string) {
    this.id = id;
    this.name = name;
  }

  register(): string {
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
