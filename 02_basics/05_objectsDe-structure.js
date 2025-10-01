// Object destructuring allows extracting properties from an object into variables

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "radhe"
}

// Normally, to access courseInstructor, you use:
// course.courseInstructor

// Destructuring with aliasing:
// Extract the 'courseInstructor' property from 'course' object 
// and assign it to a new variable named 'Instructor'
const { courseInstructor: Instructor } = course;

// console.log(courseInstructor); // ❌ This will cause an error because 'courseInstructor' variable is NOT declared

console.log(Instructor);  // ✅ Correct usage - prints "radhe"
