import Maze from './maze';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.dark = canvas3;
    this.ctx = ctx
    this.fps = 60;
    this.width = this.main.width = 1200;
    this.height = this.main.height = 700;
    // this.draw = this.draw.bind(this)
    // this.sounds = new this.sounds();
    this.maze = new Maze(ctx);
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
  }
  
  eventListeners() {
    window.addEventListener("keydown", this.maze.player.keyDown.bind(this));
    window.addEventListener("keyup", this.maze.player.keyUp.bind(this));
    window.addEventListener("keypress", this.maze.items.keyPress.bind(this))
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

  // addFogOfWar(ctx) {
  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, this.width, this.height)
  //   // ctx.globalCompositeOperation = "destination-out"
  // }

  // clearFogOfWar() {

  // }

  // attacking() {
  //   if (this.wraith.activated === true && this.wraith.moving === true ) { // wraith attacking
  //     if (this.wraith.x - this.player.x <= 10) {
  //       this.wraith.attacking = true;
  //     } else if (this.player.x - this.wraith.x <= 10) {
  //       this.wraith.attacking = true;
  //     } else if (this.wraith.y - this.player.y <= 10) {
  //       this.wraith.attacking = true;
  //     } else if (this.player.y - this.wraith.y <= 10) {
  //       this.wraith.attacking = true;
  //     }
  //   // } else if (this.wraith.x - this.player.x >= 10 || this.wraith.x - this.player.x >= 10) {
  //   //   this.wraith.attacking = false;
  //   }
  // }

  activate() {
    if (this.maze.player.x > 900 && this.maze.player.y > 38 && this.maze.player.y < 120) { // wraith activating
      this.maze.wraith.activated = true;
      this.maze.wraith.moving = true;
    }
  }

  chase() {  // maze.wraith AI chase
    if (this.maze.wraith.activated === true) {
      if (this.maze.wraith.x < this.maze.player.x && this.maze.wraith.y < this.maze.player.y) {
        this.maze.wraith.x += this.maze.wraith.speed;
        this.maze.wraith.y += this.maze.wraith.speed
        this.maze.wraith.direction = "right";

      } else if (this.maze.wraith.x > this.maze.player.x && this.maze.wraith.y > this.maze.player.y) {
        this.maze.wraith.x -= this.maze.wraith.speed;
        this.maze.wraith.y -= this.maze.wraith.speed;
        this.maze.wraith.direction = "left";

      } else if (this.maze.wraith.y < this.maze.player.y && this.maze.wraith.x > this.maze.player.x) {
        this.maze.wraith.y += this.maze.wraith.speed;
        this.maze.wraith.x -= this.maze.wraith.speed;
        this.maze.wraith.direction = "left";

      } else if (this.maze.wraith.y > this.maze.player.y && this.maze.wraith.x < this.maze.player.x) {
        this.maze.wraith.y -= this.maze.wraith.speed;
        this.maze.wraith.x += this.maze.wraith.speed;
        this.maze.wraith.direction = "right";

      } else if (this.maze.wraith.x < this.maze.player.x) {
        this.maze.wraith.x += this.maze.wraith.speed;
        this.maze.wraith.direction = "right";

      } else if (this.maze.wraith.x > this.maze.player.x) {
        this.maze.wraith.x -= this.maze.wraith.speed;
        this.maze.wraith.direction = "left";

      } else if (this.maze.wraith.y < this.maze.player.y) {
        this.maze.wraith.y += this.maze.wraith.speed;
        this.maze.wraith.direction = "left";

      } else if (this.maze.wraith.y > this.maze.player.y) {
        this.maze.wraith.y -= this.maze.wraith.speed;
        this.maze.wraith.direction = "right";
      }
    }
  }

  animateMazeOne() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.activate();
    this.chase();
    // this.attacking();
    this.maze.update();
    requestAnimationFrame(this.animateMazeOne.bind(this));
  }

  startMazeOne() {
    this.animateMazeOne();
    this.eventListeners();
  }

}
export default Game