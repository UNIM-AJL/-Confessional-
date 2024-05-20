let balls = [];

function setup() {
  createCanvas(400, 400);
  
  // Count balls
  // Create 10 new ball objects of the class Ball
  // Center them all in the middle of the canvas
  // Assign them random x and y speeds
  for (let b = 0; b < 10; b++) {
    // new Ball(x, y, xspeed, yspeed);
    // Add each new to the end of the balls array
    balls.push(new Ball(width / 2, height / 2, random(-5, 5), random(-5, 5)));
  }
  // Print out the array of balls
  console.log(balls);

}

function draw() {
  background(220);
  
  // This a for-of loop
  // It does not count
  // It iterates through all of the VALUES of the array balls
  // And pulls out each value as the variable ball
  for (let ball of balls) {
    ball.bounce();
    ball.move();
    ball.display();
  }
}

// Where's the Ball class?
// Look in index.html

