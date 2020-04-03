class Boundary {
    constructor(x, y, w, h, theta) {
    let options = {
        friction: 0.01,
        restitution: 0.6,
        angle: theta,
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    }
    
    show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(50);
    rect(0, 0, this.w, this.h);
    pop();

    }
}