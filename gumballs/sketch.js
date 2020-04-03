
// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Bounds = Matter.Bounds,
    Body = Matter.Body,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

    let engine;
    let world;


    let circles = [];
    let boundaries = [];
    let p1;
    let p2;

    let mConstraint;


function setup() {
    let canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    rectMode(CENTER);
    let prev = null;
    for (let x = width/2; x < 580; x += 40) {
        let stuck = false;
        if (!prev) {
            stuck = true;
        }
        let p = new Circle(x, 100, 10, stuck);
        circles.push(p);

        if (prev) {
            let options = {
                bodyA: p.body,
                bodyB: prev.body,
                length: 20,
                stiffness: 0.1
            }
            let tie = Constraint.create(options);
            World.add(world, tie);
        }
        prev = p
    }


    boundaries.push(new Boundary(width/2, height, 600, 40));

    let canvasMouse = Mouse.create(canvas.elt)
    let options = {
        mouse: canvasMouse
    }
    mConstraint = MouseConstraint.create(engine, options)
    World.add(world, mConstraint);
}



function draw() {
    background(0);
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

}
