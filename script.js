
// =================================
// LUDO ARENA - GAME ENGINE
// =================================

const board = document.getElementById("board");
const dice = document.getElementById("dice");
const playerText = document.getElementById("player");

const tokenColors = ["red", "green", "yellow", "blue"];

const players = ["Qizil", "Yashil", "Sariq", "Ko‘k"];

let currentPlayer = 0;
let diceNumber = 0;
let selectedToken = null;

const playerPositions = {
  red: [-1, -1, -1, -1],
  green: [-1, -1, -1, -1],
  yellow: [-1, -1, -1, -1],
  blue: [-1, -1, -1, -1]
};

const tokenElements = {
  red: [],
  green: [],
  yellow: [],
  blue: []
};

// =================================
// BOARD
// =================================

const homes = [
  { color: "red", r: [0, 5], c: [0, 5] },
  { color: "green", r: [0, 5], c: [9, 14] },
  { color: "yellow", r: [9, 14], c: [0, 5] },
  { color: "blue", r: [9, 14], c: [9, 14] }
];

board.innerHTML = "";

for (let r = 0; r < 15; r++) {
  for (let c = 0; c < 15; c++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    const home = homes.find(h =>
      r >= h.r[0] &&
      r <= h.r[1] &&
      c >= h.c[0] &&
      c <= h.c[1]
    );

    if (home) {
      cell.classList.add(home.color);
    } else if (
      r >= 6 && r <= 8 &&
      c >= 6 && c <= 8
    ) {
      cell.classList.add("center");
    }

    board.appendChild(cell);
  }
}

// =================================
// TOKEN CREATION
// =================================

const homePositions = {
  red: [1, 1],
  green: [1, 10],
  yellow: [10, 1],
  blue: [10, 10]
};

tokenColors.forEach(color => {
  for (let i = 0; i < 4; i++) {
    const token = document.createElement("div");

    token.className = "token " + color;
    token.textContent = "●";

    token.style.fontSize = "23px";
    token.style.cursor = "pointer";

    token.addEventListener("click", () => {
      selectToken(color, i, token);
    });

    const [row, col] = homePositions[color];

    const cellIndex =
      (row + Math.floor(i / 2) * 2) * 15 +
      col + (i % 2) * 2;

    board.children[cellIndex].appendChild(token);

    tokenElements[color].push(token);
  }
});

// =================================
// SELECT TOKEN
// =================================

function selectToken(color, index, token) {
  if (tokenColors[currentPlayer] !== color) {
    alert("Hozir " + players[currentPlayer] + " navbati!");
    return;
  }

  if (selectedToken) {
    selectedToken.element.style.outline = "none";
  }

  selectedToken = {
    color: color,
    index: index,
    element: token
  };

  token.style.outline = "3px solid white";
}

// =================================
// ROLL DICE
// =================================

function rollDice() {
  if (diceNumber !== 0) {
    alert("Avval donani yurgizing!");
    return;
  }

  diceNumber = Math.floor(Math.random() * 6) + 1;

  dice.textContent = "🎲 " + diceNumber;

  alert("Zar natijasi: " + diceNumber);

  if (diceNumber !== 6) {
    playerText.textContent =
      players[currentPlayer] + " navbati";
  }
}

// =================================
// MOVE TOKEN
// =================================

function moveSelectedToken() {
  if (!selectedToken) {
    alert("Avval donani tanlang!");
    return;
  }

  if (diceNumber === 0) {
    alert("Avval zar tashlang!");
    return;
  }

  const color = selectedToken.color;
  const index = selectedToken.index;

  if (
    playerPositions[color][index] === -1 &&
    diceNumber !== 6
  ) {
    alert("Donani uyidan chiqarish uchun 6 kerak!");

    finishTurn();
    return;
  }

  if (playerPositions[color][index] === -1) {
    playerPositions[color][index] = 0;
  } else {
    playerPositions[color][index] += diceNumber;
  }

  alert(
    players[currentPlayer] +
    " donasining yurish holati yangilandi!"
  );

  selectedToken.element.style.outline = "none";
  selectedToken = null;

  finishTurn();
}

// =================================
// PLAYER TURN
// =================================

function finishTurn() {
  if (diceNumber !== 6) {
    currentPlayer = (currentPlayer + 1) % 4;
  }

  diceNumber = 0;
  dice.textContent = "🎲";

  updatePlayer();
}

function updatePlayer() {
  playerText.textContent =
    players[currentPlayer] + " navbati";
}

updatePlayer();

console.log("LUDO ARENA GAME ENGINE READY!");
