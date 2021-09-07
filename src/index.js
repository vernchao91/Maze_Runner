import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // ctx.beginPath();
  // ctx.arc(5, 5, 5, 0, 2 * Math.PI);
  // ctx.stroke(); 
  
  const game = new Game(ctx, canvas);
});

