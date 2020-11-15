const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var stand;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var block15;

var hex,chain;

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

  block6 = new Box(540,480,30,40);
  block7 = new Box(580,480,30,40);
  block8 = new Box(620,480,30,40);
  block9 = new Box(660,480,30,40);

  block10 = new Box(560,435,30,40);
  block11 = new Box(600,435,30,40);
  block12 = new Box(640,435,30,40);

  block13 = new Box(580,390,30,40);
  block14 = new Box(620,390,30,40);

  block15 = new Box(600,335,30,40);

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
  background(0); 
  text(mouseX +" , "+ mouseY,100,100); 
 
  Engine.update(engine);

  ground.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();

  block15.display();

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