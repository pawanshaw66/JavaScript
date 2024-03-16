const userEmail="pawan@gmail.com"
if(userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email")
}


// falsy value
// false,0,-0,BigInt,0n,"",null,undefined,NaN

// truthy value
// "0","false"," ",[],{},function(){}->empty function

let val1;
val1=5??10
console.log(val1);
