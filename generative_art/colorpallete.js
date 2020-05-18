let hue;
let rainbow = true;
let rate = 1;

function setup() {
  //change size of cnavas
  createCanvas(800, 600);
  //want hue to go over entire color wheel from 0-360

  //change canvas  0 is black is RBG but red in HSL
  background(0);
  hue = 0;
}

function draw() {
  //background(220);
}
function mouseDragged() {
  //want to increment hue as drag mouse, but want to reset when get to 360 so not stuck at red

  //increment hue with higher number to make colors change faster

  if (rainbow) {
    if (hue > 360) {
      hue = 0;
    } else {
      hue += rate;
    }
  }
  colorMode(HSL, 360);
  noStroke();
  //use HSL in fill - 0 is red,200 sat, and 200 lightness

  //add hue variable to fill to use it
  fill(hue, 300, 200);
  //change size of ellipse to change brush stroke
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  //see http://keycode.info/ for keycodes

  if (keyCode === 82) {
    //sets hue to red
    hue = 0;
    rainbow = false;
  }

  if (keyCode === 71) {
    hue = 100;
    rainbow = false;
  }

  if (keyCode === 66) {
    hue = 240;
    rainbow = false;
  }
  if (keyCode === 32) {
    rainbow = true;
    rate *= 2;
  }
}

//from https://medium.com/@kellylougheed/rainbow-paintbrush-in-p5-js-e452d5540b25

/**
HSL colors
Hue - degree from 0-360 on the color wheel
Staturation - vivdness of color expressed in percent with 0% being grey and 100% full color
Lightness  - 0% being dark and 100% being light

HSL paintbrush cycle through hues on color wheel


 */
