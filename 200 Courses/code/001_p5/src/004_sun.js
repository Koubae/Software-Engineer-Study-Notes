export { setup, draw };

import { drawMousePosition } from "./helpers.js";

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}


const flowers = [];
function initFlowers(windowWidth, groundY) {
    for (let i = 0; i < 10; i++) {
        flowers.push({
            x: random(100, windowWidth - 100),
            y: random(groundY, groundY + 100),
        });
    }
}

const bugs = [];
function initBugs(windowWidth, groundY) {
    for (let i = 0; i < 5; i++) {
        bugs.push({
            x: random(100, windowWidth - 100),
            y: random(groundY, groundY + 100),
        });
    }
}

function draw() {
    const groundY = windowHeight - 100;

    if (flowers.length === 0) {
        initFlowers(windowWidth, groundY);
    }
    if (bugs.length === 0) {
        initBugs(windowWidth, groundY);
    }

    //sky blue background
    background(135, 206, 235);

    drawMousePosition();
    // sun
    fill("yellow");
    stroke("orange");
    strokeWeight(20);


    const sunPositionX = windowWidth / 2;
    const sunPositionY = windowHeight / 2;

    circle(sunPositionX, sunPositionY, 200);

    // reset the stroke
    stroke(0);
    strokeWeight(1);

    // sun rays
    stroke("orange");
    strokeWeight(5);
    const rayDistance = 120;
    const rayLength = 200;
    for (let i = 0; i < 360; i += 30) {
        let angle = radians(i);

        let x1 = sunPositionX + cos(angle) * rayDistance;
        let y1 = sunPositionY + sin(angle) * rayDistance;

        let x2 = sunPositionX + cos(angle) * rayLength;
        let y2 = sunPositionY + sin(angle) * rayLength;

        line(x1, y1, x2, y2);
    }

    // reset the stroke
    stroke(0);
    strokeWeight(1);

    // grass
    fill("green");
    rect(0, groundY, windowWidth, 200);

    // Makes changes and restores previous styles 
    push();         // Save current styles
    fill(255, 0, 0); // Change fill
    ellipse(100, 100, 50); // This uses red fill
    pop();          // Restore previous fill color

    ellipse(200, 100, 50); // This uses red fill

    fill(255);

    ellipse(300, 100, 50); // This uses red fill


    // Add Bugs!
    const TEXT_SIZE = 75;
    textSize(TEXT_SIZE);
    // flowers
    flowers.forEach(flower => {
        text("🌸", flower.x, flower.y);
    });
    bugs.forEach(bug => {
        text("🐞", bug.x, bug.y);
    });

    // spider
    text("🕷️", mouseX - (TEXT_SIZE / 2), mouseY + (TEXT_SIZE / 2));

}
