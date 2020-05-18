//ACKNOWLEDGMENT: This code is based on samples from https://p5js.org/examples/

const grid = {
  rows: 10,
  cols: 10,
};

const cell = {
  width: 80,
  height: 80,
};

let seed;

function setup() {
  createCanvas(800, 600);
  stroke(255);

  seed = random(0, 100);
}

function draw() {
  background(25, 51, 103);
  randomSeed(seed);

  for (let i = 0; i < grid.rows; i++) {
    for (let j = 0; j < grid.cols; j++) {
      const x = i * cell.width;
      const y = j * cell.height;
      fill(193, 209, 240);

      ellipse(x, y, 10, 10);

      stroke(193, 209, 240);
      if (random(0, 1) > 0.5) {
        strokeWeight(mouseX / 35);
        line(x, y, x + cell.width, y + cell.height);
      } else {
        strokeWeight(mouseY / 35);

        line(x + cell.width, y, x, y + cell.height);
      }
    }
  }
}
