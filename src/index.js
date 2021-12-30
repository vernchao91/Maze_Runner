import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  
  const mainCanvas = document.getElementById("mainCanvas");
  const fog = document.getElementById("fog");
  const dark = document.getElementById("dark");
  
  const mainctx = mainCanvas.getContext("2d");
  const fogctx = fog.getContext("2d");
  // const darkctx = dark.getContext("2d");
  const game = new Game(mainctx, mainCanvas, fog, dark);
  
  if (!game.gameRunning) {
    game.animateStartMenu();
  };
});