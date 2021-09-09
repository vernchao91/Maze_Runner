import Player from './player';
import Wraith from './wraith'
import Item from './items'
// import Maze from './maze';

class Game {
  constructor(ctx, canvas) {
    this.canvas = canvas
    this.ctx = ctx
    this.fps = 60;
    this.width = this.canvas.width = 1200;
    this.height = this.canvas.height = 700;
    // this.draw = this.draw.bind(this)
    // this.sounds = new this.sounds();
    this.items = new Item(ctx)
    this.player = new Player(ctx)
    this.wraith = new Wraith(ctx)
    // this.maze = new Maze(ctx)
    // this.start();
    // console.log(this.items.door);
    this.start();
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
  }
  
  eventListeners() {
    window.addEventListener("keydown", this.player.keyDown.bind(this));
    window.addEventListener("keyup", this.player.keyUp.bind(this));
    window.addEventListener("keypress", this.items.keyPress.bind(this))
    // window.addEventListener("keypress", this.startPause.bind(this));
  }

  // startPause(e) {
  //   if (e.code === "Enter" && this.frames < 2) {
  //     this.canvas.style.display = "block"
  //     StartGame.style.display = "none";
  //   }
  // }

  // draw() {
  //   // this.eventListeners();
  //   let setFPS = setTimeout(() => {
  //     this.ctx.clearRect(0, 0, this.width, this.height);
  //     this.player.update();
  //     requestAnimationFrame(this.draw.bind(this))
  //   }, 1000 / this.fps)
  // }

  // gameOver(frame, setFPS) {

  // }

  attacking() {
    if (this.wraith.activated === "true" && this.wraith.moving === "true" ) {
      if (this.wraith.x - this.player.x <= 10) {
        this.wraith.attacking = "true";
      } else if (this.player.x - this.wraith.x <= 10) {
        this.wraith.attacking = "true";
      } else if (this.wraith.y - this.player.y <= 10) {
        this.wraith.attacking = "true";
      } else if (this.player.y - this.wraith.y <= 10) {
        this.wraith.attacking = "true";
      }
    // } else if (this.wraith.x - this.player.x >= 10 || this.wraith.x - this.player.x >= 10) {
    //   this.wraith.attacking = "false";
    }
  }

  activate() {
    if (this.player.x > 900 && this.player.y > 38 && this.player.y < 120) {
      this.wraith.activated = "true";
      this.wraith.moving = "true"
    }
  }

  chase() {
    if (this.wraith.activated === "true") {
      if (this.wraith.x < this.player.x && this.wraith.y < this.player.y) {
        this.wraith.x += this.wraith.speed;
        this.wraith.y += this.wraith.speed
        this.wraith.direction = "right";
      } else if (this.wraith.x > this.player.x && this.wraith.y > this.player.y) {
        this.wraith.x -= this.wraith.speed;
        this.wraith.y -= this.wraith.speed;
        this.wraith.direction = "left";
      } else if (this.wraith.y < this.player.y && this.wraith.x > this.player.x) {
        this.wraith.y += this.wraith.speed;
        this.wraith.x -= this.wraith.speed;
        this.wraith.direction = "left";
      } else if (this.wraith.y > this.player.y && this.wraith.x < this.player.x) {
        this.wraith.y -= this.wraith.speed;
        this.wraith.x += this.wraith.speed;
        this.wraith.direction = "right";
      } else if (this.wraith.x < this.player.x) {
        this.wraith.x += this.wraith.speed;
        this.wraith.direction = "right";
      } else if (this.wraith.x > this.player.x) {
        this.wraith.x -= this.wraith.speed;
        this.wraith.direction = "left";
      } else if (this.wraith.y < this.player.y) {
        this.wraith.y += this.wraith.speed;
        this.wraith.direction = "left";
      } else if (this.wraith.y > this.player.y) {
        this.wraith.y -= this.wraith.speed;
        this.wraith.direction = "right";
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.chase();
    this.activate();
    this.attacking();
    this.items.update();
    this.player.update();
    this.wraith.update();
    requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    this.animate();
    this.eventListeners();
    // this.draw();
  }

}
export default Game