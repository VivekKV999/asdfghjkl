const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box5,box6,box7,box8,box9,box10;
var rope,ball;


function preload(){
  bgI=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(displayWidth,800)
  engine = Engine.create();
  world = engine.world;
  console.log(displayWidth);
  ground = new Ground(displayWidth/2,700,displayWidth,25);
  box1 = new Box(850,650,75,75);
  box2 = new Box(850,625,75,75);
  box3 = new Box(850,600,75,75);
  box4 = new Box(850,575,75,75);
  box5 = new Box(1000,640,75,75);
  box6 = new Box(1000,625,75,75);
  box7 = new Box(1000,600,75,75);
  box8 = new Box(1000,575,75,75);
  box9 = new Box(1000,550,75,75);
  box10 = new Box(1000,525,75,75);
  box11 = new Box(1150,640,75,75);
  box12 = new Box(1150,625,75,75);
  box13 = new Box(1150,600,75,75);
  box14 = new Box(1150,575,75,75);
  box15 = new Box(1150,550,75,75);
  box16 = new Box(1150,525,75,75);
  box17 = new Box(1150,640,75,75);
  box18 = new Box(1150,625,75,75);
  box19 = new Box(1150,600,75,75);
  ball = new Ball(400,400,150)
  rope = new Rope(ball.body,{x:500,y:50})
  monster = new Monster(1100,10,100)
}

function draw() {
  Engine.update(engine);
  background(bgI);  
  
  strokeWeight(5)
  stroke("green")
  fill("blue")
  textSize(35)
  text("KILL THE MONSTER",700,100)

  strokeWeight(5)
  stroke("green")
  fill("blue")
  textSize(35)
  text(" PRESS SPACE TO GET ANOTHER CHANCE ",50,650)
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  ball.display();
  monster.display();
  rope.display();
  //drawSprites();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode==32){
    rope.attach(ball.body);
      
  }
}