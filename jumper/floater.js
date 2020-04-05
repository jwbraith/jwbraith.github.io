class Floater {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.isAlive = true;
        this.speed = 0.7;
        this.radius = 2;
    }

    update() {
        this.pos.x += random(-this.speed, this.speed);
        this.pos.y += random(-this.speed, this.speed);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.isAlive = false;
        } else if (this.pos.y < 0 || this.pos.y > height) {
            this.isAlive = false;
        } else {
            this.isAlive = true;
        }
    }

    show() {
        noStroke();
        fill(0, 255, 0);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
}