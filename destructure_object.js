const course = {
    name : "JS Tutorial In Hindi",
    price : 999,
    courseInstructor : "Hitesh"
}

console.log(course.price);

const {courseInstructor : instructor} = course
// console.log(cousreInstructor);
console.log(instructor); // destructure

// Below are the JSON Syntax

// {
//  // "id" : "234",
//     "name" : "abc",
//     "age" : 34,
// }

// [{},{},{}]

// you can take sample json code from randomuser api
