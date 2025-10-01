// Function declaration - prints each letter of the name individually
function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("E"); 
}

sayMyName(); // Calls the function and prints each letter on a new line


// Function with parameters to add two numbers and log the result
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);  // Performs addition, but type coercion can happen
}

// Examples of calling the function with different types
addTwoNumbers(3, 5);        // 8  (number + number)
addTwoNumbers(3, "5");      // "35" (number + string, string concatenation)
addTwoNumbers("3", 5);      // "35" (string + number, string concatenation)
addTwoNumbers(3, null);     // 3   (null is converted to 0)
addTwoNumbers(3, "a");      // "3a" (number + string, concatenation)


// Function that adds two numbers and returns the result instead of logging
function addTwoNumbers(number1, number2) {
    console.log("radhe");          // This will be logged each time function runs
    
    let result = number1 + number2;
    return result;                 // Return stops function execution here
    // console.log("radhe");      // This line will never run (unreachable code)
}

const result = addTwoNumbers(3, 5);
console.log("result: ", result);  // Prints the returned result: 8


// Function with a default parameter value
function loginUserMessage(username = "shyam") {
    // This condition is redundant because username will never be undefined due to default parameter
    if(username === undefined) {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;  // Template literal to return message
}

console.log(loginUserMessage("radhe"));  // "radhe just logged in"
console.log(loginUserMessage());         // "shyam just logged in" (default used)


// Function returning the first argument
function calculateCartPrice(num1) {
    return num1;
}
console.log(calculateCartPrice(2)); // 2


// Function using rest parameters to capture multiple arguments as an array
function calculateCartPrice(...num1) {
    return num1;  // returns array of all arguments passed
}
console.log(calculateCartPrice(2, 10, 2000, 500));  // [2, 10, 2000, 500]


// Function with named parameters plus rest parameters (rest must be last)
function calculateCartPrice(val1, val2, ...num1) {
    return num1;  // returns array of arguments starting from 3rd argument onward
}
console.log(calculateCartPrice(2, 10, 2000, 500));  // [2000, 500]


// Object example
const user = {
    username: "radhe",
    price: 299
};

// Function accepting object and accessing its properties
function handleObject(user) {
    console.log(`username is ${user.username} and the price is ${user.price}`);
}
handleObject(user); // Outputs: username is radhe and the price is 299


// Array example
const myNewArray = [200, 400, 500, 600];

// Function that returns the second element (index 1) of the given array
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));      // 400
console.log(returnSecondValue([200, 10, 400]));  // 10
