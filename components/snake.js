function setup() {
  createCanvas(400, 400);
  // frameRate(1)
}

let prevX = 200;
let prevY = 200;

let newX = 200;
let newY = 200;

const SPEED = 7;
let LENGTH = 3;

const coords = [];

function goto() {
  if (prevX < newX) {
    prevX += SPEED;
  }
  if (prevY < newY) {
    prevY += SPEED;
  }
  if (prevX > newX) {
    prevX -= SPEED;
  }
  if (prevY > newY) {
    prevY -= SPEED;
  }
}

const food = {
  x: Math.floor(Math.random() * 300),
  y: Math.floor(Math.random() * 300),
};

function generateFood() {}

function getRandomColor() {
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);

  return color(r, g, b);
}

function generateFoodRandom() {
  food.x = Math.floor(Math.random() * 300);
  food.y = Math.floor(Math.random() * 300);
}

function detectCollision() {
  if (
    Math.abs(food.x - coords[coords.length - 1].x) < 10 &&
    Math.abs(food.y - coords[coords.length - 1].y) < 10
  ) {
    LENGTH++;
    generateFoodRandom();
  }
}

function handleFoodEaten() {}

function draw() {
  goto();
  background(220);
  coords.forEach((coord, index) => {
    if (index === coords.length - 1) {
      let c = color(255, 204, 0);
      fill(c);
      circle(coord.x, coord.y, 12);
      return;
    }
    fill(coord.clr);
    circle(coord.x, coord.y, 10);
  });
  newX = mouseX;
  newY = mouseY;
  coords.push({
    x: prevX,
    y: prevY,
    clr: getRandomColor(),
  });

  fill(255, 0, 0);
  circle(food.x, food.y, 10);
  fill(255);

  if (coords.length > LENGTH) {
    coords.shift();
  }
  detectCollision();
}
