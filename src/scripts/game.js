import Maze from './maze';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.dark = canvas3;
    this.ctx = ctx;
    this.width = this.main.width = 1200;
    this.height = this.main.height = 700;
    // this.draw = this.draw.bind(this);
    // this.sounds = new this.sounds();
    this.keys = []
    this.maze1 = new Maze(ctx);
    this.pause = false;
    this.music = true;
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
  }
  
  gameEventListeners() {
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
  }

  keyDown(e) {
    this.keys[e.keyCode] = true;
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
  }
  
  pauseListener() {
    if (this.keys[80]) {
      this.togglePause();
    } else if (this.keys[77]) {
      this.toggleMute();
    }
  }

  togglePause() {
    if (!this.pause) {
      this.pause = true
      console.log("paused");
    } else {
      this.pause = false
      this.animateMazeOne();
      console.log("start");
    }
  }

  toggleMute() {
    if (this.music) {
      this.music = false;
    } else {
      this.music = true;
    }
  }

  // addFogOfWar(ctx) {

  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, this.width, this.height)
  //   // ctx.globalCompositeOperation = "destination-out"
  // }

  // clearFogOfWar() {

  // }

  animateMazeOne() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.pause = false;
    this.maze1.update();
    this.pauseListener();
    this.gameEventListeners();
    requestAnimationFrame(this.animateMazeOne.bind(this));
  }

  startMazeOne() {
    if (!this.pause) {
      this.animateMazeOne();
    } else if (this.pause) {
      return;
    }
  }

}
export default Game