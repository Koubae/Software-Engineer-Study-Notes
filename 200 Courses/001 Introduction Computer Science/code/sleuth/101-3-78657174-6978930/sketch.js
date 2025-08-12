/*

Officer: 6978930
CaseNum: 101-3-78657174-6978930

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

-- DONE -- 
Identify Lina by drawing a blue filled rectangle with a magenta outline.
She’s the woman in the red dress of course.
-- DONE --
Identify the man with the monocle smoking the cigar by drawing a green filled
rectangle with a red outline around him.
-- DONE --
Identify the man reading the newspaper by drawing a red filled rectangle
with a green outline around him.
-- DONE --
Identify the woman with the dog by drawing a cyan filled rectangle with a
blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	strokeWeight(1);
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...
	getMousePosition();

	// LINA
	stroke(255, 0, 255);
	fill(0, 0, 255);
	rect(1040, 155, 158, 325);

	// MONOCLE MAN
	stroke(255, 0, 0);
	fill(0, 255, 0);
	rect(655, 290, 150, 195);

	// NEWSPAPER MAN
	stroke(0, 255, 0);
	fill(255, 0, 0);
	rect(20, 200, 280, 550);

	// WOMAN WITH DOG
	stroke(0, 0, 255);
	fill(0, 255, 255);
	rect(1370, 140, 305, 665);

}


function getMousePosition() {
	push();
	fill(255, 0, 0);
	textSize(16);

	text("Mouse X: " + mouseX, 20, 30);
	text("Mouse Y: " + mouseY, 20, 50);
	pop();
}

