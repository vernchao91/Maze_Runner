import MovingObject, { call } from "./moving_object";
import { inherits, norm as _norm, scale, dir } from "./util";
import Util from "./util";

class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x; // x position canvas
    this.y = y; // y position canvas
    this.frameX = 0; 
    this.frameY = 0;
    this.spriteHeight = 60;
    this.spriteWidth = 60;
    // this.spriteDimension = { x: this.x, y: this.y, w: 60, h: 60 }
    this.animationCount = 0;
    this.speed = 1;
    this.playerSprite = new Image();
    this.playerSprite.src = 'src/assets/full-hero.png'
    // this.playerSprite.onload = () => this.update();
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    // this.itemKeys = []
    this.keys = [];
    this.moving = false;
    this.lastInput = "down";
    this.health = 3;
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }
  
  update() {
    // this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
    this.drawPlayer();
    this.animateFrame();
    this.move();
  }

  keyDown(e) {
    this.keys[e.keyCode] = true;
    this.moving = true;
    // console.log([e.keyCode] + " pressed");
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
    this.moving = false;
    // console.log([e.keyCode] + " released");
    // console.log(this.x + "x");
    // console.log(this.y + "y");
  }

  animateSwitch() {
    if (this.itemKeys[32]) {
      this.items.frameSwitchX = 430;
      this.items.canvasSwitchY = 38;
      this.items.canvasSwitchX = 265;
      this.animateDoor();
    }
  }

  animateDoor() {
    this.items.frameBlueDoorX = 285;
  }

  move() {
    if (this.keys[83]) {
      this.y += this.speed;
      this.lastInput = "down";
     } else if (this.keys[87]) {
       this.y -= this.speed;
       this.lastInput = "up";
     } else if (this.keys[65]) {
       this.x -= this.speed;
       this.lastInput = "left";
     } else if (this.keys[68]) {
        this.x += this.speed;
        this.lastInput = "right";
    }
  }

  drawPlayer() {
    this.ctx.drawImage(this.playerSprite, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY,
    this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
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

// Util.inherits(Player, MovingObject);

export default Player;