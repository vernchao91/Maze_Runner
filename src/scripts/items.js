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
    this.frameSwitchDestinationX = 258 // canvas X position for blue switch
    this.frameSwitchDestinationY = 35 // canvas Y position for blue switch ( changing this when pressed because height on sheet is different )
    this.frameBlueDoorX = 217; 
    this.frameRedDoorX = 81;
    this.tileImg = new Image();
    this.tileImg.src = 'src/assets/tile-sheet.png'
    // this.torchImg.onload = () => this.update();
    this.tile2Img = new Image();
    this.tile2Img.src = 'src/assets/tile-sheet2.png'
    this.keyPress = this.keyPress.bind(this);
    this.keys = [];
    this.blueDoor = "closed"
    this.redDoor = "closed"
    // this.tile2Img.onload = () => this.update();
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }
  
  keyPress(e) {
    this.keys[e.keyCode] = true;
  }
  
  // update() {
  //   this.animateSwitch();
  // }

  animateSwitch() {
    if (this.keys[32]) {
      this.frameSwitchX = 423;
      this.frameSwitchDestinationY = 38;
      this.canvasSwitchY = 38;
      this.canvasSwitchX = 265;
      this.animateBlueDoor();
      this.animateRedDoor();
    }
  }

  animateBlueDoor() {
    this.frameBlueDoorX = 285;
    this.blueDoor ="opened"
  }

  animateRedDoor() {
    this.frameRedDoorX = 149;
    this.redDoor ="opened"
  }

  drawTorch(x, y) {
    this.ctx.drawImage(this.tileImg, 690, 5, 30, 50, x, y, 40, 50); // torch
  }

  drawKey(x, y) {
    this.ctx.drawImage(this.tile2Img, 0, 0, 120, 90, x, y, 40, 40); // key
  }

  drawSwitch(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameSwitchX, 0, 50, 100, x, y, 50, 70); // switch
  }

  drawBlueDoor(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameBlueDoorX, 0, 50, 100, x, y, 52, 80) //blue door
  }

  drawRedDoor(x, y) {
    this.ctx.drawImage(this.tileImg, this.frameRedDoorX, 0, 50, 100, x, y, 52, 80) //red door
  }

  drawHeart(x, y) {
    this.ctx.drawImage(this.tile2Img, 115, 0, 150, 155, x, y, 40, 40); // heart
  }

}

export default Items;