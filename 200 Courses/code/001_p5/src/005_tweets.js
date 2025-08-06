/** 
 * Code inspired by:
//Leon Fedden 2015
i = 0; s = 800; l = s / 2; function setup() { createCanvas(s, s); } function draw() { j = sin(frameCount) * 200; translate(l, l); rotate(i++ % 360); strokeWeight(0.1); line(j, j, 0, 0); }
 */


export { setup, draw };



const BACKGROUND_COLOR = 255;
const TEXT_COLOR = 0;
const TEXT_Y_POSITION = 30;
const TEXT_Y_POSITION_INCREMENT = 20;

const LINE_LENGHT_MIN = 100;
const LINE_LENGHT_MAX = 400;

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(BACKGROUND_COLOR);
    stroke(20);
    fill(0);
    textSize(15);
}

function draw() {
    let frameRateCurrent = 10;
    if (mouseIsPressed === true) {
        frameRateCurrent = 120;
    }
    frameRate(frameRateCurrent);

    let rotation = frameCount % 360;
    let point = sin(frameCount) * random(LINE_LENGHT_MIN, LINE_LENGHT_MAX);
    const LINE_POS_X = windowWidth / 2;
    const LINE_POS_Y = windowHeight / 2;

    push();
    translate(LINE_POS_X, LINE_POS_Y);
    rotate(rotation);
    strokeWeight(random(0.1, .9));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    line(point, point, 0, 0);
    pop();          // Restore previous fill color

    push();
    // Write Report
    noStroke();
    fill(BACKGROUND_COLOR);
    rect(10, 10, 300, 150);

    fill(TEXT_COLOR);

    const REPORT = [`Frame: ${frameCount}`, `frameRate: ${frameRateCurrent}`, `Point Coords: ${point}`, `Rotation: ${rotation}`, ''];

    for (let k = 0; k < REPORT.length; k++) {
        text(REPORT[k], 20, TEXT_Y_POSITION + k * TEXT_Y_POSITION_INCREMENT);
    }

    pop();

}
