// objects de-structure


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "radhe"
}


// course.courseinstructor

const {courseInstructor: Instructor} = course

console.log(courseInstructor);
console.log(Instructor);
