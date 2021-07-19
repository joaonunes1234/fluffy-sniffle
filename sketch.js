var sea;
var ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  sea = createSprite(400,200)
  sea.addImage(seaImg)
  //sea.x = sea.width/2
  sea.scale = 0.3;

  ship = createSprite(120,160,20,50);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background(0);
  sea.velocityX = -3;
  if(sea.x<0){
    sea.x = sea.width/8
  }
 
  drawSprites();
 
}