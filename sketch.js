var snow1,snow2,snow3,snow4,snow5;
var boy;
var snow= []


function preload(){
snow1 = loadImage("snow1.jpg")
boyImg = loadImage("Boy.png")
}



function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create()
  world = engine.world
  boy = createSprite(400,200)
  boy.addImage(boyImg)
  boy.scale = 0.5
  boy.velocityX = 3
 
}

function draw() {
  background(snow1); 
  Matter.Engine.update(engine)

  if(frameCount % 10 === 0 ){
    snow.push(new Snow(random(10,380),0))

  }
   for(var i  = 0; i<snow.length; i++){
snow[i].display();
snow[i].velocityY = 5
   }
  drawSprites();
  
 
}