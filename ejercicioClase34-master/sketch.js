const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bola;
var suelo;
var cuerda
var caja1;
var caja2;
var caja3;
var caja4;
var caja5;
var caja6;
var caja7;
var caja8;
var caja9;
var caja10;
var caja11;
var caja12;
var caja13;
var caja14;
var caja15;
var caja16;
var caja17;
var caja18;
var caja19;
var caja20;

var world
var engine

function setup(){
createCanvas(3000, 800);
engine =  Engine.create();
world = engine.world;

bola = new Ball(200,200,80,80);
suelo = new Ground(1500,750,3100,50);
caja1 = new Caja(800,700,100,100);
caja2 = new Caja(850,700,100,100);
caja3 = new Caja(900,700,100,100);
caja4 = new Caja(950,700,100,100);
caja5 = new Caja(1000,700,100,100);
caja6 = new Caja(1050,700,100,100);
caja7 = new Caja(1100,700,100,100);
caja8 = new Caja(1150,700,100,100);
caja9 = new Caja(1200,700,100,100);
caja10 = new Caja(1250,700,100,100);
caja11 = new Caja(850,650,100,100);
caja12 = new Caja(900,650,100,100);
caja13 = new Caja(950,650,100,100);
caja14 = new Caja(1000,650,100,100);
caja15 = new Caja(1050,650,100,100);
caja16 = new Caja(1100,650,100,100);
caja17 = new Caja(1150,650,100,100);
caja18 = new Caja(1200,650,100,100);
caja19 = new Caja(900,600,100,100);
caja20 = new Caja(950,600,100,100);
caja21 = new Caja(1000,600,100,100);
caja22 = new Caja(1050,600,100,100);
caja23 = new Caja(1100,600,100,100);
caja24 = new Caja(1150,600,100,100);
caja25 = new Caja(1100,550,100,100);
caja26 = new Caja(1050,550,100,100);
caja27 = new Caja(1000,550,100,100);
caja28 = new Caja(950,550,100,100);
caja29 = new Caja(1000,500,100,100);
caja30 = new Caja(1050,500,100,100);

cuerda = new Rope(bola.body, {x:800, y:30});
}

function draw(){
background ("#8DDF48");
Engine.update(engine);
suelo.display();
caja1.display();
caja2.display();
caja3.display();
caja4.display();
caja5.display();
caja6.display();
caja7.display();
caja8.display();
caja9.display();
caja10.display();
caja11.display();
caja12.display();
caja13.display();
caja14.display();
caja15.display();
caja16.display();
caja17.display();
caja18.display();
caja19.display();
caja20.display();
caja21.display();
caja22.display();
caja23.display();
caja24.display();
caja25.display();
caja26.display();
caja27.display();
caja28.display();
caja29.display();
caja30.display();
bola.display();
cuerda.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bola.body, {x: mouseX , y: mouseY});
}
