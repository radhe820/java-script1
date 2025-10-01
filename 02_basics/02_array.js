const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Pushing an entire array (dc_heros) into marvel_heros as a single element (nested array)
marvel_heros.push(dc_heros);

console.log(marvel_heros);
// Output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

console.log(marvel_heros[3][1]);
// Accessing the 2nd element of the nested dc_heros array inside marvel_heros (outputs "flash")

// concat merges two arrays into a new array, without changing originals
const all_heros = marvel_heros.concat(dc_heros);
console.log(marvel_heros); 
// marvel_heros remains unchanged (with nested dc_heros array at the end)

// Spread operator (...) spreads elements of arrays into a new combined array
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); 
// Merges both arrays’ elements into one flat array

// Nested arrays example
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(Infinity) flattens all levels of nested arrays into a single array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Check if a variable is an array
console.log(Array.isArray("radhe")); // false (string is not array)

// Converts iterable or array-like object into an array
console.log(Array.from("radhe"));  // ['r', 'a', 'd', 'h', 'e']

// Array.from with an object without length returns empty array
console.log(Array.from({name:"radhe"}));  // []

// Create a new array from given arguments (like array literal)
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  
// [100, 200, 300]
