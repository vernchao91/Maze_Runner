class Items {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 2;
    this.y = 0;
    this.spriteHeight = 1000;
    this.spriteWidth = 100;
    this.height = this.spriteHeight / 10;
    this.width = this.spriteWidth / 10;
    this.frameSwitchX = 350; // lever pushed
    this.canvasSwitchX = 258;
    this.canvasSwitchY = 35;
    this.frameDoorX = 217;
    this.tileImg = new Image();
    this.tileImg.src = 'src/assets/tile-sheet.png'
    // this.torchImg.onload = () => this.update();
    this.tile2Img = new Image();
    this.tile2Img.src = 'src/assets/tile-sheet2.png'
    this.keyPress = this.keyPress.bind(this);
    this.keys = [];
    this.door = "closed"
    // this.tile2Img.onload = () => this.update();
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }

  keyPress(e) {
    this.keys[e.keyCode] = true;
  }

  update() {
    this.drawItem();
    this.drawDoor();
    this.animateSwitch();
  }

  drawItem() {
    this.ctx.drawImage(this.tileImg, 690, 5, 30, 50, 50, 630, 40, 50); // torch
    this.ctx.drawImage(this.tile2Img, 0, 0, 120, 90, 1110, 40, 40, 40); // key
    this.ctx.drawImage(this.tileImg, this.frameSwitchX, 0, 50, 100, this.canvasSwitchX, this.canvasSwitchY, 50, 70); // switch
  }

  drawDoor() {
    this.ctx.drawImage(this.tileImg, this.frameDoorX, 0, 50, 100, 51, 194, 52, 80)
  }

  animateSwitch() {
    if (this.keys[32]) {
      this.frameSwitchX = 430;
      this.canvasSwitchY = 38;
      this.canvasSwitchX = 265;
      this.animateDoor();
    }
  }

  animateDoor() {
    this.frameDoorX = 285;
    this.door = "opened"
  }

}

export default Items;