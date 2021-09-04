import Player from './player';
import Maze from './maze';

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.items = [];
    this.ghost = [];
    this.player = new Player(this.ctx, this.canvas)

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
    const player = new Player();
  }
}

export default Game