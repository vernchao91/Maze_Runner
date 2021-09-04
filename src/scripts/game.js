import Player from './player';
import Maze from './maze';

export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2D")
    // this.addMaze = new Maze();
    // this.addPlayer = new Player();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    ctx.fillRect(0, 0, 400, 400);
  } 

  addMaze() {
  }

  addPlayer() {
    // const player = new Player();
  }
}

// export default Game;