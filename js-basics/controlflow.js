if(2!=='2'){
    console.log("hello")
}

const score=200
if(score>200){
    let power="fly"
    console.log(`user power: ${power}`)
}else{
    console.log("power less")
} 


let balance = 300
if(balance>200){
    console.log("You can buy one candy")
}else if(balance>300){
    console.log("you can buy tow product")
}else if(balance>=500){
    console.log("you can buy 5 candy")
}else{
    console.log("sorry! you don't have enough money.")
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your balance: ', (balance) => {
    balance = parseFloat(balance); // Convert input to a floating-point number
    if (isNaN(balance)) {
        console.log("Invalid input. Please enter a number.");
    } else {
        if (balance >= 500) {
            console.log("You can buy 5 candies");
        } else if (balance >= 300) {
            console.log("You can buy two products");
        } else if (balance >= 200) {
            console.log("You can buy one candy");
        } else {
            console.log("Sorry! You don't have enough money.");
        }
    }
    rl.close();
});

const month=4
switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("jan")
        break;
    case 3:
        console.log("jan")
        break;
    case 4:
        console.log("jan")
        break;

    default:
        break;
}