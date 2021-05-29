
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImage;
var fg,fgImage;
var bird,birdImage 



function preload()
{
	bgImage=loadImage("bg.png.png");
	fgImage=loadImage("fg.png.png")
	birdImage=loadImage("bird.png.png")
	
}

function setup() {
	createCanvas(300 ,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg= createSprite(144,256,10,10)
	bg.addImage(bgImage)

     fg= createSprite(144,470,20,20)
	 fg.addImage(fgImage)

	 bird= createSprite(25,256,20,20)
	bird.addImage(birdImage)
	bird.scale=0.3;

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background(0,151,157);
  
  fg.velocityX=-1;

  if(fg.x<137){
  fg.x=fg.width/2;


  


  }

if(keyDown("space")){
	bird.y=bird.y-15
}
else{
	bird.velocityY=5;
}


  drawSprites();
 
}



