// Declaring a constant variable 'accountId' which cannot be reassigned
const accountId = "154235"

// Declaring a block-scoped variable 'accountEmail' which can be reassigned later
let accountEmail = "radhe@google.com"

// Declaring a function-scoped variable 'accountPassword' which can be reassigned
// Note: Prefer to avoid using 'var' because of its function scoping issues
var accountPassword = "12345"

// Declaring a variable without any keyword, which becomes a global variable (not recommended)
accountcity = "jaipur"

// Declaring a block-scoped variable 'accountState' but not initializing it (undefined)
let accountState;

// Trying to reassign a constant variable results in an error, so the following is NOT allowed:
// accountId = 20; // This will throw an error because 'accountId' is a constant

// Reassigning the 'let' and 'var' declared variables, which is allowed
accountEmail = "shyam@hp.com"
accountPassword = "21"
accountcity = "bikaner"

// Logging the constant value to the console
console.log(accountId);

// Displaying multiple variables in a tabular format for better readability in the console
console.table([accountEmail, accountPassword, accountcity, accountState])
