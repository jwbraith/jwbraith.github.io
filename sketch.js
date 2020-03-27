let jumper;

function setup() {
	createCanvas(600, 600);
	ellipseMode(CENTER);
	jumper = new Jumper(width / 2, height / 2);
}

function draw() {
	background(0,5);
	let gravity = createVector(0, 0.2);
	jumper.applyForce(gravity);

		jumper.applyForce(jumper.aim());
	jumper.friction();
	jumper.edges()
	jumper.update();
	jumper.show();
}