class StartMenu {
  constructor(ctx) {
    this.ctx = ctx;
    this.title = new Image();
    this.title.src = "src/assets/MazeRunner.png";
    this.titlePosition = { x: 300, y: -135 };
    this.titleSpeed = .85;
    this.canvasHeight = 700;
    this.canvasWidth = 1200;
    this.titleAnimation = false;
  };

  update() {
    this.drawTitle();
    this.moveTitle();
  };

  finishAnimation() {
    this.titlePosition.y = 20;
    this.titleAnimation = true;
  }

  moveTitle() {
    if (this.titlePosition.y < 20) {
      this.titlePosition.y += this.titleSpeed;
    } else if (this.titlePosition.y >= 20) {
      this.titlePosition.y = 20;
      this.titleAnimation = true;
    }
  };

  drawTitle() {
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight);
    this.ctx.drawImage(this.title, 0, 0, 494, 114, this.titlePosition.x, this.titlePosition.y, 600, 150);
  };

};

export default StartMenu;