const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toFixed(2))

const num=25.9333
console.log(num.toPrecision(2))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))

// maths
console.log(Math.abs(-44548))

console.log(Math.ceil(4.8))
console.log(Math.floor(4.8))

console.log(Math.random())

min=10
max=20
console.log(Math.floor(Math.random()*(max-min+1)) + min)