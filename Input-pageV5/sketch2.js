class Ball {
    constructor(x, y, xspeed, yspeed) {
        // Pass the values onto variables for THIS ball
        // Make x a permanent part of the ball's memory
        this.x = x;
        this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
      }// x, y, xspeed, yspeed variables are dead now

    
  bounce() {
    // Turnaround
    if (this.x < 0 || this.x > width) {
      this.xspeed *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
  } // xspeed
  move() {
    // Move
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  display() {
    // Display
    ellipse(this.x, this.y, 50, 50);
  }
}