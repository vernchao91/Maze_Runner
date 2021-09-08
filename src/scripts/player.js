import Maze from "./maze.js"

class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.frameX = 0; 
    this.frameY = 0;
    // this.spriteHeight = 704;
    // this.spriteWidth = 704;
    this.spriteHeight = 60;
    this.spriteWidth = 60;
    this.animationCount = 0;
    this.x = 3;
    this.y = 45;
    this.speed = 1;
    this.playerSprite = new Image();
    this.playerSprite.src = 'src/assets/full-hero.png'
    // this.playerSprite.onload = () =>this.update();
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keys = [];
    this.moving = false;
    this.lastInput = "down"
    this.maze = new Maze(ctx);
    // this.ctx.drawImage(this.playerSprite, 130, 29, 650, 650, 0, 0, 75, 75)
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }
  
  update() {
    this.drawPlayer();
    this.animateFrame();
    this.move();
  }

  keyDown(e) {
    this.keys[e.keyCode] = true;
    this.moving = true;
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
    this.moving = false;
  }

  // playerCollision() {
  //   if ((this.player.x + this.player.width === this.maze.x) && (this.player.y + this.player.height === this.maze.y)) {
  //     this.player.speed = 0;
  //   }
  // }

  move() {
    if (this.keys[83] && this.y < 600) {
      this.y += this.speed;
      this.lastInput = "down";

     } else if (this.keys[87] && this.y > 40) {
       this.y -= this.speed;
       this.lastInput = "up";

     } else if (this.keys[65] && this.x > 45) {
       this.x -= this.speed;
       this.lastInput = "left";

     } else if (this.keys[68] && this.x < 1100) {
       this.x += this.speed;
       this.lastInput = "right";
     } else if (this.keys[68] && this.x > 1000 && this.y > 595) {
      this.x += this.speed;
      this.lastInput = "right";
     }
  }

  drawPlayer() {
  this.ctx.drawImage(this.playerSprite, this.spriteWidth * this.frameX, this.spriteWidth * this.frameY,
     this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteWidth)
    // this.ctx.drawImage(this.playerSprite, 130 * this.frameX, 29 * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    // this.ctx.drawImage(this.playerSprite, 130, 29, 704, 704, this.x, this.y, 60, 60)
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
    } else if(this.moving && this.lastInput === "left") {
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

    }
  }

}

// 87w, 65a, 83s, 68d
// ctx.beginPath();
// ctx.arc(55, 55, 50, 0, 2 * Math.PI);
// ctx.stroke();

export default Player;