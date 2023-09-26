function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSOR";
            break;
    }
}
function playRound(playerSelection,computerSelection) {
   
    if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "PAPER" && computerSelection == "PAPER" ||
        playerSelection == "SCISSOR" && computerSelection == "SCISSOR")
        return "TIE"
    else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            return "YOU LOSE";
        }
        else {
            return "YOU WIN";
        }
    }
    else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSOR") {
            return "YOU LOSE";
        }
        else {
            return "YOU WIN";
        }
    }
    else if (playerSelection == "SCISSOR") {
        if (computerSelection == "ROCK") {
            return "YOU LOSE";
        }
        else {
            return "YOU WIN";
        }
    }

}

let playerScore=0,computerScore=0,roundNumber=0;
const btns = document.querySelectorAll('.playerbtn');
btns.forEach(button => {
    button.addEventListener('click',()=>{
        //get player and computer choices
        let computerSelection = getComputerChoice();
        let playerSelection = button.getAttribute('id');
       
        //update background image for computer button
        let computerbtn = document.querySelector("#computerbtn");
        if(computerSelection=="ROCK"){
            computerbtn.setAttribute('style','background-image:url("images/rock.png")')
        }
        else if(computerSelection=="PAPER"){
            computerbtn.setAttribute('style','background-image:url("images/paper.png")')
        }
        if(computerSelection=="SCISSOR"){
            computerbtn.setAttribute('style','background-image:url("images/scissor.png")')
        }
        //find result
        playerSelection = playerSelection.toUpperCase();
        let result = playRound(playerSelection,computerSelection);
        roundNumber++;
        if(result=="YOU WIN"){
            playerScore++;
        }
        else if(result=="YOU LOSE"){
            computerScore++;
        }

        //update score and show result
        let playerScoreDiv = document.querySelector("#playerScoreDiv");
        let computerScoreDiv = document.querySelector("#computerScoreDiv");
        let roundDiv = document.querySelector("#roundDiv");
        let resultDiv = document.querySelector("#resultDiv");
        
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        roundDiv.textContent = `ROUND-${roundNumber}`;
        resultDiv.textContent = result;

        //show final result
        let resultDisplay = document.querySelector('#resultDisplay');
        let gameScreen = document.querySelector('#container');
        let endScreen = document.querySelector('#endScreen');
        if(playerScore==5){
            resultDisplay.textContent = 'Yayy, You Won'
            endScreen.setAttribute('style','display:flex');
            gameScreen.setAttribute('style','display:none');
        }
        else if(computerScore==5){
            resultDisplay.textContent = 'Oh No, You Lost';
            endScreen.setAttribute('style','display:flex');
            gameScreen.setAttribute('style','display:none');
        }
    });
});

const playAgainbtn = document.querySelector('#playAgain');
playAgainbtn.addEventListener('click',()=>{
    let gameScreen = document.querySelector('#container');
    let endScreen = document.querySelector('#endScreen');
    let playerScoreDiv = document.querySelector("#playerScoreDiv");
    let computerScoreDiv = document.querySelector("#computerScoreDiv");
    let roundDiv = document.querySelector("#roundDiv");
    let resultDiv = document.querySelector("#resultDiv");

    gameScreen.setAttribute('style','display:block');
    endScreen.setAttribute('style','display:none');
    playerScore=0;
    computerScore=0;
    roundNumber=0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    roundDiv.textContent = `ROUND-${roundNumber}`;
    resultDiv.textContent = result;
})


