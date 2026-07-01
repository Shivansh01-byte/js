const tinderuser = {}
tinderuser.id = "123abc",
tinderuser.name = "Shivansh"
tinderuser.isLoggedIn = false;
// console.log(tinderuser);
const regularUser = {
    email: "some@some.com",
    fullname: {
    userfullname: {
        firstname: "somebody",
        lastname: "someone"
        }
    }
}

// FullName -> PascalCase
// fullName -> camelCase
// full_name -> snake_case
// console.log(regularUser.fullname.userfullname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

const user = [
{
    id: 1,
    email: "s@gmail.com"
},
{
    id: 1,
    email: "s@gmail.com"
},
{
    id: 1,
    email: "s@gmail.com"
},
{
    id: 1,
    email: "s@gmail.com"
},
]
user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// // console.log(Object.hasOwnProperty('isLoggedIn'));
// console.log(Object.hasOwnProperty('isLogged'));

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "shivansh"
}
//course.instructor

const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// const navbar = (company) =>{
// }                                    ===> destructring
// navbar (company = "shivansh")

// "name" : "shivansh",
// "coursenamme" : "javascript"
// "price" : "free"

[ 
    {},
    {},
    {}
]
