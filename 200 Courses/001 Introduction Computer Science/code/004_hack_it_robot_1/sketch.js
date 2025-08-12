function setup() {
	//create a canvas for the robot
	createCanvas(windowWidth, windowHeight);

	angleMode(RADIANS); // optional, rotate() uses radians by default
	//rectMode(CENTER);   // optional, draws rect from center
}

function draw() {
	strokeWeight(8);

	//robots head
	fill(180);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 160, 160);

	fill(200, 0, 200);
	rect(160, 60, 180, 90);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	//point(175, 200);
	fill(220, 0, 20);
	ellipse(175, 200, 20, 20);

	fill(255);
	ellipse(325, 200, 80, 80);
	point(325, 200);


	//robots nose
	fill(255, 0, 0);
	triangle(250, 220, 200, 300, 300, 300);

	//robots ears
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();

	// robots body
	push();

	fill(180);
	rect(150, 400, 200, 300, 20);
	// robots arms

	//rectMode(CENTER);

	// Left arm
	translate(50, 500);
	rotate(PI); // or scale(-1, 1) for mirroring
	rect(0, 0, 60, 20, 10);

	// Right arm
	translate(350, 500);
	rotate(0);
	rect(0, 0, 60, 20, 10);



	/* 	rotate(radians(-40));
		rect(50, 500, 100, 30, 20);
	
		rotate(radians(40));
		rect(350, 500, 100, 30, 20);
		pop(); */
}