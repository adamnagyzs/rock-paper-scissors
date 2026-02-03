function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice <= 2 / 3 && computerChoice > 1 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  while (true) {
    let humanChoice = prompt(
      "Choice(Rock/Paper/Scissors/Exit): ",
    ).toLowerCase();
    if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    ) {
      console.log("Invalid choice!");
    } else {
      return humanChoice;
    }
  }
}

let humanScore = 0;
let computerScore = 0;
let exitGame = false;

function playRound(humanChoice, computerChoice) {
  console.log(`Your choice: ${humanChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Tie!");
    } else if (computerChoice === "paper") {
      computerScore += 1;
      console.log("Computer won the round!");
    } else if (computerChoice === "scissors") {
      humanScore += 1;
      console.log("You won the round!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("Tie!");
    }
  }
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

let roundNum = 0;

function playGame() {
  while (roundNum != 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundNum += 1;
  }
  if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("You won the game!");
  }
}

playGame();
