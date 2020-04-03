
// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Bounds = Matter.Bounds,
    Body = Matter.Body;

    let engine;
    let world;


    let circles = [];
    let boundaries = [];
    let spinner;


function setup() {
    createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    boundaries.push(new Boundary(240, height - 50, width, 50, PI / 7));
    boundaries.push(new Boundary(330, 330, 300, 40, -PI/7));
    boundaries.push(new Boundary(120, 140, 300, 40, PI/6));
    rectMode(CENTER);
}
function mouseDragged() {
    
    circles.push(new Faller(mouseX, mouseY, random (6, 10)));
}


function draw() {
    background(0);

    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
        if (circles[i].isOffScreen()) {
            circles[i].kill();
            circles.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }
    // spinner.update();
    // spinner.show();
    

}
