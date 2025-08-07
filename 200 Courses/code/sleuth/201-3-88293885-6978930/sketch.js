/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 6978930
CaseNum: 201-3-88293885-6978930

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish.

Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
Gathering yourself together, 
you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


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
    // write the code to draw around the Judge's body below

    const INITAL_POINT = [390, 360];

    beginShape();
    vertex(INITAL_POINT[0], INITAL_POINT[1]);
    vertex(540, 180);
    vertex(705, 145);
    vertex(720, 240);
    //vertex(670, 265);
    vertex(780, 410);
    vertex(760, 430);
    vertex(800, 480);
    vertex(776, 529);
    vertex(720, 565);
    vertex(670, 528);
    vertex(540, 315);
    vertex(420, 410);

    vertex(INITAL_POINT[0], INITAL_POINT[1]);
    endShape();

}


function getMousePosition() {
    push();
    textSize(16);

    text("Mouse X: " + mouseX, 20, 30);
    text("Mouse Y: " + mouseY, 20, 50);
    pop();
}