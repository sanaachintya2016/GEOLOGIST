
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var stone,ground,rubber,hammer,sand1,sand2,sand3,sand4,sand5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();

	world = engine.world;

stone = new Stone();
rubber = new Rubber();
ground = new Ground(400,600,900,50);
hammer = new Hammer();
sand1 = new Sand(400);
sand2 = new Sand(450);
sand3 = new Sand(440);
sand4 = new Sand(460);
sand5 = new Sand(480);


	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  stone.display();
  ground.display();
  rubber.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display(); 
  sand4.display(); 
  sand5.display();
  drawSprites();
 
}



