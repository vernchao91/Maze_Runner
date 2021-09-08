class Maze {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.wallImg = new Image();
    this.wallImg.src = "src/assets/tile-sheet.png"
    this.wallImg.onload = () => this.update();
    this.topWall = new Image();
    this.topWall.src = "src/assets/tile-sheet2.png"
    this.topWall.onload = () => this.update();
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
    // this.ctx.drawImage(this.wallImg, 725, 0, 50, 100, 100, 100, 60, 80) // top/bottom wall
    // this.ctx.drawImage(this.wallImg, 775, 0, 50, 100, 150, 150, 60, 80) // side wall
  }

  update(){
    this.drawMaze();
  }

  drawMaze() {
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

export default Maze