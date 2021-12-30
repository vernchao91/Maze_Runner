class Menu {
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
    this.volumeMuted = new Image();
    this.volumeMuted.src = "src/assets/volume-mute.png";
    this.volumeUnmuted = new Image();
    this.volumeUnmuted.src = "src/assets/volume-unmute.png";
    this.resume = new Image();
    this.resume.src = "/src/assets/resume-game.png";
    this.restart = new Image();
    this.restart.src = "/src/assets/restart.png";
    this.mainMenu = new Image();
    this.mainMenu.src = "src/assets/main-menu.png";
    this.gameMusic = new Audio();
    this.gameMusic.src = "/src/assets/the-maze-runner.mp3";
    this.gameMusic.loop = true;
    this.gameMusic.volume = .20;
    this.titlePosition = { x: 300, y: -135 };
    this.pressStartPosition = { x: 400, y: -150 };
    this.howToPlayPosition = { x: 450, y: 550 };
    this.controlPosition = { x: 450, y: 585 };
    this.optionsPosition = { x: 450, y: 620 };
    this.startGamePosition = { x: 450, y: 655 };
    this.selector = { x: 450, y: 590 };
    this.pauseSelector = { x: 360, y: 285 };
    this.titleSpeed = .85;
    this.titleAnimation = false;
    this.titleStartReady = false;
    this.controlsDisplay = false;
    this.howToPlayDisplay = true;
    this.optionsDisplay = false;
    this.volumeSelecting = false;
    this.resumeGameSelected = true;
    this.restartGameSelected = false;
    this.mainMenuSelected = false;
    this.volumeSelectorPosition = { x: 600, y: 210 };
    this.canvasHeight = 700;
    this.canvasWidth = 1200;
    this.pressStartTimer = 200;
    this.pressStartBoolean = false;
    this.globalAlpha = 1;
    this.mouse = { x: 0, y: 0 };
    this.boundClient = canvas1.getBoundingClientRect();
    this.canvas1 = canvas1;
    this.keys = [];
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
    window.addEventListener("resize", this.resize.bind(this));
    this.fogctx.canvas.addEventListener("mousedown", this.mouseDown.bind(this));
    this.fogctx.canvas.addEventListener("mouseup", this.mouseUp.bind(this));
    this.fogctx.canvas.addEventListener("mousemove", this.mouseMove.bind(this));
  };

  keyDown(e) {
    this.keys[e.keyCode] = true;
    if ((e.keyCode === 87 || e.keyCode === 38) && this.selector.y > 610) {
      this.selector.y -= 35;
    } else if ((e.keyCode === 83 || e.keyCode === 40) && this.selector.y < 675) {
      this.selector.y += 35;
    };
    if ((e.keyCode === 87 || e.keyCode === 38) && this.pauseSelector.y > 245) {
      this.pauseSelector.y -= 40;
    } else if ((e.keyCode === 83 || e.keyCode === 40) && this.pauseSelector.y < 330) {
      this.pauseSelector.y += 40;
    };
  };

  keyUp(e) {
    delete this.keys[e.keyCode];
  };

  resize() {
    this.boundClient = this.canvas1.getBoundingClientRect();
  };
  
  mouseDown(e) {
    if (this.mouse.x > 559 && this.mouse.x < 761 && this.mouse.y > 180 && this.mouse.y < 240) { // checks if mouse is inside volume mixer
      this.volumeSelecting = true;
      this.volumeSelectorPosition.x = this.mouse.x;
    };
  };

  mouseUp(e) {
    this.volumeSelecting = false;
  };

  mouseMove(e) {
    this.mouse.x = e.clientX - this.boundClient.left - 10; // - 10 to get volume bar inside mouse cursor
    this.mouse.y = e.clientY - this.boundClient.top - 10; // - 10 to get volume bar inside mouse cursor
    if (this.volumeSelecting && this.mouse.y > 180 && this.mouse.y < 240) { // makes sure you can only move volume bar within the space in the canvas
      if (this.mouse.x > 559 && this.mouse.x < 761) {
        this.volumeSelectorPosition.x = this.mouse.x;
      } else if (this.mouse.x < 559) {
        this.volumeSelectorPosition.x = 560;
      } else if (this.mouse.x > 760) {
        this.volumeSelectorPosition.x = 760;
      };
    };
  };

  update() {
    this.drawTitle();
    this.drawPressStart();
    this.moveTitle();
  };

  updateSelector() {
    this.drawMainMenuSelectorTriangle();
    this.drawTitle();
    this.drawStartGame();
    this.drawHowToPlay();
    this.drawControl();
    this.drawOptions();
  };

  updateControls() {
    this.drawControlsPage();
  };

  updateHowToPlay() {
    this.drawHowToPlayPage();
  };

  updateOptions(muted) {
    this.volumeChecker();
    this.drawVolumeAndSlider();
    this.drawVolumeIcon(muted);
  };

  updatePauseScreen(paused, muted) {
    this.drawPauseMenuSelectorTriangle();
    this.volumeChecker(paused);
    this.drawVolumeIcon(muted);
    this.drawVolumeAndSlider();
    this.drawResume();
    this.drawRestart();
    this.drawMainMenu();
  };
  
  volumeChecker(paused) {
    if ((this.keys[68] || this.keys[39]) && this.volumeSelectorPosition.x < 760 && this.optionsDisplay) {
      this.volumeSelectorPosition.x += 2
    } else if ((this.keys[65] || this.keys[37]) && this.volumeSelectorPosition.x > 560 && this.optionsDisplay) {
      this.volumeSelectorPosition.x -= 2
    } else if ((this.keys[68] || this.keys[39]) && this.volumeSelectorPosition.x < 760 && paused) {
      this.volumeSelectorPosition.x += 2
    } else if ((this.keys[65] || this.keys[37]) && this.volumeSelectorPosition.x > 560 && paused) {
      this.volumeSelectorPosition.x -= 2
    };
    let audioLevel = (760 - this.volumeSelectorPosition.x); // value 0 - 200
    let audio = (200 - audioLevel) / 200; // subtract 200 from audio level then divide by 200 to grab percent
    if (audio < 0) {
      audio = 0;
    } else if (audio > 1) {
      audio = 1;
    }
    this.gameMusic.volume = audio;
  };

  finishAnimation() { // finishes title animation when DOM loads
    this.titlePosition.y = 20;
    this.pressStartPosition.y = 170;
    this.titleAnimation = true;
  };

  moveTitle() { // animates title and invokes finishAnimation()
    if (this.titlePosition.y < 20) {
      this.titlePosition.y += this.titleSpeed;
    } else if (this.titlePosition.y >= 20) {
      this.finishAnimation();
    }
  };
  
  drawHowToPlayPage() {
    this.ctx.drawImage(this.options, 0, 0, 401, 152, this.optionsPosition.x, this.optionsPosition.y, 200, 50);
  };
  
  drawControlsPage() {
    this.ctx.drawImage(this.pressEnter, 0, 0, 1593, 152, 350, 200, 500, 50);
    this.ctx.drawImage(this.pressWASD, 0, 0, 1862, 152, 350, 240, 500, 50);
    this.ctx.drawImage(this.pressSpacebar, 0, 0, 1806, 152, 350, 280, 500, 50);
    this.ctx.drawImage(this.holdSpacebar, 0, 0, 1905, 152, 350, 320, 500, 50);
    this.ctx.drawImage(this.pressP, 0, 0, 1342, 152, 350, 360, 500, 50);
    this.ctx.drawImage(this.pressM, 0, 0, 1650, 162, 350, 400, 500, 50);
  };

  drawVolumeIcon(muted) {
    if (!muted) {
      this.ctx.drawImage(this.volumeMuted, 0, 0, 512, 512, 518, 202, 40, 38);
    } else {
      this.ctx.drawImage(this.volumeUnmuted, 0, 0, 512, 512, 520, 205, 59, 55);
    }
  };
  
  drawVolumeAndSlider() {
    this.ctx.drawImage(this.volume, 0, 0, 390, 152, 355, 200, 170, 50); // draws volume picture
    this.ctx.fillStyle = "rgba( 0, 0, 0,1)"; // black volume bar
    this.ctx.fillRect(560, 218, 205.5, 5);
    this.ctx.fillStyle = "rgba( 255, 255, 255, 1)"; // white selector
    this.ctx.fillRect(this.volumeSelectorPosition.x, 210, 7, 25);
  };
  
  drawResume() {
    this.ctx.drawImage(this.resume, 0, 0, 674, 152, 360, 240, 250, 55);
  };
  
  drawRestart() {
    this.ctx.drawImage(this.restart, 0, 0, 436, 152, 360, 280, 170, 55);
  };

  drawMainMenu() {
    this.ctx.drawImage(this.mainMenu, 0, 0, 543, 152, 360, 320, 200, 55);
  };

  drawMainMenuSelectorTriangle() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.selector.x, this.selector.y - 20);
    this.ctx.lineTo(this.selector.x - 20, this.selector.y);
    this.ctx.lineTo(this.selector.x - 20, this.selector.y - 40);
    this.ctx.fillStyle = "rgba(200, 200, 200, 1)";
    this.ctx.fill();
  };

  drawPauseMenuSelectorTriangle() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.pauseSelector.x, this.pauseSelector.y - 20);
    this.ctx.lineTo(this.pauseSelector.x - 20, this.pauseSelector.y);
    this.ctx.lineTo(this.pauseSelector.x - 20, this.pauseSelector.y - 40);
    this.ctx.fillStyle = "rgba(200, 200, 200, 1)";
    this.ctx.fill();
  };

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
        this.pressStartBoolean = true;
      }
    }
    if (this.pressStartBoolean) {
      this.ctx.globalAlpha = this.globalAlpha = 1;
      this.pressStartTimer = 200;
      this.pressStartBoolean = false;
    }
    this.ctx.drawImage(this.pressStart, 0, 0, 1567, 152, this.pressStartPosition.x, this.pressStartPosition.y, 400, 50);
    this.ctx.restore();
  };

  drawTitle() {
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight);
    this.ctx.drawImage(this.title, 0, 0, 494, 114, this.titlePosition.x, this.titlePosition.y, 600, 150);
  };

};

export default Menu;