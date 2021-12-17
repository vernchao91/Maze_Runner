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
    this.keys = []
    this.maze1 = new Maze(ctx);
    this.pause = false;
    this.keyPause = this.keyPause.bind(this);
    this.ctx.shadowBlur = 150;
    this.ctx.shadowColor = 'black';
  }
  
  gameEventListeners() {
    window.addEventListener("keypause", this.keyPause);
  }

  keyPause(e) {
    this.keys[e.keyCode] = true;
    this.togglePause()
  }
  
  keyPause(e) {
    console.log(e.keyCode);
    if ( e.keyCode === 80 ) {
      this.togglePause();
    }
  }

  togglePause() {
    if (this.pause === false) {
      this.pause = true
    } else if (this.pause === true) {
      this.pause = false
    }
  }

  // addFogOfWar(ctx) {

  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, this.width, this.height)
  //   // ctx.globalCompositeOperation = "destination-out"
  // }

  // clearFogOfWar() {

  // }

  animateMazeOne() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.pause = false;
    this.maze1.update();
    requestAnimationFrame(this.animateMazeOne.bind(this));
  }

  startMazeOne() {
    this.gameEventListeners();
    this.animateMazeOne();
  }

}
export default Game