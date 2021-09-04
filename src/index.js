import Game from "./scripts/game";
import GameView from "./scripts/game_view"

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  
  const game = new Game();
  
});
