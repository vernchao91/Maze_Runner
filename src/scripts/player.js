import MovingObject from "./moving_object"
import Util from "./util"

class Player {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frameX = 0; 
    this.frameY = 0;
    this.spriteHeight = 625;
    this.spriteWidth = 625;
    this.height = this.spriteHeight / 4;
    this.width = this.spriteWidth / 4;
    this.x = 0;
    this.y = 460;
    this.playerSprite = new Image();
    this.playerSprite.src = './assets/hero-spritesheet.png'
  }

  
  update() {
    // this.draw();
    // this.animate();
  }

  // drawPlayer() {
  //   ctx.drawImage(this.playerSprite, (this.frameX * this.spriteWidth), (this.frameY * this.spriteHeight), this.spriteWidth, 
  //   this.spriteHeight, this.x, this.y, this.spriteWidth/4, this.spriteHeight/4);
  // }

  animate() {
    // ctx.drawPlayer();
  }



}



export default Player;
