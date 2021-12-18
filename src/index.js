import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  const mainCanvas = document.getElementById("mainCanvas");
  const fog = document.getElementById("fog")
  const dark = document.getElementById("dark")
  
  const ctx = mainCanvas.getContext("2d");
  const game = new Game(ctx, mainCanvas, fog, dark);

  window.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !game.running) {
      game.play();
      game.running = true;
    }
  })
  
  window.addEventListener("click", (e) => {
    if (!game.running) {
      game.play();
      game.running = true;
    }
  })

});