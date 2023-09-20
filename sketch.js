var plane,plane_Img;
var planeCrashed,planeCrashed_Img,bg_Image,bg,startStateBg;
var game_state = "start"


var play,end;

function preload(){
  
  plane_Img = loadImage("Imgs/Plane.png");
  planeCrashed_Img = loadImage("Imgs/Plane_Crashed.png");
  bg_Image = loadImage("Imgs/plane bg.png");
  startStateBg = loadImage("Imgs/Plane_titlePage.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  form = new Start();

  plane = createSprite(950,350,15,15);
  plane.addImage(plane_Img);
  plane.scale = 0.5;
  plane.visible = false;

}

function draw(){
  background(0);
 
  imageMode(CENTER);

  //-----------------------------------START----------------------------
  if(game_state === "start"){
    image(startStateBg,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    form.display()
  }
  //-----------------------------------PLANE CRASH----------------------------
  if(game_state === "planeCrash"){
    image(bg_Image,windowWidth/2,windowHeight/2,windowWidth,windowHeight);

    //The aero-plane sprite
    plane.visible=true;
    plane.velocityX = -4;
    
    if(plane.x <= windowWidth/2){
     plane.addImage(planeCrashed_Img);
     plane.x = windowWidth/2;
     plane.velocityY += 0.2; //gravity
     plane.scale=1.1;
    }

    //change game state to play
    if(plane.y > windowHeight - 100){
      game_state = "play";      
    }
  }
  //-----------------------------------PLAY - (Island)----------------------------
  if(game_state === "play"){
    
  }

  drawSprites();

}

