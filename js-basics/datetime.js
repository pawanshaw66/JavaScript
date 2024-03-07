let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())


let myDate1 = new Date(2020,1,7)
console.log(myDate1.toDateString())

let myDate2 = new Date(2020,1,7, 5,3)
console.log(myDate2.toLocaleString())

let myDate3 = new Date("2023-01-25")
console.log(myDate3.toLocaleString())
console.log(myDate3.toLocaleDateString())

let myDate4 = new Date("01-07-2024")
console.log(myDate4.toLocaleString())
console.log(myDate4.toLocaleDateString())
console.log(myDate4.getTime())
let myTimmeStamp = Date.now()
console.log(myTimmeStamp)

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())