const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;
var engine,world
var ball;
var ground_option,ball_option;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,1200,50,ground_option);
  World.add(world,ground)

  ball_option={
    restitution:1.5
  }

  ball=Bodies.circle(200,100,30,ball_option)
  World.add(world,ball)

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,50);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
}