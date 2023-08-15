function getComputerChoice(){
    let choice=1;
    switch(choice){
        case 0:
            return "ROCK";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}
function playRound(playerSelection,computerSelection){
    if(playerSelection.localeCompare(computerSelection)==0)
        return "TIE"
    else if(playerSelection=="ROCK"){
        if(computerSelection=="PAPER"){
            return "YOU LOSE";
        }
        else{
            return "YOU WIN";
        }
    }
    else if(playerSelection=="PAPER"){
        if(computerSelection=="SCISSORS"){
            return "YOU LOSE";
        }
        else{
            return "YOU WIN";
        }
    }
    else if(playerSelection=="SCISSORS"){
        if(computerSelection=="ROCK"){
            return "YOU LOSE";
        }
        else{
            return "YOU WIN";
        }
    }
}
