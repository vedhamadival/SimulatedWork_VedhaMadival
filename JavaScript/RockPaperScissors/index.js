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

// Emojis for the game
const ROCK_EMOJI = "✊";
const PAPER_EMOJI = "✋";
const SCISSOR_EMOJI = "✌️";

rockbtn.addEventListener("click", () => handleUserChoice(ROCK_EMOJI));
paperbtn.addEventListener("click", () => handleUserChoice(PAPER_EMOJI));
scissorbtn.addEventListener("click", () => handleUserChoice(SCISSOR_EMOJI));

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
      computerChoice = ROCK_EMOJI;
      break;
    case 1:
      computerChoice = PAPER_EMOJI;
      break;
    case 2:
      computerChoice = SCISSOR_EMOJI;
      break;
  }
  computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === ROCK_EMOJI && userChoice === SCISSOR_EMOJI) ||
    (computerChoice === SCISSOR_EMOJI && userChoice === PAPER_EMOJI) ||
    (computerChoice === PAPER_EMOJI && userChoice === ROCK_EMOJI)
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
  computerChoiceDisplay.innerText = "";
  userChoiceDisplay.innerText = "";
  resultDisplay.innerText = "";
}
