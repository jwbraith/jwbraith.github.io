let qTree;
let particles = [];
let numberOfParticles = 50;

function setup() {
  // creates the canvas, puts in html element
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder')

  // creates the particles, puts into array
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(random(200), 30, 8));
  }

  // creates the quadtree
  let boundary = new Rectangle(200, 200, 200, 200);
  qTree = new QuadTree(boundary, 4);


  background(0);
  qTree.show();

  stroke(0, 234, 40);
  rectMode(CENTER);
  let range = new Rectangle(250, 250, 86, 75);
  rect(range.x, range.y, range.w * 2, range.h * 2);




}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    particles[i].setHighlight(false);
  }

  for (let p of particles) {
    for (let other of particles) {
      if (p !== other && p.intersects(other)) {
        p.setHighlight(true);
      }
    }
  }
}