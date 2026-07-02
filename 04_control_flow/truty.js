const userEmail = "S@shiva@ai"
// if(userEmail){
//     console.log("Got user email")
// }else {
//     console.log("Dont have user email")
// }

//falsy value.  ==>  false, 0, -0,  BigInt, 0n, "", null,  undefined, NaN 
//truty value.  ==>  "0",  'false', "",  [], {}, function(){}

// if (userEmail.length != 0) {
// console.log("Array is empty");
// }

// if (Object.keys(userEmail).length === 0) {
//     console.log("Object is empty");}


// Nullish coalescing operator (??)  ==>  if the value is null or undefined then it will return the right side value
let val1;
val1 = 5 ?? 10
 console.log(val1)  // 5

let val2;
val2 = null ?? 10
 console.log(val2)  // 10

let val3;
val3 = undefined ?? 10
 console.log(val3)  // 10

let val4;
val4 = "" ?? 10
 console.log(val4)  // ""

let val5;
val5 = false ?? 10
 console.log(val5)  // false    

 //Ternary operator  ==>  condition ? true : false
const balance = 1200;
const balanceCheck = balance > 1000 ? "Balance is greater than 1000" : "Balance is less than 1000"
console.log(balanceCheck) 