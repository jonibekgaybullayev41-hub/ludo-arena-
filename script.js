// LUDO ARENA - Board

const board = document.getElementById("board");

const homes = [
  { color: "red", r: [0, 5], c: [0, 5] },
  { color: "green", r: [0, 5], c: [9, 14] },
  { color: "yellow", r: [9, 14], c: [0, 5] },
  { color: "blue", r: [9, 14], c: [9, 14] }
];

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

// Zar tashlash
let currentPlayer = 0;

const players = [
  "Qizil", "Yashil", "Sariq", "Ko‘k"
];

function rollDice() {
  const number = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dice").textContent =
    "🎲 " + number;

  if (number !== 6) {
    currentPlayer = (currentPlayer + 1) % 4;
  }

  document.getElementById("player").textContent =
    players[currentPlayer] + " navbati";
}
// LUDO ARENA - 16 ta o'yin donasi

const tokenColors = [
  "red", "green", "yellow", "blue"
];

const tokens = [];

tokenColors.forEach(color => {
  for (let i = 0; i < 4; i++) {
    const token = document.createElement("div");

    token.className = "token " + color;
    token.textContent = "●";

    token.style.fontSize = "23px";
    token.style.fontWeight = "bold";
    token.style.position = "absolute";

    tokens.push(token);
  }
});

console.log("16 ta o'yin donasi tayyor!");
// Donalarni taxtaga joylashtirish
const positions = {
  red: [1, 1],
  green: [1, 10],
  yellow: [10, 1],
  blue: [10, 10]
};

tokens.forEach((token, index) => {
  const color = tokenColors[Math.floor(index / 4)];
  const [row, col] = positions[color];

  const offset = index % 4;

  const cellIndex =
    (row + Math.floor(offset / 2) * 2) * 15 +
    col + (offset % 2) * 2;

  const cell = board.children[cellIndex];

  if (cell) {
    cell.appendChild(token);
  }
});
// Donani tanlash
let selectedToken = null;

tokens.forEach(token => {
  token.addEventListener("click", () => {
    if (selectedToken) {
      selectedToken.style.outline = "none";
    }

    selectedToken = token;
    selectedToken.style.outline = "3px solid white";
  });
});
// LUDO ARENA - O'yin yo'li

const gamePath = [
  [6,1], [6,2], [6,3], [6,4], [6,5],
  [5,6], [4,6], [3,6], [2,6], [1,6],
  [0,6], [0,7], [0,8],
  [1,8], [2,8], [3,8], [4,8], [5,8],
  [6,9], [6,10], [6,11], [6,12], [6,13],
  [6,14], [7,14], [8,14],
  [8,13], [8,12], [8,11], [8,10], [8,9],
  [9,8], [10,8], [11,8], [12,8], [13,8],
  [14,8], [14,7], [14,6],
  [13,6], [12,6], [11,6], [10,6], [9,6],
  [8,5], [8,4], [8,3], [8,2], [8,1],
  [8,0], [7,0], [6,0]
];

console.log("Ludo yo'li:", gamePath.length, "katak");
// O'yinchilar uchun yurish holati
const playerPositions = {
  red: -1,
  green: -1,
  yellow: -1,
  blue: -1
};

// Tanlangan donaning rangini aniqlash
function moveSelectedToken() {
  if (!selectedToken) {
    alert("Avval donani tanlang!");
    return;
  }

  const color = tokenColors.find(c =>
    selectedToken.classList.contains(c)
  );

  if (!color) return;

  if (diceNumber === 0) {
    alert("Avval zar tashlang!");
    return;
  }

  if (playerPositions[color] === -1 && diceNumber !== 6) {
    alert("Donani uyidan chiqarish uchun 6 kerak!");
    return;
  }

  playerPositions[color] =
    playerPositions[color] === -1
      ? 0
      : playerPositions[color] + diceNumber;

  alert(color + " donasi yurish uchun tayyor!");
  selectedToken = null;
}
           
