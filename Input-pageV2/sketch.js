//source code:https://editor.p5js.org/kk4597/sketches/2-aJX7ZOe

//Declaration of variables
var rcolor ; 
var gcolor ;
var bcolor ;
var song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  
  //reducing the framerates so that the display of shapes is slower 
  frameRate(4);
 
  
}
//preload function to ensure that the sound is loaded before its played
function preload(){
  song = loadSound("shredder.mp3");
}

function draw() {
  //constantly changing shapes and colors
  background(250);
  grids();

  if(mouseIsPressed){
    
    
    blendMode(BURN); //causes the darker shades to become prominent by increasing contrast
    song.play(); //plays the sound when mouse pressed
     
    //causes a gradual effect of burning by displaing random shapes
    background(250); 
    grids();
   
  }
  //displays text for instructions
  let s = 'Click Anywhere ';
  fill(50);
  text(s, 10, 10, 70, 80);
  
}


//function to create background of iridescent colors 
function grids(){
  for(var i =0 ; i<width ; i+=25){
    for(var j =0 ; j<height ; j+=25){
      //chooses random color combination from within the set r,g,b values (upper and lower bound of rgb set to create iridescent color)
      rcolor = random(175, 255);
      gcolor = random(180, 250);
      bcolor = random(205, 247);
      fill(rcolor, gcolor, bcolor,125);
      
      noStroke();
      rect(i,j,25,25);
    }
  }
}


