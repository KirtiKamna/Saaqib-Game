  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var knight;
var knightIdle;


function preload(){
    

knightIdle = loadAnimation("Idle/Idle (1).png","Idle/Idle (2).png","Idle/Idle (3).png","Idle/Idle (4).png","Idle/Idle (5).png",
"Idle/Idle (6).png","Idle/Idle (7).png","Idle/Idle (8).png","Idle/Idle (9).png","Idle/Idle (10).png",)
}

function setup(){
    engine = Engine.create();
    world = engine.world;
  createCanvas(1400,700)

  knight = createSprite(700,350,50,50);
  knight.addAnimation("Idle",knightIdle);
  knight.scale = 0.3;


 
}

function draw(){
    Engine.update(engine);
    background("Blue")
   
drawSprites();
}





