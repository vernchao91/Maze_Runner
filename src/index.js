import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  
  const mainCanvas = document.getElementById("mainCanvas");
  const fog = document.getElementById("fog");
  const dark = document.getElementById("dark");
  
  const ctx = mainCanvas.getContext("2d");
  const game = new Game(ctx, mainCanvas, fog, dark);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !game.gameRunning) {
      game.play();
    }
  })
  
  mainCanvas.addEventListener("click", (e) => {
    if (!game.gameRunning) {
      game.play();
    }
  })

});