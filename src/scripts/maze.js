import Player from './player';
import Wraith from './wraith'
import Item from './items'

class Maze {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx, 3, 40);
    this.wraith = new Wraith(ctx, 980, 40);
    this.items = new Item(ctx);
    this.wallImg = new Image();
    this.wallImg.src = "src/assets/tile-sheet.png"
    this.wallImg.onload = () => this.update();
    this.topWall = new Image();
    this.topWall.src = "src/assets/tile-sheet2.png"
    this.topWall.onload = () => this.update();
    this.innerWall = new Image();
    this.innerWall.src = "src/assets/tile-sheet.png"
    this.objects = [{x: 302, y: 40, width: 15, height: 350}, {x: 52, y: 228, width: 248, height: 15}];
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
    // this.ctx.drawImage(this.wallImg, 725, 0, 50, 75, x, y, 55, 80) // top/bottom wall
    // this.ctx.drawImage(this.wallImg, 775, 0, 50, 75, x, y, 55, 80) // side wall
  }

  updateItems() {
    this.items.drawRedDoor(1103, 415);
    this.items.drawBlueDoor(51, 194);
    this.items.drawSwitch(258, 35);
    this.items.drawHeart(915, 625);
    this.items.drawTorch(50, 630);
    this.items.drawKey(1110, 40);
    this.items.update();
  }

  updatePlayer() {
    this.player.update();
  }

  updateWraith() {
    this.wraith.update();
  }
  
  update() {
    this.updateItems();
    this.updatePlayer();
    this.updateWraith();
    this.drawMaze();
    this.drawBorder();
    this.drawWireFrame();
  }
  
  drawWireFrame() {
    this.ctx.beginPath();
                  //x, y, width, height
    // this.ctx.rect(302, 40, 15, 200)
    this.ctx.rect(302, 40, 15, 350);
    this.ctx.rect(52, 228, 248, 15);
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