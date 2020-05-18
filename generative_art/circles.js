function setup() {
  createCanvas(800, 600);
  //   textAlign(CENTER, CENTER);
  //   frameRate(1);
}

function draw() {
  background(50);

  fill(255, 0, 0);
  noStroke();
  let diameter = 20;

  for (let i = 0; i < width / diameter; i++) {
    for (let j = 0; j < height / diameter; j++) {
      ellipse(
        i * diameter + diameter / 2,
        j * diameter + diameter / 2,

        //random() returns rather abrupt updates but noise function is more gradual
        //values like those for noise are like coordinates for random values - incrementally changing numbers

        // diameter * random(),
        diameter * noise(frameCount / 100 + i + j),
        //
        diameter * noise(frameCount / 100 + i + j)
      );
    }
  }

  //   let random_0 = random();
  //   let random_1 = random(10);
  //   let random_2 = random(100, 1000);
  //   let offset = 40;

  //   fill(255);
  //   textSize(24);
  //   text(random_0, width / 2, height / 2 - offset);
  //   text(random_1, width / 2, height / 2);
  //   text(random_2, width / 2, height / 2 + offset);

  //   fill(237, 34, 93);
  //   noStroke();
  //   let diameter = 20;

  //   //this loop goes across
  //   for (let i = 0; i < width / diameter; i++) {
  //     for (let j = 0; j < height / diameter; j++) {
  //       //i*50 is needed to offset each circle
  //       //otherwise they would be on top of each other
  //       //if canvas is 800 and circles are 50 can fit 14 in there
  //       //use diameter/2 to make sure all circles are fully displayed on pagesince first one is slightly off
  //       //nested loops can make programs slow
  //       ellipse(
  //         i * diameter + diameter / 2,
  //         j * diameter + diameter / 2,
  //         diameter,
  //         diameter
  //       );
  //     }
  //   }
}

/*

  random() function - generates random number when called
  by default number is between 0 and 1

  if pass a number - generates number between 0 and number that you passed
  if pass min and max = generates number between them

  noise(input) - provided a sequential input - it creates random values that have a smoother transition

  */
