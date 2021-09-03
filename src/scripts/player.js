import MovingObject from "./moving_object"
import Util from "./util"

class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }
}

Player.radius = 10

Util.inherits(Player, MovingObject)

export default Player;