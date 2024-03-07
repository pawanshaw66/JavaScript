const marvel=["Ironman","Thor","Hulk","Captain America"]
const dc=["Superman","Flash","Batman","Acquaman"]

//marvel.push(dc)
const all_heros = marvel.concat(dc)
console.log(all_heros)

const all_heros1 = [...marvel,...dc]
console.log(all_heros1)

const arr = [1,2,3,[4,5,6],7,[8,9]]
const real_arr = arr.flat(Infinity)
console.log(real_arr)


console.log(Array.isArray([1,2,5]))
console.log(Array.from("pawan"))

console.log(Array.isArray({name:"pawan"}))

let score1=55
let score2=55
let score3=55
console.log(Array.of(score1,score2,score3))

