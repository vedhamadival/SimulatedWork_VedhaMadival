const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorbtn = document.getElementById("scissor");
const playAgainbtn = document.getElementById("reset");
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

let userChoice;
let computerChoice;
let result;
let score = 0;

rockbtn.addEventListener("click", () => handleUserChoice("Rock"));
paperbtn.addEventListener("click", () => handleUserChoice("Paper"));
scissorbtn.addEventListener("click", () => handleUserChoice("Scissor"));

playAgainbtn.addEventListener("click", () => {
  playAgain();
});

function handleUserChoice(choice) {
  userChoice = choice;
  userChoiceDisplay.innerText = userChoice;
  generateComputerChoice();
  getResult();
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissor";
      break;
  }
  computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw!";
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissor") ||
    (computerChoice === "Scissor" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Rock")
  ) {
    result = "You lost!";
  } else {
    result = "You won!";
    score++;
  }
  resultDisplay.innerText = result;
  scoreDisplay.innerText = score;
}

function playAgain() {
  console.log("Play again clicked");
  score = 0;
  scoreDisplay.innerText = score;
  computerChoiceDisplay.innerText= "";
  userChoiceDisplay.innerText = "";
  resultDisplay.inn = "";
}
