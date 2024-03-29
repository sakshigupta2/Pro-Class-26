const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine, world;
var tanker;
var angle = 0

var shot;
var ground;
var ball_1,ball_2,ball_3
var launcherX,launcherY;
var flag = "start"

function setup(){
  var canvas = createCanvas(800,500);
  engine = Engine.create();
  world = engine.world; 
  ground = new Ground(width/2, height-10, width, 30);
  
  tanker = new Tanker(75,height-110,60,30);
  
  ball_1 = new Ball(400,50,20)
  
  ball_2 = new Ball(500,100,20)
  
  ball_3 = new Ball(600,150,20)
  
}

function draw() {
   background("pink")
   Matter.Engine.update(engine);
   ground.display()
   ball_2.display()
   ball_1.display()
   ball_3.display();
   
   tanker.display();
   
   
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    flag = "launch"

    shot.shoot()
  }
}
