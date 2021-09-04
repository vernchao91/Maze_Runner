import MovingObject from "./moving_object"
import Util from "./util"

class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.playerImg = new Image();
    this.playerImg.src = 'src/assets/hero-right-1.png'
    
  }

  drawPlayer(ctx) {
    ctx.drawImage(this.playerImg, this.frameX * this.spriteWidth, 
      this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 
      this.x, this.y, this.spriteWidth/4, this.spriteHeight/4);
      this.frameY = 1;
      if(this.counter < 7){
          this.counter ++ 
      }else{
        if (this.frameX < 5) {
      this.frameX++;
      } else {
        this.frameX = 0;
      }
    this.counter = 0; 
  }
  }
}

Player.radius = 10

Util.inherits(Player, MovingObject)

export default Player;