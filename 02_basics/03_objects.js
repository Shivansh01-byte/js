// //singleton => object.create
// //object literals
const mySym = Symbol("key1");

const JSuser = {
    name: "shivansh",
    "full name": "Shivansh Kumar",
    [mySym]: "macbook",
    age: 20,
    location: "Lucknow",
    email: "shivansh12902@rediffmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
};

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);
// console.log(typeof JSuser[mySym]);

// JSuser.email = "djkshfuiwfwuefuhw@1209eiwjokms.com"
// Object.freeze(JSuser)
JSuser.email = "xdzfcgvhbjnkkiudf@gvddshcb.com"
console.log(JSuser)

JSuser.greeting = function(){
    console.log("HEllo JS USER");
}
JSuser.greetingTwo = function(){
    console.log('Hello JS User, $[this.name}')
}
console.log(JSuser.greeting);
console.log(JSuser.greetingTwo);