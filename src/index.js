import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  const mainCanvas = document.getElementById("mainCanvas");
  const fog = document.getElementById("fog")
  const dark = document.getElementById("dark")
  
  const ctx = mainCanvas.getContext("2d");
  // canvas width = 1200, canvas height = 700;
  const game = new Game(ctx, mainCanvas, fog, dark);

  // window.addEventListener('keydown', function (e) {
  //   if (e.key !== undefined) {
  //     } else if (e.keyIdentifier !== undefined) {
  //     } else if (e.keyCode !== undefined) {
  //     }
  //   if (e.keyCode == 32 && e.target == document.body) {
  //     e.preventDefault();
  //   }
  // });
  game.startMazeOne();
});