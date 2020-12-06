class Particle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(5);
    this.r = r;
  }

  update() {
    console.log("updating");
    this.pos.add(this.vel);
    if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    } else if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    } else if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}