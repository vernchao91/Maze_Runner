import Game from "./scripts/game";
import Player from "./scripts/player"

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("canvas");
  const newGame = new Game(canvas);
  const player = new Player();
  console.log(player);
  

})