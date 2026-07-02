 const user = {
    username: "shivansh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
 }
//  user.welcomeMessage()
//  user.username = "shiv"
//  user.welcomeMessage() 

//   console.log(this)

// function rain(){
//    console.log(this);
// }
// rain()


// const rain = function(){
//     let username = "shivansh"
//     console.log(this.usrname);
// }
// rain()

// const rain = () => {
//     let username = "shivansh"
//     console.log(this.usrname);
// }
// rain() 

// const rain = () => {
//     let username = "shivansh"
//     console.log(this);
// }
// rain() 

// const addTwo = (num1 , num2) => num1 + num2       //===> implicit return
// const addTwo = (num1 , num2) => (num1 + num2)     // () does not require return but {} requires return
const addTwo = (num1 , num2) => ({username: "Shivansh"})     // () does not require return but {} requires return
console.log(addTwo(5,6))

const myArray = [2, 4, 5, 5, 6, 8, 9]
myArray.forEach(function () {})
myArray.forEach(() => {})
myArray.forEach(() => ())