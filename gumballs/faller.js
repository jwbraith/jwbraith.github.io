class Faller {
    constructor(x, y, r) {
    let options = {
        friction: 0.005,
        restitution: 0.6,
        density: 1,
        isStatic: false
    }
    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    World.add(world, this.body);
    }
    
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(0);
        strokeWeight(2);
        fill(this.r, this.g, this.b);
        ellipse(0, 0, this.radius * 2);
        pop();
    }

    isOffScreen() {
        let pos = this.body.position;
        return (pos.y > height + 100);
    }
    kill() {
        World.remove(world, this.body);
    }
    edges() {
        let pos = this.body.position;
        if (pos.y > 300) {
            World.remove(world, this.body);
        }
    }
}