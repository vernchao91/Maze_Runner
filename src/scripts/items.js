class Items {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.x = 2;
    this.y = 0;
    this.spriteHeight = 1000;
    this.spriteWidth = 100;
    this.height = this.spriteHeight / 10;
    this.width = this.spriteWidth / 10;
    this.item = new Image();
    this.itemImg.src = 'src/assets/torch.png'
  }
}