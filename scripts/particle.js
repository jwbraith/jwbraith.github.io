class Particle {
  cosntructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
  }

  update() {
    console.log("updating");
    this.pos.add(this.vel);
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10);
  }
}