var iss , spacecraft , hasDocked=false ;
var issImage , spacebgImage , spacecraftImage1 , spacecraftImage2 , spacecraftImage3 , spacecraftImage4 ;

function preload() {

  issImage=loadImage("images/iss.png");
  spacebgImage=loadImage("images/spacebg.jpg");
  spacecraftImage1=loadImage("images/spacecraft1.png");
  spacecraftImage2=loadImage("images/spacecraft2.png");
  spacecraftImage3=loadImage("images/spacecraft3.png");
  spacecraftImage4=loadImage("images/spacecraft4.png");
}




function setup() {

  createCanvas(600,350);
  spacecraft=createSprite(285 , 240);
  spacecraft.addImage(spacecraftImage1);
  spacecraft.scale=0.15 ;
   
 iss=createSprite(330,130);
 iss.addImage(issImage);
 iss.scale=0.25 ; 
 
}

function draw() {
  background(spacebgImage);  
  spacecraft.addImage(spacecraftImage1);
  if(!hasDocked){
    // spacecraft.x+=random(1,1);
  }
  if(keyDown("UP_ARROW")){
    spacecraft.y= spacecraft.y-2
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x= spacecraft.x-1
    spacecraft.addImage(spacecraftImage3);
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x= spacecraft.x+1
    spacecraft.addImage(spacecraftImage2);
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftImage1);
  }
if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDocked=true ;
  textSize(25);
  fill("white");
  text("Docking Sucessfully",200,300);
}
  drawSprites();
}