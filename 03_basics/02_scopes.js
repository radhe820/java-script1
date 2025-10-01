// var c = 300   // Remember: This is commented out, so 'c' is undefined

let a = 300;

if (true) {
    let a = 10;        // Block scoped 'a', different from outer 'a'
    const b = 20;      // Block scoped 'b', cannot access outside this block
    console.log("INNER:", a);  // Prints 10
}

let array = [1, 2, 3];  // Define 'array' to avoid ReferenceError

for (let i = 0; i < array.length; i++) {
    const element = array[i]; // Access each element
    // You can add logic here using 'element'
}

console.log(a);  // Prints outer 'a' -> 300

// console.log(b);  // ERROR: 'b' is block scoped inside if-block, not accessible here

// console.log(c);  // ERROR: 'c' is commented out above, so it's undefined





function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);   // Can access outer scope variable 'username' (closure)
    }
    // console.log(website);       // ERROR: 'website' is block scoped inside two()

    two();   // Call inner function
}

// one();  // Uncomment to run function one

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);  // Works here, both accessible in this block
    }
    // console.log(website);   // ERROR: 'website' scoped inside inner if block only
}

// console.log(username);     // ERROR: 'username' is block scoped inside if-block

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));  // Works because of function hoisting

function addone(num) {
    return num + 1;
}

addTwo(5);  // ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};