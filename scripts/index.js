let x, y;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder')
}

function draw() {
  background(0);
  noStroke();
  fill(255, 0, 0);
  ellipse(10, 10, 10);
}