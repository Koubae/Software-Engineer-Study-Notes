/*
201 - The case of Judge Hopper
Stage 2 - Hopper’s House

Officer: 6978930
CaseNum: 201-1-97963986-6978930

On entering the house you’re immediately confronted by a trail of blood spatters leading up to the master bedroom.
It’s clear that Judge Hopper was abducted from here. 

What’s more, the clues splayed across the bed sheets
indicate a private life a little more exciting than a district judge would admit in public. 

Somehow these clues connect, you just need to join them together.

Use the triangle function to join the blood spatters on the clues and make the connection.

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
    strokeWeight(3);
    noFill();

    getMousePosition();
    // write the code to connect the blood splatter below
    // triangle(x1, y1, x2, y2, x3, y3)
    triangle(
        150, 370,
        400, 210,
        980, 330
    );

}


function getMousePosition() {
    push();
    textSize(16);

    text("Mouse X: " + mouseX, 20, 30);
    text("Mouse Y: " + mouseY, 20, 50);
    pop();
}

