// break and continue

for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i)
}

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i)
}

if(true){
    const username = "shivansh"
    if (username === "shivansh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}else{
    console.log("username is not shivansh")
}

switch (new Date().getDay()) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Looking forward to the Weekend");
}           