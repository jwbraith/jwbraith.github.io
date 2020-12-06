
let particles = [];
let numberOfParticles = 100;

function setup() {
  var canvas = createCanvas(400, 400);
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(30, 30, 8));
  }
  canvas.parent('sketch-holder')
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}