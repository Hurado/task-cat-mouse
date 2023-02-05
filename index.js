const snakeContainer = document.getElementById("snakeContainer");
const mouseContainer = document.getElementById("mouseContainer");

let direction = "right";
let snakeCoordinates = [0, 0];
let mouseCoordinates = [250, 250];
let score = 0;

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowDown":
      direction = "down";
      break;
  }
});

const move = function () {
  switch (direction) {
    case "left":
      snakeCoordinates[0] -= 10;
      break;
    case "up":
      snakeCoordinates[1] -= 10;
      break;
    case "right":
      snakeCoordinates[0] += 10;
      break;
    case "down":
      snakeCoordinates[1] += 10;
      break;
  }

  if (snakeCoordinates[0] < 0) {
    snakeCoordinates[0] = 450;
  }
  if (snakeCoordinates[0] > 450) {
    snakeCoordinates[0] = 0;
  }
  if (snakeCoordinates[1] < 0) {
    snakeCoordinates[1] = 450;
  }
  if (snakeCoordinates[1] > 450) {
    snakeCoordinates[1] = 0;
  }

  snakeContainer.style.left = snakeCoordinates[0] + "px";
  snakeContainer.style.top = snakeCoordinates[1] + "px";
  snakeContainer.firstElementChild.className = "snake " + direction;
  const snakeNodes = snakeContainer.childNodes;
  for (let i = 0; i < snakeNodes.length; i++) {
    snakeNodes[i].className = "snake " + direction;
  }

  if (
    snakeCoordinates[0] >= mouseCoordinates[0] - 10 &&
    snakeCoordinates[0] <= mouseCoordinates[0] + 10 &&
    snakeCoordinates[1] >= mouseCoordinates[1] - 10 &&
    snakeCoordinates[1] <= mouseCoordinates[1] + 10
  ) {
    mouseCoordinates[0] = Math.floor(Math.random() * 450);
    mouseCoordinates[1] = Math.floor(Math.random() * 450);
    mouseContainer.style.left = mouseCoordinates[0] + "px";
    mouseContainer.style.top = mouseCoordinates[1] + "px";
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
  }
};

setInterval(move, 100);
