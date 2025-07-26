let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
}

function draw() {
  // background(220); // Clear screen each frame
  walker.step();
  walker.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Walker {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
  }

  step() {
    // Move randomly in X and Y by -1, 0, or 1
    this.x += random([-1, 0, 1]);
    this.y += random([-1, 0, 1]);

    // Optional: constrain to stay inside the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  draw() {
    ellipse(this.x, this.y, 10, 10);
  }
}