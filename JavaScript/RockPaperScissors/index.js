const buttons = document.querySelectorAll('button');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');

let userChoice;
let computerChoice;
let result;


buttons.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.textContent;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoice = 'Rock';
            break;
        case 1:
            computerChoice = 'Paper';
            break;
        case 2:
            computerChoice = 'Scissor';
            break;
    }
    computerChoiceDisplay.innerText = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!';
    } else if ((computerChoice === 'Rock' && userChoice === 'Scissor') ||
               (computerChoice === 'Scissor' && userChoice === 'Paper') ||
               (computerChoice === 'Paper' && userChoice === 'Rock')) {
        result = 'You lost!';
    } else {
        result = 'You won!';
    }
    resultDisplay.innerText = result;
}
