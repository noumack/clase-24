const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig_1,pig_2;
var log_1,log_2,log_3,log_4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,420,70,70);
    box2 = new Box(920,420,70,70);
    ground = new Ground(600,height,1200,20)
    pig_1 = new Pig(810,450);
    log_1 = new Log(810,300,300,PI/2);
    box3 = new Box(700,280,70,70);
    box4 = new Box (920,280,70,70);
    pig_2 = new Pig (810,280);
    log_2 = new Log (810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    log_3 = new Log(760,120,150,PI/5);
    log_4 = new Log(870,120,150,PI/-5);
    bird1 = new Bird(100,100);

}

function draw(){
    background("white");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig_1.display();
    log_1.display();
    box3.display();
    box4.display();
    pig_2.display();
    log_2.display();
    box5.display();
    log_3.display();
    log_4.display();
    bird1.display();
}