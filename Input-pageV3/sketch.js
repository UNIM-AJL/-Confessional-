let canvas, anim;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  anim = new AnimGlassBreak(millis())
  loop()
}

let t = 0

function draw() {
  background(0);
  
  anim.draw(millis())
}

function mouseClicked() {
  t = 0
  anim = new AnimGlassBreak(millis())
}

class AnimGlassBreak {
  constructor(t0) {
    this.t0 = t0
    const maxDivisions = 8
    const shards = []

    divide(
      createVector(0, 0),
      createVector(width, 0),
      createVector(width, height),
      createVector(0, height)
    )

    function divide(a, b, c, d, i = 0) {
      if (i < maxDivisions) {
        const range = map(i, 0, maxDivisions, 0.2, 0.45)
        const low = 0.5 - range
        const high = 0.5 + range
        let p0 = p5.Vector.lerp(a, b, random(low, high))
        let p1 = p5.Vector.lerp(c, d, random(low, high))
        divide(p0, p1, d, a, i + 1)
        divide(b, c, p1, p0, i + 1)
      } else {
        shards.push(new Shard(a, b, c, d))
      }
    }
    this.shards = shards
  }
  draw(t) {
    t = t - this.t0
    t = t / 1000 * 60
    t = max(0, t - 2)
    for (let shard of this.shards) {
      shard.draw(t)
    }
  }
}

class Shard {
  constructor(a, b, c, d) {
    const forceCenter = createVector(width / 2, height / 2)
    this.pos = createVector(
      (a.x + b.x + c.x + d.x) / 4,
      (a.y + b.y + c.y + d.y) / 4
    )
    this.vel = this.pos.copy().sub(forceCenter)
    this.vel.normalize().mult(random(3, 9) * 2000 / height)

    const angularVelRange = 0.2
    this.angularVel = random(-angularVelRange, angularVelRange)

    this.points = [a, b, c, d]

  }
  draw(t) {
    push()
    beginShape(QUADS)
    translate(this.vel.x * t, this.vel.y * t)
    translate(this.pos)
    rotate(t * this.angularVel)
    translate(-this.pos.x, -this.pos.y)
    for (let p of this.points) {
      vertex(p.x, p.y)
    }
    endShape()

    pop()
  }
}