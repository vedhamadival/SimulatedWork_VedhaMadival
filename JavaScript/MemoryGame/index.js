const CardArray = [
   { name: 'fries', img: 'Images/fries.png' },
   { name: 'cheeseburger', img: 'Images/cheeseburger.png' },
   { name: 'hotdog', img: 'Images/hotdog.png' },
   { name: 'ice-cream', img: 'Images/ice-cream.png' },
   { name: 'milkshake', img: 'Images/milkshake.png' },
   { name: 'pizza', img: 'Images/pizza.png' },
   { name: 'fries', img: 'Images/fries.png' },
   { name: 'cheeseburger', img: 'Images/cheeseburger.png' },
   { name: 'hotdog', img: 'Images/hotdog.png' },
   { name: 'ice-cream', img: 'Images/ice-cream.png' },
   { name: 'milkshake', img: 'Images/milkshake.png' },
   { name: 'pizza', img: 'Images/pizza.png' }
];

CardArray.sort(() => 0.5 - Math.random());

let timerDisplay = null;
let timer = 0;
let timerInterval = null;

function startTimer() {
    timer = 0;
    timerDisplay.textContent = `Time: ${timer} seconds`;
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = `Time: ${timer} seconds`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const playAgainbtn = document.querySelector('#play-again-btn');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    timerDisplay = document.createElement('h2');
    timerDisplay.id = 'timer';
    timerDisplay.textContent = 'Time: 0 seconds';
    document.body.insertBefore(timerDisplay, gridDisplay);
    startTimer();
   for (let i = 0; i < CardArray.length; i++) {
       const card = document.createElement('img');
       card.setAttribute('src', 'images/blank.png');
       card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard);
       gridDisplay.appendChild(card);
   }
}

function flipCard() {
   let cardId = this.getAttribute('data-id');
   console.log('Card clicked:', cardId, CardArray[cardId].img);
   cardsChosen.push(CardArray[cardId].name);
   cardsChosenId.push(cardId);
   this.setAttribute('src', CardArray[cardId].img);
   
   if (cardsChosen.length === 2) {
       setTimeout(checkForMatch, 500);
   }
}

function checkForMatch() {
   const cards = document.querySelectorAll('img');
   const optionOneId = cardsChosenId[0];
   const optionTwoId = cardsChosenId[1];

   if (optionOneId == optionTwoId) {
       cards[optionOneId].setAttribute('src', 'images/blank.png');
       cards[optionTwoId].setAttribute('src', 'images/blank.png');
       alert('You have clicked the same image!');
   } else if (cardsChosen[0] === cardsChosen[1]) {
       alert('You found a match');
       cards[optionOneId].setAttribute('src', 'images/white.png');
       cards[optionTwoId].setAttribute('src', 'images/white.png');
       cards[optionOneId].removeEventListener('click', flipCard);
       cards[optionTwoId].removeEventListener('click', flipCard);
       cardsWon.push(cardsChosen);
   } else {
       cards[optionOneId].setAttribute('src', 'images/blank.png');
       cards[optionTwoId].setAttribute('src', 'images/blank.png');
       alert('Sorry, try again');
   }

   cardsChosen = [];
   cardsChosenId = [];
   resultDisplay.textContent = cardsWon.length;

   if (cardsWon.length === CardArray.length / 2) {
       resultDisplay.textContent = 'Congratulations! You found them all!';
   }
}

function playAgain () {
    window.location.reload();
}

playAgainbtn.addEventListener('click' , ()=>{
    playAgain();
})
createBoard();
