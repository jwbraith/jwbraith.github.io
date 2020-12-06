let x = 10;
let y = 10;
let xVel = 1;
let yVel = 1;
let particle;


function setup() {
  var canvas = createCanvas(400, 400);
  particle = new Particle(10, 10);
  canvas.parent('sketch-holder')
}

function draw() {
  background(0);
  particle.update();
  particle.show();
}