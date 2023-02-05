function getComputerChoice() {
  let computerSelection;
  const choiceRoll = Math.floor(Math.random() * 3);
  if (choiceRoll === 0) {
    computerSelection = "ROCK";
  } else if (choiceRoll === 1) {
    computerSelection = "PAPER";
  } else {
    computerSelection = "SCISSORS";
  }
  console.log(computerSelection);
  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt("Please choose your hand.");
  if (playerSelection == null) {
    return;
  } else if (
    playerSelection.toUpperCase() === "ROCK" ||
    playerSelection.toUpperCase() === "PAPER" ||
    playerSelection.toUpperCase() === "SCISSORS"
  ) {
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    return playerSelection;
  } else {
    alert("Please choose between rock, paper, or scissors.");
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "ROCK") {
    switch (playerSelection) {
      case "ROCK":
        console.log("You chose rock, the computer chose rock. Draw!");
        break;
      case "PAPER":
        console.log("You chose paper, the computer chose rock. You win!");
        break;
      case "SCISSORS":
        console.log("You chose scissors, the computer chose rock. You lose!");
        break;
    }
  } else if (computerSelection === "PAPER") {
    switch (playerSelection) {
      case "ROCK":
        console.log("You chose rock, the computer chose paper. You lose!");
        break;
      case "PAPER":
        console.log("You chose paper, the computer chose paper. Draw!");
        break;
      case "SCISSORS":
        console.log("You chose scissors, the computer chose paper. You win!");
        break;
    }
  } else {
    switch (playerSelection) {
      case "ROCK":
        console.log("You chose rock, the computer chose scissors. You win!");
        break;
      case "PAPER":
        console.log("You chose paper, the computer chose scissors. You lose!");
        break;
      case "SCISSORS":
        console.log("You chose scissors, the computer chose scissors. Draw!");
        break;
    }
  }
}
for (let i = 1; i <= 5; i++) {
  let playerHand = getPlayerChoice();
  let computerHand = getComputerChoice();
  playRound(playerHand, computerHand);
}
