class Wraith {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.frameX = 0;
    this.frameY = 0;
    // this.frameXL = 11;
    this.spriteHeight = 67;
    this.spriteWidth = 86.6166666666;
    this.animationCount = 0;
    this.speed = 1;
    this.wraithSprite = new Image();
    this.wraithSprite.src = "src/assets/full-wraith.png";
    // this.wraithSprite.onload = () => this.update();
    this.activated = false;
    this.attacking = false;
    this.direction = "left";
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }

  update() { 
    this.drawWraith();
    this.animateFrame();
  }

  drawWraith() {
    this.ctx.drawImage(this.wraithSprite, this.spriteWidth * this.frameX, 
    this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)
  }

  animateFrame() {
    if (this.activated === false) { //idle animation
      this.frameY = 0;
      this.spriteHeight = 67;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.activated === true && this.direction === "left" && this.attacking == false) {  // left walk animation
      this.frameY = 1;
      this.spriteHeight = 67;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.activated === true && this.direction === "right" && this.attacking == false) {  // right walk animation
      this.frameY = 2;
      this.spriteHeight = 67;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.activated === true && this.direction === "right" && this.attacking == true) { // right attack animation
      this.frameY = 3;
      this.spriteHeight = 71;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.activated === true && this.direction === "left" && this.attacking === true) {  // left attack animation
      this.frameY = 4;
      this.spriteHeight = 71;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    }
  }


}

export default Wraith;