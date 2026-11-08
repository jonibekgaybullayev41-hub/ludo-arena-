
// LUDO ARENA - BASIC GAME ENGINE

const board = document.getElementById("board");
const dice = document.getElementById("dice");
const playerText = document.getElementById("player");

const tokenColors = ["red", "green", "yellow", "blue"];
const players = ["Qizil", "Yashil", "Sariq", "Ko‘k"];

let currentPlayer = 0;
let diceNumber = 0;
let selectedToken = null;

const playerPositions = {
  red: -1,
  green: -1,
  yellow: -1,
  blue: -1
};

const homes = [
  { color: "red", r: [0, 5], c: [0, 5] },
  { color: "green", r: [0, 5], c: [9, 14] },
  { color: "yellow", r: [9, 14], c: [0, 5] },
  { color: "blue", r: [9, 14], c: [9, 14] }
];

// TAHTA YARATISH
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

// 16 TA DONA YARATISH
const tokens = [];

const positions = {
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

    token.addEventListener("click", () => {
      if (tokenColors[currentPlayer] !== color) {
        alert("Hozir " + players[currentPlayer] + " navbati!");
        return;
      }

      if (selectedToken) {
        selectedToken.style.outline = "none";
      }

      selectedToken = token;
      token.style.outline = "3px solid white";
    });

    const [row, col] = positions[color];
    const cellIndex =
      (row + Math.floor(i / 2) * 2) * 15 +
      col + (i % 2) * 2;

    board.children[cellIndex].appendChild(token);
    tokens.push(token);
  }
});

// ZAR TASHLASH
function rollDice() {
  if (diceNumber !== 0) {
    alert("Avval oldingi yurishni bajaring!");
    return;
  }

  diceNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = "🎲 " + diceNumber;

  if (diceNumber === 6) {
    alert("6 tushdi! Donangizni tanlang.");
  }
}

// DONA YURITISH
function moveSelectedToken() {
  if (!selectedToken) {
    alert("Avval donani tanlang!");
    return;
  }

  if (diceNumber === 0) {
    alert("Avval zar tashlang!");
    return;
  }

  const color = tokenColors.find(c =>
    selectedToken.classList.contains(c)
  );

  if (playerPositions[color] === -1 && diceNumber !== 6) {
    alert("Donani uyidan chiqarish uchun 6 kerak!");

    diceNumber = 0;
    currentPlayer = (currentPlayer + 1) % 4;
    updatePlayer();
    return;
  }

  if (playerPositions[color] === -1) {
    playerPositions[color] = 0;
  } else {
    playerPositions[color] += diceNumber;
  }

  alert("Dona yurish holati yangilandi!");

  selectedToken.style.outline = "none";
  selectedToken = null;

  if (diceNumber !== 6) {
    currentPlayer = (currentPlayer + 1) % 4;
  }

  diceNumber = 0;
  dice.textContent = "🎲";

  updatePlayer();
}

// NAVBATNI YANGILASH
function updatePlayer() {
  playerText.textContent =
    players[currentPlayer] + " navbati";
}

updatePlayer();
console.log("Ludo Arena ishga tayyor!");
