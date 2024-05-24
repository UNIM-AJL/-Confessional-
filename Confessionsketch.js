function setup() {
  createCanvas(windowWidth, windowHeight);

  background(255);
  setupAudio();

  textSize(32);
  // textFont("font")
  fill(0);
  strokeWeight(0);
  text('The Choice is yours..', 110, 40);

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




//ChatGPT was used in the creation of this section of code that captures image from this page and load it on page2
// code start

  function captureAndNavigate() {

    // Capture the canvas content
    let imgData = canvas.toDataURL('image/png');
    // Save the captured image to local storage
    localStorage.setItem('capturedImage', imgData);

    //ChatGPT helped with this section of code to add the VOID that appears on the screen - Code start 
    if (elementToShowHide.style('display') === 'none') {
      elementToShowHide.style('display', 'block');
    } else {
      elementToShowHide.style('display', 'none');
      // captureBtn.show();
    }
    //  Code end


    // // Navigate to the second page
    // window.location.href = 'EyeP5js/index.html';


  // Shredding effect 
  // Source code https://editor.p5js.org/aferriss/sketches/45meFjN0m
  // Code has be altered and manipulated to suit the requirements of the project
      for(let j = 0; j < 150; j++) {
       
        const strips = 100;


        // Drop shadow effect
        // Source code https://editor.p5js.org/Q/sketches/JMi2tIyTv
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = 'black';
        
        const sx = roundToNearest(random(width), strips);
        const sy = 0;
        const sw = strips;
        const sh = height;
        
        fill(0)
        const dx = sx;
        const dy = int(random(-1000, 1000));
        const dw = sw;
        const dh = height;
        
        copy(sx, sy, sw, sh, dx, dy, dw, dh); 
        loop();
      }
  }