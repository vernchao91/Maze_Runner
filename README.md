# MazeRunner(Tentative Title)
## Overview 
MazeRunner is a one player game and the goal is to navigate through the maze and advance through the levels.

There are a few obstacles of which there is a locked door right before the exit. A key can be found and used on a locked door. There is also an enemy/ghost that is chasing you if it is encountered.

The player will have limited visibility and can pickup items throughout the maze that can be used anytime.
- keys to open locked doors
- gas/battery to increase light radius or light duration.
- a camera that can snap the ghost and freeze it for a few seconds
- a gun that can shoot the enemy

## Functionality & MVPs
During the game, users will be able to:
* Start, Pause or Unpause the maze, Reset the Maze, Mute or Unmute the volume
* Navigate the character by using the arrow keys
* Use space bar to grab an item that you can use right away, or save it.
* If gun or camera is on the item slot, then left clicking will use the item.

## Wireframes
![Screenshot (123)](https://user-images.githubusercontent.com/85369724/131963654-92eee98c-c880-45f4-9874-9341aa589b32.png)
WARNING! Game is not fully functional and has been refactored to receive multiple maze levels! Stay Tuned!
## Technologies, Libraries, APIs
* Javascript
* HTML
* CSS
* The Canvas API to render the game maze
* Webpack
* Npm

## Implementation Timeline
* **Friday:** Getting webpack running and canvas to show up on screen. Initialize the groundwork of the functions and spend time getting comfortable with canvas. Outline the maze, what the enemy could do and should do, the key/door obstacle, and the gas for the torch/lamp
* **Monday:** Implement the maze board for the game. Make sure the walls and the player have the right physics and is rendered properly on the canvas.
* **Tuesday:** Finish up Monday's render and maze board for the game if needed. Now code out the physics of the player and the key/door before exiting the maze. If conceivable, code out an enemy/entity on the board that chases the player.
* **Wednesday:** Apply CSS and design to the layout from the wireframe and any bugs still occuring.
* **Thursday:** Deploy to Github Page.

## Bonus Features
* Different character selection which have unique items that can be picked up and used
* Add a couple more levels for different maze maps
* Add a difficulty option for each level

<!-- ## Credits -->