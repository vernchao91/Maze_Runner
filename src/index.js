import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  const mainCanvas = document.getElementById("mainCanvas");
  const fog = document.getElementById("fog")
  const dark = document.getElementById("dark")

  const ctx = mainCanvas.getContext("2d");
  // canvas width = 1200, canvas height = 700;
  const game = new Game(ctx, mainCanvas);
});