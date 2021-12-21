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
  }

  window.addEventListener("keydown", (e) => {
    if ((e.key === "Enter") && !game.gameRunning && !game.startMenu.titleAnimation) {
      game.startMenu.finishAnimation();
    } else if ((e.key === "Enter") && !game.gameRunning && game.startMenu.titleAnimation){
      game.play();
    }
  })
  
  fog.addEventListener("click", (e) => {
    if (!game.gameRunning && !game.startMenu.titleAnimation) {
      game.startMenu.finishAnimation();
    } else if (!game.gameRunning && game.startMenu.titleAnimation){
      game.play();
    }
  })

  // if (!game.gameRunning && game.gameOver) {
  //   game.animateGameOver();
  // }

});