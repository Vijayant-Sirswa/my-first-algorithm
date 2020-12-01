var moveRect, fixRect;


function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  moveRect = createSprite(400,200,100,25);
}

function draw() {
  background(14,84,117); 
  
  moveRect.x = mouseX;
  moveRect.y = mouseY;
  if(moveRect.x-fixRect.x < moveRect.width/2+fixRect.width/2 && 
    fixRect.x-moveRect.x < moveRect.width/2+fixRect.width/2 &&
    moveRect.y-fixRect.y < moveRect.height/2+fixRect.height/2 &&
    fixRect.y-moveRect.y < moveRect.height/2+fixRect.height/2){
      moveRect.shapeColor = "red";
      fixRect.shapeColor = "red";
    }
    else{
      moveRect.shapeColor = "green";
      fixRect.shapeColor = "green";
    }
  drawSprites();
}