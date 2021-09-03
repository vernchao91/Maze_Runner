import Player from './player'
import Maze from './maze1'

class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2D")
    this.addLevel();
  }

  addMaze() {
  }

  addPlayer() {
    const player = new Player
  }
}



export default Game;