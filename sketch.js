var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score,ground, survivalTime;
survivalTime = 0;

function preload(){
  monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  monkey = createSprite(80,315,20,20);  
  monkey.addAnimation("monkeyRunning",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("beige");
  /*stroke("white");
  textSize(20);
  fill("white");
  text("Score: " +score, 500,50);*/
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x<0){
     ground.x = ground.width/2;
  }
  
  food();
  spawnObstacle();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " +survivalTime, 100,50);
  
  monkey.collide(ground);
  drawSprites(); 
}

function food(){
  if(frameCount%80 === 0){
    banana = createSprite(350,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 120;
    bananaGroup.add(banana);
    monkey.depth = banana.depth+1;
  }
}

function spawnObstacle(){
  if(frameCount%300 === 0){
    obstacle = createSprite(400,320,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}