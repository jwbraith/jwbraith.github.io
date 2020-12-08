class Particle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(1);
    this.radius = r;
    this.highlight = false;
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

  intersects(other) {
    let distance = this.pos.dist(other.pos);
    return (distance < this.radius + other.radius)
  }

  setHighlight(value) {
    this.highlight = value;
  }

  show() {
    noStroke();
    if (this.highlight) {
      fill(255);
    } else {
      fill(100);
    }
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

}