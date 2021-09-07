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
    this.itemImg = new Image();
    this.itemImg.src = 'src/assets/tile-sheet.png'
    this.itemImg.onload = () => this.update();
    // this.ctx.drawImage(this.playerSprite, 130, 29, 650, 650, 0, 0, 75, 75)
  }

  drawItem() {
    this.ctx.drawImage(this.itemImg, 50, 50, 650, 650, 0, 0, 75, 75)
  }

  update(ctx) {
    this.drawItem(ctx)
  }
}

export default Items;