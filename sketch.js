var mouse,mouseImg;
var cat,catImg;
var garden,gardenImg;
var gameState = "moving";


function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    mouseImg = loadImage("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage(gardenImg);
    
    cat = createSprite(200,600);
    cat.addImage(catImg);
    cat.scale = 0.1;

    mouse = createSprite(800,600);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;
}

function draw() {
    touching();
    keyPressed();
    background(225);
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
}

function touching(){
    if(abs(cat.x - mouse.x) <= cat.width/2 + cat.mouse/2 && abs(cat.y - mouse.y <= cat.height/2 + mouse.height/2)){
        gameState = "static";
        console.log("Gamestate Static");

        catImg = loadImage("cat4.png");
        cat.addImage(catImg);

        mouseImg = loadImage("mouse4.png");
        mouse.addImage(mouseImg);
        mouse.frameDelay = 25;
    }
}


function keyPressed(){

  //For moving and changing animation write code here
    if(gameState === "moving"){

    if(keyCode === LEFT_ARROW){
        catImg = loadAnimation("cat2.png","cat3.png");
        cat.addAnimation(catImg)
        cat.x = cat.x + 10;
    }
}
}
