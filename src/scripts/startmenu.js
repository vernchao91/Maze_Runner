class StartMenu {
  constructor(ctx, fogctx, canvas1) {
    this.ctx = ctx;
    this.fogctx = fogctx;
    this.title = new Image();
    this.title.src = "src/assets/MazeRunner.png";
    this.pressStart = new Image();
    this.pressStart.src = "src/assets/press-start.png";
    this.control = new Image();
    this.control.src = "src/assets/controls.png";
    this.howToPlay = new Image();
    this.howToPlay.src = "src/assets/how-to-play.png";
    this.startGame = new Image();
    this.startGame.src = "src/assets/start-game.png";
    this.options = new Image();
    this.options.src = "src/assets/options.png";
    this.pressEnter = new Image();
    this.pressEnter.src = "src/assets/press-enter.png";
    this.pressP = new Image();
    this.pressP.src = "src/assets/press-pause.png";
    this.pressWASD = new Image();
    this.pressWASD.src = "src/assets/press-arrow-or-wasd.png";
    this.pressSpacebar = new Image();
    this.pressSpacebar.src = "src/assets/press-spacebar.png";
    this.holdSpacebar = new Image();
    this.holdSpacebar.src = "src/assets/hold-spacebar.png";
    this.pressM = new Image();
    this.pressM.src = "src/assets/press-m.png";
    this.volume = new Image();
    this.volume.src = "src/assets/volume.png";
    this.gameMusic = new Audio();
    this.gameMusic.src = "/src/assets/the-maze-runner.mp3"
    this.gameMusic.loop = true;
    this.gameMusic.volume = .5;
    this.titlePosition = { x: 300, y: -135 };
    this.pressStartPosition = { x: 400, y: -150 };
    this.howToPlayPosition = { x: 450, y: 550 };
    this.controlPosition = { x: 450, y: 585 };
    this.optionsPosition = { x: 450, y: 620 };
    this.startGamePosition = { x: 450, y: 655 };
    this.selector = { x: 450, y: 590 };
    this.titleSpeed = .85;
    this.titleAnimation = false;
    this.titleStartReady = false;
    this.controlsDisplay = false;
    this.howToPlayDisplay = true;
    this.optionsDisplay = false;
    this.volumeSelecting = false;
    this.volumeSelectorPosition = { x: 660, y: 210 };
    this.canvasHeight = 700;
    this.canvasWidth = 1200;
    this.pressStartTimer = 200;
    this.pressStartBoolean = false;
    this.globalAlpha = 1;
    this.mouse = { x: 0, y: 0 };
    this.boundClient = canvas1.getBoundingClientRect();
    this.canvas1 = canvas1;
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
    this.fogctx.canvas.addEventListener("mousedown", this.mouseDown.bind(this));
    this.fogctx.canvas.addEventListener("mouseup", this.mouseUp.bind(this));
    this.fogctx.canvas.addEventListener("mousemove", this.mouseMove.bind(this));
  };

  keyDown(e) {
    if ((e.keyCode === 87 || e.keyCode === 38) && this.selector.y > 610) {
      this.selector.y -= 35;
    } else if ((e.keyCode === 83 || e.keyCode === 40) && this.selector.y < 675) {
      this.selector.y += 35;
    }
  };

  keyUp(e) {

  };

  resize() {
    this.boundClient = this.canvas1.getBoundingClientRect();
  }

  mouseDown(e) {
    this.volumeSelecting = true;
  }

  mouseUp(e) {
    this.volumeSelecting = false;
  }

  mouseMove(e) {
    this.mouse.x = e.clientX - this.boundClient.left - 10
    this.mouse.y = e.clientY - this.boundClient.top - 10
    if (this.volumeSelecting && this.mouse.x > 559 && this.mouse.x < 761 && this.mouse.y > 180 && this.mouse.y < 240) {
      this.volumeSelectorPosition.x = this.mouse.x;
    }
  }

  update() {
    this.drawTitle();
    this.drawPressStart();
    this.moveTitle();
  };

  updateSelector() {
    this.drawTitle();
    this.drawStartGame();
    this.drawHowToPlay();
    this.drawControl();
    this.drawSelectorTriangle();
    this.drawOptions();
  }

  updateControls() {
    this.drawControlsPage();
  };

  updateHowToPlay() {
    this.drawHowToPlayPage();
  };

  updateOptions() {
    this.volumeChecker();
    this.drawOptionsPage();
  }

  volumeChecker() {
    let audioLevel = (760 - this.volumeSelectorPosition.x) / 200
    this.gameMusic.volume = audioLevel;
    console.log(audioLevel);
  }

  finishAnimation() {
    this.titlePosition.y = 20;
    this.pressStartPosition.y = 170;
    this.titleAnimation = true;
  };

  moveTitle() {
    if (this.titlePosition.y < 20) {
      this.titlePosition.y += this.titleSpeed;
    } else if (this.titlePosition.y >= 20) {
      this.finishAnimation();
    }
  };

  drawHowToPlayPage() {
    this.ctx.drawImage(this.options, 0, 0, 401, 152, this.optionsPosition.x, this.optionsPosition.y, 200, 50);
  }

  drawControlsPage() {
    this.ctx.drawImage(this.pressEnter, 0, 0, 1593, 152, 350, 200, 500, 50);
    this.ctx.drawImage(this.pressWASD, 0, 0, 1862, 152, 350, 240, 500, 50);
    this.ctx.drawImage(this.pressSpacebar, 0, 0, 1806, 152, 350, 280, 500, 50);
    this.ctx.drawImage(this.holdSpacebar, 0, 0, 1905, 152, 350, 320, 500, 50);
    this.ctx.drawImage(this.pressP, 0, 0, 1342, 152, 350, 360, 500, 50);
    this.ctx.drawImage(this.pressM, 0, 0, 1650, 162, 350, 400, 500, 50);
  }

  drawOptionsPage() {
    this.ctx.drawImage(this.volume, 0, 0, 390, 152, 350, 200, 200, 50);
    this.ctx.fillStyle = "rgba( 0, 0, 0,1)";
    this.ctx.fillRect(560, 218, 205.5, 5);
    this.ctx.fillStyle = "rgba( 255, 255, 255, 1)";
    this.ctx.fillRect(this.volumeSelectorPosition.x, 210, 7, 25);
  }

  drawSelectorTriangle() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.selector.x, this.selector.y - 20);
    this.ctx.lineTo(this.selector.x - 20, this.selector.y);
    this.ctx.lineTo(this.selector.x - 20, this.selector.y - 40);
    this.ctx.fillStyle = "rgba(200, 200, 200, 1)";
    this.ctx.fill();
  }

  drawOptions() {
    this.ctx.drawImage(this.options, 0, 0, 401, 152, this.optionsPosition.x, this.optionsPosition.y, 200, 50);
  };

  drawStartGame() {
    this.ctx.drawImage(this.startGame, 0, 0, 681, 152, this.startGamePosition.x, this.startGamePosition.y, 300, 50);
  };

  drawHowToPlay() {
    this.ctx.drawImage(this.howToPlay, 0, 0, 681, 152, this.howToPlayPosition.x, this.howToPlayPosition.y, 300, 50);
  };

  drawControl() {
    this.ctx.drawImage(this.control, 0, 0, 485, 152, this.controlPosition.x, this.controlPosition.y, 200, 50);
  };
  
  drawPressStart() {
    this.ctx.save();
    if (this.titlePosition.y >= 20 && !this.pressStartBoolean) {
      this.pressStartTimer -= 1;
      this.ctx.globalAlpha = this.globalAlpha -= .0075
      if (this.pressStartTimer <= 0) {
        this.pressStartBoolean = true
      }
    }
    if (this.pressStartBoolean) {
      this.ctx.globalAlpha = this.globalAlpha = 1
      this.pressStartTimer = 200;
      this.pressStartBoolean = false;
    }
    this.ctx.drawImage(this.pressStart, 0, 0, 1567, 152, this.pressStartPosition.x, this.pressStartPosition.y, 400, 50)
    this.ctx.restore();
  };

  drawTitle() {
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight);
    this.ctx.drawImage(this.title, 0, 0, 494, 114, this.titlePosition.x, this.titlePosition.y, 600, 150);
  };

};

export default StartMenu;