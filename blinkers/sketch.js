let blinkers = [];

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
	for (let i = 0; i < width*2; i += 40) {
		for (let j = 0; j < height*2; j += 40) {
			if (random(5) < 5) {
				blinkers.push(new Blinker(i + 20, j + 20));
			}
		}
	}
}

function draw() {
	background(0);
push();
translate(300,-200);
rotate(PI/4);
	for (let i = 0; i < blinkers.length; i++) {
		blinkers[i].update();
		blinkers[i].show();
	}
	pop();

}
function kaleid() {
	push();
	translate(width, 0);
	scale(-1, 1);
	copy(0, 0, width / 2, height, 0, 0, width / 2, height);
	pop();
	push();
	translate(0, height);
	scale(1, -1);
	copy(0, 0, width, height / 2, 0, 0, width, height / 2);
	pop();
}