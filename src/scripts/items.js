class Items {
  constructor(ctx) {
    this.ctx = ctx;
    this.spriteHeight = 1000;
    this.spriteWidth = 100;
    this.height = this.spriteHeight / 10;
    this.width = this.spriteWidth / 10;
    this.frameSwitchX = 350;
    this.frameBlueDoorX = 217;
    this.frameRedDoorX = 81;
    this.frameHeart = 115;
    this.frameTorch = 690;
    this.tileImg = new Image();
    this.tileImg.src = 'src/assets/tile-sheet.png'
    this.tile2Img = new Image();
    this.tile2Img.src = 'src/assets/tile-sheet2.png'
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keys = [];
    this.keyGrab = false;
    this.blueDoor = "closed";
    this.redDoor = "closed";
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  };
  
  keyDown(e) {
    this.keys[e.keyCode] = true;
  };

  keyUp(e) {
    delete this.keys[e.keyCode];
    this.moving = false;
  };

  animateBlueSwitch() {
    this.frameSwitchX = 423; // frame for pushed switch
    this.animateBlueDoor();
  };

  animateBlueDoor() {
    this.frameBlueDoorX = 285; // frame for opened door
    this.blueDoor = "opened";
  };

  animateRedDoor() {
    this.frameRedDoorX = 149; // frame for opened door
    this.redDoor = "opened";
  };

  drawTorch(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameTorch, 5, 30, 50, x, y, 40, 50); // torch
  };

  drawKey(x, y) {
    this.ctx.drawImage(this.tile2Img, 0, 0, 120, 90, x, y, 40, 40); // key
  };

  drawSwitch(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameSwitchX, 0, 50, 100, x, y, 50, 70); // switch
  };

  drawBlueDoor(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameBlueDoorX, 0, 50, 100, x, y, 52, 80) //blue door
  };

  drawRedDoor(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameRedDoorX, 0, 50, 100, x, y, 52, 80) //red door
  };

  drawHeart(x, y, fogctx) {
    if (fogctx === undefined) {
      this.ctx.drawImage(this.tile2Img, this.frameHeart, 0, 150, 155, x, y, 40, 40); // heart
    }
  };

}

export default Items;