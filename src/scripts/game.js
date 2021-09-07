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