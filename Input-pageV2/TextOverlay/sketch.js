
function setup() {
  createCanvas(windowWidth,windowHeight); 
  background(255,255,255);
  counter=0;
}


function draw() {
  if(mouseIsPressed){
  strokeWeight(10);
 stroke(255,0,0);
 line (mouseX, mouseY, pmouseX, pmouseY);
 }else {
 strokeWeight(1);
 stroke(0);}
}
