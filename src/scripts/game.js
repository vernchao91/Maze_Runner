import Maze1 from './maze1';
import StartMenu from './startmenu';
import PauseMenu from './pausemenu';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.dark = canvas3;
    this.ctx = ctx;
    this.width = this.main.width = 1200;
    this.height = this.main.height = 700;
    this.keys = [];
    this.startMenu = new StartMenu(ctx);
    this.pauseMenu = new PauseMenu(ctx);
    this.maze1 = new Maze1(ctx);
    this.pausePage = new Image();
    this.pausePage.src = "src/assets/background.jpg";
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

  animatePauseMenu() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.globalAlpha = 0.5;
  }

  animateStartMenu() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.startMenu.update();
    requestAnimationFrame(this.animateStartMenu.bind(this))
  }

  animateMazeOne() {
    this.pauseListener();
    if (!this.pause) {
      this.ctx.globalAlpha = 1
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.maze1.update();
    } else {
      this.animatePauseMenu();
    }
    requestAnimationFrame(this.animateMazeOne.bind(this))
  }

}

export default Game