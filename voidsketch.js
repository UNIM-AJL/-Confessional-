let img;
let img2;
let cam;

function preload() {
    img2= loadImage("images/watchingEye.png")
     // ChatGPT was used to help get the capture image from the confession page
    let imgData = localStorage.getItem('capturedImage');
    if (imgData) {
        img = loadImage(imgData);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cam.setPosition(0, 0, 0);
    setupAudio();
}



// Orbital control 
// Source code: https://p5js.org/examples/3d-orbit-control.html
// Code has been edited to suit the purposes and intention of the assignment
// ChatGPT was used to help edit the code to accommodate the captured image

function draw() {
    background(0, 0, 0);
    let radius = width * 1.5;
  
    // Drag to move the world.
    orbitControl();
  
    normalMaterial();
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= 8; j++) {
            push();
            let a = (j / 8) * PI;
            let b = (i / 8) * PI;
            let x = sin(2 * a) * radius * sin(b);
            let y = (cos(b) * radius) / 2;
            let z = cos(2 * a) * radius * sin(b);
            translate(x, y, z);

            if (j % 2 === 0 && img) {
                // Calculate angles to rotate the plane to face the origin
                let dir = createVector(-x, -y, -z);
                let up = createVector(0, 1, 0);
                let right = createVector(1, 0, 0);
                
                let angleY = atan2(dir.x, dir.z);
                let angleX = atan2(sqrt(dir.x * dir.x + dir.z * dir.z), dir.y) - HALF_PI;

                rotateY(angleY);
                rotateX(angleX);

                // Scale down the image
                let imgWidth = 1000;
                let imgHeight = 1000/img.width*img.height;
                texture(img);
                plane(imgWidth, imgHeight);
            } else {
                // Calculate angles to rotate the plane to face the origin
                let dir = createVector(-x, -y, -z);
                let up = createVector(0, 1, 0);
                let right = createVector(1, 0, 0);
                
                let angleY = atan2(dir.x, dir.z);
                let angleX = atan2(sqrt(dir.x * dir.x + dir.z * dir.z), dir.y) - HALF_PI;

                rotateY(angleY);
                rotateX(angleX);

                // Scale down the image
                let img2Width = 800;
                let img2Height = 400;
                texture(img2);
                plane(img2Width, img2Height);
            }
            }
            pop();
        }
    }

  