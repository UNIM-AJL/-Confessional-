
// Start code https://editor.p5js.org/jht1493/sketches/u5jptPqVU
// Code has been changed and alter from original code to suit the requirements of this project
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

  
  poseNet = ml5.poseNet(video, modelReady);
  
  poseNet.on("pose", function (results) {
    poses = results;
  });
 
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
 
  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < poses.length; i++) {
   
    let pose = poses[i].pose;
    {
      let x = pose.rightEye.x;
      let y = pose.rightEye.y;
      image(img,x, y,300, 300/img.width*img.height);
    }
    for (let j = 0; j < pose.keypoints.length; j++) {
      
      let keypoint = pose.keypoints[j];
      
    }
    
  }
  image(img2, -350, -330, 2500,windowHeight*2 );
}
