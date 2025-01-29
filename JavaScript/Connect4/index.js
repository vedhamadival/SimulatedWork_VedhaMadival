document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const result = document.querySelector("#result");
  const displayCurrentPlayer = document.querySelector("#current-player");
  const playAgainBtn = document.querySelector("#playagain");

  let currentPlayer = 1;

  // Define winning combinations
  const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ];

  // Check for a win
  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const [a, b, c, d] = winningArrays[y];
      if (
        squares[a].classList.contains("player-one") &&
        squares[b].classList.contains("player-one") &&
        squares[c].classList.contains("player-one") &&
        squares[d].classList.contains("player-one")
      ) {
        result.textContent = "Player One Wins!";
        disableBoard();
        return;
      } else if (
        squares[a].classList.contains("player-two") &&
        squares[b].classList.contains("player-two") &&
        squares[c].classList.contains("player-two") &&
        squares[d].classList.contains("player-two")
      ) {
        result.textContent = "Player Two Wins!";
        disableBoard();
        return;
      }
    }
  }

  // Disable board clicks
  function disableBoard() {
    squares.forEach((square) => square.removeEventListener("click", handleClick));
  }

  // Reset the game
  function resetBoard() {
    squares.forEach((square) => {
      square.classList.remove("taken", "player-one", "player-two");
    });
    result.textContent = "";
    currentPlayer = 1;
    displayCurrentPlayer.textContent = currentPlayer;
    addClickHandlers();
  }

  // Handle click event
  function handleClick() {
    const index = Array.from(squares).indexOf(this);
    if (
      squares[index + 7]?.classList.contains("taken") || // Valid move (column below is taken)
      index >= 35 // Bottom row
    ) {
      if (!this.classList.contains("taken")) {
        if (currentPlayer === 1) {
          this.classList.add("taken", "player-one");
          currentPlayer = 2;
        } else {
          this.classList.add("taken", "player-two");
          currentPlayer = 1;
        }
        displayCurrentPlayer.textContent = currentPlayer;
        checkBoard();
      }
    } else {
      alert("Invalid move! You can't place here.");
    }
  }

  // Add click handlers to grid squares
  function addClickHandlers() {
    squares.forEach((square) => square.addEventListener("click", handleClick));
  }

  // Initialize the game
  addClickHandlers();

  // Reset the game on "Play Again"
  playAgainBtn.addEventListener("click", resetBoard);
});
