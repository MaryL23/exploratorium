//This code is based on the tutorial by Daniel Schiffman at Coding challenge #14 Fractual Trees recursive at https://www.youtube.com/watch?v=0jjeOYMjmDU
let angle = 0;
let slider;

function setup() {
  createCanvas(400, 400);

  slider = createSlider(0, TWO_PI, PI / 2, 0.01);

  slider.position(10, 420);
  frameRate(1);
}

function draw() {
  background(220);
  angle = slider.value();

  strokeWeight(2);
  stroke("green");

  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);

  translate(0, -len); //  starts from 0 x but moves to top of last branch

  if (len > 10) {
    push(); //save translation on right

    stroke("red");
    rotate(angle);
    branch(len * 0.67);
    pop(); //retorses to location

    push();
    stroke("blue");
    rotate(-angle);
    branch(len * 0.67);
    pop();

    push();
    stroke("yellow");
    rotate(0);
    branch(len * 0.67);
    pop();
  }
}
