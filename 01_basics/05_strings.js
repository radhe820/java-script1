const name = "radhe"
const repocount = 50

console.log(name + repocount + " value");


console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gameName = new String('radhe')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());


console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));
console.log(gameName.lastIndexOf('name'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,3)
console.log(anotherString);


const newStringOne = "   radhe  "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://radhe.com/radhe%20shyam"

console.log(url.replace('%20', '$'));

console.log(url.includes('radhe'));

console.log(url.includes('suthar'));


const GameName = new String  ('radhe-shyam-suthar')

console.log(GameName.split('-'));
