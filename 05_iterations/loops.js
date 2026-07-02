// // for
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// // while
// let i = 0;
// while(i < 5){
//     console.log(i)
//     i++
// }

// // do while
// let j = 0;
// do{
//     console.log(j)
//     j++
// }while(j < 5)   


//table
for(let i = 0; i < 10; i++){
    // console.log("Outer loop:",i)
    for(let j = 0; j < 10; j++){
        // console.log(`Inner loop:${j} and Outer loop:${i}`)    
        console.log( i + '*' + j + ' = ' + i*j)    
    }
}

