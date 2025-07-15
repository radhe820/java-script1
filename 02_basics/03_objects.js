// singleton            /*used in constructors and in this objects cannot be repeated*/
// object.create       /*used in singleton*/

//    objects literals         /*by the hel of curly braces we can define our object {}*/


const mysym = Symbol("key1")   /*declare a symbol*/

const JsUser = {           

name: "radhe" ,
"full name": "radhe shyam",
[mysym]: "mykey1",           /*declare a symbol*/
age: 20,
location: "jaipur" ,
email: "radhe@google.com" ,
isLoggedIn: false ,
lastLoginDays: ["monday","saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mysym]);
console.log(typeof JsUser[mysym]);


JsUser.email = "radheshyam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "radhe@microsoft.com"
console.log(JsUser);

/* functions */

JsUser.greeting = function(){
    console.log(("hello Js User"));
    }

JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
    
}    

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



