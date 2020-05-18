function setup() {
  createCanvas(800, 600);
 
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

 