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
