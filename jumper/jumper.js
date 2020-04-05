class Jumper {
    constructor(x, y, dna1 = random(PI/2, (PI+PI/2)), dna2 = random(2, 24), hue = random(360)) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        // this.vel.setMag(0.3);
        this.acc = createVector(0, 0);
        this.radius = 17;
        this.lifespan = 255;
        this.maxspeed = 18;
        this.maxforce = 0.5;
        this.hasReproduced = false;
        this.DNA1 = dna1 + random(-PI/12, PI/12);
        this.DNA2 = dna2 + random(-0.5, 0.5);
        this.hue = hue + random(-0.5, 0.5);
    }

    aim() {
        let propulsion = new createVector();
        //pick polar coordinates;

        if (this.isAtRest()) {
        let theta = this.DNA1;
        let magnitude = this.DNA2;
        this.lifespan -= (magnitude * 8);
        
        propulsion.x = magnitude * sin(theta);
        propulsion.y = magnitude * cos(theta);
        
        }
        return propulsion;
    }

    isAtRest() {
        let still = (this.vel.x > -0.1 && this.vel.x < 0.1 && this.vel.y > -0.1 && this.vel.y < 0.1);
        let grounded = (this.pos.y > (height - (2 + this.radius * 2)));
        let isAtRest = false;
        if (still && grounded) {
            isAtRest = true;
        }
        return isAtRest;
    }

    friction() {
        let diff = height - (this.pos.y + this.radius);
        if (diff < 1) {
            // console.log('friction');
            //Get the direction of friction
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);
            
            //Get the magnitude of friction
            let mu = 0.05;
            // let normal = this.mass;
            friction.setMag(mu);

            this.applyForce(friction);
        }
    }

    update() {
        //update acceleration
        this.vel.add(this.acc);
        // limit speed
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        // reset acceleration to zero each cycle
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }


    consume(other) {
        let proxim = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (proxim < (this.radius + other.radius)) {
            return true;
        }
    }

    clone() {
        let chance = random(1000);
        if (chance < 1) {
            this.lifespan -= 30;
            return true;
        } else {
            return false;
        }
    }

    edges() {
        let bounce = -0.65;
        if (this.pos.x < this.radius) {
            this.pos.x = width-this.radius;
        }
        if (this.pos.x > width - this.radius) {
            this.pos.x = this.radius; 
        }
        if (this.pos.y > height - this.radius) {
            this.pos.y = height - this.radius;
            this.vel.y *= bounce;
        }
        if (this.pos.y < this.radius) {
            this.pos.y = this.radius;
            this.vel.y *= bounce;
        }
    }

    show() {
        //draw a circle
        push();
        colorMode(HSB);
        // translate(this.pos.x, this.pos.y);
        // noStroke();
        stroke(0, this.lifespan);
        strokeWeight(1);
        fill(this.hue, this.lifespan, this.lifespan);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
        pop();
    }
}