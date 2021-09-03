import Player from './player';
import Maze from './maze';

class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2D")
    this.addMaze = new Maze();
    this.addPlayer = new Player();
  }

  addMaze() {
  }

  addPlayer() {
    const player = new Player
  }
}



export default Game;