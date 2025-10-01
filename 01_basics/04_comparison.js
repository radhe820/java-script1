// Comparison operators return boolean values (true or false)

// Greater than
console.log(2 > 1);  // true because 2 is greater than 1

// Greater than or equal to
console.log(2 >= 1); // true because 2 is greater than 1

// Less than
console.log(2 < 1);  // false because 2 is not less than 1

// Equality (loose equality, compares values after type coercion)
console.log(2 == 1); // false because 2 is not equal to 1

// Inequality (loose inequality, compares values after type coercion)
console.log(2 != 1); // true because 2 is not equal to 1


// Comparing string and number - string gets converted to number before comparison
console.log("2" > 1);  // true, "2" converted to number 2, and 2 > 1

console.log("02" > 1); // true, "02" converted to number 2, and 2 > 1


// Comparisons involving null

console.log(null > 0);  // false
// Explanation: null is converted to 0 in numeric comparisons, so 0 > 0 is false

console.log(null == 0); // false
// Explanation: loose equality does NOT convert null to 0, they are only equal to undefined

console.log(null >= 0); // true
// Explanation: null converted to 0, so 0 >= 0 is true


// Comparisons involving undefined

console.log(undefined == 0); // false
// Explanation: undefined is only loosely equal to null, not to any other value

console.log(undefined > 0);  // false
// Explanation: undefined converts to NaN in numeric comparisons, and NaN compared to any number is false

console.log(undefined < 0);  // false
// Same as above


// Strict equality operator (===) checks both type and value without type coercion

console.log("2" === 2); 
// false because one is a string and the other is a number, no type conversion here
