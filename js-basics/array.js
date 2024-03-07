const arr = [2,5,2.3,'hello',false]

console.log(arr[0])


for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

const myarr = new Array(1,5,6)
console.log(myarr)

myarr.push(10)
console.log(myarr)

myarr.pop()
console.log(myarr)

//myarr.unshift(13)
//console.log(myarr)

//console.log(myarr.includes(12))
//console.log(myarr.indexOf(5))
//console.log(myarr.join())
//console.log(myarr.join('-'))

console.log(myarr.slice(1,3))
console.log(myarr.splice(1,3))


const myarr1 = new Array(1,5,6)
console.log(myarr1)
console.log(myarr1.filter(num => num>2))

for(let i=0; i<myarr1.length; i++){
    if(myarr1[i]>2){
        console.log(myarr1[i])
    }
}



