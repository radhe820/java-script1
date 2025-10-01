const name = "radhe";
const repocount = 50;

// Concatenation of string and number
// Number is automatically converted to string here
console.log(name + repocount + " value");  // Output: "radhe50 value"

// Template literals (backticks) allow embedding variables directly
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
// Output: "hello my name is radhe and my repo count is 50"


// Creating a String object (not a primitive string)
// Usually, we use string primitives, but here we create a String object explicitly
const gameName = new String('radhe');

// Accessing the first character of the string
console.log(gameName[0]);  // Output: "r"

// Inspecting the prototype of the String object
// Contains string methods and properties available on the object
console.log(gameName.__proto__);

// Getting length of the string
console.log(gameName.length);  // Output: 5

// Converting to uppercase and lowercase
console.log(gameName.toUpperCase());  // "RADHE"
console.log(gameName.toLowerCase());  // "radhe"

// Getting character at specific index (zero-based)
console.log(gameName.charAt(3));  // Output: "h" (4th character)

// Finding the index of a character or substring
console.log(gameName.indexOf('e')); // Output: 4 (position of 'e')

// Finding the last index of substring 'name'
// Returns -1 because 'name' is not in 'radhe'
console.log(gameName.lastIndexOf('name'));  // Output: -1


// Extracting a substring using substring(start, end)
// Extract characters from index 0 up to (but not including) 4
const newString = gameName.substring(0,4);
console.log(newString);  // Output: "radh"


// Extracting a substring using slice(start, end)
// Negative index counts from the end (-4 means 4th last character)
// Here slice(-4, 3) means start at index from end and end at index 3 (not usual usage)
const anotherString = gameName.slice(-4,3);
console.log(anotherString);  // Output: "" (empty string because end < start)


// String with spaces around it
const newStringOne = "   radhe  ";
console.log(newStringOne);        // Output: "   radhe  "
console.log(newStringOne.trim()); // Removes whitespace from both ends, Output: "radhe"


// URL string with encoded space (%20)
const url = "https://radhe.com/radhe%20shyam";

// Replace '%20' with '$'
console.log(url.replace('%20', '$'));  // Output: "https://radhe.com/radhe$shyam"

// Check if substring exists inside the string
console.log(url.includes('radhe'));   // true, substring 'radhe' found
console.log(url.includes('suthar'));  // false, substring 'suthar' not found


// Another String object with hyphens
const GameName = new String('radhe-shyam-suthar');

// Split string into an array based on delimiter '-'
console.log(GameName.split('-'));  // Output: ["radhe", "shyam", "suthar"]
