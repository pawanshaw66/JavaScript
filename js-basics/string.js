const name="pawan"
const age=25

console.log(name + age)

console.log(`hello my name is ${name} and my age is ${age}`)

const gameName = new String("pawan")
// use object

console.log(gameName)

console.log(name[0])
console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))

console.log(gameName.indexOf('w'))

console.log(gameName.substring(0,4))

console.log(gameName.slice(-3,4))

let str = "      pawan    "
console.log(str.trim())

const url="https://edu.com/edu%20advn"
console.log(url.replace('%20','-'))

console.log(url.includes('pawan'))

const sname = "pawan-25-5625484"
console.log(sname.split('-'))

let text1 = "pawan"
let text2 = "shaw"
let text3 = text1.concat(" ",text2)
console.log(text3)

// strat trim
let s_trim = "    pawan"
console.log(s_trim.trimStart())

// end trim
let e_trim = "pawan      "
console.log(s_trim.trimEnd())

let text = "5"
let padded = text.padStart(4,"0")
console.log(padded)

let text_1 = "5"
let padded_1 = text.padEnd(4,"0")
console.log(padded_1)

let note = "Please locate where 'locate' occurs!"
console.log(note.search("locate"))



// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

let t = "The rain in SPAIN stays mainly in the plain"
console.log(t.match("ain"))

console.log(t.startsWith('T'))
console.log(t.endsWith('n'))