// object literals

//Object.create -> constructor

const mySym = Symbol("key1")

const user={
    name:"pawan",
    "full name":"pawan shaw",
    [mySym]:"key1",
    age:25,
    gender:"M",
    "salary":45000,
    lastloginDays:["Mon","Tue"]
}
console.log(user.name)

console.log(user["name"])

console.log(user.salary)
console.log(user["full name"])
console.log(typeof user[mySym])
console.log(typeof name)
user.age=23
console.log(user["age"])
//Object.freeze(user)
//user.age=26
console.log(user["age"])

console.log(user)
console.log(typeof user[mySym])

user.greeting = function(){
    console.log("Hello user")
}


console.log(user.greeting)
user.greeting()

user.greeting2 = function(){
    console.log(`hello user, ${this.name}`)
}
user.greeting2()


const tinderUser = {}
tinderUser.id="123"
tinderUser.name="pawan"
tinderUser.isLogedin=false
// console.log(tinderUser);

const regularUser = {
    email:"pawan@gmail.com",
    full_name:{
        useFullName:{
            firstName:"pawan",
            lastName:"shaw"
        }
    }
}
console.log(regularUser.full_name)
console.log(regularUser.full_name.useFullName)

//console.log(regularUser.full_name?.useFullName?.firstName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
console.log(obj1,obj2)

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

console.log({...obj1,...obj2})

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'))


// destructuring 
const course={
    courseName:"Js",
    Price:"999",
} 

const {courseName}=course
console.log(courseName)

const {courseName:n}=course
console.log(n)