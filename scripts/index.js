let particles = [];
let numberOfParticles = 1000;

function setup() {
  // creates the canvas, puts in html element
  var canvas = createCanvas(200, 400);
  canvas.parent('sketch-holder')

  // creates the particles, puts into array
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(random(width), random(height), random(0.5, 2.5)));
  }
}

function draw() {
  background(0);

  // creates the QUADTREE
  let boundary = new Rectangle(width / 2, height / 2, height, width);
  let qTree = new QuadTree(boundary, 4);
  // qTree.show();

  for (let p of particles) {
    let point = new Point(p.pos.x, p.pos.y, p);
    qTree.insert(point);

    p.update();
    p.show();
    p.setHighlight(false);
  }

  for (let p of particles) {
    let range = new Circle(p.pos.x, p.pos.y, p.radius * 2);
    let points = qTree.query(range);
    for (let point of points) {
      let other = point.userData;
      if (p !== other && p.intersects(other)) {
        // console.log("intersection!");
        p.setHighlight(true);
      }
    }
  }
}