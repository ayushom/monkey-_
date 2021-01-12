var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var score=0
var gameState="play"

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);


  monkey = createSprite(50, 350, 30, 30);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(200, 385, 800, 10)

  obstacleGroup = new Group();
  bananaGroup = new Group();
}


function draw() {

  background("skyblue");
  
  if(gameState==="play"){
    
  

  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;


  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);

  if (World.frameCount % 150 == 0) {
    obstacle = createSprite(580, 365, 30, 30)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -4
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 150
  }
  if (World.frameCount % 130 == 0) {
    banana = createSprite(580, 260, 20, 20)
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -6
    bananaGroup.add(banana)
    banana.lifetime = 150;

  }
  
  if (monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
    score = score+1
      }
    
    if ( monkey.isTouching(obstacleGroup)){
      obstacleGroup.destroyEach();
      gameState="end"
    }


text("Score: " + score, 500, 50); 
  
  drawSprites();
  }
  if(gameState==="end"){
    background("black");
        textSize(40)
    fill("yellow")
    text("Game Over ",200,200)
  }
}





