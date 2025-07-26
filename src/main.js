let stars = {}

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function update() {
}

function draw() {
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

class Star {
	constructor() {
		this.x = math.random(0, windowWidth);
		this.y = math.random(0, windowHeight);
	}
}