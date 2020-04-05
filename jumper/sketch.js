let jumpers = [];
let children = [];
let numJumpers = 16;
let col = 255;
let floaters = [];
let numFloaters = 200;
let explainer;

function setup() {
	createCanvas(600, 600);
	background(0);
	ellipseMode(CENTER);
	explainer = createP(numJumpers);
	for (let i = 0; i < numJumpers; i++) {
		jumpers.push(new Jumper(random(100, 500), height - 37));
	}
	for (let i = 0; i < numFloaters; i++) {
		floaters.push(new Floater(random(width), random(height)));
	}
}

function draw() {
	background(0);
	explainer.value(jumpers.length);
	let gravity = createVector(0, 0.2);
	if (frameCount % 30 == 0 && jumpers.length < 10) {
		floaters.push(new Floater(random(width), random(height)));
	}

	for (let i = jumpers.length -1; i >= 0; i--) {
		jumpers[i].applyForce(gravity);
		jumpers[i].applyForce(jumpers[i].aim());
		jumpers[i].friction();
		jumpers[i].edges()
		for (let j = (floaters.length - 1); j >= 0; j--) {
			if (jumpers[i].consume(floaters[j])) {
				jumpers[i].lifespan += 5;
				floaters.splice(j, 1);
			}
		}
		jumpers[i].update();
		jumpers[i].show();
	}

	if (jumpers.length >= 0) {
		for (let i = (jumpers.length - 1); i >= 0; i--) {
			if (jumpers[i].clone()) {
				jumpers.push(new Jumper(width /2, (height - 39), jumpers[i].DNA1, jumpers[i].DNA2, jumpers[i].hue));
			}
			if (jumpers[i].lifespan <= 0) {
				for (let j = 0; j < 20; j++) {
					floaters.push(new Floater(random(width), random(height)));
				}
				jumpers.splice(i, 1);
			}
		}
	}

	for (let i = floaters.length - 1; i >= 0; i--) {
		floaters[i].edges();
		if (floaters[i].isAlive) {
			floaters[i].update();
			floaters[i].show();
		} else {
			floaters.splice(i, 1);
		}
	}
}