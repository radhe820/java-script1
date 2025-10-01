// Primitive data types in JavaScript
// There are 7 primitive types: string, number, boolean, null, undefined, symbol, bigint

const score = 100;           // Number primitive (integer)
const scoreValue = 100.3;    // Number primitive (floating point)
const isLoggedIn = false;    // Boolean primitive
let userEmail;               // undefined by default (no value assigned)

const id = Symbol('123');    // Symbol primitive - unique identifier
const anotherId = Symbol('123');

console.log(id === anotherId);  
// false because every Symbol is unique even if the description is the same


const bigNumber = 6987659876548916879n;  // BigInt primitive for very large integers


// Reference (non-primitive) data types:
// Objects, arrays, functions - stored in heap memory

const heros = ["shaktimaan", "naagraj", "doga"];  // Array (reference type)

let myObj = {
    age: 22,
};  // Object literal

const myFunction = function(){
    console.log("Hello World");
};  // Function expression (also an object under the hood)


// typeof operator shows the data type
console.log(typeof bigNumber);    // 'bigint'
console.log(typeof scoreValue);   // 'number'
console.log(typeof myFunction);   // 'function'
console.log(typeof heros);        // 'object' (arrays are objects)
console.log(typeof anotherId);    // 'symbol'


/*''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''*/

// Stack and Heap memory in JavaScript

// Primitive values are stored in stack (fixed size, simple data)
// Reference types are stored in heap (complex data structures)

// Example of primitive assignment (copied by value)

let myName = "radhe";
let anothername = myName;  // anothername gets a copy of the value "radhe"

anothername = "shyam";     // modifying anothername does NOT affect myName

console.log(myName);       // "radhe"
console.log(anothername);  // "shyam"


// Example of reference assignment (copied by reference)

let userOne = {
    email: "user@gmail.com"
};

let userTwo = userOne;     // userTwo references the same object in heap

userTwo.email = "radhe@google.com";  // modifying userTwo modifies the same object

console.log(userOne.email);   // "radhe@google.com" (affected)
console.log(userTwo.email);   // "radhe@google.com"
