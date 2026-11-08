const translations = {
  en: {
    title: "LUDO ARENA",
    welcome: "Welcome to Ludo Arena!",
    roll: "ROLL DICE",
    move: "MOVE TOKEN",
    language: "Language",
    turn: "Player's turn"
  },
  uz: {
    title: "LUDO ARENA",
    welcome: "Ludo Arena ga xush kelibsiz!",
    roll: "ZAR TASHLASH",
    move: "DONANI YURITISH",
    language: "Til",
    turn: "O'yinchi navbati"
  },
  ru: {
    title: "LUDO ARENA",
    welcome: "Добро пожаловать!",
    roll: "БРОСИТЬ КУБИК",
    move: "ПЕРЕДВИНУТЬ ФИШКУ",
    language: "Язык",
    turn: "Ход игрока"
  },
  tr: {
    title: "LUDO ARENA",
    welcome: "Hoş geldiniz!",
    roll: "ZAR AT",
    move: "TAŞI HAREKET ETTİR",
    language: "Dil",
    turn: "Oyuncunun sırası"
  },
  ar: {
    title: "LUDO ARENA",
    welcome: "أهلاً بك!",
    roll: "ارمِ النرد",
    move: "حرّك القطعة",
    language: "اللغة",
    turn: "دور اللاعب"
  },
  hi: {
    title: "LUDO ARENA",
    welcome: "आपका स्वागत है!",
    roll: "पासा फेंकें",
    move: "गोटी चलाएँ",
    language: "भाषा",
    turn: "खिलाड़ी की बारी"
  },
  es: {
    title: "LUDO ARENA",
    welcome: "¡Bienvenido!",
    roll: "LANZAR DADO",
    move: "MOVER FICHA",
    language: "Idioma",
    turn: "Turno del jugador"
  },
  fr: {
    title: "LUDO ARENA",
    welcome: "Bienvenue !",
    roll: "LANCER LE DÉ",
    move: "DÉPLACER LE PION",
    language: "Langue",
    turn: "Tour du joueur"
  },
  de: {
    title: "LUDO ARENA",
    welcome: "Willkommen!",
    roll: "WÜRFELN",
    move: "FIGUR BEWEGEN",
    language: "Sprache",
    turn: "Spieler ist dran"
  },
  zh: {
    title: "LUDO ARENA",
    welcome: "欢迎来到游戏！",
    roll: "掷骰子",
    move: "移动棋子",
    language: "语言",
    turn: "玩家回合"
  }
};

function changeLanguage(lang) {
  const t = translations[lang] || translations.en;

  document.getElementById("gameTitle").textContent = t.title;
  document.getElementById("welcome").textContent = t.welcome;
  document.getElementById("rollButton").textContent = t.roll;
  document.getElementById("moveButton").textContent = t.move;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

changeLanguage("en");
