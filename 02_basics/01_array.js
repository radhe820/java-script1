// Creating arrays

const myArr = [1, 2, 3, 4, 5, 6];            // Array literal syntax
const myHeros = ["shaktimaan", "naagraj"];  // Array of strings

const myArr2 = new Array(1, 2, 3, 4);        // Array created using Array constructor

console.log(myArr[1]);  // Access element at index 1 (second element), output: 2


// Array methods to modify array

myArr.push(7);     // Adds 7 at the end of the array
myArr.push(8);     // Adds 8 at the end
myArr.pop();       // Removes the last element (8), modifies original array
console.log(myArr);  // Output: [1, 2, 3, 4, 5, 6, 7]

myArr.unshift(9);  // Adds 9 at the start of the array
myArr.shift();     // Removes first element (9), modifies original array
console.log(myArr);  // Output: [1, 2, 3, 4, 5, 6, 7]


// Searching in array

console.log(myArr.includes(7));  // true if 7 exists in array, else false
console.log(myArr.indexOf(3));   // Returns index of 3 in array, else -1 if not found


// Join array elements into a string, separated by commas by default
const newArr = myArr.join();
console.log(myArr);    // Original array stays unchanged
console.log(newArr);   // String: "1,2,3,4,5,6,7"
console.log(typeof newArr);  // 'string'


/*'''''''''''''' slice && splice ''''''''''''''''''*/

// slice returns a shallow copy of a portion of array (does NOT modify original)
// slice(startIndex, endIndex) - endIndex not included

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);  
// myn1 contains elements at index 1 and 2 ([2, 3])
console.log(myn1);
console.log("B ", myArr);  // myArr is unchanged


// splice modifies the original array by removing/inserting elements
// splice(startIndex, deleteCount, ...itemsToAdd)

const myn2 = myArr.splice(1, 3);
// Removes 3 elements starting from index 1 ([2, 3, 4])
console.log("C ", myArr);  // Original array now modified: [1, 5, 6, 7]
console.log(myn2);         // Removed elements returned: [2, 3, 4]
