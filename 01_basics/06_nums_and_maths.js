const score = 400;
// Primitive number value
console.log(score);  // Output: 400

// Creating a Number object (not a primitive number)
// Usually, use primitive numbers, but here we explicitly create a Number object
const balance = new Number(100);
console.log(balance);  // Output: [Number: 100]

// Convert number to string and get its length (number of digits)
console.log(balance.toString().length);  // Output: 3 (for "100")

// Format number to fixed decimal places (2 decimals)
console.log(balance.toFixed(2));  // Output: "100.00"


const otherNumber = 123.687984;

// toPrecision formats the number to a specified total number of digits (including before and after decimal)
console.log(otherNumber.toPrecision(5));  // Output: "123.69" (rounded to 5 significant digits)


const hundreds = 10000000;

// toLocaleString formats the number with commas based on locale ('en-IN' is Indian English format)
console.log(hundreds.toLocaleString('en-In'));  // Output: "1,00,00,000" (Indian numbering system)



/*++++++++++++++++++ Math Object and its methods ++++++++++++++++++++*/

// Math object provides mathematical constants and functions
console.log(Math);

// Absolute value of a number
console.log(Math.abs(-4));  // Output: 4

// Round to nearest integer
console.log(Math.round(4.6));  // Output: 5

// Round up to next integer
console.log(Math.ceil(4.2));   // Output: 5

// Round down to previous integer
console.log(Math.floor(4.9));  // Output: 4

// Find minimum value among given numbers
console.log(Math.min(4,5,6,8,2,3));  // Output: 2

// Find maximum value among given numbers
console.log(Math.max(5,6,8,5,2,3));  // Output: 8


// Generate random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());  

// Generate random floating-point number between 1 and 11 (exclusive)
console.log((Math.random() * 10) + 1);

// Generate random integer between 1 and 10 (inclusive)
console.log(Math.floor(Math.random() * 10 + 1));


// Generating random integer within a custom range [min, max]
const min = 10;
const max = 20;

// Formula explanation:
// Math.random() generates float in [0,1)
// Multiplying by (max - min + 1) scales it to [0, max-min+1)
// Math.floor truncates to integer in [0, max-min]
// Adding min shifts range to [min, max]
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
