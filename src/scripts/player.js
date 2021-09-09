class Player {
  constructor(ctx, maze, door) {
    this.ctx = ctx;
    this.maze = maze;
    this.door = door
    this.frameX = 0; 
    this.frameY = 0;
    // this.mazeObjects = maze.objects; // maze object array
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
    this.lastInput = "down";
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }
  
  update(mazeObjects) {
    this.drawPlayer();
    this.animateFrame();
    this.move();
    console.log(mazeObjects);
    this.objects = mazeObjects;
    
    this.wallXstart= this.objects[0][0]
    this.wallXend= this.objects[0][0] + this.objects[0][2];
    this.wallYstart= this.objects[0][1]
    this.wallYend= this.objects[0][1]+this.objects[0][3];
    // this.collissionStopper();
  }

  keyDown(e) {
    this.keys[e.keyCode] = true;
    this.moving = true;
    console.log([e.keyCode] + " pressed");
  }

  keyUp(e) {
    delete this.keys[e.keyCode];
    this.moving = false;
    console.log([e.keyCode] + " released");
    console.log(this.x + "x");
    console.log(this.y + "y");
  }

  move() {
    // 1100 canvas right
    // 45 canvas left
    // 600 canvas bottom
    // 40 canvas top

    if (this.keys[83] && this.y !== 600) { // bottom canvas
      if ((this.y < 170)) { // first room
        this.y += this.speed;
        this.lastInput = "down";
      }
      // this.y += this.speed;
      // this.lastInput = "down";

     } else if (this.keys[87] && this.y !== 40) { //top canvas
       this.y -= this.speed;
       this.lastInput = "up";

     } else if (this.keys[65] && this.x !== 40) { //left canvas
       this.x -= this.speed;
       this.lastInput = "left";

     } else if (this.keys[68] && this.x !== 1100 ) { //right canvas
      if (this.x !== 250) { // first room
        this.x += this.speed;
        this.lastInput = "right";
      }
     } else if (this.keys[68] && this.x > 1000 && this.y > 595) { //bottom right to exit maze
      this.x += this.speed;
      this.lastInput = "right";
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