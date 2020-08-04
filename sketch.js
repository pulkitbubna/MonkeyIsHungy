//Global Variables
var banana, obstacle, monkey,ground,backGround, obstacleGroup,bananaGroup;
var bananaImage, obstaleImage, backImage, player_running,goundImage;
var score;
var PLAY,END,gameState;

function preload(){
    backImage = loadImage("jungle.png");
  player_running = loadImage ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png",  "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  ground = loadImage("groundImage");
}

function setup() {
  createCanvas(600,300);
  var monkey = createSprite(20,200,5,5);
  monkey.addAnimation(player_running);
  monkey.velocityX = 3;
  var ground = createSprite(10,200,1200,5);
  ground.addImage(groundImage);
  ground.visible = false;
  ground.velocityX=-3;
  ground.x = ground.width /2;
  var backGround = createSprite(300,150,600,300);
  backGround.addImage(backImage);
  backGround.velocityX = -3;

}


function draw(){
 background(255);
if(gamestate === play){
    
    obstacleGroup();
    bananaGroup();
    
    if(keyWentDown("space")&&monkey.y >= 200){
    monkey.velocityY=-12;
  }
       monkey.velocityY = monkey.velocityY + 0.8;
     monkey.collide(ground);
    
  if(bananagroup.isTouching(monkey)){
    bananagroup.destroyEach();
    monkey.scale = scale+0.2;
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  }
    
  if(monkey.isTouching(obstaclegroup)) { 
    monkey.scale = 0.5;}
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate(0))
  
  
  }
  
  ground.x = ground.width /2;
  backGround.x = ground.width/2;

  
  darwSprites()
  text("Survival Time: "+survivaltime,400,25);
}
function obstacleGroup(){
  if(World.frameCount%300===0){
    var obstacle = createSprite(100,240,5,5);
    obstacle.setAnimation("obstaleImage");
    obstacle.scale = 0.15;
    obstacle.x=600;
    obstacle.y=275;
    obstacle.lifetime=134;
    obstaclegroup.add(obstacle);
    obstacle.velocityX=-3;
    
  }
  
  
}

function bananaGroup(){
  if(World.frameCount%150===0){
    var banana = createSprite(200,300,5,5);
    banana.setAnimation("bananaImage");
    banana.scale=0.05;
    banana.velocityX=-3;
    banana.y=randomNumber(120,200);
    banana.lifetime=134;
    bananagroup.add(banana);
    banana.x=400;
  }
}

