// create canvas, setting its size to the window size
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

// images for the game
let backgroundImage, spaceshipImage, missileImage, enemyImage, gameoverImage;

function loadImage() {
  backgroundImage = new Image();
}
