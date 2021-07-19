var sea;
var ship;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing",shipImg1);
  edges = createEdgeSprites();

  ship.scale = 0.5;
  ship.x = 50
  sea = createSprite(300,180,600,20)
  sea.addImage("sea",seaImg)
  sea.x = sea.width/2
}

function draw() {
  background("blue");
  sea.velocityX = -2;
  if(sea.x<0){
    sea.x = sea.width/2
  }
  ship.collide(sea)
  drawsprites();
 
}
