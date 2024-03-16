const user={
    username:"pawan",
    price:"799",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
console.log(this)

function chai(){
    console.log(this)
}
chai()

// arrow

const coffee =()=>{
    let username="pawan"
    console.log(this.username)
}
coffee()

const add = (n1,n2) =>{
    return n1+n2
}
console.log(add(5,8))

const mul = (n1,n2)=>(n1*n2)
console.log(mul(5,4))

const h = ()=>({name:"hello"})
console.log(h())