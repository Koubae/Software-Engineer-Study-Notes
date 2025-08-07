/*

Officer: 6978930
CaseNum: 202-3-50469626-6978930

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce cyan filled text with blue outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup() {
	createCanvas(697, 554);
	textSize(35);
}

function draw() {
	background(255);

	fill(255, 255, 0);
	stroke(255, 0, 255);
	textFont(Diggity);
	/* text("?", 136,184); */
	stroke(0, 255, 0);
	/* text("silence.", 373,306); */
	fill(255, 165, 0);
	stroke(255, 0, 0);
	textFont(RonsFont);
	/* text("ng", 118,35); */
	fill(255, 192, 203);
	stroke(0, 255, 0);
	/* text("darli", 51,35); */
	fill(0, 255, 255);
	stroke(0, 0, 255);
	textFont(Ballpointprint);
	text("cash", 436, 145);
	fill(255, 255, 0);
	textFont(RonsFont);
	/* text("take", 15,306); */
	fill(0, 255, 255);
	/* text("x", 107,446); */
	fill(255, 255, 0);
	stroke(255, 0, 0);
	textFont(Melissa);
	/* text("ys.", 530,105); */
	fill(0, 255, 255);
	textFont(Diggity);
	/* text("are", 612,226);
	text("secrets,", 208,306); */
	push();
	fill(255, 192, 203);
	stroke(0, 255, 0);
	textFont(RonsFont);
	/* text("sort", 15,226); */
	pop();
	textFont(RonsFont);
	/* text("?", 210,145); */
	fill(255, 192, 203);
	stroke(0, 0, 0);
	/* text("so", 13,267);
	text("I'm", 267,267); */
	stroke(255, 0, 0);
	textFont(Ballpointprint);
	/* text("this", 89, 226); */
	fill(255, 165, 0);
	stroke(255, 0, 255);
	textFont(Melissa);
	/* text("much", 483,267);
	text("can", 332,145); */
	stroke(255, 0, 0);
	textFont(Ballpointprint);
	/* 	text("Daisy", 15, 446);
		text("You", 552, 226); */
	fill(255, 255, 0);
	stroke(0, 255, 0);
	textFont(Melissa);
	/* text("away", 396,184); */
	push();
	fill(0, 255, 255);
	stroke(0, 0, 255);
	textFont(Ballpointprint);
	text("ignore", 225, 105);
	text("safe", 434, 226);
	text("break", 522, 184);
	pop();
	stroke(255, 0, 0);
	textFont(Ballpointprint);
	/* text("?", 513, 226); */
	fill(255, 192, 203);
	stroke(0, 255, 0);
	textFont(Melissa);
	/* text("continual", 407,105); */
	fill(255, 165, 0);
	stroke(255, 0, 255);
	textFont(RonsFont);
	/* 	text("I", 591,267);
		text("Bob,", 160,35); */
	fill(0, 255, 255);
	stroke(0, 255, 0);
	textFont(Ballpointprint);
	/* text("can", 30, 105); */
	stroke(255, 0, 0);
	textFont(Diggity);
	/* text("ours,", 142,376); */
	stroke(255, 0, 255);
	textFont(Melissa);
	/* 	text("how", 438,267); */
	push();
	textFont(RonsFont);
	/* 	text("lon", 129,105); */
	pop();
	textFont(Diggity);
	/* 	text("I", 12,105); */
	push();
	fill(255, 255, 0);
	textFont(RonsFont);
	/* text("I", 302,145); */
	pop();
	stroke(0, 255, 0);
	textFont(RonsFont);
	/* text("can", 621,267); */
	fill(255, 255, 0);
	stroke(0, 0, 0);
	/* 	text("Are", 505,145); */
	fill(0, 255, 255);
	textFont(Melissa);
	/* text("go", 366,184); */
	fill(255, 165, 0);
	stroke(0, 0, 255);
	textFont(Diggity);
	/* 	text("y", 130,376); */
	fill(255, 255, 0);
	stroke(255, 0, 255);
	textFont(RonsFont);
	/* 	text("ger", 168,105); */
	push();
	fill(0, 255, 255);
	stroke(0, 0, 255);
	textFont(Diggity);
	/* 	text("sometimes.", 134,267);
		text("all", 151,226); */
	pop();
	textFont(Diggity);
	/* 	text("send", 372,145); */
	stroke(255, 0, 0);
	textFont(Ballpointprint);
	/* text("these", 317, 105); */
	fill(255, 192, 203);
	stroke(0, 0, 0);
	textFont(Melissa);
	/* text("avoiding", 8,184); */
	stroke(255, 0, 0);
	/* text("short", 10,145);
	text("Is", 239,226); */
	push();
	textFont(RonsFont);
	/* text("not", 331,267); */
	pop();
	textFont(RonsFont);
	/* 	text("no", 85,105); */
	fill(255, 165, 0);
	stroke(255, 0, 255);
	textFont(Ballpointprint);
	/* text("Forever", 15, 376); */
	fill(0, 255, 255);
	stroke(0, 0, 0);
	textFont(RonsFont);
	/* text("we", 249,184); */
	textFont(Ballpointprint);
	/* text("the", 312, 306); */
	fill(255, 255, 0);
	textFont(Melissa);
	/* text("guarded", 55,267); */
	fill(255, 165, 0);
	textFont(RonsFont);
	/* 	text("money", 118,145); */
	push();
	fill(255, 255, 0);
	stroke(255, 0, 255);
	textFont(Melissa);
	/* text("you", 623,105); */
	pop();
	stroke(0, 0, 255);
	textFont(Ballpointprint);
	/* text("out.", 184, 226); */
	fill(0, 255, 255);
	stroke(0, 0, 0);
	textFont(Melissa);
	/* 	text("Perhaps", 163,184); */
	push();
	fill(255, 165, 0);
	stroke(0, 0, 255);
	/* text("for", 456,184); */
	pop();
	textFont(Diggity);
	/* 	text("Are", 565,105);
		text("My", 8,35); */
	stroke(0, 255, 0);
	textFont(Melissa);
	/* 	text("dela", 494,105); */
	fill(255, 165, 0);
	textFont(RonsFont);
	/* 	text("a", 495,184); */
	fill(255, 192, 203);
	stroke(0, 0, 255);
	textFont(Melissa);
	/* text("more", 537,267);
 */	push();
	fill(0, 255, 255);
	/* text("sure", 391,267); */
	pop();
	textFont(Ballpointprint);
	/* text("you", 569, 145);
	text("?", 93, 306); */
	fill(255, 165, 0);
	stroke(255, 0, 0);
	textFont(Diggity);
	/* text("me", 89,184); */
	fill(255, 192, 203);
	stroke(0, 0, 0);
	/* 	text("If", 234,145); */
	stroke(0, 0, 255);
	textFont(Melissa);
	/* 	text("so,", 265,145); */
	stroke(0, 0, 0);
	textFont(Ballpointprint);
	/* text("of", 71, 145);
	text("The", 132, 306); */
	fill(0, 255, 255);
	stroke(0, 0, 255);
	textFont(RonsFont);
	/* 	text("and", 612,184); */
	fill(255, 165, 0);
	stroke(255, 0, 0);
	textFont(Melissa);
	/* text("should", 301,184);
	text("relationship", 318,226); */
	push();
	stroke(0, 255, 0);
	textFont(Ballpointprint);
	/* text("our", 269, 226); */
	pop();



}
