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
    this.itemImg.src = 'src/assets/torch.png'
  }



}

export default Items;