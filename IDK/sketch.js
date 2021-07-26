var player,bigship,bigshipImg
var bulletGroup1,bulletGroup2,shipGroup1,shipGroup2,shipGroup3,shipGroup4;
var bg,bgImg;player_running,shipImg,bulletImg,planeImg;
var bgSound;
var shoot1,shoot2;

function preload(){
  player_running = loadAnimation("images/player.png","images/player2.png","images/player3.png","images/player4.png");
  bulletImg=loadImage('images/bullet.png');
  shipImg=loadImage('images/ship.png');
  bgImg=loadImage('images/space.jpg')
  bigshipImg=loadImage('images/bigship.png');
  planeImg=loadImage('images/spaceship.png');
  bgSound=loadSound("audio.mp3");
  shoot1=loadSound("shoot1.mp3");
  shoot2=loadSound("shoot2.mp3");
}

function setup(){
  createCanvas(1000, 525);
  player=createSprite(50,213);
  player.addAnimation("running", player_running);
  player.scale=0.1;

  bigship=createSprite(850,200);
  bigship.addImage(bigshipImg);
  bigship.scale=0.2

  bulletGroup1 = new Group();
  bulletGroup2 = new Group();
  shipGroup1 = new Group();
  shipGroup2 = new Group();
  shipGroup3 = new Group();
  shipGroup4 = new Group();

}

function draw(){
  
  background(bgImg);
  //bgSound.play();

  if(keyDown("UP_ARROW")){
    player.y=player.y-10;
  }

  else if(keyDown("DOWN_ARROW")){
    player.y=player.y+10;
  }

  if (keyDown("space")) {
    spawnBullet1();
    spawnBullet2();
    shoot1.play();
   }
   
  if (bulletGroup1.isTouching(shipGroup1)) {
    shipGroup1.destroyEach();
    bulletGroup1.destroyEach();
    bulletGroup2.destroyEach();
  }

  if (bulletGroup1.isTouching(shipGroup2)){
    shipGroup2.destroyEach();
    bulletGroup1.destroyEach();
    bulletGroup2.destroyEach();
    }
    
    if (bulletGroup1.isTouching(shipGroup3)) {
      shipGroup3.destroyEach();
      bulletGroup1.destroyEach();
      bulletGroup2.destroyEach();
    }
  
    if (bulletGroup1.isTouching(shipGroup4)){
      shipGroup4.destroyEach();
      bulletGroup1.destroyEach();
      bulletGroup2.destroyEach();
      }
      

  spawnShip1();
  spawnShip2();
  spawnShip3();
  spawnShip4();
  drawSprites();
}

function spawnShip1(){
  if (World.frameCount % 120 === 0) {
  var ship1=createSprite(950,Math.round(random(1, 1000)), 900, 900);
  ship1.addImage(shipImg);
  ship1.scale=0.3;
  ship1.velocityX = -15
  ship1.lifetime=330
  shipGroup1.add(ship1);
}
}

function spawnShip2(){
  if (World.frameCount % 150 === 0) {
  var ship2=createSprite(950,Math.round(random(400,250)), 900, 900);
  ship2.addImage(shipImg);
  ship2.scale=0.3;
  ship2.velocityX = -10
  ship2.lifetime=330
  shipGroup2.add(ship2);
}
}

function spawnShip3(){
  if (World.frameCount % 150 === 0) {
  var ship3=createSprite(950,Math.round(random(50,500)), 900, 900);
  ship3.addImage(shipImg);
  ship3.scale=0.3;
  ship3.velocityX = -8
  ship3.lifetime=330
  shipGroup3.add(ship3);
}
}

function spawnShip4(){
  if (World.frameCount % 100 === 0) {
  var ship4=createSprite(950,Math.round(random(100,500)), 900, 900);
  ship4.addImage(shipImg);
  ship4.scale=0.3;
  ship4.velocityX = -10
  ship4.lifetime=330
  shipGroup4.add(ship4);
}
}

function spawnBullet1(){
  var bullet1=createSprite(18,220);
  bullet1.addImage(bulletImg);
  bullet1.scale=0.4;
  bullet1.depth=0.1
  bullet1.x = player.x ;
  bullet1.y = player.y - -5;
  bullet1.velocityX= bullet1.velocityX+10;
  bullet1.lifetime=100
  bulletGroup1.add(bullet1);
}

function spawnBullet2(){
  var bullet2=createSprite(18,220);
  bullet2.addImage(bulletImg);
  bullet2.scale=0.4;
  bullet2.depth=0.1
  bullet2.x = player.x ;
  bullet2.y = player.y - -45;
  bullet2.velocityX= 10;
  bullet2.lifetime=100
  bulletGroup2.add(bullet2);
}