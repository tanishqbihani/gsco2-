
var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1200,400);

  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,thickness,100);
  

  speed = random(223,321);
  weight = random(30,52);

   bullet.velocityX = speed;


  }

function draw() {

  background('black'); 
  
  if(hasCollided(bullet,wall))
    {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed  * speed/(thickness *thickness *thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
     if(damage<10)
     {
      wall.shapeColor=color(0,255,0);
    }
     if(deformation<100)
     {
     }
    }
     drawSprites();
    }
      


    function hasCollided(lbullet,lwall)
    {
        bulletRightEdge=lbullet.x +lbullet.width;
        wallleftEdge=lwall.x;
        if(bulletRightEdge>=wallleftEdge)
        {
            return true
        }
        return false;
    }