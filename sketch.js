// declare variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground

function setup() {
  // create canvas
  createCanvas(1200, 400);
  // create engine and put world inside
	engine = Engine.create();
	world = engine.world;

	//Create the bodies
  paper = new Paper(50, 100);
  ground = new Ground(600, 390);
  lWall = new Dustbin(940, 330, 20, 100);
  rWall = new Dustbin(1060, 330, 20, 100);
  bWall = new Dustbin(1000, 370, 100, 20);
  // run the engine
	Engine.run(engine);
  
}

function draw() 
{
  rectMode(CENTER);
  // make bg black
  background(0);
  // display bodies
  paper.display();
  ground.display();
  lWall.display();
  rWall.display();
  bWall.display();
  // update engine
  Engine.update(engine);
  // make paper go in dustbin
  keyPressed();
  // drawSprites
  drawSprites();
 
}

function keyPressed()
{
  // if the key is pressed
  if (keyWentDown(UP_ARROW))
  {
    // apply force
    Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y:-20})
  }
}