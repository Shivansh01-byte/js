//IMMEDIATELY INVOLKED FUNCTION EXPRESSION (IIFE)


// function rain (){
//     console.log(`DB CONNECTED`)
// }
// rain()

(function rain (){
    console.log(`DB CONNECTED`)
})();
(function rain (){
    console.log(`DB CONNECTED TWO`)
})();
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`)
})("SHIVANSH")

