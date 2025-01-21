const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const squares = document.querySelectorAll(".square");
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function RandomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomPosition = squares[Math.floor(Math.random() * squares.length)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function MoveMole() {
    timerId = setInterval(RandomSquare, 500);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

let countDownTimerId = setInterval(countDown, 1000);
MoveMole();
