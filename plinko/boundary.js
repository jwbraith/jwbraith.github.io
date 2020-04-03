class Boundary {
    constructor(x, y, w, h) {
        let options = {
            restitution: 0.1,
            friction: 0.05,
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
        fill(255);
        stroke(255);
        rect(0, 0, this.w, this.h);
        pop();
    }
}