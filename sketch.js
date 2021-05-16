
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup      
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;

ground = createSprite(400,350,900,10)
ground.velocity.X = -4;
ground.x=ground.width/2;
console.log(ground.x)
  
stroke("white");
textSize(20);
fill("white");
text("Score:"+score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time:"+ survivalTime, 100, 50);

}


function draw() {
  background (255);


if (ground.x<0){
  ground.x = ground.width/2
}

if (keyDown("space") ) {
  monkey.velocityY = -12;
  
}

  monkey.velocityY = monkey.velocityY + 0.8
  
  drawSprites();  

}
function reset(){
gameState = PLAY;
gameOver.visible = false;
restart.visible = false;
obstaclesGroup.destroyEach()
FoodGroup.destroyEach()
monkey.changeAnimation("running",trex_running);
monkey.velocityY = 0;
}
