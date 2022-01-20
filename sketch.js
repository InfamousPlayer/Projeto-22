var starImg,bgImg;
var star, starBody;
var fairy, imgFairy, vozFairy, fadavoando;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    imgFairy = loadAnimation("fairyImage1.png","fairyImage2.png");
    vozFairy = loadSound("JoyMusic.mp3");

} 

function setup() {
    createCanvas(800, 750);

    vozFairy.play();

    bg = createSprite(400,300);
    bg.addImage(bgImg);
    bg.scale = 0.5;

    fairy = createSprite(100,500);
    fairy.addAnimation("fadavoando",imgFairy);
    fairy.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
   
    background(0);

    star.x= starBody.position.x 
    star.y= starBody.position.y

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true);
    }
   

    drawSprites();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
        fairy.x=fairy.x-15;
    }

    if(keyCode === RIGHT_ARROW){
		fairy.x=fairy.x+15;
    }

}

