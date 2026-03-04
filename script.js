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
  const outputScript = document.getElementById("outputScript");
  outputScript.textContent = `Your choice: ${humanChoice} \nComputer's choice: ${computerChoice}\n`;
  if (humanChoice === computerChoice) {
    outputScript.textContent += "Tie!\n";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    outputScript.textContent += "You won the round!\n";
    humanScore += 1;
  } else {
    outputScript.textContent += "Computer won the round!\n";
    computerScore += 1;
  }
  outputScript.textContent += `Your score: ${humanScore}\nComputer's score: ${computerScore}\n`;

  if (humanScore === 3) {
    outputScript.textContent += "Congrats, you won!\n";
    gameOver = true;
  }
  if (computerScore === 3) {
    outputScript.textContent += "You lost! \n";
    gameOver = true;
  }
  if (gameOver) {
    newGameContainer = document.getElementById("newGameContainer");
    newGameButton = document.createElement("button");
    newGameButton.id = "newGameButton";
    newGameButton.textContent = "New Game";

    newGameContainer.appendChild(newGameButton);
    newGameButton.addEventListener("click", (e) => {
      outputScript.textContent = "";
      humanScore = 0;
      computerScore = 0;
      gameOver = false;
      e.target.remove();
    });
  }
}
