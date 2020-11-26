const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,bg;

var ground;
var stand;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var block15;

var hex,chain;

var score = 0;

function preload() {
  getTime();
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,600);
  
  ground = new Ground(width/2,590,width,10);
  stand = new Ground(600,550,300,10);

  block1 = new Box(520,525,30,40);
  block2 = new Box(560,525,30,40);
  block3 = new Box(600,525,30,40);
  block4 = new Box(640,525,30,40);
  block5 = new Box(680,525,30,40);

  block6 = new Box(540,490,30,40);
  block7 = new Box(580,490,30,40);
  block8 = new Box(620,490,30,40);
  block9 = new Box(660,490,30,40);

  block10 = new Box(560,460,30,40);
  block11 = new Box(600,460,30,40);
  block12 = new Box(640,460,30,40);

  block13 = new Box(580,430,30,40);
  block14 = new Box(620,430,30,40);

  block15 = new Box(600,400,30,40);

  var options = {
    'restitution':0.8,
    'friction':0.3,
    'density':1.0,
    'isStatic' :false
}

  hex = Bodies.circle(175,350,20,options);
  World.add(world,hex);

  chain = new Slingshot(hex,{x:175,y:350});
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);
  Engine.update(engine);

  text("SCORE : " + score, 100,40);

  ground.display();
  stand.display();

  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();

  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();

  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  
  block13.display();
  block13.score();
  block14.display();
  block14.score();

  block15.display();
  block15.score();

  chain.display();

  ellipse(hex.position.x,hex.position.y,40);
}

function mouseDragged(){
  Matter.Body.setPosition(hex, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain.attach(hex);
  }
}

async function getTime(){
  var dateTime = await fetch("http://worldtimeapi.org/api/timezone/America/Edmonton");
  var dateTimeJson = await dateTime.json();

  var response = dateTimeJson.datetime;   
  var hour = response.slice(11,13);
  if(hour >= 06 && hour < 18){
      bg = "blackbg.jpg";
  }
  else{
      bg = "whitebg.jpg";
  }
  backgroundImg = loadImage(bg);
}