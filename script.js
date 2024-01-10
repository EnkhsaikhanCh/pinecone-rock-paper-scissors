const playerChoiceElement = document.querySelector("#playerChoise");
const computerChoiseElement = document.querySelector("#computerChoise");
const scoreElement = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

let winnerScore = 3;

const choices = ["rock", "paper", "scissors"];

function playGame(move) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoise = choices[randomIndex];

  updateScore(move, computerChoise);
  displayResult(move, computerChoise);
}

function displayResult(move, computerChoise) {
  playerChoiceElement.innerText = move;
  computerChoiseElement.innerText = computerChoise;

  scoreElement.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function updateScore(move, computerChoise) {
  if (
    ("rock" === move && "scissors" === computerChoise) ||
    ("paper" === move && "rock" === computerChoise) ||
    ("scissors" === move && "paper" === computerChoise)
  ) {
    playerScore++;
  } else if (move === computerChoise) {
  } else {
    computerScore++;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerChoiceElement.innerText = "";
  computerChoiseElement.innerText = "";
  scoreElement.innerText = `Player: 0 | Computer: 0`;
}
