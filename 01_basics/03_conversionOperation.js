let score = "20sdf"

console.log(typeof score);
console.log(typeof (score));
 
let valueInNumber = Number(score)
console.log(typeof valueInNumber );
console.log(valueInNumber);


// // "33" => 33
// // "33abc" => NaN (Not A Number)
// // true => 1;  false=>0

let isLoggedIn = 0

let booleanIsLoggedIn  = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);


// // 1 => true;  0 => false;
// // "" = > false
// // "radhe" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


/*'''''''''''''''''''''''''OPERATIONS'''''''''''''''''''''''*/

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "Hello"
let str2 = " Radhe"
let str3 = str1 + str2

console.log(str3);

 
console.log("1" + 2);                  /*''''''''''don't not write code like this'''''''''''''*/
console.log(1 + "2");                  /*''''''''''don't not write code like this'''''''''''''*/
console.log("1" + 2 + 2);              /*''''''''''don't not write code like this'''''''''''''*/
console.log(1 + 2 + "2");              /*''''''''''don't not write code like this'''''''''''''*/
console.log((3 + 4)* 5 % 3);           /*''''''''''don't not write code like this'''''''''''''*/


console.log(-false);
console.log(+true);
console.log(+"");

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
