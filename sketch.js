var rectangle, positionX



function setup() {
   
  positionX = 0;

}

function draw() {
  background(220);
  positionX = positionX + 1;
  translate(positionX,100); 
  rectangle = createSprite(0,0,50,50);
drawSprites(); 
}