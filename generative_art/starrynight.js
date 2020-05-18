/* eslint-disable comma-spacing */
/* eslint-disable quotes */
/* eslint-disable max-params */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//ACKNOWLEDGMENT: This code is based on the tutorial at  https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b

let stars = [];
let moon;
let shootingStar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
  //create stars
  for (let i = 0; i < 50; i++) stars.push(new Star());
  moon = new Moon();
  shootingStar = new ShootingStar();
}

function draw() {
  background(220);
  let color1 = color(0, 0, 153);
  let color2 = color(204, 51, 0);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

  //moon
  // moon.draw();
  shootingStar.draw();
  //positioning

  for (let i = 0; i < 50; i++) {
    stars[i].draw();
  }
  //   //no outline on stars
  //   noStroke();
  //   //make stars yellow
  //   fill(255, 255, 0);
  //   //draws a "star"
  //   ellipse(x, y, 20, 20);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  if (axis === "Y") {
    //top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === "X") {
    //left to right gradient

    for (let j = x; j <= x + w; j++) {
      let inter2 = map(j, x, x + w, 0, 1);
      let d = lerpColor(c1, c2, inter2);
      stoke(d);
      line(j, y, j, y + h);
    }
  }
}

function Star() {
  this.x = random(windowWidth);
  this.y = random(windowHeight - 200);
  this.w = 3;
  this.h = 3;
}

Star.prototype.draw = function () {
  noStroke();
  fill(255, 255, 0);

  if (this.w === 3) {
    this.w = 4;
    this.h = 4;
  } else {
    this.w = 3;
    this.h = 3;
  }
  ellipse(this.x, this.y, this.w, this.h);

  this.x += random(10) - 5;
  this.y += random(10) - 5;
};

function Moon() {
  this.y = windowWidth - 650;
  this.x = windowHeight - 800;
}

Moon.prototype.draw = function () {
  noStroke();
  fill(205, 205, 0);
  ellipse(this.x, this.y, 75, 65);
};

function ShootingStar() {
  this.x = random(windowWidth - 200);
  this.y = random(windowHeight - 400);
  // this.w = 6;
  // this.h = 4;
  this.w = 12;
  this.h = 8;
}
ShootingStar.prototype.draw = function () {
  noStroke();
  fill(255, 255, 0);

  ellipse(this.x, this.y, this.w, this.h);
  if (this.h > 0) {
    this.h -= 0.5;
  }
  this.w += 7;
  this.x += 5;
};
