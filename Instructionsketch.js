let video;
let poseNet;
let poses = [];

var img;
var img2;

function preload(){
  img=loadImage("images/iris4.png")
  img2=loadImage("images/eyebackgroundblack.png")
  
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

    e= createGraphics (width/2, height/2);


    poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  // Initialize the audio
  setupAudio();
}


function modelReady() {
  select("#status").html("Model Loaded");
}


function draw() {
  // Your p5.js draw code here
  image(e,3*width/4, 0);

  e.image(video, 0, 0, width, height);
  translate(width,0);
  scale(-1, 1);
  clear();
  // background(255, 0, 0);
  image(img2, 10, 0, 300, 150);
}


function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    {
      // let x = pose.leftEye.x;
      // let y = pose.leftEye.y;
      // fill(255, 255, 0);
      // ellipse(x, y, 50, 50);
    }
    {
      let x = pose.rightEye.x;
      let y = pose.rightEye.y;
      e.fill(255, 255, 0);
      e.image(img,x, y,50, 50/img.width*img.height);
    }
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
    }
  }
}