var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box2,box3,Box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	box = createSprite(400,650,200,20);
	box.shapeColor = "red"
	box2 = createSprite(500,600,20,100);
	box2.shapeColor = "red"
    box3 = createSprite(300,600,20,100);
	box3.shapeColor = "red"

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	Box = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world,Box);


	//Create a Ground
	ground = Bodies.rectangle(400, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

    Box.x = Box.x
	Box.y = Box.y
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false);
   
    
  }
}



