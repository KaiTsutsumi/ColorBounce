var canvas;
var music;
var platform1, platform2, platform3, platform4, box;
var boundary1, boundary2, boundary3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(410,600);

    //create 4 different surfaces
    platform1 = createSprite(53.75, 550, 87.5, 35);
    platform1.shapeColor = "red";

    platform2 = createSprite(153.75, 550, 87.5, 35);
    platform2.shapeColor = "orange";

    platform3 = createSprite(253.75, 550, 87.5, 35);
    platform3.shapeColor = "yellow";

    platform4 = createSprite(353.75, 550, 87.5, 35);
    platform4.shapeColor = "green";

    boundary1 = createSprite(-5, 300, 10, 600);
    boundary2 = createSprite(415, 300, 10, 600);
    boundary3 = createSprite(200, -5, 450, 10);

    //create box sprite and give velocity
    box = createSprite(200, 200, 20, 20);
    box.shapeColor = "red";
    //box.velocityX = ;
    box.velocityY = 8;
    box.velocityX = 1;
}

function draw() {
    background(0);
    //create edgeSprite
    


    //add condition to check if box touching surface and make it box
    if (isTouching(box, platform1)) {
        box.shapeColor = "red";
        
    }

    if (isTouching(box, platform2)) {
        box.shapeColor = "orange";
  
    }

    if (isTouching(box, platform3)) {
        box.shapeColor = "yellow";
    
    }

    if (isTouching(box, platform4)) {
        box.shapeColor = "green";
    }

    bounceOff(box, platform1);
    bounceOff(box, platform2);
    bounceOff(box, platform3);
    bounceOff(box, platform4);

    bounceOff(box, boundary1);
    bounceOff(box, boundary2);
    bounceOff(box, boundary3);

    drawSprites();
}

