for(let i=0; i<10; i++){
    console.log(i)
}

console.log()
const array = [5,7,9,3,7]
for(let i=0; i<array.length; i++){
    console.log(array[i])
}

// high order array
const map=new Map()
map.set('IN',"India")
map.set("USA","United State of America")
map.set("Fr","France")

for(const [key,value] of map){
    console.log(key, ': ',value)
}