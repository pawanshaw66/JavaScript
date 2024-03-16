// Immediately Invoked Function Expressions (IIFE)

//named IIFE
(
    function chai(){
        console.log('DB connected')
    }
)();

// simple IIFE
(
    (name)=>{
        console.log(`${name}`)
    }
)("pawan");

(
    (n1,n2)=>{
        console.log(n1+n2)
    }
)(4,5)