const playerChoiceElement = document.querySelector("#playerChoise");
const computerChoiseElement = document.querySelector("#computerChoise");
const scoreElement = document.querySelector("#score");
const moveButtons = document.querySelectorAll(".move");

let playerScore = 0;
let computerScore = 0;

let winnerScore = 3;

const choices = ["rock", "paper", "scissors"];

function playGame(move) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoise = choices[randomIndex];

  updateScore(move, computerChoise);
  displayResult(move, computerChoise);
  checkGameEnd();
}

function displayResult(move, computerChoise) {
  playerChoiceElement.innerText = move;
  computerChoiseElement.innerText = computerChoise;

  scoreElement.innerHTML = `
  <p class="score">${playerScore}<br />Player</p>
  <p class="score">${computerScore}<br />Computer</p>
  `;
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
  scoreElement.innerHTML = `
  <p class="score">0<br />Player</p>
  <p class="score">0<br />Computer</p>
  `;
  moveButtons.forEach(enableButtons);
}

function checkGameEnd() {
  if (playerScore === winnerScore || computerScore === winnerScore) {
    moveButtons.forEach(disableButtons);
  }
}
function disableButtons(button) {
  button.disabled = true;
}

function enableButtons(button) {
  button.disabled = false;
}

console.log(moveButtons);
