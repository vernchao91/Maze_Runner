import Player from './player';
import Maze from './maze';
import Item from './items'
import Wraith from './wraith'

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.items = new Item(this.ctx, this.canvas)
    this.wraith = new Wraith(this.ctx, this.canvas)
    this.player = new Player(this.ctx, this.canvas)
    this.maze = new Maze(this.ctx, this.canvas)
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