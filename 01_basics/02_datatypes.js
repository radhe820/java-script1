"use strict";  
// Enables strict mode which helps catch common coding mistakes 
// and makes JavaScript behave more like modern versions

// alert(3 + 3)  
// This is commented out because 'alert' works in browsers, not in Node.js environment

// JavaScript data types examples

let name = "hitesh";   // string type variable
let age = 18;          // number type variable
let isLoggedIn = false; // boolean type variable (true/false)

/* Primitive data types in JavaScript:

1. number    - represents numeric values (integers, floats)
               Note: numbers are stored as 64-bit floating point (up to 2^53 safe integer)
2. bigint    - used for very large integers beyond the safe limit of number
3. string    - sequence of characters enclosed in quotes (" " or ' ')
4. boolean   - true or false values
5. null      - represents 'no value' or 'empty value'
6. undefined - variable declared but not assigned any value
7. symbol    - unique and immutable primitive value, mostly used as object keys

*/

// Using typeof operator to check the data type of different values

console.log(typeof "hitesh");  // string
console.log(typeof false);     // boolean
console.log(typeof 18);        // number

console.log(typeof undefined); // undefined (no value assigned)
console.log(typeof null);      // object (this is a known quirk/bug in JavaScript)
