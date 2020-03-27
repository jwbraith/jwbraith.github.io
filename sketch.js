let jumpers = [];
let numJumpers = 4;

function setup() {
	createCanvas(600, 600);
	background(0);
	ellipseMode(CENTER);
	for (let i = 0; i < numJumpers; i++) {
		jumpers.push(new Jumper(width / 2, height / 2));
	}
}

function draw() {
	// background(0);
	
	let gravity = createVector(0, 0.2);
	for (let i = 0; i < jumpers.length; i++) {
		jumpers[i].applyForce(gravity);
		jumpers[i].applyForce(jumpers[i].aim());
		jumpers[i].friction();
		jumpers[i].edges()
		jumpers[i].update();
		jumpers[i].show();
	}
}