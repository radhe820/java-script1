// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023 , 0 , 23 , 5 , 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2025-05-30")
console.log(myCreatedDate3.toLocaleDateString());

let myCreatedDate4 = new Date("05-30-2025")
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());    /*shown im milisecond*/
console.log(Date.now()/1000);  /* convet milisecond to second  */

console.log(Math.floor(Date.now()/1000));


 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getDate());
 console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);
console.log(newDate.getTime());


newDate.toLocaleString('default', {
    weekday: "long"
})