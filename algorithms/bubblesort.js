//Acknowledgment: This code is based on the tutorial by Daniel Schiffman at Coding challenge 143 quicksort https://www.youtube.com/watch?v=eqo2LxRADhU

let unsortedArr = [];
let i = 0;
let j = 0;

function setup() {
  createCanvas(600, 500);

  for (let i = 0; i < width; i++) {
    unsortedArr[i] = parseInt(random(0, 255), 10);
  }
}

function draw() {
  background(204);

  if (i < unsortedArr.length) {
    for (let j = 0; j < unsortedArr.length - i - 1; j++) {
      let a = unsortedArr[j];
      let b = unsortedArr[j + 1];
      if (a > b) {
        swap(unsortedArr, j, j + 1);
      }
    }
  } else {
    console.log("Sorted the array");
    noLoop();
  }
  i++;

  for (let i = 0; i < unsortedArr.length; i++) {
    stroke(unsortedArr[i]);
    strokeWeight(20);
    line(i, 0, i, height);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
