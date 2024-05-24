
// Start code https://editor.p5js.org/jht1493/sketches/u5jptPqVU
// Code has been changed and alter from original code
// Eye tracking with posenet

// Eye tracking with posenet

let video;
let poseNet;
let poses = [];

var img;
var img2;

function preload(){
  img=loadImage("images/iris3.png")
  img2=loadImage("images/eyebackground.png")
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  setupAudio();
}

function modelReady() {
  select("#status").html("Model Loaded");
}

function draw() {
  image(video, 0, 0, width, height);
  translate(width,0);
  scale(-1, 1);
  clear();
  background(0);
 

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  // drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    {
      let x = pose.rightEye.x;
      let y = pose.rightEye.y;
      image(img,x, y,300, 300/img.width*img.height);
      
    }
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
    }
    
  }
  image(img2, -350, -330, 2500,windowHeight*2 );
}
