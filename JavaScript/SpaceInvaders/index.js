const grid = document.querySelector('.grid');
const squares = []; // Store squares for quick access
const resultsDisplay = document.querySelector('.results');
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invadersId;
let goingRight = true;
let aliensRemoved = [];
let results = 0;

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
];

// Create grid cells
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    squares.push(square);
}

function draw() {
    alienInvaders.forEach((invader, i) => {
        if (!aliensRemoved.includes(i)) {
            squares[invader].classList.add('invader');
        }
    });
}

draw();

function remove() {
    alienInvaders.forEach(invader => squares[invader].classList.remove('invader'));
}

squares[currentShooterIndex].classList.add('shooter');

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    if (e.key === 'ArrowLeft' && currentShooterIndex % width !== 0) {
        currentShooterIndex -= 1;
    } else if (e.key === 'ArrowRight' && currentShooterIndex % width < width - 1) {
        currentShooterIndex += 1;
    }
    squares[currentShooterIndex].classList.add('shooter');
}

document.addEventListener('keydown', moveShooter);

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge && goingRight) {
        alienInvaders.forEach((_, i) => (alienInvaders[i] += width + 1));
        direction = -1;
        goingRight = false;
    } else if (leftEdge && !goingRight) {
        alienInvaders.forEach((_, i) => (alienInvaders[i] += width - 1));
        direction = 1;
        goingRight = true;
    }
    alienInvaders.forEach((_, i) => (alienInvaders[i] += direction));
    draw();

    // Check if invaders reach the bottom row
    if (alienInvaders.some(invader => invader >= 210)) {
        resultsDisplay.innerHTML = 'GAME OVER';
        clearInterval(invadersId);
    }

    // Check if an invader collides with the shooter
    if (squares[currentShooterIndex].classList.contains('invader')) {
        resultsDisplay.innerHTML = 'GAME OVER';
        clearInterval(invadersId);
    }

    if (aliensRemoved.length === alienInvaders.length) {
        resultsDisplay.innerHTML = 'YOU WIN';
        clearInterval(invadersId);
    }
}

invadersId = setInterval(moveInvaders, 600);

function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser() {
        if (currentLaserIndex >= width) {
            squares[currentLaserIndex].classList.remove('laser');
            currentLaserIndex -= width;
            squares[currentLaserIndex].classList.add('laser');
        } else {
            squares[currentLaserIndex].classList.remove('laser'); // Remove laser at the top
            clearInterval(laserId);
        }

        // Check if laser hits an invader
        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('invader', 'laser');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
            aliensRemoved.push(alienRemoved);
            results++;
            resultsDisplay.innerHTML = results;
        }
    }

    if (e.key === ' ') {
        laserId = setInterval(moveLaser, 100);
    }
}

document.addEventListener('keydown', shoot);

