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
            return "scissor";
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
            return "YOU LOSE.PAPER beats ROCK";
        }
        else {
            return "YOU WIN";
        }
    }
    else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSOR") {
            return "YOU LOSE scissor beats PAPER";
        }
        else {
            return "YOU WIN";
        }
    }
    else if (playerSelection == "SCISSOR") {
        if (computerSelection == "ROCK") {
            return "YOU LOSE. ROCK beats SCISSOR";
        }
        else {
            return "YOU WIN";
        }
    }

}

let playerScore=0,computerScore=0;
const btns = document.querySelectorAll('button');
btns.forEach(button => {
    let playerSelection =  "ROCK";
    button.addEventListener('click',()=>{
        let computerSelection = getComputerChoice();
        let playerSelection = button.getAttribute('id');
       
        playerSelection = playerSelection.toUpperCase();
        let result = playRound(playerSelection,computerSelection);
        if(result=="YOU WIN"){
            playerScore++;
        }
        else if(result!="TIE"){
            computerScore++;
        }
        const resultDiv = document.getElementById('resultDiv');
        const scoreDiv = document.getElementById('scoreDiv');
        resultDiv.textContent = result;
        scoreDiv.textContent = `Player ${playerScore} Computer ${computerScore}`;
    });
});


