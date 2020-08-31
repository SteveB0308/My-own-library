var movingRect, fixedRect, gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(800,400,50,50);
  movingRect.shapeColor="green";
  gameobject1=createSprite(100,800,50,50);
  //gameobject1.velocityX=6;
  gameobject1.velocityY=-6;
  gameobject1.shapeColor = "pink";
  gameobject2=createSprite(100,200,50,50);
  //gameobject2.velocityX=-6;
  gameobject2.velocityY=6;
  gameobject2.shapeColor="blue";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (isTouching(movingRect,gameobject1))
  {
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";
  }
 
  if (bounceOff(gameobject1,gameobject2));
  drawSprites();
}

