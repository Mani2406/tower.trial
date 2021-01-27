
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var ground2;
var box16, box17, box18, box19, box20, box21;
var box22, box23, box24;
var box25;
var polygon1, polygon;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(300,600,300,15);
  box1 = new Bluebox(290,580,25,25);
  box2 = new Bluebox(265,580,25,25 );
  box3 = new Bluebox(315,580,25,25);
  box4 = new Bluebox(240,580,25,25);
  box5 = new Bluebox(340,580,25,25);
  box6 = new Bluebox(215,580,25,25);
  box7 = new Bluebox(365,580,25,25);
  box8 = new Pinkbox(290,555,25,25);
  box9 = new Pinkbox(265,555,25,25);
  box10 = new Pinkbox(315,555,25,25);
  box11 = new Pinkbox(240,555,25,25);
  box12 = new Pinkbox(340,555,25,25);
  box13 = new Greenbox(290,530,25,25);
  box14 = new Greenbox(265,530,25,25);
  box15 = new Greenbox(315,530,25,25);
  box16 = new Greybox(290,505,25,25);
  ground2 = new Ground(550,400,300,15);
  box17 = new Bluebox(540,380,25,25);
  box18 = new Bluebox(515,380,25,25);
  box19 = new Bluebox(565,380,25,25);
  box20 = new Bluebox(495,380,25,25);
  box21 = new Bluebox(590,380,25,25);
  box22 = new Greenbox(540,355,25,25);
  box23 = new Greenbox(515,355,25,25);
  box24 = new Greenbox(565,355,25,25);
  box25 = new Pinkbox(540,330,25,25);
  polygon1 = new Polygon(50,300,25);
  ground3 = new Ground(50,400,50,15);
  rope1 = new Rope(polygon1.body,{x:50, y:300});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    strokeWeight(4);

  ground1.display();
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
  ground2.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  polygon1.display();
  ground3.display();
  rope1.display();
  


  

  drawSprites();
 
}function mouseDragged() {

  Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY});
 }
 
 function mouseReleased() {
 
     rope1.fly();
 }
 








