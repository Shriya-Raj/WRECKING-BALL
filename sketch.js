const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var myEngine,myWorld;

var ground;

var box1,box2,box3,box4;
var box5,box6,box7,box8;
var box9,box10,box11,box12;
var box13,box14,box15,box16;
var box17,box18,box19,box20;
var box21,box22,box23,box24;
var box25,box26,box27,box28;
var box29,box30,box31,box32;
var box33,box34,box35,box36;

var ball;

var rope;
var crane1,crane2,crane3;
var backImg;

function preload(){
  backImg=loadImage("background.jpg");
}

function setup() {
  createCanvas(1200,600);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground=new Ground(600,580,1200,30);

  box1=new Box(700,500);
  box2=new Box(760,500);
  box3=new Box(820,500);
  box4=new Box(880,500);

  box5=new Box(700,450);
  box6=new Box(760,450);
  box7=new Box(820,450);
  box8=new Box(880,450);

  box9=new Box(700,400);
  box10=new Box(760,400);
  box11=new Box(820,400);
  box12=new Box(880,400);

  box13=new Box(700,350);
  box14=new Box(760,350);
  box15=new Box(820,350);
  box16=new Box(880,350);

  box17=new Box(700,300);
  box18=new Box(760,300);
  box19=new Box(820,300);
  box20=new Box(880,300);

  box21=new Box(700,250);
  box22=new Box(760,250);
  box23=new Box(820,250);
  box24=new Box(880,250);

  box25=new Box(700,200);
  box26=new Box(760,200);
  box27=new Box(820,200);
  box28=new Box(880,200);

  box29=new Box(700,150);
  box30=new Box(760,150);
  box31=new Box(820,150);
  box32=new Box(880,150);

  box33=new Box(700,100);
  box34=new Box(760,100);
  box35=new Box(820,100);
  box36=new Box(880,100);

  ball=new Ball(450,150,150);

  rope=new Rope(ball.ball,{x:450,y:50});

 
}

function draw() {
  background(backImg);  
  Engine.update(myEngine);

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
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  

  rope.display();
  ball.display();

}
function mouseDragged(){
  Body.setPosition(ball.ball,{x:mouseX,y:mouseY});
}
