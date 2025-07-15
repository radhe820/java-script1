// singleton objects  written type is (const tinderUser = new Object())
// non singleton objects written type is (const tinderUser = {})
// in this singleton objects we can create object ke ander multiple objects bana skte h
 


const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "radhe",
            lastname: "shyam"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname);
console.log(regularUser.fullname.userFullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}


const obj3 = { obj1, obj2}
console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLggedIn'));