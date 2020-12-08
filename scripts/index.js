let qt;
let particles = [];
let numberOfParticles = 100;

function setup() {
  var canvas = createCanvas(400, 400);
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(30, 30, 8));
  }
  canvas.parent('sketch-holder')
  let boundary = new Rectangle(200, 200, 200, 200);
  qt = new QuadTree(boundary, 4);
  console.log(qt);

  for (let i = 0; i < 250; i++) {
    let p = new Point(random(width), random(height));
    qt.insert(p);
  }
  background(0);
  qt.show();

  stroke(0, 234, 40);
  rectMode(CENTER);
  let range = new Rectangle(250, 250, 86, 75);
  rect(range.x, range.y, range.w * 2, range.h * 2);

  let points = [];
  qt.query(range, points);
  for (p of points) {
    strokeWeight(6);
    point(p.x, p.y);
  }

}

function draw() {

}

// function draw() {
//   background(0);
//   for (let i = 0; i < particles.length; i++) {
//     particles[i].update();
//     particles[i].show();
//   }
// }