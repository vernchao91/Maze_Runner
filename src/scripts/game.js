import Maze from './maze';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.dark = canvas3;
    this.ctx = ctx;
    this.width = this.main.width = 1200;
    this.height = this.main.height = 700;
    this.keys = [];
    this.maze1 = new Maze(ctx);
    // this.pausePage = new Image();
    // this.pausePage.src = "src/assets/tile-sheet.png";
    this.gameRunning = false;
    this.pause = false;
    this.music = true;
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.clickListener = this.clickListener.bind(this);
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
    this.ctx.canvas.addEventListener("mousedown", this.clickListener.bind(this));
  }
  
  keyDown(e) {
    e.preventDefault();
    this.keys[e.keyCode] = true;
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
  }

  clickListener(e) {
    if (this.gameRunning) {
      this.togglePause();
    }
  }
  
  pauseListener() {
    if (this.keys[80]) {
      this.togglePause();
      delete this.keys[80]
    } else if (this.keys[77]) {
      this.toggleMute();
      delete this.keys[77]
    }
  }

  togglePause() {
    this.pause = !this.pause;
  }

  toggleMute() {
    this.music = !this.music
  }

  play() {
    this.gameRunning = true;
    this.animateMazeOne();
  }

  // addFogOfWar(ctx) {
  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, this.width, this.height);
  //   // ctx.globalCompositeOperation = "destination-out";
  // }

  // clearFogOfWar() {
  
  // }


  animateMazeOne() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.pauseListener();
    if (!this.pause) {
      this.maze1.update();
    }
    requestAnimationFrame(this.animateMazeOne.bind(this))
  }

}

export default Game