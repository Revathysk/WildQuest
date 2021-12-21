// Query selectors to display changes in DOM
const p1Name = document.querySelector("#player1Div");
const p2Name = document.querySelector("#player2Div");
let p1Count = 0;
let p2Count = 0;

class Quiz { 
    constructor(hint,answer){
    this.hint =hint;
    this.answer=answer;
    }
}

function gameDisplay(){
    console.log("gamedisplay");
    player1Div.classList.toggle('hide');
    player2Div.classList.toggle('hide');
    masterqDiv.classList.toggle('hide');
    instructDiv.classList.toggle('hide');
    thirdDiv.classList.toggle('hide');
    continueButton.classList.toggle('hide');
    startDiv.classList.toggle('hide');
    answerDiv.classList.toggle('hide');
    submitDiv.classList.toggle('hide');
}


function playerName()
{
    let input= prompt("Enter First player's name:")
    p1Name.innerText=input;
    input= prompt("Enter Second player's name:")
    p2Name.innerText=input;
    // playGame();
}
