class Wraith {
  constructor(ctx) {
    this.ctx = ctx;
    this.frameX = 0
    this.frameY = 0
    this.frameXL = 11
    this.spriteHeight = 70;
    this.spriteWidth = 87.33;
    this.animateCount = 0;
    this.x = 500;
    this.y = 500;
    this.wraithSprite = new Image();
    this.wraithSprite.src = "src/assets/full-wraith.png"
    this.moving = "false"
    this.attacking = "false"
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }

  update() { 
    this.drawWraith();
    this.animateFrame();
  }

  drawWraith() {
    this.ctx.drawImage(this.wraithSprite, this.spriteWidth * this.frameXL, 
    this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)
  }

  // autoMove(playerX, playerY){

  // }

  animateFrame() {
    if (this.moving === "false") {
      this.frameXL = 11;
      if (this.animationCount < 0) {
        this.animationcount++;
      } else if (this.frameXL < 0) {
        this.frameXL--;
        this.animateCount = 0
      } else {
        this.frameXL = 11;
        this.animationCount = 0;
      }
    }
  }


}

export default Wraith;