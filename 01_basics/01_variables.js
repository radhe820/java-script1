const accountId = "154235"
let accountEmail = "radhe@google.com"
var accountPassword = "12345"
accountcity = "jaipur"
let accountState;

// accountId = 20  //not allowed becaues it is in constant


/*
 prefer not to use VAR 
 because of issue in block scope and functional scope
*/


accountEmail = "shyam@hp.com"
accountPassword = "21"
accountcity = "bikaner"


console.log(accountId);

console.table([accountEmail, accountPassword, accountcity, accountState])
