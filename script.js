// Function to return the computers choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// Function to play a game
function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();
  let computerSelectionLower = computerSelection.toLowerCase();
  let result = "";

  if (playerSelectionLower == "rock" && computerSelectionLower == "rock") {
    result = "You Draw, you both picked Rock";
  } else if (
    playerSelectionLower == "rock" &&
    computerSelectionLower == "paper"
  ) {
    result = "You Lose, Paper beats Rock";
  } else if (
    playerSelectionLower == "rock" &&
    computerSelectionLower == "scissors"
  ) {
    result = "You Win, Rock beats Scissors";
  } else if (
    playerSelectionLower == "paper" &&
    computerSelectionLower == "rock"
  ) {
    result = "You Win, Paper beats Rock";
  } else if (
    playerSelectionLower == "paper" &&
    computerSelectionLower == "paper"
  ) {
    result = "You Draw, you both picked Paper";
  } else if (
    playerSelectionLower == "paper" &&
    computerSelectionLower == "Scissors"
  ) {
    result = "You Lose, Scissors beats paper";
  } else if (
    playerSelectionLower == "scissors" &&
    computerSelectionLower == "rock"
  ) {
    result = "You Lose, Rock beats Scissors";
  } else if (
    playerSelectionLower == "scissors" &&
    computerSelectionLower == "paper"
  ) {
    result = "You Win, Scissors beats paper";
  } else if (
    playerSelectionLower == "scissors" &&
    computerSelectionLower == "scissors"
  ) {
    result = "You Draw, you both picked Scissors";
  }

  return result;
}

// Plays 5 games of rock paper scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = "";
    const playerSelection = window.prompt("What is your selection?: ");
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result[4] == "W") {
      playerScore += 1;
    } else if (result[4] == "L") {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win with a score of ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose with a score of ${playerScore} to ${computerScore}`);
  } else {
    console.log(`You draw with a score of ${playerScore} to ${computerScore}`);
  }
}

game();
