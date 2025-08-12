/**
 * Composition with Red, Blue and Yellow
 * @link https://en.wikipedia.org/wiki/Composition_with_Red,_Blue_and_Yellow
 * @link https://www.piet-mondrian.org/assets/img/paintings/composition-II-in-red-blue-and-yellow.jpg
 */


function setup() {
	createCanvas(windowWidth, windowHeight);
}

/**
 * On window resize, resize the canvas to fit the window
 */
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

const ANIMATION_SPEED = 4;

const SQUARE_ONE_BIG_RED = {
	name: "SQUARE_ONE_BIG_RED",
	color: [255, 0, 0],
	x: window.innerWidth / 2,
	y: 0,
	width: 600,
	height: 600,
	animationAcceleration: 1,
};

const SQUARE_TWO_SMALL_WHITE_TOP_LEFT = {
	name: "SQUARE_TWO_SMALL_WHITE_TOP_LEFT",
	color: [255, 255, 255],
	x: (window.innerWidth / 2) - (150 + 8),
	y: 0,
	width: 150,
	height: 250,
	animationAcceleration: 1.2,
};

const SQUARE_THREE_SMALL_WHITE_CENTER = {
	name: "SQUARE_THREE_SMALL_WHITE_CENTER",
	color: [255, 255, 255],
	x: (window.innerWidth / 2) - (150 + 8),
	y: 250 + 15,
	width: 150,
	height: 328,
	animationAcceleration: 2,
};

const SQUARE_FOUR_SMALL_BLUE_BOTTOM_LEFT = {
	name: "SQUARE_FOUR_SMALL_BLUE_BOTTOM_LEFT",
	color: [0, 0, 255],
	x: (window.innerWidth / 2) - (150 + 8),
	y: 608,
	width: 150,
	height: 150,
	animationAcceleration: 0.5
};

const SQUARE_FIVE_LONG_WHITE_BOTTOM = {
	name: "SQUARE_FIVE_LONG_WHITE_BOTTOM",
	color: [255, 255, 255],
	x: window.innerWidth / 2,
	y: 608,
	width: 540,
	height: 150,
	animationAcceleration: .9,
};

const SQUARE_SIX_MINI_WHITE_BOTTOM = {
	name: "SQUARE_SIX_MINI_WHITE_BOTTOM",
	color: [255, 255, 255],
	x: (window.innerWidth / 2) + (540),
	y: 608,
	width: 60,
	height: 80,
	animationAcceleration: 3
};

const SQUARE_SEVEN_MINI_YELLOW_BOTTOM = {
	name: "SQUARE_SEVEN_MINI_YELLOW_BOTTOM",
	color: [239, 222, 109],
	x: (window.innerWidth / 2) + (540),
	y: 690,
	width: 60,
	height: 68,
	animationAcceleration: 1.1,
};

const SQUARE_MAPPING = {
	"SQUARE_ONE_BIG_RED": SQUARE_ONE_BIG_RED,
	"SQUARE_TWO_SMALL_WHITE_TOP_LEFT": SQUARE_TWO_SMALL_WHITE_TOP_LEFT,
	"SQUARE_THREE_SMALL_WHITE_CENTER": SQUARE_THREE_SMALL_WHITE_CENTER,
	"SQUARE_FOUR_SMALL_BLUE_BOTTOM_LEFT": SQUARE_FOUR_SMALL_BLUE_BOTTOM_LEFT,
	"SQUARE_FIVE_LONG_WHITE_BOTTOM": SQUARE_FIVE_LONG_WHITE_BOTTOM,
	"SQUARE_SIX_MINI_WHITE_BOTTOM": SQUARE_SIX_MINI_WHITE_BOTTOM,
	"SQUARE_SEVEN_MINI_YELLOW_BOTTOM": SQUARE_SEVEN_MINI_YELLOW_BOTTOM
};

const SQUARES = [
	SQUARE_ONE_BIG_RED,
	SQUARE_TWO_SMALL_WHITE_TOP_LEFT,
	SQUARE_THREE_SMALL_WHITE_CENTER,
	SQUARE_FOUR_SMALL_BLUE_BOTTOM_LEFT,
	SQUARE_FIVE_LONG_WHITE_BOTTOM,
	SQUARE_SIX_MINI_WHITE_BOTTOM,
	SQUARE_SEVEN_MINI_YELLOW_BOTTOM
];

// creates a deep copy of the SQUARES array 
// to avoid modifying the original array
let squares = JSON.parse(JSON.stringify(SQUARES));

function draw() {
	background(255);

	textSize(16);
	text("Click to clear the canvas and start animation!", 20, 30);

	if (mouseIsPressed === true) {
		background("black");
		resetSquares();
	}

	// Draw all squares
	squares.forEach(square => {
		animateSquarePosition(square);
		drawSquare(square);
	});

}


function drawSquare(square) {
	push();
	fill(square.color);
	strokeWeight(15);
	rect(square.x, square.y, square.width, square.height);
	pop();
}


function resetSquares() {
	// Reset the squares to their original positions
	squares = JSON.parse(JSON.stringify(SQUARES));

	squares.forEach(square => {
		square.x = 0;
		square.y = 0;
	});
}

function animateSquarePosition(square) {
	const shapeFinal = SQUARE_MAPPING[square.name];

	square.x = square.x + ((1 * ANIMATION_SPEED) * square.animationAcceleration);
	square.y = square.y + ((1 * ANIMATION_SPEED) * square.animationAcceleration);

	// Keep the square within the canvas bounds
	square.x = constrain(square.x, 0, shapeFinal.x);
	square.y = constrain(square.y, 0, shapeFinal.y);

}