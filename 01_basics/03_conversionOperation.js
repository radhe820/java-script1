let score = "20sdf";

// Check the type of score variable (string)
console.log(typeof score);
console.log(typeof (score));  // parentheses don’t change the result here

// Convert 'score' string to a number using Number()
let valueInNumber = Number(score);

// Check the type after conversion (should be 'number')
console.log(typeof valueInNumber);

// Log the actual numeric value after conversion
// Since "20sdf" is not a pure number, conversion results in NaN (Not a Number)
console.log(valueInNumber);


// Examples of Number() conversions:
// "33"       => 33 (valid numeric string)
// "33abc"    => NaN (invalid numeric string)
// true       => 1
// false      => 0


let isLoggedIn = 0;

// Convert number to boolean using Boolean()
let booleanIsLoggedIn  = Boolean(isLoggedIn);

// 0 converts to false, so this will log: false
console.log(booleanIsLoggedIn);


// Examples of Boolean() conversions:
// 1         => true
// 0         => false
// "" (empty string) => false
// any non-empty string like "radhe" => true


let someNumber = 33;

// Convert number to string using String()
let stringNumber = String(someNumber);

// Logs "33" as a string
console.log(stringNumber);

// Check type after conversion (should be 'string')
console.log(typeof stringNumber);



/*''''''''''''''''''''''''' OPERATIONS '''''''''''''''''''''*/

// Unary minus operator changes the sign of the value
let value = 3;
let negValue = -value;  // negValue will be -3
console.log(negValue);

// Basic arithmetic operations
console.log(2 + 2);  // addition: 4
console.log(2 - 2);  // subtraction: 0
console.log(2 * 2);  // multiplication: 4
console.log(2 ** 3); // exponentiation (2 to the power 3): 8
console.log(2 / 3);  // division: 0.666...
console.log(2 % 3);  // modulus (remainder): 2


// String concatenation with the + operator
let str1 = "Hello";
let str2 = " Radhe";
let str3 = str1 + str2;  // combines strings to "Hello Radhe"
console.log(str3);


// Dangerous/Confusing concatenation examples (avoid these!)
// When mixing strings and numbers, + can behave unpredictably by converting numbers to strings
console.log("1" + 2);        // "12"  (number 2 converted to string)
console.log(1 + "2");        // "12"  (number 1 converted to string)
console.log("1" + 2 + 2);    // "122" (evaluated left to right: "1" + 2 = "12", then "12" + 2 = "122")
console.log(1 + 2 + "2");    // "32"  (1+2=3, then 3 + "2" = "32")
console.log((3 + 4) * 5 % 3);// 2     (math: (7 * 5) % 3 = 35 % 3 = 2)


// Unary plus and minus operators with booleans and strings
console.log(-false);  // 0  (false is converted to 0, then negated)
console.log(+true);   // 1  (true converted to 1)
console.log(+"");     // 0  (empty string converted to 0)


// Increment operator increases the value by 1
let gameCounter = 100;
gameCounter++;  // same as gameCounter = gameCounter + 1
console.log(gameCounter);  // 101
