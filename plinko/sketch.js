// module aliases
let Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Body = Matter.Body,
	Bounds = Matter.Bounds,
	Events = Matter.Events;

	let engine;
	let world;
	let particles = [];
	let pegs = [];
	let bounds = [];

	let clearButton;
	let board;

	let cols = 12;
	let rows = 11;
	let spacing = 20;

function setup() {
	//ENGINE SETUP
	engine = Engine.create();
	world = engine.world;
	world.gravity.y = 1;
	
	//DOM ELEMENT SETUP
	clearButton = createButton("CLEAR THE BOARD");
	clearButton.mousePressed(removeParticles);

	//CANVAS SETUP
	board = createCanvas(600, 700);
	board.mousePressed(ballDrop);
	colorMode(HSB);
	rectMode(CENTER);

	//PEG SETUP
	spacing = width / cols;
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			let x = i * spacing;
			if (j % 2 == 1) {
				x += spacing / 2;
			} 
			let p = new Peg(x + spacing / 3, j * spacing + 100, 5, true);
			pegs.push(p);
		}
	}

	//BOUNDARIES SETUP
	let b = new Boundary(width / 2, height + 50, width, 100);
	bounds.push(b);
	let rightSide = new Boundary(width + 25, height / 2, 50, 700);
	bounds.push(rightSide);
	let leftSide = new Boundary(0 - 26, height / 2, 50, 700);
	bounds.push(leftSide);

	for (let i = 0; i < cols + 1; i++) {
		let x = i * spacing;
		let h = 50;
		let w = 10;
		let y = height - h / 2;
		let bucket = new Boundary(x, y, w, h);
		bounds.push(bucket);
	}
}

//function to drop a circle when user clicks in appropriate area
function ballDrop() {
	if (mouseX < width && mouseX > 0 && mouseY < 70 && mouseY > 0) {
		let click = new Particle(mouseX, mouseY, 20);
		particles.push(click);
	}
}

//function to clear the board of balls on button click
function removeParticles() {
	for (let i = particles.length -1; i >= 0; i--) {
		World.remove(world, particles[i].body);
		particles.splice(i, 1);
	}
}

function draw() {
	background(0, 0, 0);
	Engine.update(engine);
	for (let i = 0; i < particles.length; i++) {
		particles[i].show();
		if (particles[i].offScreen()) {
			World.remove(world, particles[i].body);
			particles.splice(i, 1);
			i--;
		}
	}
	for (let i = 0; i < pegs.length; i++) {
		pegs[i].show();
	}
	for (let i = 0; i < bounds.length; i++) {
		bounds[i].show();
	}
}