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

// spaceship coordinate
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 64;

function loadImage() {
  // background
  backgroundImage = new Image();
  backgroundImage.src = "images/background.gif";

  // spaceship
  spaceshipImage = new Image();
  spaceshipImage.src = "images/spaceship.png";

  // missile
  missileImage = new Image();
  missileImage.src = "images/missile.png";

  // enemy
  enemyImage = new Image();
  enemyImage.src = "images/enemy.png";

  // gameover
  gameoverImage = new Image();
  gameoverImage.src = "images/gameover.gif";
}

// draw images on canvas
function render() {
  // ctx drawimages == https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  // draw spaceship
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main() {
  render();
  console.log("animation calls main function");
  requestAnimationFrame(main);
}

loadImage();
main();
