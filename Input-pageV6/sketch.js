// https://p5js.org/reference/#/p5/copy

function setup() {
  createCanvas(windowWidth, windowHeight);

 


  textSize(32);
  fill(0);
  strokeWeight(0);
  text('Heres your chance...', 110, 40);

//code copied from chatGPT (start code)
  let captureBtn = createButton('VOID');
  captureBtn.mousePressed(captureAndNavigate);
// end

elementToShowHide = createA('eye.html','"VOID"');
}
  

function draw() {
  if(mouseIsPressed){
    strokeWeight(1);
   stroke(0);
   line (mouseX, mouseY, pmouseX, pmouseY);
   }



  }

// A little utility for rounding a value to the nearest 10, 20, 30 or whatever
function roundToNearest(value, nearest){
 return ceil(value / nearest) * nearest; 
}




//code copied from chatGPT

  function captureAndNavigate() {
    // Capture the canvas content
    let imgData = canvas.toDataURL('image/png');
    // Save the captured image to local storage
    localStorage.setItem('capturedImage', imgData);


    //ChatGPT helped with this section of code - Code start
    if (elementToShowHide.style('display') === 'none') {
      elementToShowHide.style('display', 'block');
    } else {
      elementToShowHide.style('display', 'none');
    }
    //  Code end


    // // Navigate to the second page
    // window.location.href = 'EyeP5js/index.html';



  // Shredding effect 
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


