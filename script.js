

window.onload =function() {
    const checkButton = document.getElementById("check__Button").addEventListener("click",playGame);
    
}

const randomNum = Math.floor(Math.random() * 100);
const wholeNum = randomNum * 100;
const result = document.createElement("h2")
const spanElement = document.getElementById("show__result");
const resultElement = document.createElement('h2');
spanElement.appendChild(resultElement);


function playGame(){
    const num = document.getElementById('input__Field').value
    displayResult(num)
}

function displayResult (num){
    
    if(num > randomNum){
       spanElement.innerHTML = "Your number is greater"
    }
    else if(num < randomNum){
        spanElement.innerHTML = "Your number is smaller"
    }
    else{
        spanElement.innerHTML = "Right Number, You won!!"
    }
}



