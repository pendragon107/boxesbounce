var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    x=3
    y=3
    //create 4 different surfaces
    s1=createSprite(150, 500, 80, 10)
    s2=createSprite(300, 500, 80, 10)
    s3=createSprite(450, 500, 80, 10)
    s4=createSprite(600, 500, 80, 10)
    s1.shapeColor="red"
    s2.shapeColor="green"
    s3.shapeColor="yellow"
    s4.shapeColor="blue"
    //create box sprite and give velocity
    box=createSprite(150, 465, 30, 30)
    box.velocityX=x
    box.velocityY=y
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if (box.y<430){
        box.setVelocity(x, -y)
        y=-y
    }
    if (box.isTouching(s1)||box.isTouching(s2)||box.isTouching(s3)||box.isTouching(s4)){
        box.setVelocity(x, -y)
        y=-y
    }
    if (box.x<50||box.x>700){
        x=-x
        box.velocityX=x
    }
    if (box.x==150){
        box.shapeColor="red"
    }
    if(box.x==300){
        box.shapeColor="green"
    }
    if (box.x==450){
        box.shapeColor="yellow"
    }
    if (box.x==600){
        box.shapeColor="blue"
    }
    if (box.y>500){
        y=-y
        box.velocityY=y
    }
    //add condition to check if box touching surface and make it box
    drawSprites()
}
