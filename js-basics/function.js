function hello(){
    console.log("hello")
}

hello()

//function add(num1,num2){ 
  //  console.log(num1+num2)
//}

function add(n1,n2){
    return n1+n2
}
//res = add(4,5)
//add(4,"4")

//console.log(res)

function loginUser(username){
    if(username==undefined){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}

function loginUser1(username="rock"){
    if(!username){
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("pawan"))
console.log(loginUser1())

function calculateCarPrice(...num1){//rest operator
    return num1
}
console.log(calculateCarPrice(5,5,8,9,6))

const user={
    username:"pawan",
    price:446
}

function handleObject(anyobj){
    return `Username is ${anyobj.username} and price is ${anyobj.price}`
}
console.log(handleObject(user))

r = handleObject({
    username:"rohan",
    price:500
})
console.log(r)

const myArr = [200,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr)) 