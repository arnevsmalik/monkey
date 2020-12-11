
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4

  foodGroup=createGroup();
  
  obstacleGroup=createGroup();
  
  score=0
}


function draw() {
background("white")
  
if(ground.x<0){
     ground.x=ground.width/2;
   }

monkey.collide(ground)
  
if(keyDown("space")){
  monkey.velocityY=-12
} 
monkey.velocityY=monkey.velocityY+0.8;  

food() ; 
rocks();  

score=score+Math.round(getFrameRate()/60);
stroke("black");
textSize(20);
fill("grey");
text("survival time : "+ score,130,20)  
drawSprites();
}

function food(){
 var foods
 if(frameCount%80===0){
   foods=createSprite(350,Math.round(random(120,200)),10,10);
   foods.addImage(bananaImage);
   foods.scale=0.1;
   foods.velocityX=-4;
   foods.lifetime=100;
   foodGroup.add(foods) ;
 }
}

function rocks(){
 var rock
 if(frameCount%300===0){
   rock=createSprite(350,310,10,10);
   rock.addImage(obstacleImage);
   rock.scale=0.2;
   rock.velocityX=-4;
   rock.lifetime=100;
   obstacleGroup.add(rock) ;
 }
}




