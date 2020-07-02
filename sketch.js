//create the sprites
var bullet;
var wall;
var thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  //assign values; speed, thickness and weight
  speed = random(100,150);
  weight = random(30,52);
  thickness = random(22,83)

  //assign values to car
  bullet = createSprite(150,200,10,10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  
  //assign values to wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0,0,0); 
  
  //check thickness of the wall
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage>=10) {
      wall.shapecolor = color(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall) {
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge) {
   return true;
}

return false;
}