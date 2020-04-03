class Particle {
    constructor(x, y, r) {
        this.hue = random(360);
        let options = {
            restitution: 0.4,
            friction: 0.0,
            density: 0.05
        }
        x += random(-1, 1);
        this.body = Bodies.circle(x, y, r, options);
        this.body.label = "particle";
        this.r = r;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        fill(this.hue, 255, 255);
        noStroke();
        ellipse(0, 0, this.r * 2);
        pop();
    }

    offScreen() {
        let x = this.body.position.x;
        let y = this.body.position.y;
        return (x < -50 || x > width + 50 || y > height + 100);
    }
}