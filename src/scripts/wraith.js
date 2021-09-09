class Wraith {
  constructor(ctx) {
    this.ctx = ctx;
    this.frameX = 0
    this.frameY = 0
    this.frameL = 11
    // this.spriteHeight = ;
    // this.spriteWidth = ;
    // this.x = x;
    // this.y = y;
    // this.wraithSprite = new Image();
    // this.wraithSprite.src = "src/assets/full-wraith.png"
  }

  update() { 
    this.drawWraith();
    this.animateFrame();
  }

  drawWraith() {
    this.ctx.drawImage()
  }

  // autoMove(playerX, playerY){

  // }

  animateFrame() {

  }


}

export default Wraith;