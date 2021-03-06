class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x; // x position canvas
    this.y = y; // y position canvas
    this.frameX = 0;
    this.frameY = 0;
    this.spriteHeight = 60;
    this.spriteWidth = 60;
    this.w = 50;
    this.h = 50;
    this.animationCount = 0;
    this.speed = 2;
    this.playerSprite = new Image();
    this.playerSprite.src = 'src/assets/full-hero.png'
    this.playerSprite.onload = () => this.update();
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keys = [];
    this.attacked = false;
    this.moving = false;
    this.keypressDetect = {};
    this.invulnerable = false;
    this.invulnerableNum = 300;
    this.increasedLight = false;
    this.increaseLightRadiusNum = 1000;
    this.lastInput = "down";
    this.health = 4;
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight);
  }
  
  update() {
    this.drawPlayer();
    this.animateFrame();
  }

  keyDown(e) {
    this.keys[e.keyCode] = true;
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
    this.moving = false;
  }

  drawPlayer() {
    if (this.invulnerableNum % 4 === 0) {
      this.ctx.beginPath();
      this.ctx.drawImage(this.playerSprite, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY,
      this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
    }
  }

  animateFrame() {
    if (this.moving && this.lastInput === "down") {
      this.frameY = 0;
      if (this.animationCount < 5) {
        this.animationCount++;
      } else if (this.frameX < 5) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving && this.lastInput === "right") {
        this.frameY = 1;
      if (this.animationCount < 5) {
        this.animationCount++;
      } else if (this.frameX < 5) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving && this.lastInput === "left") {
      this.frameY = 2;
      if (this.animationCount < 5) {
       this.animationCount++;
     } else if (this.frameX < 5) {
       this.frameX++;
       this.animationCount = 0;
     } else {
      this.frameX = 0;
      this.animationCount = 0
     }
    } else if (this.moving && this.lastInput === "up") {
        this.frameY = 3;
      if (this.animationCount < 5) {
        this.animationCount++;
      } else if (this.frameX < 5) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } 
  }
}

export default Player;