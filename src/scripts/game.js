import Maze from './maze';

class Game {
  constructor(ctx, canvas1, canvas2, canvas3) {
    this.main = canvas1;
    this.fog = canvas2;
    this.dark = canvas3;
    this.ctx = ctx;
    this.width = this.main.width = 1200;
    this.height = this.main.height = 700;
    // this.draw = this.draw.bind(this);
    // this.sounds = new this.sounds();
    this.maze1 = new Maze(ctx);
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
  }

  // isCollided(player, wraith) {
  //   if (this.maze1.getDistance(player.x, player.y, wraith.x, wraith.y) === 0) {
  //     this.maze1.player.moving = false
  //   }
  // }

  // rect1.x < rect2.x + rect2.w &&
  // rect1.x + rect1.w > rect2.x &&
  // rect1.y < rect2.y + rect2.h &&
  // rect1.h + rect1.y > rect2.y) {

  // startPause(e) {
  //   if (e.code === "Enter" && this.frames < 2) {
  //     this.canvas.style.display = "block"
  //     StartGame.style.display = "none";
  //   }
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

  animateMazeOne() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.maze1.update();
    requestAnimationFrame(this.animateMazeOne.bind(this));
  }

  startMazeOne() {
    this.animateMazeOne();
  }

}
export default Game