function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1 / 3) {
    computerChoice = "Rock";
  } else if (computerChoice <= 2 / 3 && computerChoice > 1 / 3) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  while (true) {
    let humanChoice = prompt("Choice(Rock/Paper/Scissors): ").toLowerCase();
    if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    ) {
      console.log("Invalid choice!");
    } else {
      console.log(humanChoice);
      return;
    }
  }
}

getHumanChoice();
