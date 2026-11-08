
const translations = {
  en: {
    title: "LUDO ARENA",
    language: "🌍 Language:",
    welcome: "Welcome to Ludo Arena!",
    turn: "Red player's turn",
    roll: "ROLL DICE",
    move: "MOVE TOKEN"
  },
  uz: {
    title: "LUDO ARENA",
    language: "🌍 Til:",
    welcome: "Ludo Arena ga xush kelibsiz!",
    turn: "Qizil o'yinchi navbati",
    roll: "ZAR TASHLASH",
    move: "DONANI YURITISH"
  },
  ru: {
    title: "ЛУДО АРЕНА",
    language: "🌍 Язык:",
    welcome: "Добро пожаловать в Ludo Arena!",
    turn: "Ход красного игрока",
    roll: "БРОСИТЬ КУБИК",
    move: "ПЕРЕДВИНУТЬ ФИШКУ"
  },
  tr: {
    title: "LUDO ARENA",
    language: "🌍 Dil:",
    welcome: "Ludo Arena'ya hoş geldiniz!",
    turn: "Kırmızı oyuncunun sırası",
    roll: "ZAR AT",
    move: "TAŞI HAREKET ETTİR"
  },
  ar: {
    title: "لودو أرينا",
    language: "🌍 اللغة:",
    welcome: "مرحباً بك في لودو أرينا!",
    turn: "دور اللاعب الأحمر",
    roll: "ارمِ النرد",
    move: "حرّك القطعة"
  },
  hi: {
    title: "लूडो एरीना",
    language: "🌍 भाषा:",
    welcome: "लूडो एरीना में आपका स्वागत है!",
    turn: "लाल खिलाड़ी की बारी",
    roll: "पासा फेंकें",
    move: "गोटी चलाएँ"
  },
  es: {
    title: "LUDO ARENA",
    language: "🌍 Idioma:",
    welcome: "¡Bienvenido a Ludo Arena!",
    turn: "Turno del jugador rojo",
    roll: "LANZAR DADO",
    move: "MOVER FICHA"
  },
  fr: {
    title: "LUDO ARENA",
    language: "🌍 Langue :",
    welcome: "Bienvenue dans Ludo Arena !",
    turn: "Tour du joueur rouge",
    roll: "LANCER LE DÉ",
    move: "DÉPLACER LE PION"
  },
  de: {
    title: "LUDO ARENA",
    language: "🌍 Sprache:",
    welcome: "Willkommen bei Ludo Arena!",
    turn: "Roter Spieler ist dran",
    roll: "WÜRFELN",
    move: "FIGUR BEWEGEN"
  },
  zh: {
    title: "飞行棋竞技场",
    language: "🌍 语言：",
    welcome: "欢迎来到 Ludo Arena！",
    turn: "红色玩家回合",
    roll: "掷骰子",
    move: "移动棋子"
  }
};

function changeLanguage(lang) {
  const t = translations[lang] || translations.en;

  document.getElementById("gameTitle").textContent = "🎲 " + t.title;
  document.getElementById("languageLabel").textContent = t.language;
  document.getElementById("welcome").textContent = t.welcome;
  document.getElementById("player").textContent = t.turn;
  document.getElementById("rollButton").textContent = t.roll;
  document.getElementById("moveButton").textContent = t.move;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

changeLanguage("en");
