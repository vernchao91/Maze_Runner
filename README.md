# MazeRunner
<a href="https://vernchao91.github.io/Maze_Runner/" >live link! <-- </a>

## Overview 
MazeRunner is a one player game and the goal is to navigate through the maze and advance through the levels.

There are a few obstacles of which there is a locked door right before the exit. A key can be found and used on a locked door. There is also an enemy/ghost that is chasing you if it is encountered.

The player will have limited visibility and can pickup items throughout the maze that can be used anytime.
- keys to open locked doors
- switch to open doors
- torch to increase light radius

## Functionality & MVPs
During the game, users will be able to:
* Start, Pause or Unpause the maze, Reset the Maze, Mute or Unmute the volume
* Navigate the character by using the arrow keys
* Use space bar to grab the key or activate the switch

## Wireframes
![Screenshot (123)](https://user-images.githubusercontent.com/85369724/131963654-92eee98c-c880-45f4-9874-9341aa589b32.png)

## Technologies, Libraries, APIs
* Javascript
* HTML
* CSS
* The Canvas API to render the game maze
* Webpack
* Npm

### Highlighted Features
- This code block allows animation for a sprite sheet. This function is invoked recursively and resets the sprite if this.frameX === 5. this.frameY checks for last input to change direction of the sprite
```
animateFrame() {
    if (this.moving && this.lastInput === "down") {
      this.frameY = 0;
      if (this.animationCount < 5) {
        this.animationCount++;
      } else if (this.frameX < 5) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving && this.lastInput === "right") {
        this.frameY = 1;
      if (this.animationCount < 5) {
        this.animationCount++;
      } else if (this.frameX < 5) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } else if (this.moving && this.lastInput === "left") {
      this.frameY = 2;
      if (this.animationCount < 5) {
       this.animationCount++;
     } else if (this.frameX < 5) {
       this.frameX++;
       this.animationCount = 0;
     } else {
      this.frameX = 0;
      this.animationCount = 0
     }
    } else if (this.moving && this.lastInput === "up") {
        this.frameY = 3;
      if (this.animationCount < 5) {
        this.animationCount++;
      } else if (this.frameX < 5) {
        this.frameX++;
        this.animationCount = 0;
      } else {
        this.frameX = 0;
        this.animationCount = 0;
      }
    } 
  }
```

## Future Features to add
* Different character selection which have unique items that can be picked up and used
* Add a couple more levels for different maze maps
* Add a difficulty option for each level

<!-- ## Credits -->