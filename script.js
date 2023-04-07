// Function to return the computers choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      computerChoice = "";
  }

  return computerChoice;
}

// Function to play a game
function playRound(playerSelection, computerSelection) {
  const choices = {
    rock: { win: "scissors", lose: "paper" },
    paper: { win: "rock", lose: "scissors" },
    scissors: { win: "paper", lose: "rock" },
  };

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (choices[playerSelection].win === computerSelection) {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (choices[playerSelection].lose === computerSelection) {
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Draw, you both picked ${playerSelection}`;
  }
}

// Defining variables
let playerScore = 0;
let computerScore = 0;

// Get the user input from buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.textContent;
    computerSelection = getComputerChoice();

    result = playRound(playerSelection, computerSelection);

    const gameResults = document.getElementById("results");
    gameResults.textContent = `${result}`;

    const runningScore = document.getElementById("running-score");
    result[4] == "W"
      ? playerScore++
      : result[4] == "L"
      ? computerScore++
      : null;
    runningScore.textContent = `${playerScore} - ${computerScore}`;

    const winner = document.getElementById("winner");

    // After a winner is found, declare them and set the DOM back to default
    if (playerScore == 5 || computerScore == 5) {
      winner.textContent = "Winner";

      playerScore = 0;
      computerScore = 0;
    } else {
      winner.textContent = "";
    }
  });
});

/*
// Plays 1 game of rock paper scissors
function game() {
  playerSelection = prompt("What is your selection?: ")
  computerSelection = getComputerChoice()

  result = playRound(playerSelection, computerSelection);
  console.log(`${result}`);
}
*/

/*
// Plays 5 games of rock paper scissors
function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let result = "";
      const [playerSelection, computerSelection] = [prompt("What is your selection?: "), getComputerChoice()];
      result = playRound(playerSelection, computerSelection);
      console.log(`${result}`);
  
      result[4] == "W" ? playerScore++ : result[4] == "L" ? computerScore++ : null;
    }
  
    const resultString = playerScore > computerScore
      ? `You win with a score of ${playerScore} to ${computerScore}`
      : playerScore < computerScore
      ? `You lose with a score of ${playerScore} to ${computerScore}`
      : `You draw with a score of ${playerScore} to ${computerScore}`;
  
    console.log(resultString);
  }
*/
