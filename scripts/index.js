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

  // for (let i = 0; i < 50; i++) {
  //   let p = new Point(random(width), random(height));
  //   qt.insert(p);
  // }
}

function draw() {
  if (mouseIsPressed) {
    let m = new Point(mouseX, mouseY);
    qt.insert(m);
  }
  background(0);
  qt.show();
}

// function draw() {
//   background(0);
//   for (let i = 0; i < particles.length; i++) {
//     particles[i].update();
//     particles[i].show();
//   }
// }