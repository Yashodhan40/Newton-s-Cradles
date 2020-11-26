
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,box1;

function setup() {
	createCanvas(1000, 600);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//ground = new Ground(600,600,12000,20);
	ground = new Ground(430,150,400,20);

	ball1 = new Bob(255,240,40,40);
	rope1 = new Rope(ball1.body,{x:255,y:150});

	ball2 = new Bob(340,240,40,40);
	rope2 = new Rope(ball2.body,{x:340,y:150});

	ball3 = new Bob(425,240,40,40);
	rope3 = new Rope(ball3.body,{x:425,y:150});

	ball4 = new Bob(510,240,40,40);
	rope4 = new Rope(ball4.body,{x:510,y:150});

	ball5 = new Bob(595,240,40,40);
	rope5 = new Rope(ball5.body,{x:595,y:150});

	
	
  
}


function draw() {
  //rectMode(CENTER);
  Engine.update(engine);
  background(255);
 // console.log(ball1.body.position);
 

 ball1.display();
 rope1.display();
 ball2.display();
 rope2.display();
 ball3.display();
 rope3.display();
 ball4.display();
 rope4.display();
 ball5.display();
 rope5.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(ball1.body,{x:180,y:140});
	}
	
}