function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("E"); 
    
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log( number1 + number2);
    
}

addTwoNumbers(3, 5)
addTwoNumbers(3, "5")
addTwoNumbers("3", 5)
addTwoNumbers(3, null)
addTwoNumbers(3, "a")



function addTwoNumbers(number1, number2){
      console.log("radhe");
         
    let result = number1 + number2
   return result
//    console.log("radhe");         (after result declaration it will not take any values)
   
}

const result = addTwoNumbers(3, 5)
console.log("result: ", result);


function loginUserMessage(username = "shyam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log( loginUserMessage("radhe"));
console.log( loginUserMessage("radhe"));