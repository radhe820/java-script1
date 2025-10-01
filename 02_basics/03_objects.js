// Singleton Pattern concept mentioned (used in constructors to ensure single instance)
// Object.create is often used to create objects with prototypes (related to singleton)

// Object literals - create objects using curly braces {}

const mysym = Symbol("key1");  // Declare a unique Symbol, useful as object key

const JsUser = {
    name: "radhe",             // String property
    "full name": "radhe shyam", // Property name with space, accessed via bracket notation
    [mysym]: "mykey1",          // Symbol property key, cannot be accessed by normal strings
    age: 20,
    location: "jaipur",
    email: "radhe@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]  // Array as a property value
}

// Accessing properties
console.log(JsUser.email);          // Dot notation, prints email
console.log(JsUser["email"]);       // Bracket notation, same as above
console.log(JsUser["full name"]);   // Bracket notation for keys with spaces
console.log(JsUser[mysym]);         // Access symbol-keyed property
console.log(typeof JsUser[mysym]);  // Check the type of symbol-keyed value ("string")

// Modifying properties
JsUser.email = "radheshyam@chatgpt.com";  // Update email property

// Object.freeze(JsUser);  // Uncommenting this would make the object immutable (no changes allowed)

JsUser.email = "radhe@microsoft.com";  // Can still update because freeze is commented out
console.log(JsUser);                   // Show updated object

// Adding methods (functions) to the object

JsUser.greeting = function() {
    console.log("hello Js User");  // Simple method logs a message
}

JsUser.greetingTwo = function() {
    console.log(`hello Js User, ${this.name}`);  
    // 'this' refers to JsUser object, accesses the name property dynamically
}

console.log(JsUser.greeting());     // Calls greeting method, logs message and prints undefined (no return)
console.log(JsUser.greetingTwo());  // Calls greetingTwo, logs message with name and prints undefined
