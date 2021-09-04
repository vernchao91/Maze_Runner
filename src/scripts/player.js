import MovingObject from "./moving_object"
import Util from "./util"

class Player {
  constructor(dimensions) {
    this.dimensions = dimensions
    this.frameX = 0; 
    this.frameY = 0;
    this.spriteHeight = 625;
    this.spriteWidth = 625;
    this.height = this.spriteHeight / 4;
    this.width = this.spriteWidth / 4;
    this.x = 0;
    this.y = 460;
    this.playerImg = new Image();
    this.playerImg.src = 'src/assets/hero-right1.png'
  }

  drawPlayer(ctx) {
    ctx.drawImage(this.playerImg, this.frameX * this.spriteWidth, 
      this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
      this.x, this.y, this.spriteWidth/4, this.spriteHeight/4);
  }

  animate(ctx) {
    this.drawPlayer(ctx)
  }
}

Util.inherits(Player, MovingObject)

export default Player;