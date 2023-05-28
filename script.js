
//get random interger between 1 and 3

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  

  function getComputerChoice() {
    let choice = getRndInteger(1,3);
    switch (choice) {
        case 1:
            return "rock";
            
            
        case 2:
            return "paper";

        case 3:
            return "scissors";
    
        default:
            break;
    }
    console.log(choice);
    
  }

  function playRound(playerSelection,computerSelection) {
    let computerWin = 1;
    let playerWin = 2;
    let tie = 3;
    if (playerSelection == "rock" && computerSelection =="paper") {
        return computerWin;
    }else if (playerSelection=="rock" && computerSelection == "scissors"){
        return playerWin;
    } else if (playerSelection =="rock" && computerSelection =="rock"){
        return tie;
    }else if(playerSelection == "paper" && computerSelection=="paper") {
        return tie;
    }else if (playerSelection == "paper" && computerSelection =="scissors") {
        return computerWin;
    }else if (playerSelection == "paper" && computerSelection =="rock") {
        return playerWin;
    }else if (playerSelection == "scissors" && computerSelection=="scissors"){
        return tie;
    }else if (playerSelection=="scissors" && computerSelection=="rock") {
        return computerWin;
    }else if(playerSelection=="scissors" && computerSelection =="paper"){
        return computerWin;
    }
    
  }

  function getPlayerSelection () {
    let selection = prompt ("Please enter your seleccion: Rock, Papers or Scissors");
    selection = selection.toLowerCase();
    return selection;

  }

  function game() {
    let computerScore=0;
    let playerScore =0;

    for (let index = 0; index < 6; index++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case 1:
                console.log("Computer Wins!")
                computerScore++;
                break;
            case 2:
                console.log("Player Wins!");
                playerScore++
                break;

            case 3:
                console.log("Its a tie!");
                break;

        
            default:
                break;
        }
    }

    console.log(`The score for the computer is ${computerScore}`);
    console.log(`The score for the player is ${playerScore}`);

    if (computerScore > playerScore){
        console.log("The winner is the COMPUTER OVERLORDS!");
    } else {
        console.log("Computers had no chance against the human player");
    }



  }

game();

  
 


