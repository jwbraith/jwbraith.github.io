class Jumper {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        // this.vel.setMag(0.3);
        this.acc = createVector(0, 0);
        this.radius = 17;
        this.lifespan = 255;
        this.maxspeed = 18;
        this.maxforce = 0.5;
    }

    aim() {
        let propulsion = new createVector();
        //pick polar coordinates;

        if (this.isAtRest()) {
        let theta = random(-PI);
        let magnitude = random(12,24);
        
        propulsion.x = magnitude * sin(theta);
        propulsion.y = magnitude * cos(theta);
        
        }
        return propulsion;
    }

    isAtRest() {
        let isAtRest = false;
        if (this.vel.x > -0.1 && this.vel.x < 0.1 && this.vel.y > -0.1 && this.vel.y < 0.1) {
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

    seek(target) {
        // desired is a vector pointing from position to the target
        let desired; 
        desired = p5.Vector.sub(target, this.pos);
        // Scale to maxspeed
        desired.setMag(this.maxspeed);
        // Steering = desired minus velocity
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxforce); // limit to maximum steering force

        // return steer;
        this.applyForce(steer);
    }

    eat(list) {
        let record = Infinity;
        let closestIndex = -1;
        for (let i = 0; i < list.length; i++) {
            // let d = dist(this.pos.x, this.pos.y, list[i].pos.x, list[i].pos.y);
            let d = createVector(); 
            d = this.pos.dist(list[i].pos);
            if (d < record) {
                record = d;
                closestIndex = i;
            }
        }
        if (record < 10) {
            list.splice(closestIndex, 1);
        } else if (closestIndex > -1) {
        this.seek(list[closestIndex].pos);
        }
    }

    edges() {
        let bounce = -0.9;
        if (this.pos.x < this.radius) {
            this.pos.x = this.radius;
            this.vel.x *= bounce;
        }
        if (this.pos.x > width - this.radius) {
            this.pos.x = width - this.radius; 
            this.vel.x *= bounce;
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
        let rVal = map(this.vel.mag(), 0, 12, 0, 255);
        let gVal = map(this.pos.x, this.radius, (width - this.radius), 0, 255);
        let bVal = map(this.pos.y, (height - this.radius), this.radius, 0, 255);
        translate(this.pos.x, this.pos.y);
        // noStroke();
        stroke(0);
        strokeWeight(1);
        fill(rVal, gVal, bVal, this.lifespan);
        ellipse(0, 0, this.radius * 2);
        pop();
    }
}