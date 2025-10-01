// Singleton object creation using constructor (new Object())
// Non-singleton (object literal) created with {}

// Both ways create objects, but new Object() is less commonly used now

const tinderUser = new Object();  // Object created using constructor
const tinderUser = {};            // Object literal - more common and cleaner

// Adding properties dynamically to tinderUser object
tinderUser.id = "123abc";
tinderUser.name = "samy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);  // Outputs the tinderUser object with added properties


// Nested objects example: regularUser has nested fullname object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "radhe",
            lastname: "shyam"
        }
    }
};

console.log(regularUser);                    // Prints entire regularUser object
console.log(regularUser.fullname);           // Access nested fullname object
console.log(regularUser.fullname.userFullname); // Access deeper nested userFullname object
console.log(regularUser.fullname.userFullname.firstname); // Access firstname property


// Multiple objects to be merged or grouped

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "c", 6: "d"};

// Creating an object that contains obj1 and obj2 as properties (nested objects)
const obj3 = { obj1, obj2 };
console.log(obj3);  // Output: {obj1: {...}, obj2: {...}}

// Merging obj1, obj2, obj4 into a single flat object using Object.assign()
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);  // Output: {1: "a", 2: "b", 3: "c", 4: "d", 5: "c", 6: "d"}

// Same merging done with spread operator (modern syntax)
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);  // Output is same as above


// Array of user objects - representing multiple users
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
];

// Accessing the email of second user (index 1)
users[1].email;


// Logging tinderUser object again
console.log(tinderUser);

// Getting keys of tinderUser object (array of property names)
console.log(Object.keys(tinderUser));   // ["id", "name", "isLoggedIn"]

// Getting values of tinderUser object (array of property values)
console.log(Object.values(tinderUser)); // ["123abc", "samy", false]

// Getting key-value pairs of tinderUser object (array of [key, value] arrays)
console.log(Object.entries(tinderUser)); // [["id", "123abc"], ["name", "samy"], ["isLoggedIn", false]]

// Checking if property exists on tinderUser object (note typo in property name)
console.log(tinderUser.hasOwnProperty('isLggedIn'));  // false because of typo ('isLoggedIn' is correct)
