import Maze1 from './maze1';
import StartMenu from './startmenu';
import PauseMenu from './pausemenu';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    // this.dark = canvas3;
    this.ctx = ctx;
    this.fogctx = canvas2.getContext("2d");
    // this.darkctx = canvas3.getContext("2d");
    this.main.width = 1200;
    this.main.height = 700;
    this.fog.width = 1200;
    this.fog.height = 700;
    // this.dark.width = 1200;
    // this.dark.height = 700;
    this.keys = [];
    this.startMenu = new StartMenu(ctx);
    this.pauseMenu = new PauseMenu(ctx);
    this.maze1 = new Maze1(ctx, this.fogctx);
    this.maze1Win = false;
    this.gameRunning = false;
    this.pause = false;
    this.music = true;
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.clickListener = this.clickListener.bind(this);
    // this.ctx.shadowBlur = 150;
    // this.ctx.shadowColor = 'black';
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
    this.fogctx.canvas.addEventListener("mousedown", this.clickListener.bind(this));
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

  // addFogOfWar(fogctx) {
  //   // fogctx.globalAlpha = .1;
  //   fogctx.fillStyle = "black";
  //   fogctx.fillRect(0, 0, this.main.width, this.main.height);
  //   fogctx.globalCompositeOperation = "destination-out";
  //   let fogGR = fogctx.createRadialGradient(this.maze1.player.x + 30, this.maze1.player.y + 30, 100, this.maze1.player.x + 30, this.maze1.player.y + 30, 100 / 1.2);
  //   // let fogGR = fogctx.createRadialGradient(1, 1, 1, 1, 1, 1);
  //   fogGR.addColorStop(0, "rgba(0,0,0,0)");
  //   fogGR.addColorStop(1, "rgba(0,0,0,1)");
  //   fogctx.fillStyle = fogGR;
  //   fogctx.beginPath();
  //   fogctx.arc(this.maze1.player.x + 30, this.maze1.player.y + 30, 100, 0, 2 * Math.PI);
  //   // fogctx.arc(200, 200, 50, 0, 2 * Math.PI);
  //   fogctx.closePath();
  //   fogctx.fill();
  //   fogctx.globalCompositeOperation = "source-over";
  // }

  // addDarkness(ctx) {

  // }

  animatePauseMenu() {
    // this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.globalAlpha = 0.5;
  }

  animateStartMenu() {
    this.ctx.clearRect(0, 0, this.main.width, this.main.height);
    this.startMenu.update();
    let temp = requestAnimationFrame(this.animateStartMenu.bind(this))
    if (this.gameRunning) {
      cancelAnimationFrame(temp)
    }
  }

  animateMazeOne() {
    let temp;
    this.pauseListener();
    if (!this.pause) {
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      // this.addFogOfWar(this.fogctx);
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.maze1.update();
    } else {
      // this.animatePauseMenu();
    }
    if (!this.maze1Win) {
      temp = requestAnimationFrame(this.animateMazeOne.bind(this))
    } else if (this.maze1Win) {
      cancelAnimationFrame(temp)
    }

  }

}

export default Game