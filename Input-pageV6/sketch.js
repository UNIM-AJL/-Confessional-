// https://p5js.org/reference/#/p5/copy
let img;
let video;

function preload() {
  img = loadImage("mountain.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  img.resize(width, height);
  text('hello', 50, 50);

  
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


// A little utility for rounding a value to the nearest 10, 20, 30 or whatever
function roundToNearest(value, nearest){
 return ceil(value / nearest) * nearest; 
}






function keyPressed(){
  for(let i = 0; i < 150; i++) {
 // How many slices of the image should we make
 const strips = 100;
  
 // Vertical Strips
 // Get the source x,y,width,height
 const sx = roundToNearest(random(width), strips);
 const sy = 0;
 const sw = strips;
 const sh = height;
 
 // Get the destination x,y,width,height
 fill(0)
 const dx = sx;
 const dy = int(random(-1000, 1000));
 const dw = sw;
 const dh = height;
 
 
 // Call the copy function with the given parameters
 copy(sx, sy, sw, sh, dx, dy, dw, dh); 
  }

 
  }