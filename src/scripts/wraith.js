class Wraith {
  constructor(ctx) {
    this.ctx = ctx;
    this.frameX = 0
    this.frameY = 0
    // this.frameXL = 11;
    this.spriteHeight = 67;
    this.spriteWidth = 86.6166666666;
    this.animationCount = 0;
    this.x = 980;
    this.y = 40;
    this.speed = .5;
    this.wraithSprite = new Image();
    this.wraithSprite.src = "src/assets/full-wraith.png"
    this.wraithSprite.onload = () => this.update();
    this.moving = "false"
    this.activated = "false"
    this.attacking = "false"
    this.direction = "left"
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
    if (this.moving === "false") {
      this.frameY = 0;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving === "true" && this.activated ==="true" && this.direction === "left") {
      this.frameY = 1;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving === "true" && this.activated === "true" && this.direction === "right") {
      this.frameY = 2;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving === "true" && this.attacking === "true" && this.activated === "true" && this.direction === "right") {
      this.frameY = 3;
      if (this.animationCount < 11) {
        this.animationCount++;
      } else if (this.frameX < 11) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving === "true" && this.attacking === "true" && this.activated === "true" && this.direction === "left") {
      this.frameY = 4;
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