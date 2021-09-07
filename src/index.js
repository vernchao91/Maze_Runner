import Game from "./scripts/game";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // ctx.beginPath();
  // ctx.arc(5, 5, 5, 0, 2 * Math.PI);
  // ctx.stroke(); 
  // const playerSprite = new Image();
  // playerSprite.src = 'src/assets/hero-spritesheet.png'
  // playerSprite.onload = () => {ctx.drawImage(playerSprite, 130, 29, 650, 650, 0, 0, 75, 75)}
  
  const game = new Game(ctx, canvas);
});