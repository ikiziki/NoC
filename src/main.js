let stars = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	// create 200 stars
	for (let i = 0; i < 200; i++) {
		stars.push(new Star());
	}
}

function draw() {
	background(35); // black background

	for (let star of stars) {
		star.update();
		star.draw();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


class Star {
	constructor() {
		this.x = random(0, windowWidth);
		this.y = random(0, windowHeight)
		this.speed = random(0.5, 2); // random speed
		this.size = random(0, 3)
	}

	update() {
		this.x += this.speed;

		// if the star goes off the right edge, reset to left
		if (this.x > windowWidth) {
			this.x = 0;
			this.y = random(0, windowHeight);
			this.speed = random(0.5, 2); // reset speed for variety
		}
	}

	draw() {
		stroke(235);
		ellipse(this.x, this.y,this.size);
	}
}