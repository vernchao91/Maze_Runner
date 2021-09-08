class Items {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 2;
    this.y = 0;
    this.spriteHeight = 1000;
    this.spriteWidth = 100;
    this.height = this.spriteHeight / 10;
    this.width = this.spriteWidth / 10;
    this.tileImg = new Image();
    this.tileImg.src = 'src/assets/tile-sheet.png'
    // this.torchImg.onload = () => this.update();
    this.tile2Img = new Image();
    this.tile2Img.src = 'src/assets/tile-sheet2.png'
    // this.tile2Img.onload = () => this.update();
    // ctx.drawImage(image, sourcex, sy, sWidth, sHeight, destinationx, dy, dWidth, dHeight)
  }

  update() {
    this.drawItem()
  }

  drawItem() {
    this.ctx.drawImage(this.tileImg, 690, 5, 30, 50, 50, 630, 40, 50); // torch
    this.ctx.drawImage(this.tile2Img, 0, 0, 120, 90, 1110, 40, 40, 40); // key
    this.ctx.drawImage(this.tileImg, 350, 0, 50, 100, 258, 35, 50, 70); // switch
    
  }

}

export default Items;