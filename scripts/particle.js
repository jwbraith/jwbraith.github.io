class Particle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(5);
    this.radius = r;
    this.colour = color(random(255), random(255), random(255));
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -1;
    } else if (this.pos.x > width - this.radius) {
      this.pos.x = width - this.radius;
      this.vel.x *= -1;
    }

    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
      this.vel.y *= -1;
    } else if (this.pos.y > height - this.radius) {
      this.pos.y = height - this.radius;
      this.vel.y *= -1;
    }
  }

  show() {
    noStroke();
    fill(this.colour);
    ellipse(this.pos.x, this.pos.y, this.radius);
  }

}