class Maze {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.wallImg = new Image();
    this.wallImg.src = "src/assets/tile-sheet.png"
    this.wallImg.onload = () => this.update();
    // this.ctx.drawImage(this.playerSprite, 130, 29, 650, 650, 0, 0, 75, 75)
  }

  update(){
    this.drawMaze();
  }

  drawMaze() {
    this.ctx.drawImage(this.wallImg, 0, 0, 950, 70)
    this.ctx.drawImage(this.wallImg, 100, 100)
    this.ctx.drawImage(this.wallImg, 482, 0, 50, 100, 0, 660, 60, 80)
    // for (let x = 100; x < 10; x++) {
    // }
  }

}

export default Maze