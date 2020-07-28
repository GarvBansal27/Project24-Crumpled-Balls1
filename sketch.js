
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	this.paper= new Paper(100,500,10,10);
    world.add(World,this.paper);

	this.dustbin = new Dustbin(500,500,50,50);
	world.add(World,this.dustbin);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if( keyCode === UP_ARROW){
        Matter.body.applyForce(paperObject.body.position,{x:85,y:-85});
	}
}


