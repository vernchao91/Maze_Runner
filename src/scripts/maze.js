import Player from './player';
import Wraith from './wraith'
import Item from './items'

class Maze {
  constructor(ctx) {
    this.ctx = ctx;
    this.items = new Item(ctx);
    this.player = new Player(ctx, 3, 41);
    this.wraith = new Wraith(ctx, 980, 41);
    this.wallImg = new Image();
    this.wallImg.src = "src/assets/tile-sheet.png";
    // this.wallImg.onload = () => this.update();
    this.topWall = new Image();
    this.topWall.src = "src/assets/tile-sheet2.png";
    // this.topWall.onload = () => this.update();
    this.innerWall = new Image();
    this.innerWall.src = "src/assets/tile-sheet.png";
    this.objects = [];
    this.isColliding = false;
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
    // this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, y, 55, 80) // top/bottom wall
    // this.ctx.drawImage(this.wallImg, 775, 0, 50, 75, x, y, 55, 80) // side wall
    // this.updateItems();
  }

  eventListeners() {
    window.addEventListener("keydown", this.player.keyDown.bind(this));
    window.addEventListener("keyup", this.player.keyUp.bind(this));
    window.addEventListener("keydown", this.items.keyDown.bind(this));
    window.addEventListener("keyup", this.items.keyUp.bind(this));
  }

  update() {
    this.eventListeners();
    this.drawMaze();
    this.drawBorder();
    this.drawWireFrame();
    this.updateItems();
    this.player.update();
    this.wraith.update();
    this.activate(this.player, this.wraith);
    this.wraithChase();
    this.attacking(this.player, this.wraith);
    this.blueSwitchDistanceCheck(this.player, this.items.frameSwitchDestinationX, this.items.frameSwitchDestinationY);
    this.keyDistanceCheck(this.player, this.items.keyItem);
    this.redDoorDistanceCheck(this.player, this.items.redDoor);
    // this.testFunction();
    this.Colliding(this.player, this.objects);
    // this.move(this.player);
  }

  testFunction() {
    // setTimeout(() => alert("Hello"), 3000);
  }

  updateItems() {
    this.items.drawRedDoor(1103, 415);
    this.items.drawBlueDoor(51, 194);
    this.items.drawSwitch(this.items.frameSwitchDestinationX, this.items.frameSwitchDestinationY);
    this.items.drawHeart(915, 625);
    this.items.drawTorch(50, 630);
    this.items.drawKey(this.items.keyItem.x, this.items.keyItem.y);
  }

  getDistance(x1, y1, x2, y2) { // util function
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }
  
  Colliding(player, objects) { //util function
    for (let object of objects) {
      if ((player.x < object.x + object.w &&
        player.x + player.w > object.x &&
        player.y < object.y + object.h &&
        player.h + player.y > object.y )
      ) {
        if ( player.lastInput === "down" ) {
          delete player.keys[83]
          delete player.keys[65]
          delete player.keys[68]
          delete player.keys[87]
          player.y = object.y - player.h;
        } else if ( player.lastInput === "up" ) {
          delete player.keys[83]
          delete player.keys[65]
          delete player.keys[68]
          delete player.keys[87]
          player.y = object.y + object.h;
        } else if ( player.lastInput === "right" ) {
          delete player.keys[83]
          delete player.keys[65]
          delete player.keys[68]
          delete player.keys[87]
          player.x = object.x - player.w;
        } else if ( player.lastInput === "left" ) {
          delete player.keys[83]
          delete player.keys[65]
          delete player.keys[68]
          delete player.keys[87]
          player.x = object.x + object.w;
        }
      } else {
        if (player.keys[83]) {
          delete player.keys[65]
          delete player.keys[68]
          delete player.keys[87]
          player.y += player.speed / objects.length;
          player.lastInput = "down";
        } else if (player.keys[87]) {
          delete player.keys[65]
          delete player.keys[68]
          delete player.keys[83]
          player.y -= player.speed / objects.length;
          player.lastInput = "up";
        } else if (player.keys[65]) {
          delete player.keys[87]
          delete player.keys[68]
          delete player.keys[83]
          player.x -= player.speed / objects.length;
          player.lastInput = "left";
        } else if (player.keys[68]) {
          delete player.keys[65]
          delete player.keys[87]
          delete player.keys[83]
          player.x += player.speed / objects.length;
          player.lastInput = "right";
        }
      }
    }
  }

  // move() {
  //   if (this.player.keys[83]) {
  //     this.player.y += this.player.speed;
  //     this.player.lastInput = "down";
  //   } else if (this.player.keys[87]) {
  //     this.player.y -= this.player.speed;
  //     this.player.lastInput = "up";
  //   } else if (this.player.keys[65]) {
  //     this.player.x -= this.player.speed;
  //     this.player.lastInput = "left";
  //   } else if (this.player.keys[68]) {
  //     this.player.x += this.player.speed;
  //     this.player.lastInput = "right";
  //   }
  // }

  blueSwitchDistanceCheck(player, blueSwitchX, blueSwitchY) {
    const distance = this.getDistance(player.x, player.y, blueSwitchX, blueSwitchY);
    if (distance < 25 && this.items.keys[32]) {
      this.items.animateBlueSwitch();
    }
  }

  keyDistanceCheck(player, key) {
    const distance = this.getDistance(player.x, player.y, key.x, key.y);
    if (distance < 40 && this.items.keys[32]) {
      this.items.keyGrab = true;
      key.x = player.x
      key.y = player.y
    }
  }

  redDoorDistanceCheck(player) {
    const distance = this.getDistance(player.x, player.y, 1103, 415);
    if (distance < 40 && this.items.keyGrab === true) {
      this.items.animateRedDoor();
    }
  }

  attacking(player, wraith) { // wraith attacking
    const distance = this.getDistance(player.x, player.y, wraith.x, wraith.y)
    if (distance < 30)  {
      this.wraith.attacking = true;
    } else if ( distance > 30) {
      this.wraith.attacking = false;
    }
  }

  activate(player, wraith) { // wraith activate
    const distance = this.getDistance(player.x, player.y, wraith.x, wraith.y)
    if (distance < 100) {
      this.wraith.activated = true;
    }
  }

  wraithChase() {  // wraith AI chase
    if (this.wraith.activated) {
      if (Math.floor(this.wraith.x) < Math.floor(this.player.x) && Math.floor(this.wraith.y) < Math.floor(this.player.y)) {
        this.wraith.direction = "right";
        this.wraith.x += this.wraith.speed;
        this.wraith.y += this.wraith.speed;

      } else if (Math.floor(this.wraith.x) > Math.floor(this.player.x) && Math.floor(this.wraith.y) > Math.floor(this.player.y)) {
        this.wraith.direction = "left";
        this.wraith.x -= this.wraith.speed;
        this.wraith.y -= this.wraith.speed;

      } else if (Math.floor(this.wraith.y) < Math.floor(this.player.y) && Math.floor(this.wraith.x) > Math.floor(this.player.x)) {
        this.wraith.direction = "left";
        this.wraith.y += this.wraith.speed;
        this.wraith.x -= this.wraith.speed;

      } else if (Math.floor(this.wraith.y) > Math.floor(this.player.y) && Math.floor(this.wraith.x) < Math.floor(this.player.x)) {
        this.wraith.direction = "right";
        this.wraith.y -= this.wraith.speed;
        this.wraith.x += this.wraith.speed;

      } else if (Math.floor(this.wraith.x) < Math.floor(this.player.x)) {
        this.wraith.direction = "right";
        this.wraith.x += this.wraith.speed;

      } else if (Math.floor(this.wraith.x) > Math.floor(this.player.x)) {
        this.wraith.direction = "left";
        this.wraith.x -= this.wraith.speed;

      } else if (Math.floor(this.wraith.y) < Math.floor(this.player.y)) {
        this.wraith.direction = "left";
        this.wraith.y += this.wraith.speed;

      } else if (Math.floor(this.wraith.y) > Math.floor(this.player.y)) {

        this.wraith.direction = "right";
        this.wraith.y -= this.wraith.speed;
      }
    }
  }
  
  drawWireFrame() {
    this.ctx.beginPath();
    //x, y, width, height
    this.ctx.rect(0, 40, 1150, 0); // top wall border
    this.ctx.rect(0, 110, 40, 550); // left wall border
    this.ctx.rect(1155, 40, 40, 550); // right wall border
    this.ctx.rect(40, 660, 1155, 0); // bottom wall border
    let blueDoorCoordinates;
    if ( this.items.blueDoor === "closed" ) {
      this.ctx.rect(52, 228, 248, 15); // blue door wall closed
      blueDoorCoordinates = { x: 52, y: 223, w: 248, h: 15};
    } else {
      this.ctx.rect(102, 228, 198, 15); // blue door wall opened
      blueDoorCoordinates = { x: 102, y: 223, w: 198, h: 15};
    }
    this.ctx.rect(302, 40, 15, 350); // first room right wall
    this.ctx.rect(50, 405, 155, 10); // second room second wall bottom
    this.ctx.rect(50, 585, 195, 10); // third room third wall bottom
    this.ctx.rect(375, 405, 110, 10); // fourth room first wall bottom
    this.ctx.rect(480, 120, 10, 290); // fourth room right wall bottom
    this.ctx.rect(480, 120, 320, 10); // fourth room top bottom wall
    this.ctx.rect(795, 40, 10, 80); // fourth room top right wall
    this.ctx.rect(590, 360, 10, 300); // third room right wall
    this.ctx.rect(690, 255, 10, 245); // fifth room right wall
    this.ctx.rect(690, 255, 380, 10); // fifth room bottom wall
    this.ctx.rect(1055, 40, 10, 300); // fifth room top right wall
    this.ctx.rect(905, 450, 10, 210); // last room left wall
    let redDoorCoordinates;
    if ( this.items.redDoor === "closed" ) {
      this.ctx.rect(905, 450, 253, 10);
      redDoorCoordinates = { x: 905, y: 440, w: 250, h: 10 }
    } else {
      this.ctx.rect(905, 450, 200, 10);
      redDoorCoordinates = { x: 905, y: 440, w: 185, h: 10 }
    }
    this.objects = [
      // { x: , y: , w: , h:  },
      { x:0, y:40, w:1150, h:0 }, // top wall border
      { x: 0, y: 110, w: 40, h: 550 }, // left wall border
      { x: 1155, y: 40, w: 40, h: 550 }, // right wall border
      { x: 40, y: 655, w: 1155, h:  0 }, // bottom wall border
      { x:302, y:40, w:5, h: 350 }, // first room right wall
      { x: 50, y: 395, w: 145, h: 15 }, // second wall bottom
      { x: 50, y: 575, w: 195, h: 15 }, // third room third wall bottom
      { x: 375, y: 395, w: 110, h: 15 }, // fourth room right bottom wall
      { x: 480, y: 110, w: 5, h: 290 }, // fourth room right wall
      { x: 480, y: 110, w: 320, h: 15 }, // fourth room top bottom wall
      { x: 795, y: 40, w: 5, h: 80 }, // fourth room top right wall 
      { x: 590, y: 355, w: 5, h: 300 }, // third room right wall
      { x: 690, y: 245, w: 5, h: 255 }, // fifth room right wall
      { x: 690, y: 245, w: 370, h: 15 }, // fifth room bottom wall
      { x: 1055, y: 40, w: 5, h: 295 }, // fifth room top right wall
      { x: 905, y: 440, w: 5, h: 210 }, // last room left wall
      redDoorCoordinates,
      blueDoorCoordinates,
    ]
    this.ctx.stroke();
  }
  
  drawMaze() {
    for (let y = 37; y < 350; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 300, y, 55, 80) // top to bottom wall
    }
    for (let x = 100; x < 251; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 227, 55, 80) // side to side wall
    }
    for (let y = 37; y < 300; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 1050, y, 55, 80) // top to bottom wall
    }
    for (let x = 50; x < 200; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 400, 55, 80) // side to side wall
    }
    for (let x = 50; x < 201; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 580, 55, 80) // side to side wall
    }
    for (let x = 375; x < 450; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 400, 55, 80) // side to side wall
    }
    for (let y = 113; y < 400; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 475, y, 55, 80) // top to bottom wall
    }
    for (let x = 492; x < 750; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 114, 55, 80) // side to side wall
    }
    for (let y = 28; y < 100; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 790, y, 55, 80) // top to bottom wall
    }
    for (let x = 700; x < 1050; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 250, 55, 80) // side to side wall
    }
    for (let y = 250; y < 500; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 685, y, 55, 80) // top to bottom wall
    }
    for (let y = 358; y < 650; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 585, y, 55, 80) // top to bottom wall
    }
    for (let y = 458; y < 650; y += 50) {
      this.ctx.drawImage(this.innerWall, 775, 0, 50, 75, 900, y, 55, 80) // top to bottom wall
    }
    for (let x = 900; x < 1100; x += 50) {
      this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, 445, 55, 80) // side to side wall
    }
  }

  drawBorder() {
    // this.ctx.drawImage(this.wallImg, 0, 0, 950, 70)
    // this.ctx.drawImage(this.wallImg, 100, 100)
    // this.ctx.drawImage(this.wallImg, 482, 0, 50, 100, 50, 660, 60, 80)
    for (let x = 0; x < 1200; x += 50) {
      this.ctx.drawImage(this.wallImg, 482, 0, 50, 100, x, 660, 60, 80)
    }
    for (let y = 550; y >= 0; y -= 50) {
      this.ctx.drawImage(this.wallImg, 582, 0, 55, 80, 1150, y, 60, 83)
    }
    // this.ctx.drawImage(this.topWall, 270, 0, 50, 100, 0, 0, 60, 80)
    for (let x = 0; x < 1150; x += 50) {
      this.ctx.drawImage(this.topWall, 270, 0, 50, 100, x, 0, 60, 80)
    }
    for (let y = 110; y < 650; y += 50) {
      this.ctx.drawImage(this.wallImg, 638, 0, 55, 80, 0, y, 60, 83)
    }
  }
  
}

export default Maze;