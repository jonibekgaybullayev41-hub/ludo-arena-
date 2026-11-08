// LUDO ARENA - Game Engine

let diceNumber = 0;
let currentPlayer = 0;

const players = [
  { name: "Qizil", color: "red" },
  { name: "Yashil", color: "green" },
  { name: "Sariq", color: "yellow" },
  { name: "Ko‘k", color: "blue" }
];

function rollDice() {
  diceNumber = Math.floor(Math.random() * 6) + 1;

  const dice = document.getElementById("dice");
  dice.textContent = "🎲 " + diceNumber;

  if (diceNumber !== 6) {
    nextPlayer();
  }

  return diceNumber;
}

function nextPlayer() {
  currentPlayer = (currentPlayer + 1) % players.length;

  const player = players[currentPlayer];

  const info = document.getElementById("player");
  if (info) {
    info.textContent = player.name + " navbati";
  }
}
