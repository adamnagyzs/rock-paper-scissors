const playGameButton = document.getElementById("playGameButton");
const choiceButtons = document.getElementById("choiceButtons");

playGameButton.addEventListener("click", () => {
  if (document.getElementById("choiceButtonsSpan")) {
    return;
  }
  const choiceButtonsSpan = document.createElement("span");
  choiceButtonsSpan.id = "choiceButtonsSpan";
  const rockButton = document.createElement("button");
  rockButton.id = "rockButton";
  rockButton.textContent = "Rock";
  rockButton.addEventListener("click", () => {
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
  });

  const paperButton = document.createElement("button");
  paperButton.id = "paperButton";
  paperButton.textContent = "Paper";
  paperButton.addEventListener("click", () => {
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
  });

  const scissorsButton = document.createElement("button");
  scissorsButton.id = "scissorsButton";
  scissorsButton.textContent = "Scissors";
  scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
  });

  choiceButtonsSpan.append(rockButton, paperButton, scissorsButton);
  choiceButtons.appendChild(choiceButtonsSpan);
});

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

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice, computerChoice) {
  if (gameOver) {
    return;
  }
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

  if (humanScore === 3) {
    console.log("Congrats, you won!");
    gameOver = true;
  }
  if (computerScore === 3) {
    console.log("You lost!");
    gameOver = true;
  }
  if (gameOver) {
    newGameContainer = document.getElementById("newGameContainer");
    newGameButton = document.createElement("button");
    newGameButton.id = "newGameButton";
    newGameButton.textContent = "New Game";

    newGameContainer.appendChild(newGameButton);
    newGameButton.addEventListener("click", (e) => {
      console.clear();
      humanScore = 0;
      computerScore = 0;
      gameOver = false;
      e.target.remove();
    });
  }
}
