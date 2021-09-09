class Wraith {
  constructor(ctx) {
    this.ctx = ctx;
    this.frameX = 0
    this.frameY = 0
    this.frameXL = 11;
    this.spriteHeight = 70;
    this.spriteWidth = 86.916;
    this.animateCount = 0;
    this.x = 500;
    this.y = 500;
    this.wraithSprite = new Image();
    this.wraithSprite.src = "src/assets/full-wraith.png"
    this.moving = "false"
    this.attacking = "false"
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.update();
    requestAnimationFrame(this.animate.bind(this));
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
    if (!this.moving) {
      this.frameY = 0;
      if (this.animationCount < 11) {
        this.animationcount++;
      } else if (this.frameXL < 11) {
        this.frameX++;
        this.animateCount = 0
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving) {

    }
  }


}

export default Wraith;