import Maze from './maze';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.dark = canvas3;
    this.ctx = ctx;
    this.fps = 60;
    this.width = this.main.width = 1200;
    this.height = this.main.height = 700;
    // this.draw = this.draw.bind(this);
    // this.sounds = new this.sounds();
    this.maze = new Maze(ctx);
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
  }
  
  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  }
  // startPause(e) {
  //   if (e.code === "Enter" && this.frames < 2) {
  //     this.canvas.style.display = "block"
  //     StartGame.style.display = "none";
  //   }
  // }

  // draw() {
  //   // this.eventListeners();
  //   let setFPS = setTimeout(() => {
  //     this.ctx.clearRect(0, 0, this.width, this.height);
  //     this.player.update();
  //     requestAnimationFrame(this.draw.bind(this))
  //   }, 1000 / this.fps)
  // }

  // gameOver(frame, setFPS) {

  // }

  // addFogOfWar(ctx) {
  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, this.width, this.height)
  //   // ctx.globalCompositeOperation = "destination-out"
  // }

  // clearFogOfWar() {

  // }

  animateMazeOne() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.maze.update();
    console.log(this.getDistance(this.maze.player.x , this.maze.player.y, this.maze.wraith.x, this.maze.wraith.y));
    requestAnimationFrame(this.animateMazeOne.bind(this));
  }

  startMazeOne() {
    this.animateMazeOne();
    // this.eventListeners();
  }

}
export default Game