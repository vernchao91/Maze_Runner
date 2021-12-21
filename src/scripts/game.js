import Maze1 from './maze1';
import StartMenu from './startmenu';
import PauseMenu from './pausemenu';
import GameOverMenu from './gameovermenu';

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
    this.fps = 60;
    this.keys = [];
    this.startMenu = new StartMenu(ctx);
    this.pauseMenu = new PauseMenu(ctx);
    this.gameOverMenu = new GameOverMenu(ctx);
    this.maze1 = new Maze1(ctx, this.fogctx);
    this.maze1Win = false;
    this.gameRunning = false;
    this.gameOver = false;
    this.pause = false;
    this.music = true;
    this.then = Date.now();
    this.fps = 60;
    this.interval = 1000 / this.fps;
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.clickListener = this.clickListener.bind(this);
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

  // addDarkness(ctx) {

  // }

  gameOverCheck(health) {
    if (health === 0) {
      this.gameOver = true
    }

  }

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

  // animateGameOver() {
  //   this.ctx.clearRect(0, 0, this.main.width, this.main.height);
  //   this.gameOverMenu.update();
  //   let temp = requestAnimationFrame(this.animateGameOver.bind(this))
  //   if (this.gameOver) {

  //   }
  // }

  animateMazeOne() {
    let temp;
    let delta;
    let now;
    this.pauseListener();
    this.gameOverCheck(this.maze1.player.health);
    requestAnimationFrame(this.animateMazeOne.bind(this))
    if (!this.pause) {
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.maze1.update();
    } else {
      // this.animatePauseMenu();
    }
    if (this.maze1Win || this.gameOver) {
      this.gameRunning = false;
      cancelAnimationFrame(temp)
    }
    

  }
}

export default Game