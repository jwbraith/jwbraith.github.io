class Peg {
    constructor(x, y, r) {
        this.r = r;
        let options = {
            isStatic: true,
            restitution: 0.8,
            friction: 0.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.body.label = "peg";
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(255);
        stroke(255);
        ellipse(0, 0, this.r * 2);
        pop();
    }
}