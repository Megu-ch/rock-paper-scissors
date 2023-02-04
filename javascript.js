function getComputerChoice(){
  let computerSelection;
  const choiceRoll = Math.floor(Math.random() * 3);
  if (choiceRoll === 0){
    computerSelection = "ROCK";
  }
  else if (choiceRoll === 1){
    computerSelection = "PAPER";
  }
  else{
    computerSelection = "SCISSORS";
  }
  console.log(computerSelection);
  return computerSelection;
}

function getPlayerChoice(){
  let playerSelection = prompt("Please choose your hand.");
  if (playerSelection == null){
    return;
  }
  else if (playerSelection.toUpperCase() !== "ROCK" || playerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "SCISSORS") {
    alert("Please choose between rock, paper, or scissors.");
    getPlayerChoice();
  }
  else{
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    return playerSelection;
  }
}

getComputerChoice();
getPlayerChoice();