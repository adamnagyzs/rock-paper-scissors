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
    if (humanChoice === "exit") {
      return null;
    }
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

function playRound(humanChoice, computerChoice) {
  console.log(
    `Your choice: ${humanChoice} \nComputer's choice: ${computerChoice}`,
  );
  if (humanChoice === computerChoice) {
    console.log("Tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You won the round!");
    humanScore += 1;
  } else {
    console.log("Computer won the round!");
    computerScore += 1;
  }

  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

function playGame() {
  while (computerScore !== 3 && humanScore !== 3) {
    let humanSelection = getHumanChoice();

    if (humanSelection === null) {
      console.log("Game exited.");
      return;
    }

    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else if (humanScore > computerScore) {
    console.log("You won the game!");
  }
  console.log("Press f5 to restart the game");
}

playGame();
