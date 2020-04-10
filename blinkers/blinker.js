class Blinker {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.size = 10;
        this.maxSize = 40;
        let middle = createVector(width/2, height/2);
        let dist = p5.Vector.dist(this.position, middle);
        this.minSize = 0;
        this.sizeDelta = map(dist, 0, 424,0.4,2.12);
        this.isFilled = true;
        this.fill = 0;
        // color(random(255), random(255), random(255))
    }

    update() {
        this.size += this.sizeDelta;
    }

    show() {

        if (this.size > this.maxSize) {
            this.sizeDelta *= -1;

        } else if (this.size < this.minSize) {
            this.sizeDelta *= -1;
            if (this.isFilled) {
                this.fill = 255;
                this.isFilled = false;
            } else if (!this.isFilled) {
                this.fill = 0;
                this.isFilled = true;
            }
        }
        fill(this.fill);
        stroke(255);
        strokeWeight(4);
        // push();
        // translate(300,0);
        // rotate(PI/4);
        rect(this.position.x, this.position.y, this.size, this.size);
        // pop();
    }
}