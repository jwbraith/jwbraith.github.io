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
}

function draw() {
  background(0);

  // creates the QUADTREE
  let boundary = new Rectangle(width / 2, height / 2, height, width);
  let qTree = new QuadTree(boundary, 4);

  for (let p of particles) {
    let point = new Point(p.x, p.y, p);
    qTree.insert(point);

    p.update();
    p.show();
    p.setHighlight(false);
  }

  for (let p of particles) {
    let range = new Circle(p.x, p.y, p.r * 2);
    let points = qTree.query(range);
    for (let point of points) {
      let other = point.userData;

      if (p !== other && p.intersects(other)) {
        console.log("intersection!");
        p.setHighlight(true);
      }
    }
  }
}