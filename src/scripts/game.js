import Maze1 from './maze1';
import Menu from './menu';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.ctx = ctx;
    this.fogctx = canvas2.getContext("2d");
    this.main.width = 1200;
    this.main.height = 700;
    this.fog.width = 1200;
    this.fog.height = 700;
    this.fps = 60;
    this.interval = 1000 / this.fps;
    this.menu = new Menu(ctx, this.fogctx, canvas1);
    this.maze1;
    this.maze1Win = false;
    this.gameRunning = false;
    this.gameOver = false;
    this.pause = false;
    this.music = true;
    this.mainMenu = true;
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.mouse = { x: 0, y: 0 };
    this.keys = [];
    this.boundClient = canvas1.getBoundingClientRect();
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
    this.fogctx.canvas.addEventListener("click", this.clickListener.bind(this));
    this.fogctx.canvas.addEventListener("mousemove", this.mouseMove.bind(this));
  };

  mouseMove(e) {
    this.mouse.x = e.clientX - this.boundClient.left - 10;
    this.mouse.y = e.clientY - this.boundClient.top - 10;
  };

  resize() {
    this.boundClient = this.main.getBoundingClientRect();
  };

  keyDown(e) {
    e.preventDefault();
    this.keys[e.keyCode] = true;
    if ((e.key === "Enter") && this.mainMenu && !this.pause) { // main menu event listeners
      if (!this.menu.titleAnimation) {
        this.menu.finishAnimation();
      } else if (!this.menu.titleStartReady) { // plays audio and sets beginning startready to true
        this.menu.gameMusic.play();
        this.menu.titleStartReady = true;
      } else if (this.menu.selector.y === 590) {
        this.menu.optionsDisplay = false;
        this.menu.controlsDisplay = false;
        this.menu.howToPlayDisplay = true;
      } else if (this.menu.selector.y === 625) {
        this.menu.howToPlayDisplay = false;
        this.menu.optionsDisplay = false;
        this.menu.controlsDisplay = true;
      } else if (this.menu.selector.y === 660) {
        this.menu.controlsDisplay = false;
        this.menu.howToPlayDisplay = false;
        this.menu.optionsDisplay = true;
      } else if (!this.gameRunning && this.menu.titleStartReady && this.menu.selector.y === 695 && !this.gameOver && !this.maze1Win) {
        this.gameRunning = true;
        this.play();
      };
    } else if ((e.key === "Enter") && this.pause) { // pause menu event listeners
      if (this.menu.pauseSelector.y === 285) {
        this.togglePause();
      } else if (this.menu.pauseSelector.y === 325) {
        this.restartMaze1();
      } else if (this.menu.pauseSelector.y === 365) {
        this.goToMainMenu();
      };
    } else if ((e.key === "Enter") && this.gameOver && !this.mainMenu) { // gameover menu event listeners
      if (this.menu.gameOverSelector.y === 325) {
        this.gameRunning = true;
        this.play(); // animates the maze
      } else if (this.menu.gameOverSelector.y === 365) {
        this.mainMenu = true;
        this.goToMainMenu();
      };
    } else if ((e.key === "Enter") && this.maze1Win && !this.mainMenu) { // victory menu event listeners
      if (this.menu.victorySelector.y === 325) {
        this.play(); // animates the maze
      } else if (this.menu.victorySelector.y === 365) {
        this.mainMenu = true;
        this.goToMainMenu();
      };
    }
  };

  keyUp(e) {
    delete this.keys[e.keyCode];
  };
  
  clickListener(e) {
    if (this.gameRunning && !this.pause && !this.gameOver && !this.maze1Win) { // pauses
      this.togglePause();
    } else if (this.gameRunning && this.pause && !this.gameOver) { // selects pause selector
      if ( this.menu.pauseSelector.y === 325 && ((this.mouse.y > 240) || (this.mouse.y < 130)) ) { // restartMaze1
        this.restartMaze1();
      } else if (this.menu.pauseSelector.y === 365 && ((this.mouse.y > 240) || (this.mouse.y < 130)) ) { // main menu
        this.goToMainMenu();
      } else if ((this.menu.pauseSelector.y === 285) && ((this.mouse.y > 240) || (this.mouse.y < 130)) ) { // unpause
        this.togglePause();
      };
    };
    if (!this.menu.titleAnimation && !this.gameRunning && this.mainMenu && !this.gameOver) { // start screen animation
      this.menu.finishAnimation();
    } else if (!this.menu.titleStartReady && this.mainMenu) { // plays music and goes to main menu
      this.menu.gameMusic.play();
      this.menu.titleStartReady = true;
    } else if (this.menu.selector.y === 590 && ((this.mouse.y > 240) || (this.mouse.y < 130))) { // 590 to set howtoplay display to true
      this.menu.optionsDisplay = false;
      this.menu.controlsDisplay = false;
      this.menu.howToPlayDisplay = true;
    } else if (this.menu.selector.y === 625 && ((this.mouse.y > 240) || (this.mouse.y < 130))) { // 625 to set howtoplay display to true
      this.menu.howToPlayDisplay = false;
      this.menu.optionsDisplay = false;
      this.menu.controlsDisplay = true;
    } else if (this.menu.selector.y === 660 && ((this.mouse.y > 240) || (this.mouse.y < 130))) { // 660 to set howtoplay display to true
      this.menu.controlsDisplay = false;
      this.menu.howToPlayDisplay = false;
      this.menu.optionsDisplay = true;
    } else if (!this.gameRunning && !this.maze1Win && !this.gameOver && this.menu.titleStartReady && this.menu.selector.y === 695 && ((this.mouse.y > 240) || (this.mouse.y < 130) || !this.menu.optionsDisplay) ) { // 695 to start game
      this.play(); // animates the maze
    };
    if (this.gameOver && !this.mainMenu) { // gameover menu event listeners
      if (this.menu.gameOverSelector.y === 325) {
        this.gameRunning = true;
        this.play(); // animates the maze
      } else if (this.menu.gameOverSelector.y === 365) {
        this.goToMainMenu();
      };
    }
    if (this.maze1Win && !this.mainMenu) { // victory menu event listeners
      if (this.menu.victorySelector.y === 325) {
        this.play(); // animates the maze
      } else {
        this.goToMainMenu();
      };
    }
  };
  
  goToMainMenu() { // goes to main menu and resets all booleans
    this.maze1 = new Maze1(this.ctx, this.fogctx);
    this.mainMenu = true;
    this.pause = false;
    this.gameRunning = false;
    this.maze1Win = false;
    this.gameOver = false;
    this.menu.howToPlayDisplay = true;
    this.menu.selector.y = 590;
    this.animateStartMenu();
  };

  restartMaze1() { // restartMaze1s maze1
    this.maze1 = new Maze1(this.ctx, this.fogctx);
    this.pause = false;
  };

  pauseGameOrMusicListener() { // toggles mute or pause
    if (this.keys[80] && !this.gameOver && this.gameRunning) {
      this.togglePause();
      delete this.keys[80];
    } else if (this.keys[77]) {
      this.toggleMute();
      delete this.keys[77];
    };
  };

  togglePause() { // function to toggle pause
    this.pause = !this.pause;
    this.menu.pauseSelector.y = 285;
  };

  toggleMute() { // function to toggle mute
    if (this.music) {
      this.music = !this.music
      this.menu.gameMusic.pause();
    } else {
      this.music = !this.music
      this.menu.gameMusic.play();
    };
  };

  play() { // animates maze 1 and resets booleans
    this.gameRunning = true;
    this.mainMenu = false;
    this.maze1Win = false;
    this.gameOver = false;
    this.pause = false;
    this.lastTime = 0;
    this.maze1 = new Maze1(this.ctx, this.fogctx);
    this.animateMazeOne();
  };

  gameOverCheck(health) {
    if (health === 0) {
      this.gameOver = true;
      this.pause = false;
      this.mainMenu = false;
      this.maze1Win = false;
    };
  };

  maze1EscapeCheck(player) {
    if (player.x > 1175 && player.y > 590) {
      this.maze1Win = true;
      this.pause = false;
      this.mainMenu = false;
      this.gameOver = false;
    }
  }

  mainMenuCheck(mainMenu, rafID) {
    if (mainMenu) {
      this.gameRunning = false;
      this.pause = false;
      cancelAnimationFrame(rafID)
      this.animateStartMenu();
    }
  }
  
  animateStartMenu(time) {
    let rafID
    const timeDelta = time - this.lastTime;
    this.pauseGameOrMusicListener();
    this.ctx.clearRect(0, 0, this.main.width, this.main.height);
    this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
    if (!this.menu.titleStartReady) {
      this.menu.update();
    } else if (this.menu.titleStartReady) {
      this.menu.updateSelector();
    };
    if (this.menu.titleStartReady && this.menu.howToPlayDisplay) {
      this.menu.updateHowToPlay();
    } else if (this.menu.optionsDisplay) {
      this.menu.updateOptions(this.music);
    } else if (this.menu.controlsDisplay) {
      this.menu.updateControls();
    }
    rafID = requestAnimationFrame(this.animateStartMenu.bind(this));
    this.lastTime = time;
    if (this.gameRunning) {
      cancelAnimationFrame(rafID);
    };
  };

  animateMazeOne(time) {
    let rafID;
    const timeDelta = (time - this.lastTime) / this.fps;
    this.pauseGameOrMusicListener();
    this.gameOverCheck(this.maze1.player.health);
    this.maze1EscapeCheck(this.maze1.player);
    if (!this.pause && !this.gameOver && !this.maze1Win) {
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.maze1.update(timeDelta);
      this.maze1.player.update();
      this.maze1.wraith.update();
      this.maze1.colliding(this.maze1.player, this.maze1.objects, timeDelta);
    } else if (this.pause && !this.gameOver && !this.maze1Win) {
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      this.menu.updatePauseScreen(this.pause, this.music);
    };
    rafID = requestAnimationFrame(this.animateMazeOne.bind(this));
    this.lastTime = time;
    if (this.gameOver) {
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      this.pause = false;
      this.gameRunning = false;
      cancelAnimationFrame(rafID);
      this.menu.gameOverSelector.y = 325;
      this.animateGameOver();
    } else if (this.maze1Win) {
      this.ctx.clearRect(0, 0, this.main.width, this.main.height);
      this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
      this.pause = false;
      this.gameRunning = false;
      this.menu.victorySelector.y = 325;
      cancelAnimationFrame(rafID);
      this.animateVictory();
    }
    this.mainMenuCheck(this.mainMenu, rafID);
  };

  animateGameOver() {
    let rafID;
    this.pauseGameOrMusicListener();
    this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
    this.ctx.clearRect(0, 0, this.main.width, this.main.height);
    this.menu.updateGameOverScreen();
    rafID = requestAnimationFrame(this.animateGameOver.bind(this));
    this.mainMenuCheck(this.mainMenu, rafID);
    if (this.gameRunning) {
      cancelAnimationFrame(rafID);
    };
  };

  animateVictory() {
    let rafID;
    this.fogctx.clearRect(0, 0, this.main.width, this.main.height);
    this.ctx.clearRect(0, 0, this.main.width, this.main.height);
    this.pauseGameOrMusicListener();
    this.menu.updateVictoryScreen();
    rafID = requestAnimationFrame(this.animateVictory.bind(this));
    this.mainMenuCheck(this.mainMenu, rafID);
    if (this.gameRunning) {
      cancelAnimationFrame(rafID);
    };
  };
};

export default Game