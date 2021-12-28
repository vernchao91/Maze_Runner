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

  // window.addEventListener("keydown", (e) => {
  //   if ((e.key === "Enter") && !game.gameRunning) {
  //     if (!game.startMenu.titleAnimation) {
  //       game.startMenu.finishAnimation();
  //     } else if (!game.startMenu.titleStartReady) {
  //       game.startMenu.titleStartReady = true;
  //     } else if (game.startMenu.titleStartReady && game.startMenu.selector.y === 695) {
  //       game.gameRunning = true
  //       game.play();
  //     }
  //   }
  // })
  
  // fog.addEventListener("click", (e) => {
  //   if (!game.gameRunning) {
  //     if (!game.startMenu.titleAnimation) {
  //       game.startMenu.finishAnimation();
  //     } else if (!game.startMenu.titleStartReady) {
  //       game.startMenu.titleStartReady = true;
  //     } else if (game.startMenu.selector.y === 590) {
  //       game.startMenu.optionsDisplay = false;
  //       game.startMenu.controlsDisplay = false;
  //       game.startMenu.howToPlayDisplay = true;
  //     } else if (game.startMenu.selector.y === 625) {
  //       game.startMenu.howToPlayDisplay = false;
  //       game.startMenu.optionsDisplay = false;
  //       game.startMenu.controlsDisplay = true;
  //     } else if (game.startMenu.selector.y === 660) {
  //       game.startMenu.controlsDisplay = false;
  //       game.startMenu.howToPlayDisplay = false;
  //       game.startMenu.optionsDisplay = true;
  //     } else if (game.startMenu.titleStartReady && game.startMenu.selector.y === 695) {
  //       game.gameRunning = true
  //       game.play();
  //     }
  //   }
  // })
});