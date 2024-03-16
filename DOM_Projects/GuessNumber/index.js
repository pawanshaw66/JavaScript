let num = parseInt(Math.random()*10+1)

//console.log(num)
const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const lowHigh = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let PrevGuess = []
let attempts=1

let playGame=true

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1 || guess>100){
        alert('Please enter a number more than 0 and less or equal to 10')
    }else{
        PrevGuess.push(guess)
        if(attempts==11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${num}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===num){
        displayMessage(`You guessed it right`)
        endGame()
    }else if (guess<num){
        displayMessage(`Number is too low`)
    }else if (guess>num){
        displayMessage(`Your number is too high`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess},`
    attempts+=1
    remaining.innerHTML=`${11-attempts}`
}

function displayMessage(message){
    lowHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        num=parseInt(Math.random()*10+1)
        PrevGuess=[]
        attempts=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-attempts}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=True
    })
}

