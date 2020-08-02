var player, player_img;
var bubble, bubble_img, random1, bubbleGroup;
var bullet, bullet_img, bulletGroup;
var score = 0;
function preload()
{
  player_img = loadImage("player.png");
  bubble_img = loadImage("1.png");
  bullet_img = loadImage("bullet.png");
}
function setup()
{
  createCanvas(400,400);
  player = createSprite(200,370,20,20);
  player.addImage(player_img);
  player.scale = 0.3;
  bubbleGroup = new Group();
  bulletGroup = new Group();
}
function draw()
{
  background(0);
  player.x = mouseX;
  fill("white");
  textSize(20);
  text("Score = "+score,10,20);
  if(World.frameCount%60 === 0)
  {
    random1 = Math.round(random(10,380));
    bubble = createSprite(random1,65,10,10);
    bubble.addImage(bubble_img);
    bubble.scale = 0.2;
    bubble.setVelocity(0,2);
    bubbleGroup.add(bubble);
  }
  if(keyWentDown("space"))
  {
    bullet = createSprite(player.x,375,10,10);
    bullet.addImage(bullet_img);
    bullet.scale = 0.08;
    bullet.setVelocity(0,-8);
    bulletGroup.add(bullet);
  }
  for(var i=0; i<bubbleGroup.length; i++)
  {
    if(bulletGroup.isTouching(bubbleGroup))
    {
      bubbleGroup.get(i).destroy();
      score = score + 1;
    }
  }
  drawSprites();
}