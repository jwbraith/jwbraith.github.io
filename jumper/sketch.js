let jumpers = [];
let children = [];
let numJumpers = 16;
let col = 255;
let floaters = [];
let numFloaters = 200;
let jumperPop;
let floaterPop;

//TO DO
// - Add html explaining and presenting the sketch
// - Add dynamic html that displays info
// - Add dynamic html that allows control over sketch params

function setup() {
	createCanvas(600, 600);
	background(0);
	ellipseMode(CENTER);
	for (let i = 0; i < numJumpers; i++) {
		jumpers.push(new Jumper(random(100, 500), height - 37));
	}
	for (let i = 0; i < numFloaters; i++) {
		floaters.push(new Floater(random(width), random(height)));
	}
	jumperPop = createP("Jumper Population: " + jumpers.length);
	floaterPop = createP("Floater Population: " + numFloaters);
	createP('');
	createP("This sketch attempts to emulate an evolutionary process. Each circle (called 'jumpers') is nourished by a green dot (called 'floaters') and has a chance of cloning itself while alive. Each jumper has dna comprising three data points:");
	createElement('li', "Jumping Angle");
	createElement('li', "Jumping Magnitude");
	createElement('li', "Hue");
	createP("Each consumed floater proves $nourishment_value$. Each jump costs $jump_cost$ energy. Each jumper has a chance of cloning, which costs $clone_cost$ energy. I'm hoping the system of objects arrives at some equilibrium.");
}

function draw() {
	background(0);
	jumperPop.html("Jumper Population: " + jumpers.length);
	floaterPop.html("Floater Population: " + floaters.length);
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