class Player {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frameX = 130; 
    this.frameY = 29;
    this.spriteHeight = 650;
    this.spriteWidth = 650;
    this.height = Math.floor(this.spriteHeight / 8.6);
    this.width = Math.floor(this.spriteWidth / 8.6);
    this.x = 0;
    this.y = 0;
    this.speed = 2;
    this.playerSprite = new Image();
    this.playerSprite.src = 'src/assets/hero-spritesheet.png'
    this.playerSprite.onload = () =>this.update();
    this.keys = [];
    this.lastInput = "down"
    // this.ctx.drawImage(this.playerSprite, 130, 29, 650, 650, 0, 0, 75, 75)
  }
  
  update(ctx) {
    this.drawPlayer();
    this.animate(ctx);
    this.move();
  }

  keyDown(e) {
    // this.keys[e.keyCode] = true;
    console.log((e.keyCode + " pressed"));
    // console.log(this.keys);
  }

  keyUp(e) {
    // delete this.keys[e.ekey];
    console.log((e.keyCode + " released"));
  }

  // 87w, 65a, 83s, 68d
  move() {
    if (this.keys[83] && this.y > 5) {
      this.y -= this.speed;
      this.lastInput = "down"
     }
  }

  drawPlayer() {
    this.ctx.drawImage(this.playerSprite, 130, 29, 650, 650, this.x, this.y, 75, 75)
    // ctx.beginPath();
    // ctx.arc(55, 55, 50, 0, 2 * Math.PI);
    // ctx.stroke();
  }
  
  animate(ctx) {
    
  }


}



export default Player;