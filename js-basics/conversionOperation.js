let score="25"

console.log(typeof score)
console.log(typeof(score)) // as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

score1 = "254abc"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

score2 = null
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

score3 = undefined
let valueInNumber3 = Number(score3)
console.log(typeof score)
console.log(valueInNumber3)

// "25" -> 25
// 25as -> NaN
// type(25as) -> number
// true->1
// false->0

let isLoggedIn=1
let x = Boolean(isLoggedIn)
console.log(x)

let isLoggedIn1=""  // empty string gives false
let y = Boolean(isLoggedIn1)
console.log(y)

let stringNumber = 54
let NumberString = String(stringNumber)
console.log(typeof NumberString)


