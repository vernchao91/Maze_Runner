import Maze1 from './maze1';
import Menu from './menu';
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
    this.interval = 1000 / this.fps;
    this.keys = [];
    // this.gameMusic = new Audio("/src/assets/the-maze-runner.mp3");
    // this.gameMusic.src = "/src/assets/the-maze-runner.mp3";
    // this.gameMusic = document.getElementById("background");
    this.startMenu = new Menu(ctx, this.fogctx, canvas1);
    this.gameOverMenu = new GameOverMenu(ctx);
    this.maze1 = new Maze1(ctx, this.fogctx);
    this.maze1Win = false;
    this.gameRunning = false;
    this.gameOver = false;
    this.pause = false;
    this.music = true;
    this.then = Date.now();
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.mouse = { x: 0, y: 0 };
    this.boundClient = canvas1.getBoundingClientRect();
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
    this.fogctx.canvas.addEventListener("click", this.clickListener.bind(this));
    this.fogctx.canvas.addEventListener("mousemove", this.mouseMove.bind(this));
  }

  mouseMove(e) {
    this.mouse.x = e.clientX - this.boundClient.left - 10;
    this.mouse.y = e.clientY - this.boundClient.top - 10;
  }

  resize() {
    this.boundClient = this.canvas1.getBoundingClientRect();
  }

  keyDown(e) {
    e.preventDefault();
    this.keys[e.keyCode] = true;
    if ((e.key === "Enter") && !this.gameRunning) {
      if (!this.startMenu.titleAnimation) {
        this.startMenu.finishAnimation();
      } else if (!this.startMenu.titleStartReady) {
        this.startMenu.gameMusic.play();
        this.startMenu.titleStartReady = true;
      } else if (this.startMenu.selector.y === 590) {
        this.startMenu.optionsDisplay = false;
        this.startMenu.controlsDisplay = false;
        this.startMenu.howToPlayDisplay = true;
      } else if (this.startMenu.selector.y === 625) {
        this.startMenu.howToPlayDisplay = false;
        this.startMenu.optionsDisplay = false;
        this.startMenu.controlsDisplay = true;
      } else if (this.startMenu.selector.y === 660) {
        this.startMenu.controlsDisplay = false;
        this.startMenu.howToPlayDisplay = false;
        this.startMenu.optionsDisplay = true;
      } else if (!this.gameRunning && this.startMenu.titleStartReady && this.startMenu.selector.y === 695) {
        this.gameRunning = true;
        this.play();
      }
    }
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
  }

  clickListener(e) {
    console.log(this.mouse.x);
    if (this.gameRunning && !this.pause) {
      this.togglePause();
    } else if (this.gameRunning && this.pause) {
      if ((this.mouse.y < 180 || this.mouse.y > 240) || (this.mouse.x > 830 || this.mouse.x < 300)) {
        this.togglePause();
      }
    }
    if (!this.startMenu.titleAnimation) {
      this.startMenu.finishAnimation();
    } else if (!this.startMenu.titleStartReady) {
      this.startMenu.gameMusic.play();
      this.startMenu.titleStartReady = true;
    } else if (this.startMenu.selector.y === 590) {
      this.startMenu.optionsDisplay = false;
      this.startMenu.controlsDisplay = false;
      this.startMenu.howToPlayDisplay = true;
    } else if (this.startMenu.selector.y === 625) {
      this.startMenu.howToPlayDisplay = false;
      this.startMenu.optionsDisplay = false;
      this.startMenu.controlsDisplay = true;
    } else if (this.startMenu.selector.y === 660) {
      this.startMenu.controlsDisplay = false;
      this.startMenu.howToPlayDisplay = false;
      this.startMenu.optionsDisplay = true;
    } else if (!this.gameRunning && this.startMenu.titleStartReady && this.startMenu.selector.y === 695) {
      this.gameRunning = true
      this.play();
    }
  }
  
  pauseListener() {
    if (this.keys[80] && !this.gameOver && this.gameRunning) {
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
    if (this.music) {
      this.music = !this.music
      this.startMenu.gameMusic.pause();
    } else {
      this.music = !this.music
      this.startMenu.gameMusic.play();
    }
  }

  play() {
    this.lastTime = 0;
    this.animateMazeOne();
  }

  gameOverCheck(health) {
    if (health === 0) {
      this.gameOver = true;
    }
  }

  animatePauseMenu() {
    this.startMenu.updatePauseScreen();
  }

  animateStartMenu(time) {
    const timeDelta = time - this.lastTime
    this.pauseListener();
    this.ctx.clearRect(0, 0, this.main.width, this.main.height);
    if (!this.startMenu.titleStartReady) {
      this.startMenu.update();
    } else if (this.startMenu.titleStartReady) {
      this.startMenu.updateSelector();
    }
    if (this.startMenu.titleStartReady && this.startMenu.howToPlayDisplay) {
      this.startMenu.updateHowToPlay();
    } else if (this.startMenu.optionsDisplay) {
      this.startMenu.updateOptions();
    } else if (this.startMenu.controlsDisplay) {
      this.startMenu.updateControls();
    }
    let rafID = requestAnimationFrame(this.animateStartMenu.bind(this));
    this.lastTime = time
    if (this.gameRunning) {
      cancelAnimationFrame(rafID);
    }
  }

  animateGameOver() {
    this.pauseListener();
    this.ctx.clearRect(0, 0, this.main.width, this.main.height);
    this.gameOverMenu.update();
    let temp = requestAnimationFrame(this.animateGameOver.bind(this))
    if (this.gameOver) {
    }
  }

  animateMazeOne(time) {
    const timeDelta = (time - this.lastTime) / this.fps
    this.pauseListener();
    this.gameOverCheck(this.maze1.player.health);
    let rafID = requestAnimationFrame(this.animateMazeOne.bind(this))
    if (!this.pause && !this.gameOver) {
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.maze1.update(timeDelta);
      this.maze1.player.update();
      this.maze1.wraith.update();
      this.maze1.colliding(this.maze1.player, this.maze1.objects, timeDelta)
    } else if (this.pause) {
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      this.startMenu.updatePauseScreen();
    }
    this.lastTime = time
    if (this.maze1Win || this.gameOver) {
      this.gameRunning = false;
      cancelAnimationFrame(rafID)
      this.animateGameOver();
    }
    
  }
}

export default Game