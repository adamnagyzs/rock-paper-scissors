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
      console.log("Computer wins!");
    } else if (computerChoice === "scissors") {
      humanScore += 1;
      console.log("You win!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "paper") {
      console.log("Tie!");
    } else if (computerChoice === "rock") {
      humanScore += 1;
      console.log("You win!");
    } else if (computerChoice === "scissors") {
      computerScore += 1;
      console.log("Computer wins!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "scissors") {
      console.log("Tie!");
    } else if (computerChoice === "paper") {
      humanScore += 1;
      console.log("You win!");
    } else if (computerChoice === "rock") {
      computerScore += 1;
      console.log("Computer wins!");
    }
  }
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
