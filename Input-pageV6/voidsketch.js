let img;
let cam;

function preload() {
    // Load the captured image from local storage
    let imgData = localStorage.getItem('capturedImage');
    if (imgData) {
        img = loadImage(imgData);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cam = createCamera();
    cam.setPosition(0, 0, 0);
}

// ChatGPT was used to help edit the code to accommodate images 

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
                let imgWidth = 800;
                let imgHeight = 400;
                texture(img);
                plane(imgWidth, imgHeight);
            } else {
                box(30, 30, 30);
            }
            pop();
        }
    }
}
  