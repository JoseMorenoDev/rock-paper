
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
    let computerWin = true;
    let playerWin =true;
    let tie = true;
    if (playerSelection == "rock" && computerSelection =="paper") {
        return computerWin;
        console.log("Paper beats Rock! Computer Wins!")
    }else if (playerSelection=="rock" && computerSelection == "scissors"){
        return playerWin;
        console.log("Rock beats scissors! Player Wins!")
    } else if (playerSelection =="rock" && computerSelection =="rock"){
        return tie;
        console.log("Rock doesnt beats Rocks! its a tie!")
    }else if(playerSelection == "paper" && computerSelection=="paper") {
        return tie;
        console.log("Paper doesnt beat paper! its a tie!");
    }else if (playerSelection == "paper" && computerSelection =="scissors") {
        return computerWin;
        console.log("Scissors beats paper! Computer wins!");
    }else if (playerSelection == "paper" && computerSelection =="rock") {
        return playerWin;
        console.log("Paper beats rock! Player wins!");
    }else if (playerSelection == "scissors" && computerSelection=="scissors"){
        return tie;
        console.log("scissors doesnt beat scissors! Its a tie!");
    }else if (playerSelection=="scissors" && computerSelection=="rock") {
        return computerWin;
        console.log("scissors doesnt beat rock! Computer wins!");
    }else if(playerSelection=="scissors" && computerSelection =="paper"){
        return computerWin;
        console.log("Scissors beats paper! Player wins!");
    }
    
  }

  function getPlayerSelection () {
    let selection = prompt ("Please enter your seleccion: Rock, Papers or Scissors");
    selection = selection.toLowerCase();
    return selection;

  }

  computerSelection = getComputerChoice();
  let playerSelection = getPlayerSelection();
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);

