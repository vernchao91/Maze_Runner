import Player from './player';
import Maze from './maze';
import Item from './items'
import Wraith from './wraith'

class Game {
  constructor(ctx, canvas) {
    this.canvas = canvas
    this.ctx = ctx
    this.items = new Item(ctx, canvas)
    this.wraith = new Wraith(ctx, canvas)
    this.player = new Player(ctx, canvas)
    this.maze = new Maze(ctx, canvas)
    this.start();
  }

  draw(ctx) {
    // ctx.clearRect(0, 0, 400, 400);
    // ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
    // ctx.fillRect(0, 0, 400, 400);
  }

  listeners() {
    window.addEventListener("keydown", this.player.keyDown.bind(this));
    window.addEventListener("keyup", this.player.keyUp.bind(this));
  }

  addMaze() {
  }

  addPlayer() {
  }

  start() {
    this.animate();
  }

  animate() {
    this.player.update(this.ctx);
  }
}

export default Game