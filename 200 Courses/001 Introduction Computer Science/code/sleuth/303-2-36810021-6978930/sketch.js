/*

Officer: 6978930
CaseNum: 303-2-36810021-6978930

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is being dragged:
	- Make hidden_vault_val0 equal to the value of mouseY
	- Use the 'max' function to prevent hidden_vault_val0 from falling below 2

	Whilst the mouse is moving:
	- Increment hidden_vault_val1 by 2
	- Use the 'min' function to prevent hidden_vault_val1 from going above 15

	Whilst the mouse is moving:
	- Make hidden_vault_val2 equal to the value of mouseY
	- Use the 'min' function to prevent hidden_vault_val2 from going above 10

	Whilst the mouse is moving:
	- Increment hidden_vault_val3 by 2
	- Use the 'max' function to prevent hidden_vault_val3 from falling below 2

	When the mouse button is pressed:
	- Make hidden_vault_val4 equal to the value of mouseY
	- Use the 'constrain' function to prevent hidden_vault_val4 from falling below 17 and going above 67



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var hidden_vault_val0;
var hidden_vault_val1;
var hidden_vault_val2;
var hidden_vault_val3;
var hidden_vault_val4;


function mouseDragged() {
	console.log("mouseDragged", mouseX, mouseY);
	hidden_vault_val0 = mouseY;
	hidden_vault_val0 = max(hidden_vault_val0, 2);
}

function mouseMoved() {
	console.log("mouseMoved", mouseX, mouseY);

	hidden_vault_val1 += 2;
	hidden_vault_val1 = min(hidden_vault_val1, 15);

	hidden_vault_val2 = mouseY;
	hidden_vault_val2 = min(hidden_vault_val2, 10);

	hidden_vault_val3 += 2;
	hidden_vault_val3 = max(hidden_vault_val3, 2);

}

function mousePressed() {
	console.log("mousePressed");
	hidden_vault_val4 = mouseY;
	hidden_vault_val4 = constrain(hidden_vault_val4, 17, 67);

}




function preload() {
	//IMAGES WILL BE LOADED HERE

}

function setup() {
	createCanvas(512, 512);

	//initialise the variables
	hidden_vault_val0 = 0;
	hidden_vault_val1 = 0;
	hidden_vault_val2 = 0;
	hidden_vault_val3 = 0;
	hidden_vault_val4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {

	//Draw the safe door
	background(70);
	noStroke();
	fill(29, 110, 6);
	rect(26, 26, width - 52, width - 52);

	//Draw the combination dials
	push();
	translate(120, 170);
	drawDial(140, hidden_vault_val0, 11);
	pop();

	push();
	translate(120, 380);
	drawDial(140, hidden_vault_val1, 20);
	pop();

	push();
	translate(280, 170);
	drawDial(140, hidden_vault_val2, 13);
	pop();

	push();
	translate(280, 380);
	drawDial(140, hidden_vault_val3, 14);
	pop();

	//Draw the lever
	push();
	translate(width - 125, 256);
	drawLever(hidden_vault_val4);
	pop();


}

function drawDial(diameter, num, maxNum) {
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255, 255, 200);
	ellipse(0, 0, diameter, diameter);
	fill(100);
	noStroke();
	ellipse(0, 0, diameter * 0.66, diameter * 0.66);
	fill(150, 0, 0);
	triangle(
		-p * 0.4, -r - p,
		p * 0.4, -r - p,
		0, -r - p / 5
	);

	noStroke();

	push();
	var inc = 360 / maxNum;

	rotate(radians(-num * inc));
	for (var i = 0; i < maxNum; i++) {
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0, -r * 0.66, 0, -(r - 10));
		noStroke();
		fill(0);
		text(i, 0, -(r - 10));
		pop();
	}

	pop();
}

function drawLever(rot) {
	push();
	rotate(radians(-rot));
	stroke(0);
	fill(100);
	rect(-10, 0, 20, 100);
	ellipse(0, 0, 50, 50);
	ellipse(0, 100, 35, 35);
	pop();
}
