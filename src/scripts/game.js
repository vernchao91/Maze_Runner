import Player from './player';
import Maze from './maze';
import Item from './items'
import Wraith from './wraith'

class Game {
  constructor(ctx, canvas) {
    this.canvas = canvas
    this.ctx = ctx
    this.fps = 60;
    this.width = this.canvas.width = 1200;
    this.height = this.canvas.height = 700;
    // this.sounds = new this.sounds();
    this.draw = this.draw.bind(this)
    this.maze = new Maze(ctx)
    this.wraith = new Wraith(ctx)
    this.items = new Item(ctx)
    this.player = new Player(ctx, this.maze, this.items.door)
    // this.start();
  }

  eventListeners() {
    window.addEventListener("keydown", this.player.keyDown.bind(this));
    window.addEventListener("keyup", this.player.keyUp.bind(this));
    window.addEventListener("keypress", this.items.keyPress.bind(this))
    // window.addEventListener("keypress", this.startPause.bind(this));
  }

  // startPause(e) {
  //   if (e.code === "Enter" && this.frames < 2) {
  //     this.canvas.style.display = "block"
  //     StartGame.style.display = "none";
  //   }
  // }

  draw() {
    // this.eventListeners();
    let setFPS = setTimeout(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.maze.update();



      this.player.update(this.maze.objects);
      this.items.update();
      window.requestAnimationFrame(this.draw)
    }, 1000 / this.fps)
  }

  // gameOver(frame, setFPS) {

  // }

  animate() {
    // this.playerCollision();
    this.player.update();
    requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    // this.playerCollision();
    this.animate();
    this.eventListeners();
    this.draw();
  }

}

export default Game