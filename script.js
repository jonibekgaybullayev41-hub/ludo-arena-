
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

// BOARD
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
      r >= h.r[0] && r <= h.r[1] &&
      c >= h.c[0] && c <= h.c[1]
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

// MOVEMENT PATH
const gamePath = [
  [6,1],[6,2],[6,3],[6,4],[6,5],
  [5,6],[4,6],[3,6],[2,6],[1,6],
  [0,6],[0,7],[0,8],
  [1,8],[2,8],[3,8],[4,8],[5,8],
  [6,9],[6,10],[6,11],[6,12],[6,13],
  [6,14],[7,14],[8,14],
  [8,13],[8,12],[8,11],[8,10],[8,9],
  [9,8],[10,8],[11,8],[12,8],[13,8],
  [14,8],[14,7],[14,6],
  [13,6],[12,6],[11,6],[10,6],[9,6],
  [8,5],[8,4],[8,3],[8,2],[8,1],
  [8,0],[7,0],[6,0]
];

const startOffsets = {
  red: 0,
  green: 13,
  blue: 26,
  yellow: 39
};

const homePositions = {
  red: [1, 1],
  green: [1, 10],
  yellow: [10, 1],
  blue: [10, 10]
};

// CREATE TOKENS
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

// SELECT TOKEN
function selectToken(color, index, token) {
  if (tokenColors[currentPlayer] !== color) {
    alert("Hozir " + players[currentPlayer] + " navbati!");
    return;
  }

  if (diceNumber === 0) {
    alert("Avval zar tashlang!");
    return;
  }

  if (selectedToken) {
    selectedToken.element.style.outline = "none";
  }

  selectedToken = { color, index, element: token };
  token.style.outline = "3px solid white";
}

// ROLL DICE
function rollDice() {
  if (diceNumber !== 0) {
    alert("Avval donani yurgizing!");
    return;
  }

  diceNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = "🎲 " + diceNumber;

  updatePlayer();

  const color = tokenColors[currentPlayer];

  const canMove = playerPositions[color].some(
    position => position !== -1 || diceNumber === 6
  );

  if (!canMove) {
    alert("Bu safar yurish mumkin emas!");
    finishTurn();
  }
}

// MOVE TOKEN
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
  const token = selectedToken.element;

  if (color !== tokenColors[currentPlayer]) {
    return;
  }

  let position = playerPositions[color][index];

  if (position === -1) {
    if (diceNumber !== 6) {
      alert("Donani chiqarish uchun 6 kerak!");
      return;
    }
    position = 0;
  } else {
    position += diceNumber;
  }

  position = position % gamePath.length;
  playerPositions[color][index] = position;

  const pathIndex =
    (startOffsets[color] + position) % gamePath.length;

  const [row, col] = gamePath[pathIndex];
  const cellIndex = row * 15 + col;

  board.children[cellIndex].appendChild(token);

  token.style.outline = "none";
  selectedToken = null;

  finishTurn();
}

// PLAYER TURN
function finishTurn() {
  const rolledSix = diceNumber === 6;

  if (!rolledSix) {
    currentPlayer = (currentPlayer + 1) % 4;
  }

  diceNumber = 0;
  selectedToken = null;
  dice.textContent = "🎲";

  updatePlayer();
}

// UPDATE PLAYER
function updatePlayer() {
  playerText.textContent =
    players[currentPlayer] + " navbati";
}

updatePlayer();

console.log("LUDO ARENA GAME ENGINE READY!");
