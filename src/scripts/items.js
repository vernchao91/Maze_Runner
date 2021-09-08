class Items {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 2;
    this.y = 0;
    this.spriteHeight = 1000;
    this.spriteWidth = 100;
    this.height = this.spriteHeight / 10;
    this.width = this.spriteWidth / 10;
    this.torchImg = new Image();
    this.torchImg.src = 'src/assets/tile-sheet.png'
    this.torchImg.onload = () => this.update();
    this.keyImg = new Image();
    this.keyImg.src = 'src/assets/tile-sheet2.png'
    this.keyImg.onload = () => this.update();
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }

  update() {
    this.drawItem()
  }

  drawItem() {
    this.ctx.drawImage(this.keyImg, 0, 0, 120, 90, 1110, 40, 40, 40)
    this.ctx.drawImage(this.torchImg, 690, 5, 30, 50, 50, 630, 40, 50)
    // 775, 0, 50, 100, 150, 150, 60, 80
  }

}

export default Items;