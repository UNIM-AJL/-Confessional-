let font
let fontSize = 120
let word = "Confessional"
let modules=[]
let i= 1


function preload() {
  font = loadFont('Raleway-Black.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();

  points = font.textToPoints(word, windowWidth/4, windowHeight/2, fontSize,{
  sampleFactor: 0.3 // default is 0.1
})   
  
  

  fill(0);

}

function draw() {
  background(255)
  
  for (let pt of points) {
    ellipse(pt.x, pt.y, 1)
  }
  

    fill(0);

  for (let pt of points) {
  ellipse(pt.x, pt.y, 2)
    
    pt.x += random(-1.2, 1.2)
    pt.y += random(-1.2, 1.2)  
}


        for (let pt of points) {
  ellipse(pt.x, pt.y, 2)
    
    pt.x =  pt.x+random(-i, i)
    pt.y = pt.y+random(-i, i)
        
}

  
   // fill(255,200);
  beginShape()
for (let pt of points) {
  vertex(pt.x, pt.y)
}
endShape(CLOSE)
  
}




function mousePressed(){
i=i*2
}

