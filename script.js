
window.onload = function () {
  document.getElementById("check__Button").addEventListener("click", playGame);
  document.getElementById("reset__Button").addEventListener("click", resetGame);
};

let guess = [];

function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 100);
    return randomNum;
  }

let correctNum = getRandomNum();
console.log(correctNum);

let inputField = document.getElementById("input__Field");
let spanElement = document.getElementById("show__result");
let resultElement = document.createElement("h2");
spanElement.appendChild(resultElement);



function playGame() {
  let num = document.getElementById("input__Field").value;
  displayResult(num);
  saveHistory(num);
  showHistory();
}

function displayResult(num) {
  if (num > correctNum) {
    spanElement.innerHTML = "Your number is greater";
  } else if (num < correctNum) {
    spanElement.innerHTML = "Your number is smaller";
  } else if(num == correctNum){
    spanElement.innerHTML = "Right Number, You won!!";
  }
  else{
    spanElement.innerHTML = "You, did not enter the number. Please enter the valid number";
  }
}

function saveHistory(num) {
  guess.push(num);
}

function showHistory() {
  //latest list on the bottom
  // let index = 0;
  // let list = "<ul>"
  // while(index < guess.length){

  //     list+= "<li>"+"You guessed " + guess[index] +"</li>" ;
  //     index+=1;
  // }
  // list+= "</ul>";
  // document.getElementById("history").innerHTML = list;

  //latest list on the top
  let index = guess.length - 1;
  let list = "<ul>";
  while (index >= 0) {
    list += "<li>" + "You guessed " + guess[index] + "</li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function resetGame() {
  //reset randomNum
  getRandomNum();
  //reset list arr
  guess = [];
  //reset display result
  spanElement.innerHTML = "";
  //reset history
  showHistory();
  //clear input
  inputField.value = '';
}
