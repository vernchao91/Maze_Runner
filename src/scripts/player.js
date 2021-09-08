class Player {
  constructor(ctx, mazeObjects) {
    this.ctx = ctx;
    this.frameX = 0; 
    this.frameY = 0;
    this.mazeObjects = mazeObjects; // maze object array
    this.spriteHeight = 60;
    this.spriteWidth = 60;
    this.animationCount = 0;
    this.x = 3;
    this.y = 45;
    this.speed = 3;
    this.playerSprite = new Image();
    this.playerSprite.src = 'src/assets/full-hero.png'
    // this.playerSprite.onload = () =>this.update();
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.keys = [];
    this.moving = false;
    this.lastInput = "down";
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }
  
  update() {
    this.drawPlayer();
    this.animateFrame();
    this.move();
    // this.collissionStopper();
  }

  keyDown(e) {
    this.keys[e.keyCode] = true;
    this.moving = true;
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
    this.moving = false;
  }

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

     } else if (this.keys[68] && this.x < 1100 ) {
       this.x += this.speed;
       this.lastInput = "right";

     } else if (this.keys[68] && this.x > 1000 && this.y > 595) {
      this.x += this.speed;
      this.lastInput = "right";

     } else if (this.keys[68]  && this.x < 350) {
      this.x += this.speed;
      this.lastInput = "right"
    }
  }

  collissionStopper() {
    arr = this.mazeObjects
    for (let i = 0; i < arr.length; i++) {
      if (this.y < arr[1]) {
        this.speed = 0;
      }
    }
  }

  drawPlayer() {
  this.ctx.drawImage(this.playerSprite, this.spriteWidth * this.frameX, this.spriteWidth * this.frameY,
     this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteWidth)
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

// 87w, 65a, 83s, 68d
// ctx.beginPath();
// ctx.arc(55, 55, 50, 0, 2 * Math.PI);
// ctx.stroke();

export default Player;