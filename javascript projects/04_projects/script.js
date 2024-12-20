const random = parseInt(Math.random() * 100 + 1);

// console.log('math ', random);

const submit = document.querySelector('#subt');
const userInput = parseInt(document.querySelector('#guessField'));
const guessSlot = document.querySelector('.guesses');
const lResult = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const input = userInput.value;
        console.log(input);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // check valid guess
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else if(guess < 1){
        alert("Please enter a valid number");
    }
    else if(guess > 100){
        alert("Please enter a number less than 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${random}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
 
}

function displayGuess(guess){
   
}
function displayMessage(message){

}

function newGame(){

}

function endGame(){

}

