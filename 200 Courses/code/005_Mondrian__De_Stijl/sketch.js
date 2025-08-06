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


function draw() {

	bigRedSquare();
	smallWhiteTopLeft();
	smallWhiteCenter();
	smallBlueBottomLeft();
	longWhiteBottom();
	miniWhiteBottom();
	miniYellowBottom();


}

function bigRedSquare() {
	push();
	fill(255, 0, 0);
	strokeWeight(15);

	rect(windowWidth / 2, 0, 600, 600);

	pop();
}

function smallWhiteTopLeft() {
	push();
	//set the fill colour to white
	fill(255);
	strokeWeight(15);

	rect((windowWidth / 2) - (150 + 8), 0, 150, 250);

	pop();

}

function smallWhiteCenter() {
	push();
	//set the fill colour to white
	fill(255);
	strokeWeight(15);

	rect((windowWidth / 2) - (150 + 8), 250 + 15, 150, 328);

	pop();

}

function smallBlueBottomLeft() {
	push();
	//set the fill colour to white
	fill(0, 0, 255);
	strokeWeight(15);

	rect((windowWidth / 2) - (150 + 8), 608, 150, 150);

	pop();

}


function longWhiteBottom() {
	push();
	//set the fill colour to white
	fill(255);
	strokeWeight(15);

	rect(windowWidth / 2, 608, 540, 150);

	pop();

}

function miniWhiteBottom() {
	push();
	//set the fill colour to white
	fill(255);
	strokeWeight(15);

	rect((windowWidth / 2) + (540), 608, 60, 80);

	pop();

}

function miniYellowBottom() {
	push();
	//set the fill colour to white
	fill(239, 222, 109);
	strokeWeight(15);

	rect((windowWidth / 2) + (540), 690, 60, 68);

	pop();

}