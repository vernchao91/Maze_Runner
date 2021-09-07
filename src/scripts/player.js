import MovingObject from "./moving_object"
import Util from "./util"

class Player {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frameX = 0; 
    this.frameY = 0;
    this.spriteHeight = 650;
    this.spriteWidth = 650;
    this.height = this.spriteHeight / 9;
    this.width = this.spriteWidth / 9;
    this.x = 130;
    this.y = 29;
    this.playerSprite = new Image();
    this.playerSprite.src = './assets/hero-spritesheet.png'
    this.playerSprite.onload = () => this.drawPlayer();
  }
  
  update() {
    this.drawPlayer();
    this.animate();
  }

  drawPlayer(ctx) {
    // ctx.drawImage(playerSprite, 130, 29, 650, 650, 0, 0, 75, 75)
    ctx.beginPath();
    ctx.arc(5, 5, 5, 0, 2 * Math.PI);
    ctx.stroke(); 
  }

  animate(ctx) {
    
  }

}



export default Player;