let a=15
if(true){
    let a=10
    const b=20
    //var c=30
    console.log(a)
}

//console.log(a)
//console.log(b)
console.log(a)

function one(){
    const username="pawan"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //onsole.log(website)
    two()
}
one()

console.log(addone(4))
function addone(num){
    return num+1
}

const addTwo = function(num){
    return num+2
}


console.log(addTwo(5))