/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 6978930
CaseNum: 201-0-87151472-6978930

Judge Hopper has gone missing and we’ve been booked to investigate. 
This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. 
You will need to use different values for the width and height arguments.


*/

var img;

function preload() {
    img = loadImage('scene.png');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {

    image(img, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(1);
    noFill();

    getMousePosition();
    // write the code to draw around the evidence below
    ellipse(567, 245, 75, 125); // Letter opener
    ellipse(410, 300, 130, 120); // Death threat letters
    ellipse(255, 230, 190, 135); // Telephone   
    ellipse(720, 240, 120, 120); // AGOL leaflet

}


function getMousePosition() {
    textSize(16);

    text("Mouse X: " + mouseX, 20, 30);
    text("Mouse Y: " + mouseY, 20, 50);
}
