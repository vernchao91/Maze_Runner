class StartMenu {
  constructor(ctx) {
    this.ctx = ctx;
    this.title = new Image();
    this.title.src = "src/assets/MazeRunner.png";
    this.pressStart = new Image();
    this.pressStart.src = "src/assets/press-start.png";
    this.titlePosition = { x: 300, y: -135 };
    this.pressStartPosition = { x: 400, y: -150 };
    this.titleSpeed = .85;
    this.canvasHeight = 700;
    this.canvasWidth = 1200;
    this.timer = 2000;
    this.titleAnimation = false;
  };

  update() {
    this.drawTitle();
    this.drawPressStart();
    this.moveTitle();
  };

  update2() {
    this.drawTitle();
  }

  finishAnimation() {
    this.titlePosition.y = 20;
    this.pressStartPosition.y = 170;
    this.titleAnimation = true;
  }

  moveTitle() {
    if (this.titlePosition.y < 20) {
      this.titlePosition.y += this.titleSpeed;
    } else if (this.titlePosition.y >= 20) {
      this.finishAnimation();
    }
  };
  
  drawPressStart() {
    this.ctx.drawImage(this.pressStart, 0, 0, 1567, 152, this.pressStartPosition.x, this.pressStartPosition.y, 400, 50)
  }

  drawTitle() {
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight);
    this.ctx.drawImage(this.title, 0, 0, 494, 114, this.titlePosition.x, this.titlePosition.y, 600, 150);
  };

};

export default StartMenu;